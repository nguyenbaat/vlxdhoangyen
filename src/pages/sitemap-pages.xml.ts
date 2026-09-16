import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://vlxdhoangyen.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'san-pham/', priority: '0.9', changefreq: 'daily' },
    { path: 'tin-tuc/', priority: '0.8', changefreq: 'daily' },
    { path: 'gioi-thieu/', priority: '0.8', changefreq: 'monthly' },
    { path: 'lien-he/', priority: '0.8', changefreq: 'monthly' },
    { path: 'vlxd-quang-tri/', priority: '0.8', changefreq: 'weekly' },
    { path: 'cau-hoi-thuong-gap/', priority: '0.6', changefreq: 'monthly' },
    { path: 'chinh-sach-van-chuyen/', priority: '0.6', changefreq: 'monthly' },
    { path: 'chinh-sach-thanh-toan/', priority: '0.6', changefreq: 'monthly' },
    { path: 'chinh-sach-doi-tra/', priority: '0.6', changefreq: 'monthly' },
    { path: 'chinh-sach-bao-mat/', priority: '0.5', changefreq: 'monthly' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const page of staticPages) {
    xml += `  <url>
    <loc>${siteUrl}/${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
