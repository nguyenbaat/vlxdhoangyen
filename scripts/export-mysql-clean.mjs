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

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (val instanceof Date) {
    return `'${val.toISOString().slice(0, 19).replace('T', ' ')}'`;
  }
  const str = String(val)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\0/g, '\\0');
  return `'${str}'`;
}

async function exportDatabase() {
  console.log('Connecting to PostgreSQL to export MySQL SQL dump...');

  let out = `-- ============================================================
-- Database Dump for Siêu Thị Vật Liệu Xây Dựng Hoàng Yến
-- Target Engine: MySQL / MariaDB (Hostinger / phpMyAdmin / cPanel)
-- Generated: ${new Date().toISOString()}
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

`;

  // 1. users
  out += `-- ------------------------------------------------------------
-- Table: users
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`users\`;
CREATE TABLE \`users\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`username\` VARCHAR(255) NOT NULL UNIQUE,
  \`email\` VARCHAR(255) NOT NULL UNIQUE,
  \`password_hash\` TEXT NOT NULL,
  \`full_name\` VARCHAR(255) NOT NULL,
  \`role\` VARCHAR(50) DEFAULT 'admin',
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const users = (await pool.query('SELECT * FROM users ORDER BY id ASC')).rows;
  if (users.length > 0) {
    out += `INSERT INTO \`users\` (\`id\`, \`username\`, \`email\`, \`password_hash\`, \`full_name\`, \`role\`, \`created_at\`) VALUES\n`;
    out += users.map(u => `(${escapeSql(u.id)}, ${escapeSql(u.username)}, ${escapeSql(u.email)}, ${escapeSql(u.password_hash)}, ${escapeSql(u.full_name)}, ${escapeSql(u.role)}, ${escapeSql(u.created_at)})`).join(',\n') + ';\n\n';
  }

  // 2. categories
  out += `-- ------------------------------------------------------------
-- Table: categories
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`categories\`;
CREATE TABLE \`categories\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`parent_id\` INT DEFAULT NULL,
  \`name\` VARCHAR(255) NOT NULL,
  \`slug\` VARCHAR(255) NOT NULL UNIQUE,
  \`group_type\` VARCHAR(50) DEFAULT 'vlxd',
  \`description\` TEXT,
  \`image_url\` TEXT,
  \`seo_title\` TEXT,
  \`seo_description\` TEXT,
  \`sort_order\` INT DEFAULT 0,
  \`is_active\` INT DEFAULT 1,
  \`h1\` VARCHAR(500) DEFAULT NULL,
  \`content\` LONGTEXT DEFAULT NULL,
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_categories_slug\` (\`slug\`(191)),
  INDEX \`idx_categories_parent\` (\`parent_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const categories = (await pool.query('SELECT * FROM categories ORDER BY id ASC')).rows;
  if (categories.length > 0) {
    out += `INSERT INTO \`categories\` (\`id\`, \`parent_id\`, \`name\`, \`slug\`, \`group_type\`, \`description\`, \`image_url\`, \`seo_title\`, \`seo_description\`, \`sort_order\`, \`is_active\`, \`h1\`, \`content\`, \`created_at\`, \`updated_at\`) VALUES\n`;
    out += categories.map(c => `(${escapeSql(c.id)}, ${escapeSql(c.parent_id)}, ${escapeSql(c.name)}, ${escapeSql(c.slug)}, ${escapeSql(c.group_type || 'vlxd')}, ${escapeSql(c.description)}, ${escapeSql(c.image_url)}, ${escapeSql(c.seo_title)}, ${escapeSql(c.seo_description)}, ${escapeSql(c.sort_order || 0)}, ${escapeSql(c.is_active ?? 1)}, ${escapeSql(c.h1 || c.name)}, ${escapeSql(c.content || null)}, ${escapeSql(c.created_at)}, ${escapeSql(c.updated_at || c.created_at)})`).join(',\n') + ';\n\n';
  }

  // 3. brands
  out += `-- ------------------------------------------------------------
-- Table: brands
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`brands\`;
CREATE TABLE \`brands\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`name\` VARCHAR(255) NOT NULL,
  \`slug\` VARCHAR(255) NOT NULL UNIQUE,
  \`description\` TEXT,
  \`content\` LONGTEXT DEFAULT NULL,
  \`faqs\` LONGTEXT DEFAULT NULL,
  \`logo_url\` TEXT,
  \`website_url\` TEXT,
  \`seo_title\` TEXT,
  \`seo_description\` TEXT,
  \`is_featured\` INT DEFAULT 0,
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_brands_slug\` (\`slug\`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const brands = (await pool.query('SELECT * FROM brands ORDER BY id ASC')).rows;
  if (brands.length > 0) {
    out += `INSERT INTO \`brands\` (\`id\`, \`name\`, \`slug\`, \`description\`, \`content\`, \`faqs\`, \`logo_url\`, \`website_url\`, \`seo_title\`, \`seo_description\`, \`is_featured\`, \`created_at\`, \`updated_at\`) VALUES\n`;
    out += brands.map(b => `(${escapeSql(b.id)}, ${escapeSql(b.name)}, ${escapeSql(b.slug)}, ${escapeSql(b.description)}, ${escapeSql(b.content || null)}, ${escapeSql(b.faqs || null)}, ${escapeSql(b.logo_url)}, ${escapeSql(b.website_url)}, ${escapeSql(b.seo_title)}, ${escapeSql(b.seo_description)}, ${escapeSql(b.is_featured || 0)}, ${escapeSql(b.created_at)}, ${escapeSql(b.updated_at || b.created_at)})`).join(',\n') + ';\n\n';
  }

  // 4. products
  out += `-- ------------------------------------------------------------
-- Table: products
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`products\`;
CREATE TABLE \`products\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`brand_id\` INT DEFAULT NULL,
  \`name\` VARCHAR(500) NOT NULL,
  \`slug\` VARCHAR(500) NOT NULL UNIQUE,
  \`sku\` VARCHAR(200) DEFAULT NULL,
  \`price\` NUMERIC(15, 2) DEFAULT 0,
  \`original_price\` NUMERIC(15, 2) DEFAULT 0,
  \`unit\` VARCHAR(100) DEFAULT 'Bao',
  \`short_description\` TEXT,
  \`content\` LONGTEXT,
  \`custom_badge\` VARCHAR(255) DEFAULT NULL,
  \`specifications\` LONGTEXT,
  \`featured_image\` TEXT,
  \`seo_title\` TEXT,
  \`seo_description\` TEXT,
  \`is_featured\` INT DEFAULT 0,
  \`is_in_stock\` INT DEFAULT 1,
  \`status\` VARCHAR(50) DEFAULT 'published',
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_products_slug\` (\`slug\`(191)),
  INDEX \`idx_products_brand\` (\`brand_id\`),
  INDEX \`idx_products_status\` (\`status\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const products = (await pool.query('SELECT * FROM products ORDER BY id ASC')).rows;
  if (products.length > 0) {
    out += `INSERT INTO \`products\` (\`id\`, \`brand_id\`, \`name\`, \`slug\`, \`sku\`, \`price\`, \`original_price\`, \`unit\`, \`short_description\`, \`content\`, \`custom_badge\`, \`specifications\`, \`featured_image\`, \`seo_title\`, \`seo_description\`, \`is_featured\`, \`is_in_stock\`, \`status\`, \`created_at\`, \`updated_at\`) VALUES\n`;
    out += products.map(p => `(${escapeSql(p.id)}, ${escapeSql(p.brand_id)}, ${escapeSql(p.name)}, ${escapeSql(p.slug)}, ${escapeSql(p.sku)}, ${escapeSql(p.price || 0)}, ${escapeSql(p.original_price || 0)}, ${escapeSql(p.unit || 'Bao')}, ${escapeSql(p.short_description)}, ${escapeSql(p.content)}, ${escapeSql(p.custom_badge)}, ${escapeSql(p.specifications)}, ${escapeSql(p.featured_image)}, ${escapeSql(p.seo_title)}, ${escapeSql(p.seo_description)}, ${escapeSql(p.is_featured || 0)}, ${escapeSql(1)}, ${escapeSql('published')}, ${escapeSql(p.created_at)}, ${escapeSql(p.updated_at || p.created_at)})`).join(',\n') + ';\n\n';
  }

  // 5. product_categories
  out += `-- ------------------------------------------------------------
-- Table: product_categories
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`product_categories\`;
CREATE TABLE \`product_categories\` (
  \`product_id\` INT NOT NULL,
  \`category_id\` INT NOT NULL,
  PRIMARY KEY (\`product_id\`, \`category_id\`),
  INDEX \`idx_pc_category\` (\`category_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const pcRows = (await pool.query('SELECT * FROM product_categories ORDER BY product_id, category_id ASC')).rows;
  if (pcRows.length > 0) {
    out += `INSERT INTO \`product_categories\` (\`product_id\`, \`category_id\`) VALUES\n`;
    out += pcRows.map(r => `(${escapeSql(r.product_id)}, ${escapeSql(r.category_id)})`).join(',\n') + ';\n\n';
  }

  // 6. product_images
  out += `-- ------------------------------------------------------------
-- Table: product_images
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`product_images\`;
CREATE TABLE \`product_images\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`product_id\` INT NOT NULL,
  \`image_url\` TEXT NOT NULL,
  \`alt_text\` TEXT,
  \`sort_order\` INT DEFAULT 0,
  INDEX \`idx_pimg_product\` (\`product_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const pImgs = (await pool.query('SELECT * FROM product_images ORDER BY id ASC')).rows;
  if (pImgs.length > 0) {
    out += `INSERT INTO \`product_images\` (\`id\`, \`product_id\`, \`image_url\`, \`alt_text\`, \`sort_order\`) VALUES\n`;
    out += pImgs.map(r => `(${escapeSql(r.id)}, ${escapeSql(r.product_id)}, ${escapeSql(r.image_url)}, ${escapeSql(r.alt_text)}, ${escapeSql(r.sort_order || 0)})`).join(',\n') + ';\n\n';
  }

  // 7. post_categories
  out += `-- ------------------------------------------------------------
-- Table: post_categories
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`post_categories\`;
CREATE TABLE \`post_categories\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`name\` VARCHAR(255) NOT NULL,
  \`slug\` VARCHAR(255) NOT NULL UNIQUE,
  \`description\` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const postCats = (await pool.query('SELECT * FROM post_categories ORDER BY id ASC')).rows;
  if (postCats.length > 0) {
    out += `INSERT INTO \`post_categories\` (\`id\`, \`name\`, \`slug\`, \`description\`) VALUES\n`;
    out += postCats.map(r => `(${escapeSql(r.id)}, ${escapeSql(r.name)}, ${escapeSql(r.slug)}, ${escapeSql(r.description)})`).join(',\n') + ';\n\n';
  }

  // 8. posts
  out += `-- ------------------------------------------------------------
-- Table: posts
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`posts\`;
CREATE TABLE \`posts\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`author_id\` INT DEFAULT NULL,
  \`title\` VARCHAR(500) NOT NULL,
  \`slug\` VARCHAR(500) NOT NULL UNIQUE,
  \`summary\` TEXT,
  \`content\` LONGTEXT,
  \`featured_image\` TEXT,
  \`seo_title\` TEXT,
  \`seo_description\` TEXT,
  \`category_slug\` VARCHAR(255) DEFAULT 'tin-tuc',
  \`status\` VARCHAR(50) DEFAULT 'published',
  \`published_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_posts_slug\` (\`slug\`(191)),
  INDEX \`idx_posts_status\` (\`status\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const posts = (await pool.query('SELECT * FROM posts ORDER BY id ASC')).rows;
  if (posts.length > 0) {
    out += `INSERT INTO \`posts\` (\`id\`, \`author_id\`, \`title\`, \`slug\`, \`summary\`, \`content\`, \`featured_image\`, \`seo_title\`, \`seo_description\`, \`category_slug\`, \`status\`, \`published_at\`, \`created_at\`) VALUES\n`;
    out += posts.map(r => `(${escapeSql(r.id)}, ${escapeSql(r.author_id)}, ${escapeSql(r.title)}, ${escapeSql(r.slug)}, ${escapeSql(r.summary)}, ${escapeSql(r.content)}, ${escapeSql(r.featured_image)}, ${escapeSql(r.seo_title)}, ${escapeSql(r.seo_description)}, ${escapeSql(r.category_slug || 'tin-tuc')}, ${escapeSql(r.status || 'published')}, ${escapeSql(r.published_at)}, ${escapeSql(r.created_at)})`).join(',\n') + ';\n\n';
  }

  // 9. post_category_rel
  out += `-- ------------------------------------------------------------
-- Table: post_category_rel
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`post_category_rel\`;
CREATE TABLE \`post_category_rel\` (
  \`post_id\` INT NOT NULL,
  \`category_id\` INT NOT NULL,
  PRIMARY KEY (\`post_id\`, \`category_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const postCatRels = (await pool.query('SELECT * FROM post_category_rel ORDER BY post_id, category_id ASC')).rows;
  if (postCatRels.length > 0) {
    out += `INSERT INTO \`post_category_rel\` (\`post_id\`, \`category_id\`) VALUES\n`;
    out += postCatRels.map(r => `(${escapeSql(r.post_id)}, ${escapeSql(r.category_id)})`).join(',\n') + ';\n\n';
  }

  // 10. inquiries
  out += `-- ------------------------------------------------------------
-- Table: inquiries
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`inquiries\`;
CREATE TABLE \`inquiries\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`customer_name\` VARCHAR(255) NOT NULL,
  \`customer_phone\` VARCHAR(50) NOT NULL,
  \`customer_email\` VARCHAR(255) DEFAULT NULL,
  \`address\` TEXT,
  \`notes\` TEXT,
  \`product_name\` TEXT,
  \`status\` VARCHAR(50) DEFAULT 'new',
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const inqs = (await pool.query('SELECT * FROM inquiries ORDER BY id ASC')).rows;
  if (inqs.length > 0) {
    out += `INSERT INTO \`inquiries\` (\`id\`, \`customer_name\`, \`customer_phone\`, \`customer_email\`, \`address\`, \`notes\`, \`product_name\`, \`status\`, \`created_at\`) VALUES\n`;
    out += inqs.map(r => `(${escapeSql(r.id)}, ${escapeSql(r.customer_name)}, ${escapeSql(r.customer_phone)}, ${escapeSql(r.customer_email)}, ${escapeSql(r.address)}, ${escapeSql(r.notes)}, ${escapeSql(r.product_name)}, ${escapeSql(r.status || 'new')}, ${escapeSql(r.created_at)})`).join(',\n') + ';\n\n';
  }

  // 11. settings
  out += `-- ------------------------------------------------------------
-- Table: settings
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`settings\`;
CREATE TABLE \`settings\` (
  \`key_name\` VARCHAR(255) PRIMARY KEY,
  \`value_json\` LONGTEXT,
  \`description\` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

`;
  const settings = (await pool.query('SELECT * FROM settings ORDER BY key_name ASC')).rows;
  if (settings.length > 0) {
    out += `INSERT INTO \`settings\` (\`key_name\`, \`value_json\`, \`description\`) VALUES\n`;
    out += settings.map(r => {
      let valJson = r.value_json;
      if (r.key_name === 'gemini_api_key' || r.key_name === 'openai_api_key') {
        valJson = '""';
      }
      return `(${escapeSql(r.key_name)}, ${escapeSql(valJson)}, ${escapeSql(r.description)})`;
    }).join(',\n') + ';\n\n';
  }

  // 12. redirects
  out += `-- ------------------------------------------------------------
-- Table: redirects
-- ------------------------------------------------------------
DROP TABLE IF EXISTS \`redirects\`;
CREATE TABLE \`redirects\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`old_path\` VARCHAR(500) NOT NULL UNIQUE,
  \`new_path\` VARCHAR(500) NOT NULL,
  \`status_code\` INT DEFAULT 301
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
`;

  fs.writeFileSync('vlxd_hoangyen_mysql.sql', out, 'utf8');
  console.log('✅ Exported clean MySQL dump to vlxd_hoangyen_mysql.sql (' + (Buffer.byteLength(out) / 1024).toFixed(2) + ' KB)');
  pool.end();
}

exportDatabase().catch(e => {
  console.error('Export failed:', e);
  pool.end();
  process.exit(1);
});
