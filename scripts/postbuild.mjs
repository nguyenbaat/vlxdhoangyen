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

  // Copy .htaccess to dist/ and dist/client/
  const htaccessSource = path.join(rootDir, 'public', '.htaccess');
  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, path.join(distDir, '.htaccess'));
    const distClientDir = path.join(distDir, 'client');
    if (fs.existsSync(distClientDir)) {
      fs.copyFileSync(htaccessSource, path.join(distClientDir, '.htaccess'));
    }
  }

  console.log('[Postbuild] Created dist entrypoint fallbacks & copied .htaccess.');
}
