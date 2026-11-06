// Documents stage (DocsStage.astro): the pages fall with the scroll (CSS from --p); this script only follows the
// same progress to pulse a page's layer in the HUD when it lands ('docs:land'), and only while pages are added.
import { prefs, type ProgressDetail } from '../scrolly';

// the same fall as the stage's CSS: q from p, and page i lands once q·(n + 3) − i reaches 3
const fall = (p: number) => Math.min(1, Math.max(0, (p - 0.25) / 0.62));

function docs(stage: HTMLElement, root: HTMLElement) {
  const pages = [...root.querySelectorAll<HTMLElement>('.dpage')];
  const total = pages.length;
  let landed = 0;
  stage.addEventListener('stage:progress', (e) => {
    const { p, index } = (e as CustomEvent<ProgressDetail>).detail;
    const now = index < 0 ? 0 : prefs.calm ? total : Math.min(total, Math.max(0, Math.floor(fall(p) * (total + 3) - 3) + 1));
    for (let i = landed; i < now; i++) document.dispatchEvent(new CustomEvent('docs:land', { detail: pages[i].dataset.layer }));
    landed = now;
  });
}

export function initDocs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-stage] [data-docs]').forEach((el) => {
    const stage = el.closest<HTMLElement>('[data-stage]');
    if (stage) docs(stage, el);
  });
}
