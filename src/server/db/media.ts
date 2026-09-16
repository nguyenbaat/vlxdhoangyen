import type { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { isMySQL, pool } from './index.js';
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

function mysqlPool(): Pool {
  if (!isMySQL) throw new Error('Media storage requires MySQL');
  return pool as Pool;
}

let schemaReady: Promise<void> | undefined;

export function ensureMediaTable(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      const p = mysqlPool();
      await p.query(`
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
      
      // Ensure alt_text column exists on previously created tables
      try {
        await p.query(`ALTER TABLE media_assets ADD COLUMN alt_text VARCHAR(255) DEFAULT '' AFTER file_size`);
      } catch (err: any) {
        // Ignored if column already exists
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
  await ensureMediaTable();
  const p = mysqlPool();

  let cleanFilename = sanitizeMediaFilename(originalFilename);

  // Check if filename exists; if so, assign unique suffix
  const [existing] = await p.query<RowDataPacket[]>(
    'SELECT id FROM media_assets WHERE filename = ? LIMIT 1',
    [cleanFilename]
  );

  if (existing.length > 0) {
    const ext = path.extname(cleanFilename);
    const base = path.basename(cleanFilename, ext);
    const [matches] = await p.query<RowDataPacket[]>(
      'SELECT filename FROM media_assets WHERE filename LIKE ?',
      [`${base}%${ext}`]
    );
    const suffix = matches.length + 1;
    cleanFilename = `${base}-${suffix}${ext}`;
  }

  const [result] = await p.execute<ResultSetHeader>(
    'INSERT INTO media_assets (filename, mime_type, file_size, alt_text, data) VALUES (?, ?, ?, ?, ?)',
    [cleanFilename, mimeType, data.length, altText || '', data]
  );

  const id = Number(result.insertId);
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
  await ensureMediaTable();
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
  await mysqlPool().execute(
    `UPDATE media_assets SET ${fields.join(', ')} WHERE id = ?`,
    params
  );
}

export async function deleteMedia(id: number): Promise<void> {
  await ensureMediaTable();
  await mysqlPool().execute('DELETE FROM media_assets WHERE id = ?', [id]);
}

export async function listMedia(): Promise<Array<{ id: number; filename: string; url: string }>> {
  await ensureMediaTable();
  const [rows] = await mysqlPool().query<RowDataPacket[]>(
    'SELECT id, filename FROM media_assets ORDER BY id DESC LIMIT 1000'
  );
  return rows.map((row) => ({
    id: Number(row.id),
    filename: String(row.filename || ''),
    url: row.filename ? `/media/${row.filename}` : `/media/${row.id}`
  }));
}

export async function listMediaFull(options: {
  search?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<{ items: MediaItem[]; total: number; totalSize: number }> {
  await ensureMediaTable();
  const limit = options.limit || 500;
  const offset = options.offset || 0;
  const search = options.search?.trim();

  let whereClause = '';
  const params: any[] = [];

  if (search) {
    whereClause = 'WHERE filename LIKE ? OR alt_text LIKE ?';
    params.push(`%${search}%`, `%${search}%`);
  }

  const [countRows] = await mysqlPool().query<RowDataPacket[]>(
    `SELECT COUNT(*) as total, COALESCE(SUM(file_size), 0) as total_size FROM media_assets ${whereClause}`,
    params
  );
  const total = Number(countRows[0]?.total || 0);
  const totalSize = Number(countRows[0]?.total_size || 0);

  const queryParams = [...params, limit, offset];
  const [rows] = await mysqlPool().query<RowDataPacket[]>(
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
}

export async function getMediaMeta(id: number): Promise<MediaItem | null> {
  await ensureMediaTable();
  const [rows] = await mysqlPool().execute<RowDataPacket[]>(
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
}

export async function getMediaByParam(param: string | number): Promise<{ data: Buffer; mime_type: string } | null> {
  await ensureMediaTable();
  const p = mysqlPool();
  const str = String(param).trim();

  // If pure number: query by ID
  if (/^\d+$/.test(str)) {
    const [idRows] = await p.execute<RowDataPacket[]>(
      'SELECT data, mime_type FROM media_assets WHERE id = ? LIMIT 1',
      [Number(str)]
    );
    if (idRows.length) {
      return { data: idRows[0].data as Buffer, mime_type: String(idRows[0].mime_type) };
    }
  }

  // Query by filename
  const [fnRows] = await p.execute<RowDataPacket[]>(
    'SELECT data, mime_type FROM media_assets WHERE filename = ? LIMIT 1',
    [str]
  );
  if (fnRows.length) {
    return { data: fnRows[0].data as Buffer, mime_type: String(fnRows[0].mime_type) };
  }

  return null;
}

export async function getMedia(id: number): Promise<{ data: Buffer; mime_type: string } | null> {
  return getMediaByParam(id);
}
