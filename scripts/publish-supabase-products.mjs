import pg from 'pg';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf8');
let dbUrl = '';
for (const line of env.split('\n')) {
  if (line.startsWith('DATABASE_URL=')) {
    dbUrl = line.replace('DATABASE_URL=', '').trim().replace(/^["']|["']$/g, '');
  }
}

const pool = new pg.Pool({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });

async function publishAll() {
  const res = await pool.query("UPDATE products SET status = 'published' WHERE status = 'trash' OR status IS NULL;");
  console.log('Updated rows:', res.rowCount);
  const check = await pool.query("SELECT status, COUNT(*) FROM products GROUP BY status;");
  console.log('Statuses now:', check.rows);
  pool.end();
}
publishAll().catch(e => { console.error(e); pool.end(); });
