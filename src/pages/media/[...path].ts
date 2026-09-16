import type { APIRoute } from 'astro';
import { getMediaByParam } from '../../server/db/media.js';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const rawParam = params.path || '';
  if (!rawParam) return new Response('Not found', { status: 404 });

  const decoded = decodeURIComponent(rawParam).trim();
  const basename = path.basename(decoded);

  try {
    // 1. Check MySQL DB by filename or ID
    const image = await getMediaByParam(basename);
    if (image) {
      return new Response(new Uint8Array(image.data), {
        headers: {
          'Content-Type': image.mime_type || 'image/jpeg',
          'Content-Length': String(image.data.length),
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }

    // 2. Fallback to static directories if file was uploaded to disk
    const searchDirs = [
      path.join(process.cwd(), 'uploads'),
      path.join(process.cwd(), 'public', 'images', 'uploads'),
      path.join(process.cwd(), 'public', 'images', 'danh-muc'),
      path.join(process.cwd(), 'public', 'images'),
      path.join(process.cwd(), 'public')
    ];

    for (const dir of searchDirs) {
      const filePath = path.join(dir, basename);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mime = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : (ext === '.gif' ? 'image/gif' : (ext === '.svg' ? 'image/svg+xml' : 'image/jpeg')));
        const data = fs.readFileSync(filePath);
        return new Response(new Uint8Array(data), {
          headers: {
            'Content-Type': mime,
            'Content-Length': String(data.length),
            'Cache-Control': 'public, max-age=86400',
            'X-Content-Type-Options': 'nosniff'
          }
        });
      }
    }

    return new Response('Image not found', { status: 404 });
  } catch (error) {
    console.error('[Media Read Route Error]', error);
    return new Response('Image unavailable', { status: 503 });
  }
};
