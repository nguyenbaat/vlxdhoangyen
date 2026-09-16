import pg from 'pg';
import fs from 'node:fs';
import path from 'node:path';

const { Pool } = pg;
const pool = new Pool({
  connectionString: 'postgresql://postgres.vbsqbpgldgqabampniuh:Nguyenbaat%40123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  console.log('Checking media_assets table in PostgreSQL...');
  const mediaRows = await pool.query('SELECT id, filename, mime_type, file_size FROM media_assets ORDER BY id ASC');
  console.log(`Found ${mediaRows.rows.length} records in media_assets:`, mediaRows.rows);

  const prods = await pool.query("SELECT id, name, featured_image FROM products WHERE featured_image LIKE '%media%'");
  console.log(`Found ${prods.rows.length} products with /media/ URLs:`, prods.rows);

  const posts = await pool.query("SELECT id, title, featured_image FROM posts WHERE featured_image LIKE '%media%'");
  console.log(`Found ${posts.rows.length} posts with /media/ URLs:`, posts.rows);

  // Check files in public/images/uploads and uploads
  const uploadsDir = path.join(process.cwd(), 'public', 'images', 'uploads');
  if (fs.existsSync(uploadsDir)) {
    const files = fs.readdirSync(uploadsDir);
    console.log(`Files in public/images/uploads (${files.length}):`, files.slice(0, 10));
  }

  process.exit(0);
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
