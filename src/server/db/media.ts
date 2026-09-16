import type { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { isMySQL, pool } from './index.js';

function mysqlPool(): Pool {
  if (!isMySQL) throw new Error('Media storage requires MySQL');
  return pool as Pool;
}

let schemaReady: Promise<void> | undefined;

export function ensureMediaTable(): Promise<void> {
  if (!schemaReady) {
    schemaReady = mysqlPool().query(`
      CREATE TABLE IF NOT EXISTS media_assets (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL,
        mime_type VARCHAR(100) NOT NULL,
        file_size INT UNSIGNED NOT NULL,
        data LONGBLOB NOT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `).then(() => undefined).catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  return schemaReady;
}

export async function saveMedia(filename: string, mimeType: string, data: Buffer): Promise<number> {
  await ensureMediaTable();
  const [result] = await mysqlPool().execute<ResultSetHeader>(
    'INSERT INTO media_assets (filename, mime_type, file_size, data) VALUES (?, ?, ?, ?)',
    [filename, mimeType, data.length, data]
  );
  return result.insertId;
}

export async function listMedia(): Promise<Array<{ id: number }>> {
  await ensureMediaTable();
  const [rows] = await mysqlPool().query<RowDataPacket[]>(
    'SELECT id FROM media_assets ORDER BY id DESC LIMIT 500'
  );
  return rows.map((row) => ({ id: Number(row.id) }));
}

export async function getMedia(id: number): Promise<{ data: Buffer; mime_type: string } | null> {
  await ensureMediaTable();
  const [rows] = await mysqlPool().execute<RowDataPacket[]>(
    'SELECT data, mime_type FROM media_assets WHERE id = ? LIMIT 1',
    [id]
  );
  if (!rows.length) return null;
  return { data: rows[0].data as Buffer, mime_type: String(rows[0].mime_type) };
}
