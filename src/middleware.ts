import { defineMiddleware } from 'astro/middleware';
import { RedirectRepo } from './server/db/repo.js';
import { verifyAdminSession } from './server/auth.js';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 1. Redirect legacy WP homepage aliases directly to '/'
  if (pathname === '/trang-chu' || pathname === '/trang-chu/' || pathname === '/home' || pathname === '/home/' || pathname === '/index.html' || pathname === '/index.php') {
    return context.redirect('/', 301);
  }

  // 2. Check SEO 301 Redirects
  if (pathname !== '/' && !pathname.startsWith('/admin') && !pathname.startsWith('/_astro') && !pathname.includes('.')) {
    try {
      const redirect = (await RedirectRepo.find(pathname)) || (await RedirectRepo.find(decodeURIComponent(pathname)));
      if (redirect && redirect.new_path) {
        return context.redirect(redirect.new_path, ([301, 302, 303, 307, 308].includes(redirect.status_code) ? redirect.status_code : 301) as 301 | 302 | 303 | 307 | 308);
      }
    } catch (e) {
      // Ignore redirect lookup errors if DB is unreachable
    }
  }

  // 3. Admin Route & Admin API Protection
  const isAdminPage = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login') && !pathname.startsWith('/admin/api/login');
  const isAdminApi = pathname.startsWith('/api/admin') || pathname === '/api/upload' || pathname === '/api/media-library';

  if (isAdminPage || isAdminApi) {
    const adminSession = context.cookies.get('admin_session')?.value;
    if (!verifyAdminSession(adminSession)) {
      if (isAdminApi) {
        return new Response(JSON.stringify({ success: false, error: 'Unauthorized. Yêu cầu đăng nhập quản trị.' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return context.redirect('/admin/login');
    }
  }

  const response = await next();

  // 3. Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
});
