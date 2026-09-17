import pg from 'pg';
import fs from 'fs';
const env = fs.readFileSync('.env', 'utf8');
let dbUrl = '';
for (const line of env.split('\n')) {
  if (line.startsWith('DATABASE_URL=')) dbUrl = line.replace('DATABASE_URL=', '').trim().replace(/^["']|["']$/g, '');
}
const pool = new pg.Pool({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
const res = await pool.query('SELECT id, name, slug, group_type, parent_id, image_url, is_active FROM categories ORDER BY group_type, sort_order, id ASC');
console.table(res.rows);
pool.end();
