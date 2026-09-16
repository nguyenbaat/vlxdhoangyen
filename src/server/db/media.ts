import type { Pool as MySQLPool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import type { Pool as PGPool } from 'pg';
import { isMySQL, pool } from './index.js';
import fs from 'node:fs';
import path from 'node:path';

export interface MediaItem {
  id: number;
  filename: string;
  mime_type: string;
  file_size: number;
  alt_text: string;
  created_at: string;
  url: string;
  is_static?: boolean;
}

let schemaReady: Promise<void> | undefined;

export function ensureMediaTable(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      try {
        if (isMySQL) {
          const mp = pool as MySQLPool;
          await mp.query(`
            CREATE TABLE IF NOT EXISTS media_assets (
              id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
              filename VARCHAR(255) NOT NULL,
              mime_type VARCHAR(100) NOT NULL,
              file_size INT UNSIGNED NOT NULL,
              alt_text VARCHAR(255) DEFAULT '',
              data LONGBLOB NOT NULL,
              created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
          `);
          try {
            await mp.query(`ALTER TABLE media_assets ADD COLUMN alt_text VARCHAR(255) DEFAULT '' AFTER file_size`);
          } catch (e) {}
        } else {
          const pp = pool as PGPool;
          await pp.query(`
            CREATE TABLE IF NOT EXISTS media_assets (
              id SERIAL PRIMARY KEY,
              filename VARCHAR(255) NOT NULL,
              mime_type VARCHAR(100) NOT NULL,
              file_size INT NOT NULL,
              alt_text VARCHAR(255) DEFAULT '',
              data BYTEA NOT NULL,
              created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
          `);
          try {
            await pp.query(`ALTER TABLE media_assets ADD COLUMN IF NOT EXISTS alt_text VARCHAR(255) DEFAULT ''`);
          } catch (e) {}
        }
      } catch (err: any) {
        console.warn('[ensureMediaTable error]', err?.message);
      }
    })().catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  return schemaReady;
}

export function sanitizeMediaFilename(rawName: string): string {
  const ext = path.extname(rawName).toLowerCase();
  const nameOnly = path.basename(rawName, ext);

  let clean = nameOnly
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  if (!clean) {
    clean = `media-${Date.now()}`;
  }

  const finalExt = ext || (rawName.includes('png') ? '.png' : (rawName.includes('webp') ? '.webp' : '.jpg'));
  return `${clean}${finalExt}`;
}

export async function saveMedia(
  originalFilename: string,
  mimeType: string,
  data: Buffer,
  altText: string = ''
): Promise<{ id: number; filename: string; url: string }> {
  let cleanFilename = sanitizeMediaFilename(originalFilename);

  // 1. Save to local disk folders for guaranteed instant access
  try {
    const diskDirs = [
      path.join(process.cwd(), 'public', 'images', 'uploads'),
      path.join(process.cwd(), 'uploads')
    ];
    for (const d of diskDirs) {
      if (!fs.existsSync(d)) {
        fs.mkdirSync(d, { recursive: true });
      }
      fs.writeFileSync(path.join(d, cleanFilename), data);
    }
  } catch (fsErr) {
    console.warn('[saveMedia disk write warning]', fsErr);
  }

  // 2. Save to Database (MySQL or PostgreSQL)
  let id = Date.now();
  try {
    await ensureMediaTable();
    if (isMySQL) {
      const mp = pool as MySQLPool;
      const [existing] = await mp.query<RowDataPacket[]>(
        'SELECT id FROM media_assets WHERE filename = ? LIMIT 1',
        [cleanFilename]
      );
      if (existing.length > 0) {
        const ext = path.extname(cleanFilename);
        const base = path.basename(cleanFilename, ext);
        const [matches] = await mp.query<RowDataPacket[]>(
          'SELECT filename FROM media_assets WHERE filename LIKE ?',
          [`${base}%${ext}`]
        );
        const suffix = matches.length + 1;
        cleanFilename = `${base}-${suffix}${ext}`;
      }

      const [result] = await mp.execute<ResultSetHeader>(
        'INSERT INTO media_assets (filename, mime_type, file_size, alt_text, data) VALUES (?, ?, ?, ?, ?)',
        [cleanFilename, mimeType, data.length, altText || '', data]
      );
      id = Number(result.insertId);
    } else {
      const pp = pool as PGPool;
      const existing = await pp.query(
        'SELECT id FROM media_assets WHERE filename = $1 LIMIT 1',
        [cleanFilename]
      );
      if (existing.rows.length > 0) {
        const ext = path.extname(cleanFilename);
        const base = path.basename(cleanFilename, ext);
        const matches = await pp.query(
          'SELECT filename FROM media_assets WHERE filename LIKE $1',
          [`${base}%${ext}`]
        );
        const suffix = matches.rows.length + 1;
        cleanFilename = `${base}-${suffix}${ext}`;
      }

      const result = await pp.query(
        'INSERT INTO media_assets (filename, mime_type, file_size, alt_text, data) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        [cleanFilename, mimeType, data.length, altText || '', data]
      );
      id = Number(result.rows[0]?.id || id);
    }
  } catch (dbErr) {
    console.error('[saveMedia DB save error]', dbErr);
  }

  const url = `/media/${cleanFilename}`;
  return { id, filename: cleanFilename, url };
}

export async function updateMedia(
  id: number,
  updates: {
    filename?: string;
    alt_text?: string;
    mime_type?: string;
    file_size?: number;
    data?: Buffer;
  }
): Promise<void> {
  try {
    await ensureMediaTable();
    if (isMySQL) {
      const mp = pool as MySQLPool;
      const fields: string[] = [];
      const params: any[] = [];
      if (updates.filename !== undefined) {
        const clean = sanitizeMediaFilename(updates.filename.trim());
        fields.push('filename = ?');
        params.push(clean);
      }
      if (updates.alt_text !== undefined) {
        fields.push('alt_text = ?');
        params.push(updates.alt_text.trim());
      }
      if (updates.mime_type !== undefined) {
        fields.push('mime_type = ?');
        params.push(updates.mime_type);
      }
      if (updates.file_size !== undefined) {
        fields.push('file_size = ?');
        params.push(updates.file_size);
      }
      if (updates.data !== undefined) {
        fields.push('data = ?');
        params.push(updates.data);
      }
      if (fields.length === 0) return;
      params.push(id);
      await mp.execute(`UPDATE media_assets SET ${fields.join(', ')} WHERE id = ?`, params);
    } else {
      const pp = pool as PGPool;
      const fields: string[] = [];
      const params: any[] = [];
      let idx = 1;
      if (updates.filename !== undefined) {
        const clean = sanitizeMediaFilename(updates.filename.trim());
        fields.push(`filename = $${idx++}`);
        params.push(clean);
      }
      if (updates.alt_text !== undefined) {
        fields.push(`alt_text = $${idx++}`);
        params.push(updates.alt_text.trim());
      }
      if (updates.mime_type !== undefined) {
        fields.push(`mime_type = $${idx++}`);
        params.push(updates.mime_type);
      }
      if (updates.file_size !== undefined) {
        fields.push(`file_size = $${idx++}`);
        params.push(updates.file_size);
      }
      if (updates.data !== undefined) {
        fields.push(`data = $${idx++}`);
        params.push(updates.data);
      }
      if (fields.length === 0) return;
      params.push(id);
      await pp.query(`UPDATE media_assets SET ${fields.join(', ')} WHERE id = $${idx}`, params);
    }
  } catch (err) {
    console.error('[updateMedia error]', err);
  }
}

export async function deleteMedia(id: number): Promise<void> {
  try {
    await ensureMediaTable();
    if (isMySQL) {
      await (pool as MySQLPool).execute('DELETE FROM media_assets WHERE id = ?', [id]);
    } else {
      await (pool as PGPool).query('DELETE FROM media_assets WHERE id = $1', [id]);
    }
  } catch (err) {
    console.error('[deleteMedia error]', err);
  }
}

export async function listMedia(): Promise<Array<{ id: number; filename: string; url: string }>> {
  try {
    await ensureMediaTable();
    if (isMySQL) {
      const [rows] = await (pool as MySQLPool).query<RowDataPacket[]>(
        'SELECT id, filename FROM media_assets ORDER BY id DESC LIMIT 1000'
      );
      return rows.map((row) => ({
        id: Number(row.id),
        filename: String(row.filename || ''),
        url: row.filename ? `/media/${row.filename}` : `/media/${row.id}`
      }));
    } else {
      const res = await (pool as PGPool).query(
        'SELECT id, filename FROM media_assets ORDER BY id DESC LIMIT 1000'
      );
      return res.rows.map((row) => ({
        id: Number(row.id),
        filename: String(row.filename || ''),
        url: row.filename ? `/media/${row.filename}` : `/media/${row.id}`
      }));
    }
  } catch (e) {
    return [];
  }
}

export async function listMediaFull(options: {
  search?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<{ items: MediaItem[]; total: number; totalSize: number }> {
  const limit = options.limit || 500;
  const offset = options.offset || 0;
  const search = options.search?.trim();

  try {
    await ensureMediaTable();
    if (isMySQL) {
      const mp = pool as MySQLPool;
      let whereClause = '';
      const params: any[] = [];
      if (search) {
        whereClause = 'WHERE filename LIKE ? OR alt_text LIKE ?';
        params.push(`%${search}%`, `%${search}%`);
      }
      const [countRows] = await mp.query<RowDataPacket[]>(
        `SELECT COUNT(*) as total, COALESCE(SUM(file_size), 0) as total_size FROM media_assets ${whereClause}`,
        params
      );
      const total = Number(countRows[0]?.total || 0);
      const totalSize = Number(countRows[0]?.total_size || 0);

      const queryParams = [...params, limit, offset];
      const [rows] = await mp.query<RowDataPacket[]>(
        `SELECT id, filename, mime_type, file_size, alt_text, created_at 
         FROM media_assets 
         ${whereClause} 
         ORDER BY id DESC 
         LIMIT ? OFFSET ?`,
        queryParams
      );

      const items: MediaItem[] = rows.map((r) => {
        const fn = String(r.filename || '');
        return {
          id: Number(r.id),
          filename: fn,
          mime_type: String(r.mime_type || 'image/jpeg'),
          file_size: Number(r.file_size || 0),
          alt_text: String(r.alt_text || ''),
          created_at: String(r.created_at || ''),
          url: fn ? `/media/${fn}` : `/media/${r.id}`,
          is_static: false
        };
      });

      return { items, total, totalSize };
    } else {
      const pp = pool as PGPool;
      let whereClause = '';
      const params: any[] = [];
      if (search) {
        whereClause = 'WHERE filename ILIKE $1 OR alt_text ILIKE $1';
        params.push(`%${search}%`);
      }
      const countRes = await pp.query(
        `SELECT COUNT(*) as total, COALESCE(SUM(file_size), 0) as total_size FROM media_assets ${whereClause}`,
        params
      );
      const total = Number(countRes.rows[0]?.total || 0);
      const totalSize = Number(countRes.rows[0]?.total_size || 0);

      const queryParams = search ? [`%${search}%`, limit, offset] : [limit, offset];
      const limitOffsetClause = search ? 'LIMIT $2 OFFSET $3' : 'LIMIT $1 OFFSET $2';
      const rowsRes = await pp.query(
        `SELECT id, filename, mime_type, file_size, alt_text, created_at 
         FROM media_assets 
         ${whereClause} 
         ORDER BY id DESC 
         ${limitOffsetClause}`,
        queryParams
      );

      const items: MediaItem[] = rowsRes.rows.map((r) => {
        const fn = String(r.filename || '');
        return {
          id: Number(r.id),
          filename: fn,
          mime_type: String(r.mime_type || 'image/jpeg'),
          file_size: Number(r.file_size || 0),
          alt_text: String(r.alt_text || ''),
          created_at: String(r.created_at || ''),
          url: fn ? `/media/${fn}` : `/media/${r.id}`,
          is_static: false
        };
      });

      return { items, total, totalSize };
    }
  } catch (err) {
    console.error('[listMediaFull error]', err);
    return { items: [], total: 0, totalSize: 0 };
  }
}

export async function getMediaMeta(id: number): Promise<MediaItem | null> {
  try {
    await ensureMediaTable();
    if (isMySQL) {
      const [rows] = await (pool as MySQLPool).execute<RowDataPacket[]>(
        'SELECT id, filename, mime_type, file_size, alt_text, created_at FROM media_assets WHERE id = ? LIMIT 1',
        [id]
      );
      if (!rows.length) return null;
      const r = rows[0];
      const fn = String(r.filename || '');
      return {
        id: Number(r.id),
        filename: fn,
        mime_type: String(r.mime_type || 'image/jpeg'),
        file_size: Number(r.file_size || 0),
        alt_text: String(r.alt_text || ''),
        created_at: String(r.created_at || ''),
        url: fn ? `/media/${fn}` : `/media/${r.id}`,
        is_static: false
      };
    } else {
      const res = await (pool as PGPool).query(
        'SELECT id, filename, mime_type, file_size, alt_text, created_at FROM media_assets WHERE id = $1 LIMIT 1',
        [id]
      );
      if (!res.rows.length) return null;
      const r = res.rows[0];
      const fn = String(r.filename || '');
      return {
        id: Number(r.id),
        filename: fn,
        mime_type: String(r.mime_type || 'image/jpeg'),
        file_size: Number(r.file_size || 0),
        alt_text: String(r.alt_text || ''),
        created_at: String(r.created_at || ''),
        url: fn ? `/media/${fn}` : `/media/${r.id}`,
        is_static: false
      };
    }
  } catch (e) {
    return null;
  }
}

export async function getMediaByParam(param: string | number): Promise<{ data: Buffer; mime_type: string } | null> {
  const str = String(param).trim();
  if (!str) return null;

  const ext = path.extname(str).toLowerCase();
  const base = ext ? path.basename(str, ext) : str;

  // 1. Try DB (MySQL or PostgreSQL)
  try {
    await ensureMediaTable();
    if (isMySQL) {
      const mp = pool as MySQLPool;
      if (/^\d+$/.test(str)) {
        const [idRows] = await mp.execute<RowDataPacket[]>(
          'SELECT data, mime_type FROM media_assets WHERE id = ? LIMIT 1',
          [Number(str)]
        );
        if (idRows.length) {
          return { data: idRows[0].data as Buffer, mime_type: String(idRows[0].mime_type) };
        }
      }

      // Query by exact filename, base without ext, or base.%
      const [fnRows] = await mp.query<RowDataPacket[]>(
        'SELECT data, mime_type FROM media_assets WHERE filename = ? OR filename = ? OR filename LIKE ? ORDER BY id DESC LIMIT 1',
        [str, base, `${base}.%`]
      );
      if (fnRows.length) {
        return { data: fnRows[0].data as Buffer, mime_type: String(fnRows[0].mime_type) };
      }
    } else {
      const pp = pool as PGPool;
      if (/^\d+$/.test(str)) {
        const idRes = await pp.query(
          'SELECT data, mime_type FROM media_assets WHERE id = $1 LIMIT 1',
          [Number(str)]
        );
        if (idRes.rows.length) {
          return { data: idRes.rows[0].data as Buffer, mime_type: String(idRes.rows[0].mime_type) };
        }
      }

      // Query by exact filename, base without ext, or base.%
      const fnRes = await pp.query(
        'SELECT data, mime_type FROM media_assets WHERE filename = $1 OR filename = $2 OR filename ILIKE $3 ORDER BY id DESC LIMIT 1',
        [str, base, `${base}.%`]
      );
      if (fnRes.rows.length) {
        return { data: fnRes.rows[0].data as Buffer, mime_type: String(fnRes.rows[0].mime_type) };
      }
    }
  } catch (err) {
    console.warn('[getMediaByParam DB lookup warning]', err);
  }

  // 2. Fallback to Disk search
  const searchDirs = [
    path.join(process.cwd(), 'public', 'images', 'uploads'),
    path.join(process.cwd(), 'uploads'),
    path.join(process.cwd(), 'public', 'images', 'danh-muc'),
    path.join(process.cwd(), 'public', 'images'),
    path.join(process.cwd(), 'public')
  ];

  const candidateNames = [
    str,
    base,
    `${base}.png`,
    `${base}.webp`,
    `${base}.jpg`,
    `${base}.jpeg`,
    `${base}.svg`
  ];

  for (const d of searchDirs) {
    for (const name of candidateNames) {
      const filePath = path.join(d, name);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const data = fs.readFileSync(filePath);
        const fExt = path.extname(filePath).toLowerCase();
        const mime_type = fExt === '.png' ? 'image/png' : (fExt === '.webp' ? 'image/webp' : (fExt === '.gif' ? 'image/gif' : (fExt === '.svg' ? 'image/svg+xml' : 'image/jpeg')));
        return { data, mime_type };
      }
    }
  }

  return null;
}

export async function getMedia(id: number): Promise<{ data: Buffer; mime_type: string } | null> {
  return getMediaByParam(id);
}

