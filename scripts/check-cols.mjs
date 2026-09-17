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

async function checkCols() {
  const res = await pool.query(`
    SELECT table_name, column_name, data_type 
    FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name IN ('categories', 'products', 'brands', 'posts')
    ORDER BY table_name, ordinal_position;
  `);
  for (const r of res.rows) {
    console.log(r.table_name, '->', r.column_name, ':', r.data_type);
  }
  pool.end();
}
checkCols().catch(e => { console.error(e); pool.end(); });
