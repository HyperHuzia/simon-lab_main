// The agent terminal of the CapacityIndex chapter (Terminal.astro), following the scroll (the chapter's steps are
// long and the engine sends their progress as stage:progress): in cli-prompt the prompt is typed as the reader
// scrolls, once the terminal stands in its place; in cli-spec the statuses and the spec appear line by line with the
// scroll and the approval menu comes last. Scrolling back takes the text back the same way, so nothing jumps. A calm
// reader (reduced motion, Save-Data) gets each step's whole text at once. Lines are revealed with an attribute
// (opacity in CSS) and the transcript scrolls by transform, so nothing reflows.
import { prefs, type ProgressDetail } from '../scrolly';

// the stretch of each step's progress that drives it: the first step activates while the stage is still coming up
// (it pins about a third of the way in), and the end of the second step leaves room for the menu
const PROMPT: [number, number] = [0.34, 0.86];
const ANSWER: [number, number] = [0.04, 0.8];
const MENU_AT = 0.86;
const ramp = (p: number, [a, b]: [number, number]) => Math.min(1, Math.max(0, (p - a) / (b - a)));

function terminal(stage: HTMLElement, term: HTMLElement) {
  const q = <T extends Element = HTMLElement>(sel: string) => term.querySelector<T>(sel)!;
  const typed = q('[data-typed]');
  const rest = q('[data-rest]');
  const text = q('[data-prompt]').dataset.text ?? '';
  const view = q('[data-view]');
  const doc = q('[data-doc]');
  const agent = q('[data-agent]');
  const chip = q('[data-agent-chip]');
  const menu = q('[data-menu]');
  const work = [...term.querySelectorAll<HTMLElement>('[data-working] [data-ln]')];
  const spec = [...term.querySelectorAll<HTMLElement>('[data-spec] [data-ln]')];
  const lines = [...work, ...spec];

  // line bottoms within the transcript, measured once per size (reads never interleave with the writes)
  let bottoms = new Map<HTMLElement, number>();
  let viewH = 0;
  let maxY = 0;
  const measure = () => {
    viewH = view.clientHeight;
    maxY = Math.max(0, doc.offsetHeight - viewH);
    bottoms = new Map([...lines, menu].map((el) => [el, el.offsetTop + el.offsetHeight]));
  };
  new ResizeObserver(() => {
    bottoms.clear();
  }).observe(view);

  const scrollTo = (el: HTMLElement | null) => {
    if (!bottoms.size) measure();
    const y = el ? Math.min(maxY, Math.max(0, (bottoms.get(el) ?? 0) - viewH + 28)) : 0;
    doc.style.transform = `translateY(${-Math.round(y)}px)`;
  };
  const status = (label: string, busy = false) => {
    if (agent.textContent !== label) agent.textContent = label;
    chip.toggleAttribute('data-busy', busy);
  };

  let chars = -1;
  let shown = -1;
  let menuOn: boolean | null = null;
  /** the prompt typed up to `count` characters, `k` lines of the answer on, the menu on or off */
  const draw = (count: number, k: number, withMenu: boolean) => {
    if (count !== chars) {
      chars = count;
      typed.textContent = text.slice(0, count);
      rest.textContent = text.slice(count);
    }
    if (k !== shown || withMenu !== menuOn) {
      shown = k;
      menuOn = withMenu;
      lines.forEach((el, i) => {
        el.toggleAttribute('data-on', i < k);
        // a status is current while it is the last line shown, done once the next one is out
        el.toggleAttribute('data-current', i === k - 1 && i < work.length && !withMenu);
        el.toggleAttribute('data-done', i < work.length && (i < k - 1 || (i < k && k > work.length)));
      });
      menu.toggleAttribute('data-on', withMenu);
      scrollTo(withMenu ? menu : k > 0 ? lines[k - 1] : null);
    }
    term.dataset.phase = withMenu ? 'menu' : k > work.length ? 'spec' : k > 0 ? 'working' : count >= text.length ? 'typed' : count > 0 ? 'typing' : 'idle';
    if (withMenu) status('awaiting approval');
    else if (k > work.length) status(k >= lines.length ? 'spec ready' : 'drafting spec', k < lines.length);
    else if (k > 0) status('working', true);
    else status('ready');
  };

  const follow = ({ p, index }: ProgressDetail) => {
    const state = index >= 0 ? stage.dataset.state : '';
    if (state === 'cli-prompt') {
      if (prefs.calm) return draw(text.length, 0, false);
      draw(Math.round(text.length * ramp(p, PROMPT)), 0, false);
    } else if (state === 'cli-spec') {
      if (prefs.calm) return draw(text.length, lines.length, true);
      draw(text.length, Math.round(lines.length * ramp(p, ANSWER)), p >= MENU_AT);
    } else draw(0, 0, false);
  };
  stage.addEventListener('stage:progress', (e) => follow((e as CustomEvent<ProgressDetail>).detail));
}

export function initTerminals(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-stage] [data-term]').forEach((term) => {
    const stage = term.closest<HTMLElement>('[data-stage]');
    if (stage) terminal(stage, term);
  });
}
