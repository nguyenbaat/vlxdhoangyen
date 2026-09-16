import type { APIRoute } from 'astro';
import { PostRepo } from '../server/db/repo.js';

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
  const posts = await PostRepo.getAll('published');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  for (const post of posts) {
    let lastmod = today;
    if (post.published_at) {
      try {
        lastmod = new Date(post.published_at).toISOString().split('T')[0];
      } catch {}
    } else if (post.created_at) {
      try {
        lastmod = new Date(post.created_at).toISOString().split('T')[0];
      } catch {}
    }

    xml += `  <url>
    <loc>${siteUrl}/tin-tuc/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
${post.featured_image ? `    <image:image>
      <image:loc>${post.featured_image.startsWith('http') ? post.featured_image : `${siteUrl}${post.featured_image.startsWith('/') ? '' : '/'}${post.featured_image}`}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
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
