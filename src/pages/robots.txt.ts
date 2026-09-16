import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const robots = `# robots.txt — Siêu Thị VLXD Hoàng Yến (vlxdhoangyen.com)
User-agent: *
Allow: /

# Lưu ý: CỐ Ý cho phép tài nguyên render — Googlebot CẦN tải để đọc và chấm điểm trang
Allow: /css/
Allow: /images/
Allow: /favicon.png
Allow: /logo.png
Allow: /llms.txt

# Khu quản trị / Backend / API endpoints (Bảo vệ dữ liệu & tránh bot spam cào API)
Disallow: /admin/
Disallow: /admin
Disallow: /api/

# URL biến thể tham số (đã có canonical gộp về URL chuẩn) → tránh trùng lặp nội dung & tiết kiệm crawl budget
Disallow: /*?danh-muc=
Disallow: /*?thuong-hieu=
Disallow: /*?keyword=
Disallow: /*?q=
Disallow: /*?sort=
Disallow: /*?utm_
Disallow: /*?fbclid=
Disallow: /*?gclid=

# AI / LLM crawlers — CHO PHÉP TƯỜNG MINH (Tối ưu GEO / AI Search: ChatGPT, Perplexity, Gemini, Claude...)
# Dữ liệu chuẩn hóa doanh nghiệp dành cho AI: https://vlxdhoangyen.com/llms.txt
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: anthropic-ai
User-agent: Claude-Web
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Amazonbot
User-agent: Meta-ExternalAgent
User-agent: Cohere-ai
Allow: /
Disallow: /admin/
Disallow: /admin
Disallow: /api/

Sitemap: https://vlxdhoangyen.com/sitemap.xml
Sitemap: https://vlxdhoangyen.com/sitemap-pages.xml
Sitemap: https://vlxdhoangyen.com/sitemap-categories.xml
Sitemap: https://vlxdhoangyen.com/sitemap-products.xml
Sitemap: https://vlxdhoangyen.com/sitemap-brands.xml
Sitemap: https://vlxdhoangyen.com/sitemap-blog.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
