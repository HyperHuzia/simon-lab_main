// Stage images load only for the chapters around the reader (current ±1: within 75% of a viewport) and are decoded
// before they are swapped in, so a state change never shows a half-painted frame. Markup (MediaLayer.astro):
//   <div data-media="id"><picture><source data-srcset type=…><img data-srcset data-src sizes alt></picture></div>
// The container gets data-ready once the image is decoded; CSS fades it in over the placeholder.

async function reveal(img: HTMLImageElement) {
  const picture = img.parentElement instanceof HTMLPictureElement ? img.parentElement : null;
  picture?.querySelectorAll<HTMLSourceElement>('source[data-srcset]').forEach((s) => {
    s.srcset = s.dataset.srcset!;
    s.removeAttribute('data-srcset');
  });
  if (img.dataset.srcset) img.srcset = img.dataset.srcset;
  if (img.dataset.src) img.src = img.dataset.src;
  img.removeAttribute('data-srcset');
  img.removeAttribute('data-src');
  try {
    await img.decode();
  } catch {
    // decode() rejects for broken or not-yet-available images; show whatever arrives
  }
  img.closest('[data-media]')?.setAttribute('data-ready', '');
}

/** Line art used as a CSS mask (Architecture wipe): fetched and decoded with the chapter, then set as --mask. */
async function mask(el: HTMLElement) {
  const src = el.dataset.mask;
  if (!src) return;
  el.removeAttribute('data-mask');
  const img = new Image();
  img.src = src;
  try {
    await img.decode();
  } catch {
    // set it anyway: the browser fetches the mask itself
  }
  el.style.setProperty('--mask', `url("${src}")`);
}

function loadChapter(chapter: Element) {
  chapter.querySelectorAll<HTMLImageElement>('img[data-src], img[data-srcset]').forEach((img) => void reveal(img));
  chapter.querySelectorAll<HTMLElement>('[data-mask]').forEach((el) => void mask(el));
}

export function initMedia(root: ParentNode = document) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        loadChapter(e.target);
        io.unobserve(e.target);
      }),
    { rootMargin: '75% 0px 75% 0px' },
  );
  root.querySelectorAll('[data-chapter]').forEach((c) => io.observe(c));
}
