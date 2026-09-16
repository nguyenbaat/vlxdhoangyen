import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.join(__dirname, 'dist', 'client');
const uploadsDir = path.join(__dirname, 'uploads');

process.on('uncaughtException', (err) => {
  console.error('[Uncaught Exception]:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('[Unhandled Rejection]:', reason);
});

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  try {
    const rawUrl = req.url || '/';
    const parsedPath = decodeURIComponent(rawUrl.split('?')[0]);
    const isUpload = parsedPath.startsWith('/images/uploads/');
    const rootDir = isUpload ? uploadsDir : clientDir;
    const relativePath = isUpload ? parsedPath.slice('/images/uploads/'.length) : parsedPath.slice(1);
    const filePath = path.resolve(rootDir, relativePath);

    if (filePath.startsWith(rootDir + path.sep) && fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable');
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
        return;
      }
    }
  } catch (e) {
    // Ignore static error
  }

  // Pass to Astro SSR handler
  try {
    ssrHandler(req, res);
  } catch (err) {
    console.error('[SSR Handler Error]:', err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.end('Server Error');
    }
  }
});

// Phusion Passenger on cPanel / CloudLinux
if (typeof(globalThis.PhusionPassenger) !== 'undefined' || typeof(PhusionPassenger) !== 'undefined') {
  server.listen('passenger');
  console.log('[VLXD Hoàng Yến] Server listening via Phusion Passenger');
} else {
  const port = process.env.PORT || 4321;
  server.listen(port, () => {
    console.log(`[VLXD Hoàng Yến] Server listening on port ${port}`);
  });
}
