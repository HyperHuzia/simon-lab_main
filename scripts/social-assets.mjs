// The images of the organization's profiles, drawn in Chromium from the site's own files so they match simon-lab.org
// (calm dark, no glows): the SVGs of public/brand, the fonts, the colour tokens of src/styles/tokens.css and the layer
// colours of the applications, the film's posters (public/media/film) and the pictures the site already exported
// (public/media). The texts come from src/data/profiles.ts and src/i18n/ui.ts. Nothing new enters the site this way:
// every picture used here passed the media repo's gated export first.
//
//   npm run social        writes docs/profiles/images/
//
// youtube-profile-800.png and linkedin-logo-400.png (the SL mark), youtube-banner-2560x1440.png (the text inside the
// 1546×423 area every device shows), linkedin-cover-1128x191.png (the left part kept clear: LinkedIn lays the logo
// over it), youtube-thumbnail-<film>-1280x720.jpg (the film's opening frame with a language tag) and, for every LinkedIn
// article in src/content/profiles/articles, linkedin-article-<id>-<lang>-1920x1080.jpg (its cover, laid out like the
// site's share images).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (file) => import(pathToFileURL(path.join(root, file)).href);
const { SITE, PROFILES, imageLine } = await load('src/data/profiles.ts');
const { STACK } = await load('src/data/apps.ts');
const { LANG_LABEL } = await load('src/i18n/config.ts');
const { t } = await load('src/i18n/ui.ts');

const out = path.join(root, 'docs', 'profiles', 'images');
fs.mkdirSync(out, { recursive: true });
const read = (...p) => fs.readFileSync(path.join(root, ...p), 'utf8');
const fileUrl = (...p) => pathToFileURL(path.join(root, ...p)).href;

// the colour tokens, read from the site's stylesheet
const tokens = Object.fromEntries([...read('src', 'styles', 'tokens.css').matchAll(/--([\w-]+):\s*(#[0-9a-f]{3,8})\b/gi)].map((m) => [m[1], m[2]]));
const token = (name) => tokens[name] ?? fail(`src/styles/tokens.css has no --${name}`);
const C = { bg: token('bg'), raised: token('bg-raised'), line: token('line'), lineStrong: token('line-strong'), text: token('text'), text2: token('text-2'), text3: token('text-3') };
// the applications' layers, bottom-up, in their colours (CapacityIndex first)
const LAYERS = STACK.map((a) => token(a.color.match(/--([\w-]+)/)[1]));
const MOTTO = t('en')('site.motto');
const HOST = new URL(SITE).host;

function fail(message) {
  throw new Error(`social-assets: ${message}`);
}

const svg = (file) => read('public', 'brand', file).replace(/<\?xml[^>]*>/, '');
const ratio = (file) => {
  const [, , w, h] = svg(file).match(/viewBox="([^"]+)"/)[1].split(/[\s,]+/).map(Number);
  return w / h;
};
const mark = (size) => svg('mark.svg').replace('<svg ', `<svg width="${size}" height="${size}" `);
const lockup = (height) => svg('logo-header.svg').replace('<svg ', `<svg height="${height}" width="${Math.round(height * ratio('logo-header.svg'))}" `);
const font = (pkg, file) => fileUrl('node_modules', '@fontsource-variable', pkg, 'files', file);

const page = (w, h, body) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Montserrat; src: url('${font('montserrat', 'montserrat-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; }
@font-face { font-family: Montserrat; src: url('${font('montserrat', 'montserrat-latin-ext-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F; }
@font-face { font-family: Noto; src: url('${font('noto-sans', 'noto-sans-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; }
@font-face { font-family: Noto; src: url('${font('noto-sans', 'noto-sans-latin-ext-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F; }
* { box-sizing: border-box; margin: 0; }
html, body { width: ${w}px; height: ${h}px; background: ${C.bg}; overflow: hidden; }
body { position: relative; color: ${C.text}; font-family: Noto, sans-serif; }
/* the film's grid, faint */
.grid { position: absolute; inset: 0; background-image: linear-gradient(${C.line}55 1px, transparent 1px), linear-gradient(90deg, ${C.line}55 1px, transparent 1px); background-size: 64px 64px; }
.stack { display: flex; flex-direction: column; gap: 6px; }
.stack i { display: block; height: 6px; border-radius: 3px; }
svg { display: block; }
</style></head><body>${body}</body></html>`;

// the layers of the applications as thin bars (CapacityIndex at the bottom)
const layers = (width) => `<div class="stack" style="width:${width}px">${[...LAYERS].reverse().map((c) => `<i style="background:${c}"></i>`).join('')}</div>`;

const shots = [
  { file: 'youtube-profile-800.png', w: 800, h: 800, body: `<div style="position:absolute;inset:0;display:grid;place-items:center">${mark(500)}</div>` },
  { file: 'linkedin-logo-400.png', w: 400, h: 400, body: `<div style="position:absolute;inset:0;display:grid;place-items:center">${mark(270)}</div>` },
  {
    file: 'youtube-banner-2560x1440.png',
    w: 2560,
    h: 1440,
    body: `<div class="grid"></div>
      <div style="position:absolute;left:507px;top:508px;width:1546px;height:423px;display:flex;align-items:center;justify-content:space-between;padding:0 70px">
        <div style="display:flex;flex-direction:column;gap:30px">
          ${lockup(150)}
          <div style="font:600 46px/1.15 Montserrat;letter-spacing:-0.01em;color:${C.text}">${MOTTO}</div>
          <div style="font:400 30px/1.3 Noto;color:${C.text2}">${imageLine()}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:26px">
          ${layers(330)}
          <div style="font:500 30px/1 Montserrat;color:${C.text3};letter-spacing:0.04em">${HOST}</div>
        </div>
      </div>`,
  },
  {
    file: 'linkedin-cover-1128x191.png',
    w: 1128,
    h: 191,
    body: `<div class="grid" style="background-size:32px 32px"></div>
      <div style="position:absolute;right:56px;top:0;bottom:0;display:flex;align-items:center;gap:44px">
        <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-end;text-align:right">
          <div style="font:600 30px/1.1 Montserrat;letter-spacing:-0.01em;color:${C.text}">${MOTTO}</div>
          <div style="font:400 17px/1.3 Noto;color:${C.text2}">${imageLine()} · ${HOST}</div>
        </div>
        ${layers(120)}
      </div>`,
  },
];

// the films' thumbnails: the poster (the opening frame) with a language tag in the top right corner
for (const film of Object.keys(PROFILES.youtube.films)) {
  shots.push({
    file: `youtube-thumbnail-${film}-1280x720.jpg`,
    w: 1280,
    h: 720,
    body: `<img src="${fileUrl('public', 'media', 'film', `film-${film}-poster-1280.webp`)}" style="position:absolute;inset:0;width:1280px;height:720px">
      <div style="position:absolute;right:36px;top:32px;padding:12px 22px;border:2px solid ${C.lineStrong};border-radius:10px;background:${C.raised}e6;font:700 30px/1 Montserrat;letter-spacing:0.12em;color:${C.text}">${LANG_LABEL[film].toUpperCase()}</div>`,
  });
}

// the covers of the LinkedIn articles: the title and the logo on the left, the article's picture on the right, a bar
// in the article's layer colour, as on the site's share images
const articlesDir = path.join(root, 'src', 'content', 'profiles', 'articles');
const articles = fs.existsSync(articlesDir) ? fs.readdirSync(articlesDir).filter((f) => f.endsWith('.ts')).sort() : [];
for (const file of articles) {
  const { article: a } = await load(path.join('src', 'content', 'profiles', 'articles', file));
  const image = fileUrl('public', ...a.cover.image.split('/').filter(Boolean));
  const picture = a.cover.card
    ? `<img src="${image}" style="position:absolute;right:110px;top:50%;transform:translateY(-50%);width:880px;border:2px solid ${C.lineStrong};border-radius:10px;background:#fff">`
    : `<img src="${image}" style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:1240px">`;
  shots.push({
    file: `linkedin-article-${a.id}-${a.lang}-1920x1080.jpg`,
    w: 1920,
    h: 1080,
    body: `${picture}
      <div style="position:absolute;left:112px;top:118px">${lockup(64)}</div>
      <div style="position:absolute;left:112px;top:0;bottom:0;width:760px;display:flex;flex-direction:column;justify-content:center">
        <div style="font:600 100px/1.12 Montserrat;letter-spacing:-0.015em;color:${C.text}">${a.cover.title}</div>
        <div style="margin-top:52px;width:104px;height:7px;border-radius:4px;background:${token(a.cover.layer)}"></div>
      </div>`,
  });
}

const browser = await chromium.launch();
const html = path.join(out, '.render.html');
for (const s of shots) {
  fs.writeFileSync(html, page(s.w, s.h, s.body));
  const p = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
  await p.goto(pathToFileURL(html).href);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForFunction(() => [...document.images].every((img) => img.complete && img.naturalWidth > 0));
  const png = await p.screenshot();
  await p.close();
  const target = path.join(out, s.file);
  if (s.file.endsWith('.jpg')) await sharp(png).jpeg({ quality: 90, mozjpeg: true }).toFile(target);
  else fs.writeFileSync(target, png);
  console.log(`${s.file} ${s.w}×${s.h}`);
}
fs.rmSync(html, { force: true });
await browser.close();
