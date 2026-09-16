import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { listMedia } from '../../server/db/media.js';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const images = new Set<string>();
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
        images.add(`${prefix}/${file}`.replace(/\/+/g, '/'));
      }
    }

    for (const item of await listMedia()) images.add(`/media/${item.id}`);
    return Response.json({ success: true, images: [...images] });
  } catch (error) {
    console.error('[Media library]', error);
    return Response.json({ error: 'Could not load media library' }, { status: 500 });
  }
};
