// The logo variants the site uses, derived from the master logo public/brand/logo-neon.svg (which stays as it is: it is
// the organization logo in the structured data; the icons come from scripts/make-icons.mjs):
//   · public/brand/logo-header.svg   the "SIMON-LAB" lettering enlarged 1.6×, so it reads at the size of the header's menu
//   · public/brand/logo-slate.svg    the same logo in slate greys, for the footer
// The gradient is written in the master's own coordinates (0 0 300 109.48), so every part keeps its colour wherever it
// is moved or scaled. Re-run after a change to the master:
//     node scripts/make-logos.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url);
const master = readFileSync(new URL('public/brand/logo-neon.svg', root), 'utf8');
const d = Object.fromEntries([...master.matchAll(/<path\b[\s\S]*?\/>/g)].map(([el]) => [/\sid="([^"]+)"/.exec(el)[1], /\sd="([^"]+)"/.exec(el)[1].replace(/\s+/g, ' ')]));

// the SL mark with the flask and the molecule; the rest are the letters of SIMON-LAB (x 109.98–291.09, caps y 46.59–69.42)
const MARK = ['path2', 'path4', 'path5', 'path36', 'path38', 'path41', 'path42', 'path43'];
const WORD = Object.keys(d).filter((id) => !MARK.includes(id));

const NEON = ['#00F5FF', '#9D00FF', '#FF00AA'];
const SLATE = ['#b6bdcb', '#6f7a8e', '#8a93a5'];
const gradient = (stops) =>
  `<linearGradient id="g" x1="0" y1="109.48" x2="300" y2="0" gradientUnits="userSpaceOnUse">${stops
    .map((c, i) => `<stop offset="${i / (stops.length - 1)}" stop-color="${c}"/>`)
    .join('')}</linearGradient>`;
const paths = (ids) => ids.map((id) => `<path d="${d[id]}"/>`).join('');
const svg = (box, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}">${body}</svg>\n`;
const write = (file, text) => writeFileSync(new URL(file, root), text);

// header: the lettering 1.6× around its left edge and middle, a little more air after the mark
const SCALE = 1.6;
const [wx, wy, ww] = [109.98, 58, 181.11];
const shift = 3;
const width = +(wx + shift + ww * SCALE + 8).toFixed(2);
const word = `<g transform="matrix(${SCALE} 0 0 ${SCALE} ${(wx * (1 - SCALE) + shift).toFixed(3)} ${(wy * (1 - SCALE)).toFixed(3)})">${paths(WORD)}</g>`;
write('public/brand/logo-header.svg', svg(`0 0 ${width} 109.48`, `<defs>${gradient(NEON)}</defs><g fill="url(#g)">${paths(MARK)}${word}</g>`));

// footer: the master's shape in slate
write('public/brand/logo-slate.svg', svg('0 0 300 109.48', `<defs>${gradient(SLATE)}</defs><g fill="url(#g)">${paths([...MARK, ...WORD])}</g>`));

console.log(`logo-header.svg (viewBox ${width} × 109.48), logo-slate.svg`);
