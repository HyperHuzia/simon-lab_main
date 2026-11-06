// The stack of the applications (StackExplorer.astro). On the applications index (select) the slabs are tabs: a click,
// a tap, Enter or Space selects one, which lifts it, runs the light round its chrome edge and shows its card, whose
// slides start over (the previous card's stop); arrow keys move along the stack and select, Home/End jump. Hovering only
// lights a slab's edge (CSS). On an application page (navigate) the slabs are plain links: nothing to script.
import { hideSlides, showSlides } from './slides';

function select(root: HTMLElement) {
  const items = [...root.querySelectorAll<HTMLElement>('.sx-item')];
  const tabs = items.map((li) => li.querySelector<HTMLButtonElement>('[data-sx-slab]')!);
  const cards = [...root.querySelectorAll<HTMLElement>('[data-card]')];

  const choose = (i: number) => {
    const li = items[i];
    if (li.hasAttribute('data-active')) return;
    items.forEach((item, k) => {
      const on = k === i;
      item.toggleAttribute('data-active', on);
      tabs[k].setAttribute('aria-selected', String(on));
      tabs[k].tabIndex = on ? 0 : -1;
    });
    cards.forEach((card) => {
      const on = card.dataset.card === li.dataset.app;
      card.toggleAttribute('data-on', on);
      const slides = card.querySelector<HTMLElement>('[data-slides]');
      if (slides) (on ? showSlides : hideSlides)(slides);
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => choose(i));
    tab.addEventListener('keydown', (e) => {
      const next = { ArrowUp: i + 1, ArrowRight: i + 1, ArrowDown: i - 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      const k = Math.max(0, Math.min(tabs.length - 1, next));
      tabs[k].focus();
      choose(k);
    });
  });
}

export function initStackExplorers(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-sx="select"]').forEach(select);
}
