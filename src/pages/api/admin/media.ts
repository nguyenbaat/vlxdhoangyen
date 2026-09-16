import type { APIRoute } from 'astro';
import { saveMedia, updateMedia, deleteMedia, getMediaMeta, listMediaFull } from '../../../server/db/media.js';

export const prerender = false;

const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']);
const maxBytes = 10 * 1024 * 1024; // 10MB

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('q') || '';
    const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
    const limit = Math.min(100, Math.max(10, Number(url.searchParams.get('limit')) || 40));
    const offset = (page - 1) * limit;

    const data = await listMediaFull({ search, limit, offset });
    return Response.json({ success: true, ...data, page, limit });
  } catch (err: any) {
    console.error('[API Admin Media GET]', err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const action = formData.get('action')?.toString();

    // 1. UPDATE MEDIA
    if (action === 'update') {
      const id = Number(formData.get('id'));
      if (!id) return Response.json({ success: false, error: 'Thiếu ID hình ảnh' }, { status: 400 });

      const filename = formData.get('filename')?.toString().trim();
      const alt_text = formData.get('alt_text')?.toString().trim();
      const replaceFile = formData.get('file');

      const updates: {
        filename?: string;
        alt_text?: string;
        mime_type?: string;
        file_size?: number;
        data?: Buffer;
      } = {};

      if (filename) updates.filename = filename;
      if (alt_text !== undefined) updates.alt_text = alt_text;

      if (replaceFile instanceof File && replaceFile.size > 0) {
        if (!allowedTypes.has(replaceFile.type) || replaceFile.size > maxBytes) {
          return Response.json({ success: false, error: 'File ảnh không hợp lệ (Tối đa 10MB, định dạng JPG/PNG/WebP/GIF/SVG)' }, { status: 400 });
        }
        updates.data = Buffer.from(await replaceFile.arrayBuffer());
        updates.mime_type = replaceFile.type;
        updates.file_size = replaceFile.size;
        if (!filename) updates.filename = replaceFile.name;
      }

      await updateMedia(id, updates);
      const updatedItem = await getMediaMeta(id);

      return Response.json({ success: true, message: 'Đã cập nhật hình ảnh thành công!', item: updatedItem });
    }

    // 2. DELETE MEDIA
    if (action === 'delete') {
      const id = Number(formData.get('id'));
      if (!id) return Response.json({ success: false, error: 'Thiếu ID hình ảnh' }, { status: 400 });

      await deleteMedia(id);
      return Response.json({ success: true, message: 'Đã xóa hình ảnh khỏi hệ thống MySQL!' });
    }

    // 3. UPLOAD NEW MEDIA WITH ALT
    if (action === 'upload') {
      const files = formData.getAll('files').filter((item): item is File => item instanceof File && item.size > 0);
      const single = formData.get('file');
      if (!files.length && single instanceof File && single.size > 0) files.push(single);
      if (!files.length) return Response.json({ success: false, error: 'Chưa chọn file hình ảnh' }, { status: 400 });

      const defaultAlt = formData.get('alt_text')?.toString().trim() || '';
      const customFilename = formData.get('filename')?.toString().trim() || '';

      const createdItems = [];
      for (const file of files) {
        if (!allowedTypes.has(file.type) || file.size > maxBytes) {
          return Response.json({ success: false, error: `File ${file.name} không hợp lệ (Tối đa 10MB)` }, { status: 400 });
        }
        const fname = (files.length === 1 && customFilename) ? customFilename : file.name.slice(0, 255);
        const data = Buffer.from(await file.arrayBuffer());
        const id = await saveMedia(fname, file.type, data, defaultAlt);
        createdItems.push({ id, url: `/media/${id}`, filename: fname, alt_text: defaultAlt });
      }

      return Response.json({ success: true, message: `Đã tải lên ${createdItems.length} hình ảnh thành công!`, items: createdItems });
    }

    return Response.json({ success: false, error: 'Hành động không hợp lệ' }, { status: 400 });
  } catch (err: any) {
    console.error('[API Admin Media POST]', err);
    return Response.json({ success: false, error: err.message || 'Lỗi xử lý hình ảnh' }, { status: 500 });
  }
};
