import { createHmac, timingSafeEqual } from 'node:crypto';

const secret = process.env.JWT_SECRET;

export function createAdminSession(user: { id: number; username: string; role: string }): string {
  if (!secret) throw new Error('JWT_SECRET is required');
  const payload = Buffer.from(JSON.stringify({ ...user, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return payload + '.' + signature;
}

export function verifyAdminSession(value: string | undefined): boolean {
  if (!secret || !value) return false;
  const [payload, signature, extra] = value.split('.');
  if (!payload || !signature || extra) return false;
  const expected = createHmac('sha256', secret).update(payload).digest();
  let actual: Buffer;
  try { actual = Buffer.from(signature, 'base64url'); } catch { return false; }
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return session.role === 'admin' && Number.isInteger(session.id) && session.exp > Date.now();
  } catch { return false; }
}
