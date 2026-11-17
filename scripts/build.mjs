import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const rankingDist = path.join(dist, 'ranking');

const logo = path.join(root, 'public', 'logo.jpg');

async function writeLogos(dir) {
  await mkdir(dir, { recursive: true });
  const image = sharp(logo);
  await image.clone().resize(96, 96).jpeg({ quality: 82 }).toFile(path.join(dir, 'logo-96.jpg'));
  await image.clone().resize(96, 96).webp({ quality: 82 }).toFile(path.join(dir, 'logo-96.webp'));
  await image.clone().resize(48, 48).jpeg({ quality: 82 }).toFile(path.join(dir, 'logo-48.jpg'));
  await image.clone().resize(48, 48).webp({ quality: 82 }).toFile(path.join(dir, 'logo-48.webp'));
  await copyFile(path.join(root, 'public', 'favicon.svg'), path.join(dir, 'favicon.svg'));
}

const htaccess = `DirectoryIndex index.html
AddType image/webp .webp
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

await mkdir(rankingDist, { recursive: true });
await writeLogos(dist);
await writeLogos(rankingDist);
await copyFile(path.join(root, 'index.html'), path.join(dist, 'index.html'));
await copyFile(path.join(root, 'ranking', 'index.html'), path.join(rankingDist, 'index.html'));
await copyFile(path.join(root, 'contato.php'), path.join(dist, 'contato.php'));
await copyFile(path.join(root, 'contato.php'), path.join(rankingDist, 'contato.php'));
await writeFile(path.join(dist, '.htaccess'), htaccess);
await writeFile(path.join(rankingDist, '.htaccess'), htaccess);

const home = await readFile(path.join(dist, 'index.html'));
if (home.includes('Sentinel-A') || home.includes('SOMA') || /patente/i.test(home.toString())) {
  throw new Error('Texto proibido encontrado na home');
}
console.log('Build Locaweb pronto em dist/ e dist/ranking/');
