// The timelines of the article's first chapter (EnvDiagram.astro), on the shared step player (../timeline.ts): each
// state plays once when the reader reaches it with the stage in view; a step scrolled past finishes four times faster;
// back up, out of view or calm (reduced motion, Save-Data) shows its final picture at once.
//   env-chat     three dialogs, a new chat each time: a question, typing, the answer; a PDF prints under it and drifts
//                off to the right, fading slowly while the next question comes
//   env-agent    the chat has shrunk into the AI agent's heart (CSS): the agent's window draws round it, then its plan,
//                tools, files and checks one by one; the marker goes round the loop once and the check passes
//   env-docs     the machine gun: three rows of documents, then three diagonal bursts that collide (cracks), red
//                crosses on documents that do not agree with the rest, and the AI agent jams
//   env-build    the environment, revision by revision: CapacityIndex, ProcessView twice, CapacityIndex again,
//                ProcessView a third time
//   env-release  MechGraph and IonGrid, PlantMesh twice, a change in ProcessView, then MechGraph, PlantMesh and
//                Architecture; a check over every document; every row from beta to v1.0
// A quick pace without flashes: only movement and opacity animate (Web Animations), plus attributes the CSS turns
// into short transitions; no light pulses, and each iteration takes well over half a second.
import { playSteps, timeline } from '../timeline';

const ORDER = ['env-chat', 'env-agent', 'env-docs', 'env-build', 'env-release'];
/** how many states a state's final picture includes (0 = nothing has played yet) */
const DONE: Record<string, number> = { '': 0, 'env-chat': 1, 'env-agent': 2, 'env-docs': 3, 'env-build': 4, 'env-release': 5 };
const PRINT = { x: 112, y: 300 };
const MUZZLE_DOCS = { x: 156, y: 290 };
const MUZZLE_ENV = { x: 300, y: 118 };
// the iterations, by application: what env-build leaves behind, and what env-release adds to it
const BUILD = [['capacityindex'], ['processview'], ['processview'], ['capacityindex'], ['processview']];
const RELEASE = [['mechgraph', 'iongrid'], ['plantmesh'], ['plantmesh'], ['processview'], ['mechgraph'], ['plantmesh'], ['architecture']];
const AFTER_BUILD: Record<string, number> = { capacityindex: 2, processview: 3 };

const place = (x: number, y: number, r = 0, s = 1) => `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`;
const home = (el: SVGGElement, s = 1) => place(Number(el.dataset.x), Number(el.dataset.y), Number(el.dataset.r ?? 0), s);

export function initEnv(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-env]:not([data-fixed-state])').forEach((env) => {
    const stage = env.closest<HTMLElement>('[data-stage]');
    if (!stage) return;
    const all = <T extends Element = HTMLElement>(sel: string) => [...env.querySelectorAll<T>(sel)] as T[];
    const one = <T extends Element = HTMLElement>(sel: string) => env.querySelector<T>(sel);
    const on = (els: (Element | null | undefined)[], value = true) => els.forEach((el) => el?.toggleAttribute('data-on', value));

    const titleFirst = one('[data-title="first"]');
    const titleNew = one('[data-title="new"]');
    const bubbleQ = one('rect[data-chat="q"]');
    const bubbleA = one('rect[data-chat="a"]');
    const typing = one('[data-chat="typing"]');
    const q = all('span[data-chat="q"]');
    const a = all('span[data-chat="a"]');
    const pdfs = all<SVGGElement>('[data-pdf]');
    const agent = one('[data-agent]');
    const parts = (id: string) => all(`[data-build="${id}"]`);
    const stations = Object.fromEntries(all('[data-station]').map((g) => [g.dataset.station!, g]));
    const check = one('[data-check]');
    const files = all('[data-file]');
    const marker = one('[data-marker]');
    const tiles = all<SVGGElement>('[data-dt]');
    const cracks = all('[data-crack]');
    const crosses = all('[data-cross]');
    const slots = all<SVGGElement>('[data-slot]');
    const scans = all('[data-scan]');
    const badges = all('[data-ver]');
    const tag = one('[data-tag]');
    const sweep = one('[data-sweep]');
    if (!titleFirst || !titleNew || !bubbleQ || !bubbleA || !typing || !agent || !marker || !tag || !sweep) return;

    const tl = timeline();
    const { clock, motion } = tl;

    // ── the final pictures
    const chatDone = (done: boolean) => {
      on([titleNew, bubbleQ, bubbleA], done);
      on([titleFirst], !done);
      on([typing], false);
      [q, a].forEach((list) => list.forEach((el, k) => el.toggleAttribute('data-on', done && k === list.length - 1)));
      pdfs.forEach((p) => {
        p.style.transform = home(p);
        p.style.opacity = done ? (p.dataset.ghost ?? '0.12') : '0';
      });
    };
    const agentDone = (done: boolean) => {
      on([...['frame', 'loop', 'plan', 'use', 'files', 'check'].flatMap(parts), ...files, check], done);
    };
    const docsDone = (done: boolean) => {
      tiles.forEach((t) => {
        t.style.transform = home(t, 0.78);
        t.style.opacity = done ? '1' : '0';
      });
      on([...cracks, ...crosses], done);
    };
    /** the revision badges: "rev 2", "rev 2 · rev 1" for the shared row, or every row released */
    const setBadges = (rev: Record<string, number>, released: boolean) => {
      badges.forEach((b) => {
        const shown = (b.dataset.apps ?? '').split(' ').filter((id) => (rev[id] ?? 0) > 0);
        const word = b.dataset.word ?? '{n}';
        b.textContent = released ? (b.dataset.done ?? '') : shown.map((id) => word.replace('{n}', String(rev[id]))).join(' · ');
        b.toggleAttribute('data-on', released || shown.length > 0);
        b.toggleAttribute('data-ok', released);
      });
      tag.textContent = released ? (tag.dataset.done ?? '') : (tag.dataset.word ?? '');
      tag.toggleAttribute('data-ok', released);
    };
    /** 0: empty, 1: as env-build leaves it, 2: released */
    const envDone = (level: 0 | 1 | 2) => {
      slots.forEach((s) => {
        s.toggleAttribute('data-filled', level === 2 || (level === 1 && (s.dataset.app ?? '') in AFTER_BUILD));
        s.toggleAttribute('data-ok', level === 2);
        s.removeAttribute('data-old');
      });
      setBadges(level === 1 ? AFTER_BUILD : {}, level === 2);
    };
    const show = (state: string) => {
      const n = DONE[state] ?? 0;
      chatDone(n >= 1);
      agentDone(n >= 2);
      docsDone(n >= 3);
      agent.toggleAttribute('data-jam', state === 'env-docs');
      envDone(n >= 5 ? 2 : n >= 4 ? 1 : 0);
    };

    /** wait until the stage has reached its place under the header: the chapter's first step starts while the stage
     * is still coming up from the bottom of the screen */
    const settled = () =>
      new Promise<void>((done) => {
        const stop = clock.every(() => {
          if (stage.getBoundingClientRect().top > innerHeight * 0.2) return;
          stop();
          done();
        });
      });

    const blink = (st: Element | undefined) =>
      motion(st?.querySelector('.st-hot'), [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }], { duration: 620 });

    /** a document flies from the AI agent into its slot */
    const fly = (slot: SVGGElement) => {
      const box = slot.querySelector('rect')!;
      const x = box.x.baseVal.value + box.width.baseVal.value / 2;
      const y = box.y.baseVal.value + box.height.baseVal.value / 2;
      slot.removeAttribute('data-old');
      slot.setAttribute('data-filled', '');
      motion(
        slot.querySelector('.fly'),
        [{ transform: `translate(${MUZZLE_ENV.x - x}px, ${MUZZLE_ENV.y - y}px)`, opacity: 0 }, { opacity: 1, offset: 0.2 }, { transform: 'translate(0px, 0px)', opacity: 1 }],
        { duration: 280, easing: 'cubic-bezier(0.3, 0.6, 0.4, 1)' },
      );
    };

    /** one iteration: the applications' rows outlined, an older revision dimmed, the new documents in, the badge up */
    const iterate = async (apps: string[], rev: Record<string, number>) => {
      const targets = slots.filter((s) => apps.includes(s.dataset.app ?? ''));
      const rows = [...new Set(targets.map((s) => Number(s.dataset.row)))];
      rows.forEach((r) => motion(scans[r], [{ opacity: 0 }, { opacity: 1, offset: 0.35 }, { opacity: 0 }], { duration: 650 }));
      if (targets.some((s) => s.hasAttribute('data-filled'))) {
        targets.forEach((s) => s.setAttribute('data-old', ''));
        await clock.wait(140);
      }
      targets.forEach((s, i) => void clock.wait(i * 40).then(() => fly(s)));
      await clock.wait(280 + (targets.length - 1) * 40);
      apps.forEach((id) => (rev[id] = (rev[id] ?? 0) + 1));
      setBadges(rev, false);
      await clock.wait(170);
    };

    const STEPS = {
      // ── three dialogs; each answer prints a PDF that drifts off into the void
      async 'env-chat'() {
        chatDone(false);
        await settled();
        for (let k = 0; k < pdfs.length; k++) {
          if (k > 0) {
            on([bubbleQ, bubbleA, q[k - 1], a[k - 1], titleFirst], false);
            on([titleNew]);
            await clock.wait(450);
          }
          on([bubbleQ, q[k]]);
          await clock.wait(450);
          on([typing]);
          await clock.wait(650);
          on([typing], false);
          on([bubbleA, a[k]]);
          await clock.wait(400);
          const pdf = pdfs[k];
          const printed = place(PRINT.x, PRINT.y);
          pdf.style.transform = printed;
          pdf.style.opacity = '1';
          motion(pdf, [{ transform: place(PRINT.x, PRINT.y - 22), opacity: 0 }, { transform: printed, opacity: 1 }], {
            duration: 450,
            easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)',
          });
          await clock.wait(600);
          const away = home(pdf);
          const ghost = pdf.dataset.ghost ?? '0.12';
          pdf.style.transform = away;
          pdf.style.opacity = ghost;
          motion(pdf, [{ transform: printed, opacity: 1 }, { transform: away, opacity: ghost }], { duration: 2600, easing: 'cubic-bezier(0.45, 0, 0.55, 1)' });
          await clock.wait(500);
        }
        await clock.wait(1500);
      },

      // ── the chat becomes the heart of an AI agent: its window, then plan, tools, files and checks round a loop
      async 'env-agent'() {
        agentDone(false);
        await clock.wait(900); // the chat window flies into the agent's heart
        on(parts('frame'));
        await clock.wait(550);
        for (const id of ['plan', 'use', 'files', 'check']) {
          on(parts(id));
          await clock.wait(170);
        }
        on(parts('loop'));
        await clock.wait(300);
        motion(marker, [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 1600, easing: 'linear' });
        for (const id of ['use', 'files', 'check', 'plan']) {
          await clock.wait(400);
          blink(stations[id]);
          if (id === 'files') on(files);
          if (id === 'check') on([check]);
        }
        await clock.wait(400);
      },

      // ── the machine gun: rows, then diagonal bursts that collide, crosses, and the AI agent jams
      async 'env-docs'() {
        docsDone(false);
        agent.removeAttribute('data-jam');
        await clock.wait(800); // the AI agent moves to the left
        const fire = (t: SVGGElement) => {
          const to = home(t, 0.78);
          t.style.transform = to;
          t.style.opacity = '1';
          motion(t, [{ transform: place(MUZZLE_DOCS.x, MUZZLE_DOCS.y, 0, 0.35), opacity: 0 }, { opacity: 1, offset: 0.25 }, { transform: to, opacity: 1 }], {
            duration: 260,
            easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)',
          });
        };
        for (let b = 0; b < 6; b++) {
          for (const t of tiles.filter((x) => x.dataset.burst === String(b))) {
            fire(t);
            await clock.wait(60);
          }
          await clock.wait(220);
          on(cracks.filter((c) => c.dataset.crack === String(b)));
          await clock.wait(b < 3 ? 120 : 220);
        }
        for (const c of crosses) {
          c.setAttribute('data-on', '');
          await clock.wait(90);
        }
        await clock.wait(250);
        agent.setAttribute('data-jam', '');
        await clock.wait(600);
      },

      // ── the environment: layer 0 and 1, revision by revision
      async 'env-build'() {
        envDone(0);
        agent.removeAttribute('data-jam');
        await clock.wait(900); // the AI agent rises to the top, the environment comes in
        const rev: Record<string, number> = {};
        for (const apps of BUILD) await iterate(apps, rev);
      },

      // ── the rest of the stack, a change rebuilding what depends on it, the check, the release
      async 'env-release'() {
        envDone(1);
        const rev: Record<string, number> = { ...AFTER_BUILD };
        await clock.wait(300);
        for (const apps of RELEASE) await iterate(apps, rev);
        motion(sweep, [{ transform: 'translateY(0px)', opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1, offset: 0.9 }, { transform: 'translateY(-290px)', opacity: 0 }], {
          duration: 900,
          easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
        });
        for (let r = 0; r < 5; r++) {
          await clock.wait(r === 0 ? 120 : 170);
          slots.filter((s) => s.dataset.row === String(r)).forEach((s) => s.setAttribute('data-ok', ''));
        }
        await clock.wait(300);
        setBadges(rev, true);
        await clock.wait(500);
      },
    };

    playSteps(stage, tl, { order: ORDER, steps: STEPS, show });
  });
}
