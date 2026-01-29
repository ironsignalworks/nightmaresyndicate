import { cp } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const source = join(distDir, 'index.html');
const target = join(distDir, '404.html');

try {
  await cp(source, target);
  console.log('Created dist/404.html for GitHub Pages fallback.');
} catch (error) {
  console.error('Failed to create dist/404.html:', error);
  process.exitCode = 1;
}
