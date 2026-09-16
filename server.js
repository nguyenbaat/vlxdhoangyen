// Server startup entry for Hostinger / Node.js
process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || '4321';

import('./dist/server/entry.mjs')
  .then(() => {
    console.log(`[VLXD Hoàng Yến] Server successfully initialized on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.error('[VLXD Hoàng Yến] Failed to initialize server:', err);
    process.exit(1);
  });
