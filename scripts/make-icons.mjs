// Site icons from the SL monogram: /brand/favicon.svg, /brand/apple-touch-icon.png (180×180) and /assets/favicon.png
// (32×32). The monogram is the one in public/brand/mark.svg; its parts are taken from public/brand/logo-neon.svg, where
// they carry stable ids (docs/BRAND.md in simon-lab-media: path2 flask, path4 L, path38 notch, path5 molecule,
// path36/41/42/43 bubbles), so the icon can drop what does not survive 16 px. The favicons are the mark alone on a
// transparent background (the owner's choice); its gradient reads on light and dark browser tabs alike. The
// apple-touch-icon keeps the dark tile: iOS would fill a transparent one with black.
//
//   node scripts/make-icons.mjs [--preview <dir>]    (--preview also writes a check sheet on light and dark tabs)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOGO = path.join(ROOT, 'public/brand/logo-neon.svg');
const BG = '#0b0e17';

const svg = fs.readFileSync(LOGO, 'utf8');
const part = (id) => {
  const m = svg.match(new RegExp(`<path[^>]*?id="${id}"[^>]*?/>`, 's')) ?? svg.match(new RegExp(`<path(?:(?!/>).)*?\\sid="${id}"(?:(?!/>).)*?/>`, 's'));
  const block = m?.[0] ?? '';
  const d = block.match(/\sd="([^"]+)"/)?.[1];
  if (!d) throw new Error(`logo-neon.svg: no path "${id}"`);
  // two decimals are plenty for an icon
  return d.replace(/\s+/g, ' ').replace(/-?\d+\.\d+/g, (n) => String(Math.round(parseFloat(n) * 100) / 100));
};

/** The monogram's parts in the lockup's coordinates (the mark spans about x 8–104, y 5–101). */
const PARTS = {
  flask: part('path2'),
  ell: part('path4'),
  notch: part('path38'),
  molecule: part('path5'),
  bubbles: ['path41', 'path43', 'path36', 'path42'].map(part),
};

const gradient = (id) =>
  `<linearGradient id="${id}" x1="0" y1="109.48" x2="300" y2="0" gradientUnits="userSpaceOnUse">` +
  `<stop offset="0" stop-color="#00F5FF"/><stop offset="0.5" stop-color="#9D00FF"/><stop offset="1" stop-color="#FF00AA"/></linearGradient>`;

/**
 * The icon: the mark centred with `pad` (fraction of the side) around it, on a rounded tile unless `tile` is off.
 * `detail` keeps the molecule and bubbles (large sizes); the favicon drops them, so S and L stay crisp at 16 px.
 */
function icon({ size = 64, pad = 0.12, radius = 0.22, detail = false, glow = false, edge = true, tile = true } = {}) {
  // the mark's box in lockup units: flask + L without molecule ≈ x 8–104, y 19–101; with molecule and bubbles y 5–101
  const box = detail ? { x: 7, y: 4, w: 98, h: 98 } : { x: 7, y: 17, w: 98, h: 86 };
  const inner = size * (1 - 2 * pad);
  const k = inner / Math.max(box.w, box.h);
  const ox = (size - box.w * k) / 2 - box.x * k;
  const oy = (size - box.h * k) / 2 - box.y * k;
  const fill = 'url(#g)';
  const parts = [PARTS.flask, PARTS.ell, PARTS.notch, ...(detail ? [PARTS.molecule, ...PARTS.bubbles] : [])];
  const r = (size * radius).toFixed(2);
  const filter = glow
    ? `<filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${(size * 0.02).toFixed(2)}" result="b"/>` +
      `<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`
    : '';
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">` +
    `<defs>${gradient('g')}${filter}</defs>` +
    (tile ? `<rect width="${size}" height="${size}" rx="${r}" fill="${BG}"/>` : '') +
    (tile && edge ? `<rect x="0.75" y="0.75" width="${size - 1.5}" height="${size - 1.5}" rx="${r}" fill="none" stroke="#9D00FF" stroke-opacity="0.35" stroke-width="1.5"/>` : '') +
    `<g transform="translate(${ox.toFixed(2)} ${oy.toFixed(2)}) scale(${k.toFixed(4)})"${glow ? ' filter="url(#glow)"' : ''}>` +
    parts.map((d) => `<path fill="${fill}" d="${d}"/>`).join('') +
    `</g></svg>`
  );
}

const out = (rel) => path.join(ROOT, 'public', rel);
const favicon = icon({ size: 64, pad: 0.03, detail: false, tile: false });
fs.writeFileSync(out('brand/favicon.svg'), favicon + '\n');

// iOS rounds the corners itself: a full-bleed tile, more padding, the full mark with a soft glow
const touch = icon({ size: 180, pad: 0.17, radius: 0, detail: true, glow: true, edge: false });
await sharp(Buffer.from(touch)).png({ compressionLevel: 9 }).toFile(out('brand/apple-touch-icon.png'));
await sharp(Buffer.from(icon({ size: 256, pad: 0.03, detail: false, tile: false })))
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toFile(out('assets/favicon.png'));

console.log(`favicon.svg ${Buffer.byteLength(favicon)} B, apple-touch-icon.png, assets/favicon.png`);

// check sheet: the favicon at 16/32/48 px on the tab colours of Chrome (light, dark) and white
const i = process.argv.indexOf('--preview');
if (i > 0) {
  const dir = process.argv[i + 1];
  const tabs = ['#ffffff', '#dee1e6', '#35363a', '#202124'];
  const sizes = [16, 32, 48];
  const cell = 72;
  const composites = [];
  for (const [r, tab] of tabs.entries()) {
    for (const [c, s] of sizes.entries()) {
      const png = await sharp(Buffer.from(favicon), { density: 72 * (s / 64) * 4 }).resize(s, s).png().toBuffer();
      composites.push({ input: png, left: c * cell + (cell - s) / 2, top: r * cell + (cell - s) / 2 });
    }
  }
  const bgs = tabs.map((tab, r) => ({ input: { create: { width: cell * sizes.length, height: cell, channels: 3, background: tab } }, left: 0, top: r * cell }));
  await sharp({ create: { width: cell * sizes.length, height: cell * tabs.length, channels: 3, background: '#000' } })
    .composite([...bgs, ...composites])
    .png()
    .toFile(path.join(dir, 'favicon-check.png'));
  console.log('preview →', path.join(dir, 'favicon-check.png'));
}
