import type { APIRoute } from 'astro';
import { InquiryRepo } from '../../server/db/repo.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    let customer_name = '';
    let customer_phone = '';
    let customer_email = '';
    let address = '';
    let notes = '';
    let product_name = '';

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await request.json();
      customer_name = (data.customer_name || '').trim();
      customer_phone = (data.customer_phone || '').trim();
      customer_email = (data.customer_email || '').trim();
      address = (data.address || '').trim();
      notes = (data.notes || '').trim();
      product_name = (data.product_name || '').trim();
    } else {
      const formData = await request.formData();
      customer_name = formData.get('customer_name')?.toString().trim() || '';
      customer_phone = formData.get('customer_phone')?.toString().trim() || '';
      customer_email = formData.get('customer_email')?.toString().trim() || '';
      address = formData.get('address')?.toString().trim() || '';
      notes = formData.get('notes')?.toString().trim() || '';
      product_name = formData.get('product_name')?.toString().trim() || '';
    }

    if (!customer_name || !customer_phone) {
      return new Response(JSON.stringify({ success: false, message: 'Vui lòng cung cấp tên và số điện thoại.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await InquiryRepo.create({
      customer_name,
      customer_phone,
      customer_email,
      address,
      notes,
      product_name
    });

    return new Response(JSON.stringify({ success: true, message: 'Yêu cầu báo giá đã được tiếp nhận thành công.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
