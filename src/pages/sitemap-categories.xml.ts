import type { APIRoute } from 'astro';
import { CategoryRepo } from '../server/db/repo.js';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://vlxdhoangyen.com';
  const today = new Date().toISOString().split('T')[0];
  const categories = await CategoryRepo.getAll(true);

  const catMap = new Map(categories.map(c => [c.id, c]));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const c of categories) {
    let path = `${c.slug}/`;
    if (c.parent_id && catMap.has(c.parent_id)) {
      const parent = catMap.get(c.parent_id)!;
      path = `${parent.slug}/${c.slug}/`;
    }

    xml += `  <url>
    <loc>${siteUrl}/${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${c.parent_id ? '0.8' : '0.9'}</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
