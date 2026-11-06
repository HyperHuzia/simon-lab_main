// Lazy loops: a <video data-lazy-video preload="none"> keeps its sources in data-src (and its poster in data-poster)
// until it comes near the viewport, plays while visible and pauses when it leaves. Under reduced motion or Save-Data
// it stays on its poster. At most MAX_PLAYING videos decode at once; the most visible ones win.
//
// Stage clips (data-lazy-video="stage") sit stacked in a sticky stage, so being visible is not enough: they play
// only while their stage state is on (the article sets data-active, then calls refresh()). A clip without `loop`
// holds its last frame after `ended` (data-ended) until it is activated again.
const MAX_PLAYING = 2;

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
const visible = new Map<HTMLVideoElement, number>();

function load(video: HTMLVideoElement) {
  if (video.dataset.loaded) return;
  video.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => {
    s.src = s.dataset.src!;
  });
  video.dataset.loaded = '1';
  video.load();
}

function poster(video: HTMLVideoElement) {
  if (video.dataset.poster && !video.getAttribute('poster')) video.poster = video.dataset.poster;
}

const eligible = (v: HTMLVideoElement) =>
  v.dataset.lazyVideo === 'stage' ? v.hasAttribute('data-active') && !v.hasAttribute('data-ended') : true;

function schedule() {
  if (reduced.matches || saveData) return;
  const ranked = [...visible.entries()].filter(([v, ratio]) => ratio > 0.25 && eligible(v)).sort((a, b) => b[1] - a[1]);
  const playing = new Set(ranked.slice(0, MAX_PLAYING).map(([v]) => v));
  document.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]').forEach((v) => {
    if (playing.has(v)) {
      load(v);
      if (v.paused) void v.play().catch(() => undefined);
    } else if (!v.paused) {
      v.pause();
    }
  });
}

const near = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const v = e.target as HTMLVideoElement;
      poster(v);
      if (!reduced.matches && !saveData) load(v);
    }),
  { rootMargin: '75% 0px 75% 0px' },
);

const seen = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => visible.set(e.target as HTMLVideoElement, e.isIntersecting ? e.intersectionRatio : 0));
    schedule();
  },
  { threshold: [0, 0.25, 0.5, 0.75, 1] },
);

function attach(root: ParentNode = document) {
  root.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]:not([data-observed])').forEach((v) => {
    v.dataset.observed = '1';
    if (v.dataset.lazyVideo === 'stage') v.addEventListener('ended', () => v.setAttribute('data-ended', ''));
    near.observe(v);
    seen.observe(v);
  });
}

attach();
reduced.addEventListener('change', schedule);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]').forEach((v) => v.pause());
  else schedule();
});

/** Re-rank after a stage clip was switched on or off. */
const refresh = schedule;

export { attach, refresh };
