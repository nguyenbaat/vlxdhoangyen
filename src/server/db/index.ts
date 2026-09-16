import pg from 'pg';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import fs from 'node:fs';
import path from 'node:path';
import {
  SEED_CATEGORIES,
  SEED_BRANDS,
  SEED_PRODUCTS,
  SEED_POSTS,
  SEED_SETTINGS
} from './seed-data.js';

// Auto-load .env in standalone Node environment if not loaded
if (!process.env.DATABASE_URL && !process.env.DB_HOST) {
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (key && process.env[key] === undefined) {
            process.env[key] = val;
          }
        }
      }
    }
  } catch (e) {}
}

export interface QueryResult<T = any> {
  rows: T[];
  insertId?: number;
  affectedRows?: number;
}

// ── Detect Database Engine ───────────────────────────────────────────────────
export const isMySQL = process.env.DB_TYPE === 'mysql' || 
                (Boolean(process.env.DATABASE_URL) && process.env.DATABASE_URL!.startsWith('mysql://')) || 
                (Number(process.env.DB_PORT) === 3306) ||
                (Boolean(process.env.DB_NAME) && !process.env.DATABASE_URL?.startsWith('postgres'));

const globalPool = globalThis as unknown as { _pgPool?: pg.Pool; _mysqlPool?: mysql.Pool };

let pgPool: pg.Pool | null = null;
let mysqlPool: mysql.Pool | null = null;

if (isMySQL) {
  mysqlPool = globalPool._mysqlPool || mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
    connectTimeout: 5000
  });
  if (process.env.NODE_ENV !== 'production') {
    globalPool._mysqlPool = mysqlPool;
  }
} else {
  pgPool = globalPool._pgPool || new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 6543,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'postgres',
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 3000,
  });
  if (process.env.NODE_ENV !== 'production') {
    globalPool._pgPool = pgPool;
  }

  pgPool.on('error', (err) => {
    console.error('[PostgreSQL pool error]:', err.message);
  });
}

export const pool = isMySQL ? mysqlPool! : pgPool!;

// ── SQL Adaptor Helper ───────────────────────────────────────────────────────
function adaptSql(sql: string, mysqlMode: boolean): string {
  if (mysqlMode) {
    let out = sql.replace(/\bILIKE\b/gi, 'LIKE');
    out = out.replace(/\s+RETURNING\s+id/gi, '');
    out = out.replace(/\s+NULLS\s+LAST/gi, '');
    out = out.replace(/ON CONFLICT DO NOTHING/gi, '');
    if (out.includes('ON CONFLICT (key_name) DO UPDATE SET value_json = EXCLUDED.value_json')) {
      out = out.replace('ON CONFLICT (key_name) DO UPDATE SET value_json = EXCLUDED.value_json', 'ON DUPLICATE KEY UPDATE value_json = VALUES(value_json)');
    }
    return out;
  } else {
    let i = 0;
    const pgSql = sql.replace(/INSERT IGNORE INTO/gi, 'INSERT INTO');
    const conflictSql = sql.includes('INSERT IGNORE INTO') ? pgSql + ' ON CONFLICT DO NOTHING' : pgSql;
    return conflictSql.replace(/\?/g, () => `${++i}`);
  }
}

// ── Unified async DB API ────────────────────────────────────────────────────
export const db = {
  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    try {
      if (isMySQL && mysqlPool) {
        const adapted = adaptSql(sql, true);
        const [rows] = await mysqlPool.query(adapted, params);
        return rows as T[];
      } else if (pgPool) {
        const adapted = adaptSql(sql, false);
        const result = await pgPool.query(adapted, params);
        return result.rows as T[];
      }
    } catch (err: any) {
      console.error('[DB Query Error]:', err.message);
      return [];
    }
    return [];
  },

  async queryOne<T = any>(sql: string, params: any[] = []): Promise<T | null> {
    const rows = await db.query<T>(sql, params);
    return rows[0] ?? null;
  },

  async execute(sql: string, params: any[] = []): Promise<{ insertId: number; changes: number }> {
    try {
      if (isMySQL && mysqlPool) {
        const adapted = adaptSql(sql, true);
        const [result]: any = await mysqlPool.query(adapted, params);
        return { insertId: result.insertId ?? 0, changes: result.affectedRows ?? 0 };
      } else if (pgPool) {
        const adapted = adaptSql(sql, false);
        const result = await pgPool.query(adapted, params);
        const insertId = result.rows[0]?.id ?? 0;
        return { insertId, changes: result.rowCount ?? 0 };
      }
    } catch (err: any) {
      console.error('[DB Execute Error]:', err.message);
      return { insertId: 0, changes: 0 };
    }
    return { insertId: 0, changes: 0 };
  },

  pool,
};

// ── Schema creation ─────────────────────────────────────────────────────────
async function createSchema() {
  const client = await pgPool!.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        parent_id INTEGER DEFAULT NULL,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        group_type VARCHAR(50) DEFAULT 'vlxd',
        description TEXT,
        image_url TEXT,
        seo_title TEXT,
        seo_description TEXT,
        sort_order INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS brands (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        logo_url TEXT,
        website_url TEXT,
        is_featured INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        brand_id INTEGER DEFAULT NULL,
        name VARCHAR(500) NOT NULL,
        slug VARCHAR(500) NOT NULL UNIQUE,
        sku VARCHAR(200),
        price NUMERIC DEFAULT 0,
        original_price NUMERIC DEFAULT 0,
        unit VARCHAR(100) DEFAULT 'Bao',
        short_description TEXT,
        content TEXT,
        featured_image TEXT,
        seo_title TEXT,
        seo_description TEXT,
        is_featured INTEGER DEFAULT 0,
        is_in_stock INTEGER DEFAULT 1,
        status VARCHAR(50) DEFAULT 'published',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS product_categories (
        product_id INTEGER NOT NULL,
        category_id INTEGER NOT NULL,
        PRIMARY KEY (product_id, category_id)
      );

      CREATE TABLE IF NOT EXISTS product_images (
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        alt_text TEXT,
        sort_order INTEGER DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS post_categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT
      );

      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        author_id INTEGER DEFAULT NULL,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) NOT NULL UNIQUE,
        summary TEXT,
        content TEXT,
        featured_image TEXT,
        seo_title TEXT,
        seo_description TEXT,
        category_slug VARCHAR(255),
        status VARCHAR(50) DEFAULT 'published',
        published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS post_category_rel (
        post_id INTEGER NOT NULL,
        category_id INTEGER NOT NULL,
        PRIMARY KEY (post_id, category_id)
      );

      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        customer_email VARCHAR(255),
        address TEXT,
        notes TEXT,
        product_name TEXT,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS settings (
        key_name TEXT PRIMARY KEY,
        value_json TEXT,
        description TEXT
      );

      CREATE TABLE IF NOT EXISTS redirects (
        id SERIAL PRIMARY KEY,
        old_path TEXT NOT NULL UNIQUE,
        new_path TEXT NOT NULL,
        status_code INTEGER DEFAULT 301
      );
    `);
    console.log('[DB] PostgreSQL schema verified/created');
  } finally {
    client.release();
  }
}

// ── Seed data ────────────────────────────────────────────────────────────────
async function seedInitialData() {
  // Check if data already seeded
  const check = await db.queryOne<{ count: string }>(
    "SELECT COUNT(*) as count FROM categories WHERE slug = 'bon-tam'"
  );
  if (check && parseInt(check.count) > 0) {
    console.log('[DB] Database already seeded, skipping.');
    return;
  }

  console.log('[SEED] Seeding Supabase PostgreSQL with initial data...');
  const client = await pgPool!.connect();

  try {
    await client.query('BEGIN');

    // Clear existing data
    await client.query('TRUNCATE TABLE post_category_rel, post_categories, product_images, product_categories, products, brands, categories, redirects, settings RESTART IDENTITY CASCADE');

    // 1. Admin user
    const passwordHash = bcrypt.hashSync('HoangYen@2026', 10);
    await client.query(
      `INSERT INTO users (id, username, email, password_hash, full_name, role)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (username) DO NOTHING`,
      [1, 'admin', 'vlxdhoangyenqt@gmail.com', passwordHash, 'Quản Trị Viên Hoàng Yến', 'admin']
    );

    // 2. Settings
    for (const [k, v] of Object.entries(SEED_SETTINGS)) {
      await client.query(
        `INSERT INTO settings (key_name, value_json, description) VALUES ($1, $2, $3)
         ON CONFLICT (key_name) DO UPDATE SET value_json = EXCLUDED.value_json`,
        [k, JSON.stringify(v), k]
      );
    }

    // 3. Categories (with explicit IDs)
    for (const cat of SEED_CATEGORIES) {
      await client.query(
        `INSERT INTO categories (id, name, slug, group_type, description, image_url, seo_title, seo_description, sort_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name`,
        [cat.id, cat.name, cat.slug, cat.group_type || 'vlxd', cat.description || '', cat.image_url || '', cat.seo_title || '', cat.seo_description || '', cat.sort_order || 0]
      );
    }
    // Reset sequence after explicit ID inserts
    await client.query(`SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))`);

    // 4. Brands
    for (const b of SEED_BRANDS) {
      await client.query(
        `INSERT INTO brands (id, name, slug, description, logo_url, is_featured)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name`,
        [b.id, b.name, b.slug, b.description || '', b.logo_url || '', b.is_featured ? 1 : 0]
      );
    }
    await client.query(`SELECT setval('brands_id_seq', (SELECT MAX(id) FROM brands))`);

    // 5. Products
    for (const p of SEED_PRODUCTS) {
      await client.query(
        `INSERT INTO products (id, brand_id, name, slug, sku, price, original_price, unit, short_description, content, featured_image, seo_title, seo_description, is_featured, is_in_stock, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
         ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name`,
        [p.id, p.brand_id ?? null, p.name, p.slug, p.sku || '', p.price || 0, 0, p.unit || 'Cái', p.short_description || '', p.content || '', p.featured_image || '', p.seo_title || '', p.seo_description || '', p.is_featured ? 1 : 0, p.is_in_stock ? 1 : 1, 'published']
      );

      // Product-category link
      await client.query(
        `INSERT INTO product_categories (product_id, category_id) VALUES ($1, $2)
         ON CONFLICT DO NOTHING`,
        [p.id, p.category_id]
      );

      // Product images
      let imgOrder = 0;
      for (const img of (p.images || [])) {
        await client.query(
          `INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES ($1, $2, $3, $4)`,
          [p.id, img, p.name, imgOrder++]
        );
      }
    }
    await client.query(`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products))`);

    // 6. Post categories
    await client.query(
      `INSERT INTO post_categories (id, name, slug, description) VALUES ($1, $2, $3, $4) ON CONFLICT (slug) DO NOTHING`,
      [1, 'Tin Tức', 'tin-tuc', 'Tin tức và thị trường VLXD']
    );
    await client.query(
      `INSERT INTO post_categories (id, name, slug, description) VALUES ($1, $2, $3, $4) ON CONFLICT (slug) DO NOTHING`,
      [2, 'Bảng Báo Giá', 'bang-bao-gia-vlxd', 'Cập nhật giá VLXD']
    );

    // 7. Posts
    for (const post of SEED_POSTS) {
      await client.query(
        `INSERT INTO posts (id, author_id, title, slug, summary, content, featured_image, seo_title, seo_description, status)
         VALUES ($1, 1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title`,
        [post.id, post.title, post.slug, post.summary || '', post.content || '', post.featured_image || '', post.seo_title || '', post.seo_description || '', ('status' in post ? post.status : undefined) || 'published']
      );
      await client.query(
        `INSERT INTO post_category_rel (post_id, category_id) VALUES ($1, 1) ON CONFLICT DO NOTHING`,
        [post.id]
      );
    }
    await client.query(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts))`);

    await client.query('COMMIT');
    console.log('[DB] Supabase seed completed: categories, brands, products, posts seeded.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('[DB] Seed failed, rolled back:', err);
    throw err;
  } finally {
    client.release();
  }
}

async function createMySQLSchema() {
  if (!mysqlPool) return;
  try {
    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        parent_id INT DEFAULT NULL,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        group_type VARCHAR(50) DEFAULT 'vlxd',
        description TEXT,
        image_url TEXT,
        seo_title TEXT,
        seo_description TEXT,
        sort_order INT DEFAULT 0,
        is_active INT DEFAULT 1,
        h1 VARCHAR(500) DEFAULT NULL,
        content LONGTEXT DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS brands (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        content LONGTEXT DEFAULT NULL,
        logo_url TEXT,
        website_url TEXT,
        seo_title TEXT,
        seo_description TEXT,
        is_featured INT DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        brand_id INT DEFAULT NULL,
        name VARCHAR(500) NOT NULL,
        slug VARCHAR(500) NOT NULL UNIQUE,
        sku VARCHAR(200),
        price NUMERIC(15, 2) DEFAULT 0,
        original_price NUMERIC(15, 2) DEFAULT 0,
        unit VARCHAR(100) DEFAULT 'Bao',
        short_description TEXT,
        content LONGTEXT,
        custom_badge VARCHAR(255) DEFAULT NULL,
        specifications LONGTEXT,
        featured_image TEXT,
        seo_title TEXT,
        seo_description TEXT,
        is_featured INT DEFAULT 0,
        is_in_stock INT DEFAULT 1,
        status VARCHAR(50) DEFAULT 'published',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS product_categories (
        product_id INT NOT NULL,
        category_id INT NOT NULL,
        PRIMARY KEY (product_id, category_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS product_images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        image_url TEXT NOT NULL,
        alt_text TEXT,
        sort_order INT DEFAULT 0
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS post_categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        author_id INT DEFAULT NULL,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) NOT NULL UNIQUE,
        summary TEXT,
        content LONGTEXT,
        featured_image TEXT,
        seo_title TEXT,
        seo_description TEXT,
        category_slug VARCHAR(255),
        status VARCHAR(50) DEFAULT 'published',
        published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS post_category_rel (
        post_id INT NOT NULL,
        category_id INT NOT NULL,
        PRIMARY KEY (post_id, category_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        customer_email VARCHAR(255),
        address TEXT,
        notes TEXT,
        product_name TEXT,
        status VARCHAR(50) DEFAULT 'new',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS settings (
        key_name VARCHAR(255) PRIMARY KEY,
        value_json LONGTEXT,
        description TEXT
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS redirects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        old_path VARCHAR(500) NOT NULL UNIQUE,
        new_path VARCHAR(500) NOT NULL,
        status_code INT DEFAULT 301
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log('[DB] MySQL schema verified/created successfully.');
  } catch (err: any) {
    console.error('[DB] MySQL schema creation warning:', err.message);
  }
}

// ── Bootstrap on startup ─────────────────────────────────────────────────────
let _initialized = false;

export async function initDatabase() {
  if (_initialized) return;
  _initialized = true;

  try {
    if (isMySQL && mysqlPool) {
      await mysqlPool.query('SELECT 1');
      console.log('[DB] Connected to MySQL database successfully.');
      await createMySQLSchema();
    } else if (pgPool) {
      await pgPool.query('SELECT 1');
      console.log('[DB] Connected to PostgreSQL database');
      await createSchema();
      await seedInitialData();
    }
  } catch (err: any) {
    console.error('[WARN] Database connection failed:', err.message);
    _initialized = false;
  }
}

