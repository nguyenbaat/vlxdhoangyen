import type { APIRoute } from 'astro';
import { db } from '../../../server/db/index.js';
import { SettingsRepo } from '../../../server/db/repo.js';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const adminSession = cookies.get('admin_session')?.value;
    if (!adminSession) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized. Yêu cầu đăng nhập quản trị.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await request.json();
    const { type, id, seo_title, seo_description, h1, name } = data;

    if (!type || id === undefined) {
      return new Response(JSON.stringify({ success: false, error: 'Thiếu thông tin loại hoặc ID đối tượng.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const title = (seo_title || '').trim();
    const desc = (seo_description || '').trim();
    const customH1 = (h1 || name || '').trim();

    if (type === 'category') {
      const catId = Number(id);
      if (customH1) {
        await db.execute(
          'UPDATE categories SET seo_title = ?, seo_description = ?, h1 = ? WHERE id = ?',
          [title, desc, customH1, catId]
        );
      } else {
        await db.execute(
          'UPDATE categories SET seo_title = ?, seo_description = ? WHERE id = ?',
          [title, desc, catId]
        );
      }
    } else if (type === 'brand') {
      const brandId = Number(id);
      await db.execute(
        'UPDATE brands SET seo_title = ?, seo_description = ? WHERE id = ?',
        [title, desc, brandId]
      );
    } else if (type === 'product') {
      const prodId = Number(id);
      if (customH1) {
        await db.execute(
          'UPDATE products SET name = ?, seo_title = ?, seo_description = ?, updated_at = NOW() WHERE id = ?',
          [customH1, title, desc, prodId]
        );
      } else {
        await db.execute(
          'UPDATE products SET seo_title = ?, seo_description = ?, updated_at = NOW() WHERE id = ?',
          [title, desc, prodId]
        );
      }
    } else if (type === 'post') {
      const postId = Number(id);
      if (customH1) {
        await db.execute(
          'UPDATE posts SET title = ?, seo_title = ?, seo_description = ? WHERE id = ?',
          [customH1, title, desc, postId]
        );
      } else {
        await db.execute(
          'UPDATE posts SET seo_title = ?, seo_description = ? WHERE id = ?',
          [title, desc, postId]
        );
      }
    } else if (type === 'setting') {
      if (id === 'default' || id === 'home') {
        if (title) await SettingsRepo.update('default_seo_title', title);
        if (desc) await SettingsRepo.update('default_seo_desc', desc);
      } else {
        await SettingsRepo.update(`seo_${id}`, { seo_title: title, seo_description: desc });
      }
    } else {
      return new Response(JSON.stringify({ success: false, error: 'Loại đối tượng không hợp lệ.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Cập nhật tiêu đề & meta SEO thành công!',
      data: { type, id, seo_title: title, seo_description: desc }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('Error updating SEO in quick-seo API:', err);
    return new Response(JSON.stringify({ success: false, error: err.message || 'Lỗi server khi lưu SEO.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
