import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { saveMedia, listMediaFull } from '../../server/db/media.js';

export const prerender = false;

const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']);
const maxBytes = 10 * 1024 * 1024;

export const GET: APIRoute = async () => {
  try {
    const images: Array<{ url: string; name: string; alt?: string }> = [];
    const publicRoot = path.join(process.cwd(), 'public');
    const dirs = [
      path.join(process.cwd(), 'uploads'),
      path.join(publicRoot, 'images', 'uploads'),
      path.join(publicRoot, 'images', 'danh-muc'),
      path.join(publicRoot, 'images')
    ];

    for (const dir of dirs) {
      if (!fs.existsSync(dir)) continue;
      for (const file of fs.readdirSync(dir)) {
        if (!['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(path.extname(file).toLowerCase())) continue;
        const prefix = dir === dirs[0] ? '/images/uploads' : dir.replace(publicRoot, '').replace(/\\/g, '/');
        const url = `${prefix}/${file}`.replace(/\/+/g, '/');
        images.push({
          url,
          name: file,
          alt: file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
        });
      }
    }

    const dbMedia = await listMediaFull({ limit: 1000 });
    for (const item of dbMedia.items) {
      images.unshift({
        url: item.url,
        name: item.filename,
        alt: item.alt_text
      });
    }

    return Response.json({ success: true, images });
  } catch (error) {
    console.error('[Media upload GET]', error);
    return Response.json({ error: 'Could not load media list' }, { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files').filter((item): item is File => item instanceof File && item.size > 0);
    const single = formData.get('file');
    if (!files.length && single instanceof File && single.size > 0) files.push(single);
    if (!files.length) return Response.json({ error: 'No image selected' }, { status: 400 });

    const urls: string[] = [];
    for (const file of files) {
      if (!allowedTypes.has(file.type) || file.size > maxBytes) {
        return Response.json({ error: 'Chỉ chấp nhận ảnh JPG, PNG, WebP hoặc GIF tối đa 10 MB' }, { status: 400 });
      }
      const data = Buffer.from(await file.arrayBuffer());
      const saved = await saveMedia(file.name.slice(0, 255), file.type, data);
      urls.push(saved.url);
    }
    return Response.json({ success: true, urls, url: urls[0] });
  } catch (error) {
    console.error('[Media upload]', error);
    return Response.json({ error: 'Could not save image to MySQL' }, { status: 500 });
  }
};

