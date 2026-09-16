import type { APIRoute } from 'astro';
import { getMedia } from '../../server/db/media.js';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  if (!Number.isSafeInteger(id) || id < 1) return new Response('Not found', { status: 404 });
  try {
    const image = await getMedia(id);
    if (!image) return new Response('Not found', { status: 404 });
    return new Response(new Uint8Array(image.data), {
      headers: {
        'Content-Type': image.mime_type,
        'Content-Length': String(image.data.length),
        'Cache-Control': 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  } catch (error) {
    console.error('[Media read]', error);
    return new Response('Image unavailable', { status: 503 });
  }
};
