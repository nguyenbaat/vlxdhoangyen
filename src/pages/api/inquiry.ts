import type { APIRoute } from 'astro';
import { InquiryRepo } from '../../server/db/repo.js';

export const prerender = false;

// In-memory sliding window rate limiter: Max 5 inquiries per IP per 60 seconds
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up stale entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 10 * 60 * 1000);

function checkRateLimit(ip: string, limit = 5, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) {
    return false;
  }
  entry.count += 1;
  return true;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. Get Client IP for Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfIp = request.headers.get('cf-connecting-ip');
    const clientIp = cfIp || (forwarded ? forwarded.split(',')[0].trim() : realIp) || clientAddress || 'unknown-ip';

    if (!checkRateLimit(clientIp, 5, 60 * 1000)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Bạn đã gửi yêu cầu quá thường xuyên. Vui lòng đợi 1 phút trước khi thử lại.' 
        }), 
        {
          status: 429,
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': '60'
          }
        }
      );
    }

    let customer_name = '';
    let customer_phone = '';
    let customer_email = '';
    let address = '';
    let notes = '';
    let product_name = '';
    let honeypot = '';

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await request.json();
      customer_name = (data.customer_name || '').trim();
      customer_phone = (data.customer_phone || '').trim();
      customer_email = (data.customer_email || '').trim();
      address = (data.address || '').trim();
      notes = (data.notes || '').trim();
      product_name = (data.product_name || '').trim();
      honeypot = (data.company_website || data.website || data.honeypot || '').trim();
    } else {
      const formData = await request.formData();
      customer_name = formData.get('customer_name')?.toString().trim() || '';
      customer_phone = formData.get('customer_phone')?.toString().trim() || '';
      customer_email = formData.get('customer_email')?.toString().trim() || '';
      address = formData.get('address')?.toString().trim() || '';
      notes = formData.get('notes')?.toString().trim() || '';
      product_name = formData.get('product_name')?.toString().trim() || '';
      honeypot = formData.get('company_website')?.toString().trim() || formData.get('website')?.toString().trim() || '';
    }

    // 2. Anti-Spam Honeypot: If bot filled hidden field, return fake success without saving to DB
    if (honeypot) {
      console.warn(`[AntiSpam] Bot inquiry blocked from IP ${clientIp}. Honeypot value: "${honeypot}"`);
      return new Response(JSON.stringify({ success: true, message: 'Yêu cầu báo giá đã được tiếp nhận thành công.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Validation & Length Checks
    if (!customer_name || !customer_phone) {
      return new Response(JSON.stringify({ success: false, error: 'Vui lòng cung cấp họ tên và số điện thoại liên hệ.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (customer_name.length > 200 || customer_phone.length > 30 || notes.length > 2500) {
      return new Response(JSON.stringify({ success: false, error: 'Dữ liệu nhập quá dài, vui lòng kiểm tra lại.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate phone number format (Vietnamese phone regex)
    const cleanPhone = customer_phone.replace(/[\s.-]/g, '');
    const phoneRegex = /^(0|\+84)(3[2-9]|5[25689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return new Response(JSON.stringify({ success: false, error: 'Số điện thoại không đúng định dạng. Vui lòng nhập số điện thoại hợp lệ (10 số).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Save to Database
    await InquiryRepo.create({
      customer_name: customer_name.slice(0, 255),
      customer_phone: cleanPhone.slice(0, 30),
      customer_email: customer_email.slice(0, 255),
      address: address.slice(0, 500),
      notes: notes.slice(0, 2000),
      product_name: product_name.slice(0, 255)
    });

    return new Response(JSON.stringify({ success: true, message: 'Yêu cầu báo giá đã được tiếp nhận thành công.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('[Inquiry API Error]', error);
    return new Response(JSON.stringify({ success: false, error: 'Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại sau.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
