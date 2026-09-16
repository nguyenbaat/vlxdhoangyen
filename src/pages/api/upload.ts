import type { APIRoute } from 'astro';
import { saveMedia } from '../../server/db/media.js';

export const prerender = false;

const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const maxBytes = 5 * 1024 * 1024;

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
        return Response.json({ error: 'Only JPG, PNG, WebP or GIF up to 5 MB is allowed' }, { status: 400 });
      }
      const data = Buffer.from(await file.arrayBuffer());
      const id = await saveMedia(file.name.slice(0, 255), file.type, data);
      urls.push(`/media/${id}`);
    }
    return Response.json({ success: true, urls, url: urls[0] });
  } catch (error) {
    console.error('[Media upload]', error);
    return Response.json({ error: 'Could not save image to MySQL' }, { status: 500 });
  }
};
