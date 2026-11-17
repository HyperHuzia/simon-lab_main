// Cross-language route and built-page invariants for the three engineering offers.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { switchLang } from '../src/i18n/config.ts';

const groups = [
  ['/services/process-engineering/', '/pl/services/instalacje-procesowe/', '/de/services/verfahrenstechnik/'],
  ['/services/automation/', '/pl/services/automatyka/', '/de/services/automatisierung/'],
  ['/services/tanks-mixing/', '/pl/services/zbiorniki-mieszalniki/', '/de/services/behaelter-ruehrwerke/'],
];
const languages = ['en', 'pl', 'de'];
let checked = 0;
for (const group of groups) {
  for (const route of group) {
    const html = fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8');
    assert.match(html, new RegExp('rel="canonical" href="https://simon-lab\\.org' + route + '"'));
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, route + ': one main heading');
    assert.equal((html.match(/<button\b[^>]*\bdata-email-reveal(?:\s|=|>)/g) ?? []).length, 2, route + ': address reveal before and after scope');
    assert.match(html, /<noscript>[\s\S]*?&#105;&#110;&#102;&#111;&#64;/, route + ': encoded no-JS email text');
    assert.doesNotMatch(html, /data-mailto|data-subject|data-body|Dane na początek|What we need to start|Angaben für den Einstieg/, route + ': no email draft or project input questionnaire');
    assert.doesNotMatch(html, /<form\b|googletagmanager\.com|google-analytics\.com/, route + ': no form or analytics');
    for (const [i, language] of languages.entries()) {
      assert.equal(switchLang(route, language), group[i], route + ': correct language destination');
      assert.ok(html.includes(`hreflang="${language}" href="https://simon-lab.org${group[i]}"`), route + ': language alternate');
    }
    checked++;
  }
}
console.log(`service checks: ${checked} pages, language routes and address-only contact fallbacks passed`);
