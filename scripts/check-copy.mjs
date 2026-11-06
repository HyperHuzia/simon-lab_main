// Copy check over the built site (dist/): the owner's rules for site text.
//   · no em dash (—) and no spaced en dash used as a dash ( – ); an en dash stays fine in number ranges (98–100)
//   · application names are one word: "CapacityIndex", never "Capacity Index"
// It reads what visitors and machines read: page text and the attributes people hear or see (alt, title, aria-label,
// placeholder, meta content), plus the published .md, .txt and .vtt files. Scripts, styles, SVG drawings and code
// comments are not copy. The recruitment page is kept as published and is left out.
//
//   node scripts/check-copy.mjs [dist]        exit 1 when a rule is broken, with file and context
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
const SKIP = [/^last-job-before-ai-takes-over\//, /^licenses\.txt$/];
const RULES = [
  { name: 'em dash', re: /—/g },
  { name: 'spaced en dash', re: /\s–\s/g },
  { name: '"Capacity Index"', re: /Capacity Index/g },
];

const decode = (s) =>
  s
    .replace(/&mdash;|&#8212;|&#x2014;/gi, '—')
    .replace(/&ndash;|&#8211;|&#x2013;/gi, '–')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/g, '&');

/** The copy of an HTML page: text outside scripts, styles and SVG, and the attributes that are read or heard. */
function htmlCopy(html) {
  const body = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(script|style|svg|template)\b[\s\S]*?<\/\1>/gi, ' ');
  const attrs = [...body.matchAll(/\s(?:alt|title|aria-label|placeholder|content)="([^"]*)"/gi)].map((m) => m[1]);
  const text = body.replace(/<[^>]+>/g, ' ');
  return decode([text, ...attrs].join('\n'));
}

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    else if (/\.(html|md|txt|vtt)$/.test(entry.name)) files.push(abs);
  }
})(dist);

let hits = 0;
for (const abs of files) {
  const rel = path.relative(dist, abs).split(path.sep).join('/');
  if (SKIP.some((re) => re.test(rel))) continue;
  const raw = fs.readFileSync(abs, 'utf8');
  const copy = rel.endsWith('.html') ? htmlCopy(raw) : decode(raw);
  for (const rule of RULES) {
    for (const m of copy.matchAll(rule.re)) {
      hits++;
      const at = m.index ?? 0;
      const context = copy.slice(Math.max(0, at - 50), at + 50).replace(/\s+/g, ' ').trim();
      console.log(`${rel}: ${rule.name}: …${context}…`);
    }
  }
}
console.log(`copy check: ${files.length} files, ${hits} problem(s)`);
process.exit(hits ? 1 : 0);
