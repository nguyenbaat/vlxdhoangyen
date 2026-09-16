import type { APIRoute } from 'astro';
import { BrandRepo } from '../server/db/repo.js';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://vlxdhoangyen.com';
  const today = new Date().toISOString().split('T')[0];
  const brands = await BrandRepo.getAll();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const b of brands) {
    xml += `  <url>
    <loc>${siteUrl}/san-pham/${b.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
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
