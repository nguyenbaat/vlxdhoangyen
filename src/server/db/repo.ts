import { db } from './index.js';
import bcrypt from 'bcryptjs';
import { SEED_SETTINGS } from './seed-data.js';

// ── Interfaces ───────────────────────────────────────────────────────────────

export interface Category {
  id: number;
  parent_id: number | null;
  parent_name?: string;
  name: string;
  slug: string;
  group_type?: 'vlxd' | 'noi-that' | string;
  h1?: string;
  description: string;
  content?: string;
  image_url: string;
  seo_title: string;
  seo_description: string;
  sort_order: number;
  is_active: number;
  product_count?: number;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  content?: string;
  faqs?: string;
  logo_url: string;
  website_url: string;
  seo_title?: string;
  seo_description?: string;
  is_featured: number;
  product_count?: number;
}

export interface Product {
  id: number;
  brand_id: number | null;
  brand_name?: string;
  brand_slug?: string;
  category_id?: number;
  category_name?: string;
  category_slug?: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  original_price: number;
  unit: string;
  short_description: string;
  content: string;
  custom_badge?: string;
  specifications?: string;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  is_featured: number;
  is_in_stock: number;
  status: string;
  created_at: string;
  updated_at: string;
  images?: string[];
}

export interface Post {
  id: number;
  author_id: number;
  author_name?: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  status: string;
  published_at: string;
  created_at: string;
  category_name?: string;
  category_slug?: string;
}

export interface Inquiry {
  id: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  address: string;
  notes: string;
  product_name: string;
  status: string;
  created_at: string;
}

export interface SiteSettings {
  company_name: string;
  brand_name: string;
  tax_id: string;
  founding_year: string;
  address: string;
  hotline_main: string;
  hotline_alt: string;
  contact_person_main: string;
  contact_person_alt: string;
  email: string;
  zalo_url: string;
  facebook_url: string;
  youtube_url: string;
  instagram_url?: string;
  twitter_url: string;
  maps_embed_url: string;
  logo_url: string;
  banner_url: string;
  default_seo_title: string;
  default_seo_desc: string;
  ai_provider?: 'gemini' | 'openai';
  gemini_api_key?: string;
  gemini_model?: string;
  openai_api_key?: string;
  openai_model?: string;
  ai_system_prompt?: string;
}

// ── Settings Repo ─────────────────────────────────────────────────────────────

export const SettingsRepo = {
  async getAll(): Promise<SiteSettings> {
    const rows = await db.query<{ key_name: string; value_json: string }>(
      'SELECT key_name, value_json FROM settings'
    );
    const result: any = {};
    for (const r of rows) {
      try { result[r.key_name] = JSON.parse(r.value_json); }
      catch { result[r.key_name] = r.value_json; }
    }
    return { ...SEED_SETTINGS, ...result } as SiteSettings;
  },

  async update(key: string, value: any) {
    return db.execute(
      `INSERT INTO settings (key_name, value_json, description) VALUES (?, ?, ?)
       ON CONFLICT (key_name) DO UPDATE SET value_json = EXCLUDED.value_json`,
      [key, JSON.stringify(value), key]
    );
  }
};

// ── Category Repo ─────────────────────────────────────────────────────────────

export const CategoryRepo = {
  async getAll(activeOnly = false): Promise<Category[]> {
    const sql = activeOnly
      ? `SELECT c.*, p.name as parent_name, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
         FROM categories c
         LEFT JOIN categories p ON c.parent_id = p.id
         WHERE c.is_active = 1
         ORDER BY COALESCE(c.parent_id, c.id) ASC, (c.parent_id IS NOT NULL) ASC, c.parent_id ASC, c.sort_order ASC, c.id ASC`
      : `SELECT c.*, p.name as parent_name, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
         FROM categories c
         LEFT JOIN categories p ON c.parent_id = p.id
         ORDER BY COALESCE(c.parent_id, c.id) ASC, (c.parent_id IS NOT NULL) ASC, c.parent_id ASC, c.sort_order ASC, c.id ASC`;
    return db.query<Category>(sql);
  },

  async getByGroup(groupType: string): Promise<Category[]> {
    return db.query<Category>(
      `SELECT c.*, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
       FROM categories c
       WHERE c.is_active = 1 AND (c.group_type = ? OR (? = 'vlxd' AND c.group_type IS NULL))
       ORDER BY c.sort_order ASC`,
      [groupType, groupType]
    );
  },

  async getVLXD(): Promise<Category[]> {
    return CategoryRepo.getByGroup('vlxd');
  },

  async getNoiThat(): Promise<Category[]> {
    return CategoryRepo.getByGroup('noi-that');
  },

  async getChildren(parentId: number): Promise<Category[]> {
    return db.query<Category>(
      `SELECT c.*, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
       FROM categories c
       WHERE c.is_active = 1 AND c.parent_id = ?
       ORDER BY c.sort_order ASC, c.id ASC`,
      [parentId]
    );
  },

  async getMainCategories(groupType?: string, activeOnly = true): Promise<Category[]> {
    const whereClauses: string[] = ['c.parent_id IS NULL'];
    const params: any[] = [];
    if (activeOnly) {
      whereClauses.push('c.is_active = 1');
    }
    if (groupType) {
      whereClauses.push('(c.group_type = ? OR (? = \'vlxd\' AND c.group_type IS NULL))');
      params.push(groupType, groupType);
    }
    return db.query<Category>(
      `SELECT c.*, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
       FROM categories c
       WHERE ${whereClauses.join(' AND ')}
       ORDER BY c.sort_order ASC`,
      params
    );
  },

  async getBySlug(slug: string): Promise<Category | null> {
    return db.queryOne<Category>(
      `SELECT c.*, (SELECT COUNT(*) FROM product_categories pc WHERE pc.category_id = c.id) as product_count
       FROM categories c WHERE c.slug = ?`,
      [slug]
    );
  },

  async getById(id: number): Promise<Category | null> {
    return db.queryOne<Category>('SELECT * FROM categories WHERE id = ?', [id]);
  },

  async create(data: Partial<Category>) {
    return db.execute(
      `INSERT INTO categories (name, slug, parent_id, group_type, h1, description, content, image_url, seo_title, seo_description, sort_order, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.name,
        data.slug,
        data.parent_id || null,
        data.group_type || 'vlxd',
        data.h1 || data.name,
        data.description || '',
        data.content || '',
        data.image_url || '',
        data.seo_title || data.name,
        data.seo_description || '',
        data.sort_order || 0,
        data.is_active ?? 1
      ]
    );
  },

  async update(id: number, data: Partial<Category>) {
    const fields: string[] = [];
    const params: any[] = [];

    if (data.name !== undefined) { fields.push('name = ?'); params.push(data.name); }
    if (data.slug !== undefined) { fields.push('slug = ?'); params.push(data.slug); }
    if (data.parent_id !== undefined) { fields.push('parent_id = ?'); params.push(data.parent_id || null); }
    if (data.group_type !== undefined) { fields.push('group_type = ?'); params.push(data.group_type || 'vlxd'); }
    if (data.h1 !== undefined) { fields.push('h1 = ?'); params.push(data.h1 || data.name || ''); }
    if (data.description !== undefined) { fields.push('description = ?'); params.push(data.description || ''); }
    if (data.content !== undefined) { fields.push('content = ?'); params.push(data.content || ''); }
    if (data.image_url !== undefined) { fields.push('image_url = ?'); params.push(data.image_url || ''); }
    if (data.seo_title !== undefined) { fields.push('seo_title = ?'); params.push(data.seo_title || data.name || ''); }
    if (data.seo_description !== undefined) { fields.push('seo_description = ?'); params.push(data.seo_description || ''); }
    if (data.sort_order !== undefined) { fields.push('sort_order = ?'); params.push(data.sort_order || 0); }
    if (data.is_active !== undefined) { fields.push('is_active = ?'); params.push(data.is_active ?? 1); }

    if (fields.length === 0) return;

    params.push(id);
    return db.execute(`UPDATE categories SET ${fields.join(', ')} WHERE id = ?`, params);
  },

  async delete(id: number) {
    await db.execute('DELETE FROM product_categories WHERE category_id = ?', [id]);
    return db.execute('DELETE FROM categories WHERE id = ?', [id]);
  },

  async bulkUpdateStatus(ids: number[], is_active: number) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await db.execute('UPDATE categories SET is_active = ? WHERE id = ?', [is_active, id]);
    }
  },

  async bulkDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await CategoryRepo.delete(id);
    }
  }
};

// ── Brand Repo ────────────────────────────────────────────────────────────────

export const BrandRepo = {
  async getAll(options?: { isFeatured?: boolean; search?: string }): Promise<Brand[]> {
    const whereClauses: string[] = [];
    const params: any[] = [];

    if (options?.isFeatured !== undefined) {
      whereClauses.push('b.is_featured = ?');
      params.push(options.isFeatured ? 1 : 0);
    }
    if (options?.search) {
      whereClauses.push('(b.name ILIKE ? OR b.description ILIKE ? OR b.slug ILIKE ?)');
      const term = `%${options.search}%`;
      params.push(term, term, term);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

    return db.query<Brand>(
      `SELECT b.*, (SELECT COUNT(*) FROM products p WHERE p.brand_id = b.id) as product_count
       FROM brands b ${whereSql} ORDER BY b.is_featured DESC, b.name ASC`,
      params
    );
  },

  async getBySlug(slug: string): Promise<Brand | null> {
    return db.queryOne<Brand>('SELECT * FROM brands WHERE slug = ?', [slug]);
  },

  async getById(id: number): Promise<Brand | null> {
    return db.queryOne<Brand>('SELECT * FROM brands WHERE id = ?', [id]);
  },

  async create(data: Partial<Brand>) {
    return db.execute(
      'INSERT INTO brands (name, slug, description, content, faqs, logo_url, website_url, seo_title, seo_description, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        data.name,
        data.slug,
        data.description || '',
        data.content || '',
        data.faqs || '',
        data.logo_url || '',
        data.website_url || '',
        data.seo_title || data.name,
        data.seo_description || '',
        data.is_featured ? 1 : 0
      ]
    );
  },

  async update(id: number, data: Partial<Brand>) {
    const fields: string[] = [];
    const params: any[] = [];

    if (data.name !== undefined) { fields.push('name = ?'); params.push(data.name); }
    if (data.slug !== undefined) { fields.push('slug = ?'); params.push(data.slug); }
    if (data.description !== undefined) { fields.push('description = ?'); params.push(data.description || ''); }
    if (data.content !== undefined) { fields.push('content = ?'); params.push(data.content || ''); }
    if (data.faqs !== undefined) { fields.push('faqs = ?'); params.push(data.faqs || ''); }
    if (data.logo_url !== undefined) { fields.push('logo_url = ?'); params.push(data.logo_url || ''); }
    if (data.website_url !== undefined) { fields.push('website_url = ?'); params.push(data.website_url || ''); }
    if (data.seo_title !== undefined) { fields.push('seo_title = ?'); params.push(data.seo_title || data.name || ''); }
    if (data.seo_description !== undefined) { fields.push('seo_description = ?'); params.push(data.seo_description || ''); }
    if (data.is_featured !== undefined) { fields.push('is_featured = ?'); params.push(data.is_featured ? 1 : 0); }

    if (fields.length === 0) return;

    params.push(id);
    return db.execute(`UPDATE brands SET ${fields.join(', ')} WHERE id = ?`, params);
  },

  async delete(id: number) {
    return db.execute('DELETE FROM brands WHERE id = ?', [id]);
  },

  async bulkDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await BrandRepo.delete(id);
    }
  },

  async bulkUpdateFeatured(ids: number[], is_featured: number) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await db.execute('UPDATE brands SET is_featured = ? WHERE id = ?', [is_featured, id]);
    }
  }
};

// ── Product Repo ──────────────────────────────────────────────────────────────

async function attachImages(products: Product[]): Promise<Product[]> {
  for (const p of products) {
    const imgRows = await db.query<{ image_url: string }>(
      'SELECT image_url FROM product_images WHERE product_id = ? ORDER BY sort_order ASC',
      [p.id]
    );
    p.images = imgRows.length > 0 ? imgRows.map(r => r.image_url) : (p.featured_image ? [p.featured_image] : []);
  }
  return products;
}

export const ProductRepo = {
  async getAll(options?: {
    categorySlug?: string;
    brandSlug?: string;
    isFeatured?: boolean;
    search?: string;
    limit?: number;
    offset?: number;
    status?: string;
  }): Promise<{ products: Product[]; total: number }> {
    const whereClauses: string[] = [];
    const params: any[] = [];

    const statusFilter = options?.status !== undefined ? options.status : 'published';
    if (statusFilter && statusFilter !== 'all') {
      whereClauses.push('p.status = ?');
      params.push(statusFilter);
    }

    if (options?.isFeatured !== undefined) {
      whereClauses.push('p.is_featured = ?');
      params.push(options.isFeatured ? 1 : 0);
    }
    if (options?.brandSlug) {
      whereClauses.push('b.slug = ?');
      params.push(options.brandSlug);
    }
    if (options?.categorySlug) {
      whereClauses.push('c.slug = ?');
      params.push(options.categorySlug);
    }
    if (options?.search) {
      whereClauses.push('(p.name ILIKE ? OR p.short_description ILIKE ? OR p.sku ILIKE ?)');
      const term = `%${options.search}%`;
      params.push(term, term, term);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

    const countRow = await db.queryOne<{ total: string }>(
      `SELECT COUNT(DISTINCT p.id) as total FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       LEFT JOIN product_categories pc ON p.id = pc.product_id
       LEFT JOIN categories c ON pc.category_id = c.id
       ${whereSql}`,
      params
    );
    const total = parseInt(countRow?.total || '0');

    let querySql = `
      SELECT DISTINCT p.*, b.name as brand_name, b.slug as brand_slug, c.name as category_name, c.slug as category_slug
      FROM products p
      LEFT JOIN brands b ON p.brand_id = b.id
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      ${whereSql}
      ORDER BY p.is_featured DESC, p.id DESC
    `;

    const paginationParams = [...params];
    if (options?.limit) {
      querySql += ` LIMIT ?`;
      paginationParams.push(options.limit);
      if (options?.offset) {
        querySql += ` OFFSET ?`;
        paginationParams.push(options.offset);
      }
    }

    const products = await db.query<Product>(querySql, paginationParams);
    await attachImages(products);
    return { products, total };
  },

  async getFeatured(limit = 8): Promise<Product[]> {
    const featured = (await ProductRepo.getAll({ isFeatured: true, limit })).products;
    if (featured.length >= limit) return featured;

    // Fill with latest published products so the homepage always shows products
    const allRecent = (await ProductRepo.getAll({ limit, status: 'published' })).products;
    const combined = [...featured];
    for (const p of allRecent) {
      if (!combined.some(item => item.id === p.id)) {
        combined.push(p);
      }
      if (combined.length >= limit) break;
    }
    return combined;
  },

  async getByCategory(categoryId: number): Promise<Product[]> {
    const products = await db.query<Product>(
      `SELECT DISTINCT p.*, b.name as brand_name, b.slug as brand_slug, c.name as category_name, c.slug as category_slug
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       JOIN product_categories pc ON p.id = pc.product_id
       JOIN categories c ON pc.category_id = c.id
       WHERE (pc.category_id = ? OR pc.category_id IN (SELECT id FROM categories WHERE parent_id = ?)) 
         AND (p.status = 'published' OR p.status = 'active' OR p.status IS NULL OR p.status = '')
       ORDER BY p.is_featured DESC, p.id DESC`,
      [categoryId, categoryId]
    );
    return attachImages(products);
  },

  async getByBrand(brandId: number): Promise<Product[]> {
    const products = await db.query<Product>(
      `SELECT DISTINCT p.*, b.name as brand_name, b.slug as brand_slug, c.name as category_name, c.slug as category_slug
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       LEFT JOIN product_categories pc ON p.id = pc.product_id
       LEFT JOIN categories c ON pc.category_id = c.id
       WHERE p.brand_id = ? 
         AND (p.status = 'published' OR p.status = 'active' OR p.status IS NULL OR p.status = '')
       ORDER BY p.is_featured DESC, p.id DESC`,
      [brandId]
    );
    return attachImages(products);
  },

  async getBySlug(slug: string, publicOnly = true): Promise<Product | null> {
    const whereSql = publicOnly 
      ? "WHERE p.slug = ? AND (p.status = 'published' OR p.status = 'active' OR p.status IS NULL OR p.status = '')" 
      : "WHERE p.slug = ?";
    const p = await db.queryOne<Product>(
      `SELECT p.*, b.name as brand_name, b.slug as brand_slug, c.id as category_id, c.name as category_name, c.slug as category_slug
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       LEFT JOIN product_categories pc ON p.id = pc.product_id
       LEFT JOIN categories c ON pc.category_id = c.id
       ${whereSql}`,
      [slug]
    );
    if (p) await attachImages([p]);
    return p;
  },

  async getById(id: number): Promise<Product | null> {
    const p = await db.queryOne<Product>(
      `SELECT p.*, b.name as brand_name, b.slug as brand_slug, c.id as category_id, c.name as category_name, c.slug as category_slug
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       LEFT JOIN product_categories pc ON p.id = pc.product_id
       LEFT JOIN categories c ON pc.category_id = c.id
       WHERE p.id = ?`,
      [id]
    );
    if (p) await attachImages([p]);
    return p;
  },

  async getImages(productId: number) {
    return db.query<{ id: number; image_url: string; alt_text: string; sort_order: number }>(
      'SELECT id, image_url, alt_text, sort_order FROM product_images WHERE product_id = ? ORDER BY sort_order ASC',
      [productId]
    );
  },

  async getRelated(categoryId: number, excludeProductId: number, limit = 4): Promise<Product[]> {
    return db.query<Product>(
      `SELECT DISTINCT p.*, b.name as brand_name, c.name as category_name, c.slug as category_slug
       FROM products p
       LEFT JOIN brands b ON p.brand_id = b.id
       JOIN product_categories pc ON p.id = pc.product_id
       JOIN categories c ON pc.category_id = c.id
       WHERE pc.category_id = ? AND p.id != ? AND p.status = 'published'
       ORDER BY p.id DESC LIMIT ?`,
      [categoryId, excludeProductId, limit]
    );
  },

  async create(data: Partial<Product> & { category_id?: number; images?: Array<string | { url: string; alt?: string }> }) {
    const res = await db.execute(
      `INSERT INTO products (brand_id, name, slug, sku, price, original_price, unit, short_description, content, custom_badge, specifications, featured_image, seo_title, seo_description, is_featured, is_in_stock, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
      [data.brand_id || null, data.name, data.slug, data.sku || '', data.price || 0, data.original_price || 0, data.unit || 'Bao', data.short_description || '', data.content || '', data.custom_badge || '', data.specifications || '', data.featured_image || '', data.seo_title || data.name, data.seo_description || '', data.is_featured ? 1 : 0, data.is_in_stock ? 1 : 0, data.status || 'published']
    );
    const newId = res.insertId;
    if (data.category_id) {
      await db.execute('INSERT IGNORE INTO product_categories (product_id, category_id) VALUES (?, ?)', [newId, data.category_id]);
    }
    if (data.images?.length) {
      let idx = 0;
      for (const item of data.images) {
        const url = typeof item === 'string' ? item : item.url;
        const alt = (typeof item === 'object' && item.alt) ? item.alt : (data.name || '');
        if (url) {
          await db.execute('INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES (?, ?, ?, ?)', [newId, url, alt, idx++]);
        }
      }
    }
    return newId;
  },

  async update(id: number, data: Partial<Product> & { category_id?: number; images?: Array<string | { url: string; alt?: string }> }) {
    const fields: string[] = [];
    const params: any[] = [];

    if (data.brand_id !== undefined) { fields.push('brand_id = ?'); params.push(data.brand_id || null); }
    if (data.name !== undefined) { fields.push('name = ?'); params.push(data.name); }
    if (data.slug !== undefined) { fields.push('slug = ?'); params.push(data.slug); }
    if (data.sku !== undefined) { fields.push('sku = ?'); params.push(data.sku || ''); }
    if (data.price !== undefined) { fields.push('price = ?'); params.push(data.price || 0); }
    if (data.original_price !== undefined) { fields.push('original_price = ?'); params.push(data.original_price || 0); }
    if (data.unit !== undefined) { fields.push('unit = ?'); params.push(data.unit || 'Bao'); }
    if (data.short_description !== undefined) { fields.push('short_description = ?'); params.push(data.short_description || ''); }
    if (data.content !== undefined) { fields.push('content = ?'); params.push(data.content || ''); }
    if (data.custom_badge !== undefined) { fields.push('custom_badge = ?'); params.push(data.custom_badge || ''); }
    if (data.specifications !== undefined) { fields.push('specifications = ?'); params.push(data.specifications || ''); }
    if (data.featured_image !== undefined) { fields.push('featured_image = ?'); params.push(data.featured_image || ''); }
    if (data.seo_title !== undefined) { fields.push('seo_title = ?'); params.push(data.seo_title || data.name || ''); }
    if (data.seo_description !== undefined) { fields.push('seo_description = ?'); params.push(data.seo_description || ''); }
    if (data.is_featured !== undefined) { fields.push('is_featured = ?'); params.push(data.is_featured ? 1 : 0); }
    if (data.is_in_stock !== undefined) { fields.push('is_in_stock = ?'); params.push(data.is_in_stock ? 1 : 0); }
    if (data.status !== undefined) { fields.push('status = ?'); params.push(data.status || 'published'); }

    if (fields.length > 0) {
      fields.push('updated_at = NOW()');
      params.push(id);
      await db.execute(`UPDATE products SET ${fields.join(', ')} WHERE id = ?`, params);
    }
    if (data.category_id !== undefined) {
      await db.execute('DELETE FROM product_categories WHERE product_id = ?', [id]);
      if (data.category_id) {
        await db.execute('INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)', [id, data.category_id]);
      }
    }
    if (data.images !== undefined) {
      await db.execute('DELETE FROM product_images WHERE product_id = ?', [id]);
      let idx = 0;
      for (const item of data.images) {
        const url = typeof item === 'string' ? item : item.url;
        const alt = (typeof item === 'object' && item.alt) ? item.alt : (data.name || '');
        if (url) {
          await db.execute('INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES (?, ?, ?, ?)', [id, url, alt, idx++]);
        }
      }
    }
  },

  async delete(id: number) {
    return ProductRepo.softDelete(id);
  },

  async softDelete(id: number) {
    return db.execute("UPDATE products SET status = 'trash', updated_at = NOW() WHERE id = ?", [id]);
  },

  async restore(id: number) {
    return db.execute("UPDATE products SET status = 'published', updated_at = NOW() WHERE id = ?", [id]);
  },

  async hardDelete(id: number) {
    await db.execute('DELETE FROM product_images WHERE product_id = ?', [id]);
    await db.execute('DELETE FROM product_categories WHERE product_id = ?', [id]);
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  },

  async bulkUpdateStatus(ids: number[], status: string) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await db.execute('UPDATE products SET status = ?, updated_at = NOW() WHERE id = ?', [status, id]);
    }
  },

  async bulkDelete(ids: number[]) {
    return ProductRepo.bulkSoftDelete(ids);
  },

  async bulkSoftDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await ProductRepo.softDelete(id);
    }
  },

  async bulkRestore(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await ProductRepo.restore(id);
    }
  },

  async bulkHardDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await ProductRepo.hardDelete(id);
    }
  }
};

// ── Post Repo ─────────────────────────────────────────────────────────────────

export const PostRepo = {
  async getAll(options?: string | { status?: string; limit?: number; offset?: number; search?: string }): Promise<Post[]> {
    let status = 'published';
    let limit: number | undefined;
    let offset: number | undefined;
    let search: string | undefined;

    if (typeof options === 'string') {
      status = options;
    } else if (options) {
      status = options.status || 'published';
      limit = options.limit;
      offset = options.offset;
      search = options.search;
    }

    const whereClauses: string[] = [];
    const params: any[] = [];

    if (status === 'all') {
      whereClauses.push("p.status != 'trash'");
    } else if (status === 'all_with_trash') {
      // no status filter
    } else if (status) {
      whereClauses.push('p.status = ?');
      params.push(status);
    }

    if (search) {
      whereClauses.push('(p.title ILIKE ? OR p.summary ILIKE ? OR p.slug ILIKE ?)');
      const term = `%${search}%`;
      params.push(term, term, term);
    }

    const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

    let sql = `SELECT p.*, pc.name as category_name, pc.slug as category_slug, u.full_name as author_name
       FROM posts p
       LEFT JOIN post_category_rel pcr ON p.id = pcr.post_id
       LEFT JOIN post_categories pc ON pcr.category_id = pc.id
       LEFT JOIN users u ON p.author_id = u.id
       ${whereSql}
       ORDER BY (p.published_at IS NULL) ASC, p.published_at DESC, p.id DESC`;

    if (limit) { sql += ` LIMIT ?`; params.push(limit); }
    if (offset) { sql += ` OFFSET ?`; params.push(offset); }

    return db.query<Post>(sql, params);
  },

  async count(status = 'published'): Promise<number> {
    if (status === 'all') {
      const res = await db.queryOne<{ total: string | number }>(
        `SELECT COUNT(*) as total FROM posts WHERE status != 'trash'`
      );
      return res ? Number(res.total) : 0;
    }
    const res = await db.queryOne<{ total: string | number }>(
      `SELECT COUNT(*) as total FROM posts WHERE status = ?`,
      [status]
    );
    return res ? Number(res.total) : 0;
  },

  async getLatest(limit = 3): Promise<Post[]> {
    return db.query<Post>(
      `SELECT p.*, pc.name as category_name, pc.slug as category_slug, u.full_name as author_name
       FROM posts p
       LEFT JOIN post_category_rel pcr ON p.id = pcr.post_id
       LEFT JOIN post_categories pc ON pcr.category_id = pc.id
       LEFT JOIN users u ON p.author_id = u.id
       WHERE p.status = 'published'
       ORDER BY p.published_at DESC NULLS LAST, p.id DESC LIMIT ?`,
      [limit]
    );
  },

  async getBySlug(slug: string, publicOnly = true): Promise<Post | null> {
    const whereSql = publicOnly ? "WHERE p.slug = ? AND p.status = 'published'" : "WHERE p.slug = ?";
    return db.queryOne<Post>(
      `SELECT p.*, pc.name as category_name, pc.slug as category_slug, u.full_name as author_name
       FROM posts p
       LEFT JOIN post_category_rel pcr ON p.id = pcr.post_id
       LEFT JOIN post_categories pc ON pcr.category_id = pc.id
       LEFT JOIN users u ON p.author_id = u.id
       ${whereSql}`,
      [slug]
    );
  },

  async getById(id: number): Promise<Post | null> {
    return db.queryOne<Post>('SELECT * FROM posts WHERE id = ?', [id]);
  },

  async create(data: Partial<Post>) {
    const res = await db.execute(
      `INSERT INTO posts (author_id, title, slug, summary, content, featured_image, seo_title, seo_description, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
      [data.author_id || 1, data.title, data.slug, data.summary || '', data.content || '', data.featured_image || '', data.seo_title || data.title, data.seo_description || '', data.status || 'published']
    );
    const newId = res.insertId;
    await db.execute('INSERT IGNORE INTO post_category_rel (post_id, category_id) VALUES (?, 1)', [newId]);
    return newId;
  },

  async update(id: number, data: Partial<Post>) {
    const fields: string[] = [];
    const params: any[] = [];

    if (data.title !== undefined) { fields.push('title = ?'); params.push(data.title); }
    if (data.slug !== undefined) { fields.push('slug = ?'); params.push(data.slug); }
    if (data.summary !== undefined) { fields.push('summary = ?'); params.push(data.summary || ''); }
    if (data.content !== undefined) { fields.push('content = ?'); params.push(data.content || ''); }
    if (data.featured_image !== undefined) { fields.push('featured_image = ?'); params.push(data.featured_image || ''); }
    if (data.seo_title !== undefined) { fields.push('seo_title = ?'); params.push(data.seo_title || data.title || ''); }
    if (data.seo_description !== undefined) { fields.push('seo_description = ?'); params.push(data.seo_description || ''); }
    if (data.status !== undefined) { fields.push('status = ?'); params.push(data.status || 'published'); }
    if (data.author_id !== undefined) { fields.push('author_id = ?'); params.push(data.author_id); }
    if (data.category_slug !== undefined) { fields.push('category_slug = ?'); params.push(data.category_slug || ''); }

    if (fields.length > 0) {
      params.push(id);
      await db.execute(`UPDATE posts SET ${fields.join(', ')} WHERE id = ?`, params);
    }

    if (data.category_slug) {
      const cat = await db.queryOne<{ id: number }>('SELECT id FROM post_categories WHERE slug = ?', [data.category_slug]);
      if (cat) {
        await db.execute('DELETE FROM post_category_rel WHERE post_id = ?', [id]);
        await db.execute('INSERT INTO post_category_rel (post_id, category_id) VALUES (?, ?)', [id, cat.id]);
      }
    }
  },

  async delete(id: number) {
    return PostRepo.softDelete(id);
  },

  async softDelete(id: number) {
    return db.execute("UPDATE posts SET status = 'trash' WHERE id = ?", [id]);
  },

  async restore(id: number) {
    return db.execute("UPDATE posts SET status = 'published' WHERE id = ?", [id]);
  },

  async hardDelete(id: number) {
    await db.execute('DELETE FROM post_category_rel WHERE post_id = ?', [id]);
    return db.execute('DELETE FROM posts WHERE id = ?', [id]);
  },

  async bulkUpdateStatus(ids: number[], status: string) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await db.execute('UPDATE posts SET status = ? WHERE id = ?', [status, id]);
    }
  },

  async bulkSoftDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await PostRepo.softDelete(id);
    }
  },

  async bulkRestore(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await PostRepo.restore(id);
    }
  },

  async bulkHardDelete(ids: number[]) {
    if (!ids || ids.length === 0) return;
    for (const id of ids) {
      await PostRepo.hardDelete(id);
    }
  }
};

// ── Inquiry Repo ──────────────────────────────────────────────────────────────

export const InquiryRepo = {
  async getAll(): Promise<Inquiry[]> {
    return db.query<Inquiry>('SELECT * FROM inquiries ORDER BY id DESC');
  },

  async create(data: { customer_name: string; customer_phone: string; customer_email?: string; address?: string; notes?: string; product_name?: string; }) {
    return db.execute(
      `INSERT INTO inquiries (customer_name, customer_phone, customer_email, address, notes, product_name, status)
       VALUES (?, ?, ?, ?, ?, ?, 'new')`,
      [data.customer_name, data.customer_phone, data.customer_email || '', data.address || '', data.notes || '', data.product_name || '']
    );
  },

  async updateStatus(id: number, status: string) {
    return db.execute('UPDATE inquiries SET status = ? WHERE id = ?', [status, id]);
  },

  async delete(id: number) {
    return db.execute('DELETE FROM inquiries WHERE id = ?', [id]);
  }
};

// ── Redirect Repo ─────────────────────────────────────────────────────────────

export const RedirectRepo = {
  async find(path: string): Promise<{ new_path: string; status_code: number } | null> {
    const normalized = path.endsWith('/') ? path : path + '/';
    return db.queryOne<{ new_path: string; status_code: number }>(
      'SELECT new_path, status_code FROM redirects WHERE old_path = ? OR old_path = ?',
      [path, normalized]
    );
  }
};

// ── Auth Repo ─────────────────────────────────────────────────────────────────

export const AuthRepo = {
  async authenticate(usernameOrEmail: string, pass: string): Promise<{ id: number; username: string; full_name: string; role: string } | null> {
    const user = await db.queryOne<{ id: number; username: string; password_hash: string; full_name: string; role: string }>(
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [usernameOrEmail, usernameOrEmail]
    );
    if (!user) return null;
    const isValid = await bcrypt.compare(pass, user.password_hash);
    if (!isValid) return null;
    return { id: user.id, username: user.username, full_name: user.full_name, role: user.role };
  }
};
