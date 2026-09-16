import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (fs.existsSync(distDir)) {
  // Create launcher inside dist for hosting environments whose working directory is dist/
  const distLauncher = `import './server/entry.mjs';\n`;
  fs.writeFileSync(path.join(distDir, 'index.js'), distLauncher, 'utf8');
  fs.writeFileSync(path.join(distDir, 'server.js'), distLauncher, 'utf8');
  fs.writeFileSync(path.join(distDir, 'entry.mjs'), distLauncher, 'utf8');

  console.log('[Postbuild] Created dist entrypoint fallbacks (dist/index.js, dist/server.js, dist/entry.mjs).');
}
