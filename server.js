// Startup entry for Hostinger / Node.js
process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || '4321';

await import('./dist/server/entry.mjs');
console.log(`[VLXD Hoàng Yến] Server successfully running on port ${process.env.PORT}`);
