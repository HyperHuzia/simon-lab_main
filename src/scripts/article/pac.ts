// The revision log of "Project as code" (PacStage.astro, states pac-rev and pac-diff), on the shared step player
// (../timeline.ts): each state plays once when the reader reaches it with the stage in view; a step scrolled past
// finishes four times faster; back up, out of view or calm (reduced motion, Save-Data) shows its final picture at once.
//   pac-rev   the two oldest versions fade to grey; a cursor opens 0.12 (its changes and the documents they touch),
//             then clicks 0.13, which closes 0.12 and opens itself
//   pac-diff  a change comes in (L-104 from DN50 to DN65): 0.13 closes, version 0.14 is created and opens: the diff,
//             what follows from it one line at a time, then the documents generated again
// Only movement and opacity animate: rows that an opening or closing version moves glide to their new place (FLIP),
// a panel unrolls with a clip.
import { playSteps, timeline } from '../timeline';

const ORDER = ['pac-rev', 'pac-diff'];
const EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';
/** how long each kind of item in an opening panel waits before the next comes in */
const PACE: Record<string, number> = { code: 140, fx: 380, doc: 110 };

export function initPac(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-pac-log]:not([data-fixed])').forEach((log) => {
    const stage = log.closest<HTMLElement>('[data-stage]');
    const sig = log.querySelector<HTMLElement>('[data-sig]');
    const cursor = log.querySelector<HTMLElement>('[data-cursor]');
    const rows = [...log.querySelectorAll<HTMLElement>('[data-v]')];
    const row = (v: string) => rows.find((r) => r.dataset.v === v);
    const v12 = row('0.12');
    const v13 = row('0.13');
    const v14 = row('0.14');
    if (!stage || !sig || !cursor || !v12 || !v13 || !v14) return;

    const tl = timeline();
    const { clock, motion } = tl;
    const items = (r: HTMLElement) => [...r.querySelectorAll<HTMLElement>('[data-item]')];

    // ── the pictures, without motion (the same attributes PacStage renders for its static figures)
    const set = ({ grey = false, open = '', cur = '0.13', change = false }) => {
      sig.toggleAttribute('data-on', change);
      rows.forEach((r) => {
        r.toggleAttribute('data-grey', grey && r.hasAttribute('data-old'));
        r.toggleAttribute('data-open', r.dataset.v === open);
        r.toggleAttribute('data-cur', r.dataset.v === cur);
        if (r.hasAttribute('data-late')) r.toggleAttribute('data-on', change);
        items(r).forEach((i) => i.setAttribute('data-on', ''));
      });
      cursor.style.opacity = '0';
    };
    const show = (state: string) => {
      if (state === 'pac-diff') set({ grey: true, open: '0.14', cur: '0.14', change: true });
      else if (state === 'pac-rev') set({ grey: true, open: '0.13' });
      else set({});
    };

    /** a layout change whose moved rows glide from where they were */
    const flip = (change: () => void) => {
      const els = [sig, ...rows];
      const before = els.map((el) => el.getBoundingClientRect());
      change();
      els.forEach((el, k) => {
        if (!before[k].height) return;
        const dy = before[k].top - el.getBoundingClientRect().top;
        if (Math.abs(dy) > 0.5) motion(el, [{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0px)' }], { duration: 420, easing: EASE });
      });
    };

    const open = async (r: HTMLElement) => {
      const list = items(r);
      list.forEach((i) => i.removeAttribute('data-on'));
      flip(() => r.setAttribute('data-open', ''));
      motion(r.querySelector('.pr-more'), [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: 420, easing: EASE });
      await clock.wait(260);
      for (const i of list) {
        i.setAttribute('data-on', '');
        await clock.wait(PACE[i.dataset.item ?? ''] ?? 110);
      }
    };

    const close = async (r: HTMLElement) => {
      const fade = motion(r.querySelector('.pr-more'), [{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' });
      await clock.wait(200);
      flip(() => r.removeAttribute('data-open'));
      fade?.cancel();
    };

    // ── the cursor, in the log's own coordinates
    let at = { x: 0, y: 0 };
    const place = (p: { x: number; y: number }, s = 1) => `translate(${p.x}px, ${p.y}px) scale(${s})`;
    /** the point on a version's title the cursor clicks */
    const spot = (r: HTMLElement) => {
      const t = (r.querySelector('.pr-t') ?? r).getBoundingClientRect();
      const o = log.getBoundingClientRect();
      return { x: t.left - o.left + Math.min(t.width * 0.4, 64), y: t.top - o.top + t.height * 0.6 };
    };
    const moveTo = async (r: HTMLElement, ms: number) => {
      const to = spot(r);
      motion(cursor, [{ transform: place(at) }, { transform: place(to) }], { duration: ms, easing: 'cubic-bezier(0.45, 0, 0.25, 1)' });
      at = to;
      cursor.style.transform = place(to);
      await clock.wait(ms);
    };
    const press = async () => {
      motion(cursor, [{ transform: place(at) }, { transform: place(at, 0.8) }, { transform: place(at) }], { duration: 220 });
      await clock.wait(200);
    };
    const fadeCursor = (to: 0 | 1, ms = 250) => {
      motion(cursor, [{ opacity: 1 - to }, { opacity: to }], { duration: ms });
      cursor.style.opacity = String(to);
    };

    const STEPS = {
      // ── the older versions fade, the cursor opens 0.12, then 0.13
      async 'pac-rev'() {
        set({});
        await clock.wait(300);
        rows.filter((r) => r.hasAttribute('data-old')).forEach((r) => r.setAttribute('data-grey', ''));
        await clock.wait(500);
        const box = log.getBoundingClientRect();
        at = { x: box.width * 0.8, y: box.height + 20 };
        cursor.style.transform = place(at);
        fadeCursor(1);
        await moveTo(v12, 750);
        await press();
        await open(v12);
        await clock.wait(800);
        await moveTo(v13, 600);
        await press();
        fadeCursor(0);
        await close(v12);
        await open(v13);
        await clock.wait(500);
      },

      // ── a change comes in and becomes the next version, with what follows from it
      async 'pac-diff'() {
        show('pac-rev');
        await clock.wait(250);
        flip(() => sig.setAttribute('data-on', ''));
        motion(sig, [{ opacity: 0 }, { opacity: 1 }], { duration: 380 });
        await clock.wait(600);
        await close(v13);
        await clock.wait(150);
        v13.removeAttribute('data-cur');
        v14.setAttribute('data-on', '');
        v14.setAttribute('data-cur', '');
        motion(v14, [{ opacity: 0, transform: 'translateY(0.6em)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 380, easing: EASE });
        await clock.wait(400);
        await open(v14);
        await clock.wait(500);
      },
    };

    playSteps(stage, tl, { order: ORDER, steps: STEPS, show });
  });
}
