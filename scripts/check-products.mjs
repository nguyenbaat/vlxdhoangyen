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

async function check() {
  const prods = await pool.query(`SELECT id, name, slug, status FROM products LIMIT 20;`);
  console.log('Total products:', (await pool.query(`SELECT COUNT(*) FROM products`)).rows[0].count);
  console.log('Statuses:', (await pool.query(`SELECT status, COUNT(*) FROM products GROUP BY status`)).rows);
  console.log('Sample Products:', prods.rows);
  pool.end();
}
check().catch(e => { console.error(e); pool.end(); });
