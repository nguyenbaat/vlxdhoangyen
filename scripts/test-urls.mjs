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

async function run() {
  const prodRows = (await pool.query("SELECT slug FROM products WHERE status = 'published' LIMIT 5")).rows;
  const catRows = (await pool.query("SELECT slug FROM categories WHERE is_active = 1 LIMIT 5")).rows;
  const brandRows = (await pool.query("SELECT slug FROM brands LIMIT 3")).rows;
  pool.end();

  const testUrls = [
    'http://127.0.0.1:3000/',
    'http://127.0.0.1:3000/san-pham/',
    'http://127.0.0.1:3000/san-pham',
    'http://127.0.0.1:3000/tin-tuc/',
    'http://127.0.0.1:3000/gioi-thieu/',
    'http://127.0.0.1:3000/lien-he/',
    ...catRows.map(c => `http://127.0.0.1:3000/${c.slug}/`),
    ...prodRows.map(p => `http://127.0.0.1:3000/${p.slug}/`),
    ...brandRows.map(b => `http://127.0.0.1:3000/san-pham/${b.slug}/`)
  ];

  let allPassed = true;
  for (const url of testUrls) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      const loc = res.headers.get('location') || '';
      console.log(`${url} -> Status: ${res.status} ${loc ? `(Redirect to: ${loc})` : ''}`);
      if (res.status !== 200 && res.status !== 301) {
        allPassed = false;
      }
      if (res.status === 301 || res.status === 302) {
        const target = new URL(loc, url).href;
        const subRes = await fetch(target, { redirect: 'manual' });
        console.log(`   Follow -> ${target} -> Status: ${subRes.status}`);
        if (subRes.status !== 200) {
          allPassed = false;
        }
      }
    } catch (err) {
      console.error(`${url} -> Error: ${err.message}`);
      allPassed = false;
    }
  }

  console.log('\n=============================================');
  console.log('ALL URLS TEST RESULT:', allPassed ? '✅ 100% PASSED (NO 404 OR REDIRECT LOOPS)' : '❌ SOME FAILED');
  console.log('=============================================');
}

run();
