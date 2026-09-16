import type { APIRoute } from 'astro';
import { ProductRepo } from '../server/db/repo.js';

function escapeXml(unsafe: string): string {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const siteUrl = 'https://vlxdhoangyen.com';
  const today = new Date().toISOString().split('T')[0];
  const { products } = await ProductRepo.getAll({ limit: 1000 });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  for (const prod of products) {
    let lastmod = today;
    if (prod.updated_at) {
      try {
        lastmod = new Date(prod.updated_at).toISOString().split('T')[0];
      } catch {}
    } else if (prod.created_at) {
      try {
        lastmod = new Date(prod.created_at).toISOString().split('T')[0];
      } catch {}
    }

    xml += `  <url>
    <loc>${siteUrl}/${prod.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
${prod.featured_image ? `    <image:image>
      <image:loc>${prod.featured_image.startsWith('http') ? prod.featured_image : `${siteUrl}${prod.featured_image.startsWith('/') ? '' : '/'}${prod.featured_image}`}</image:loc>
      <image:title>${escapeXml(prod.name)}</image:title>
    </image:image>
` : ''}  </url>
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
