// The film in the closing block (FilmBlock.astro): nothing loads until the reader presses play; then the video of the
// page's language replaces the poster, with its caption tracks, and starts (a user gesture, so not autoplay). The same
// film in a window (FilmDialog.astro): every [data-film-open] link opens it instead of following its href.
export function initFilm(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-film]').forEach((frame) => {
    const button = frame.querySelector<HTMLButtonElement>('[data-film-play]');
    const template = frame.querySelector<HTMLTemplateElement>('template[data-film-video]');
    if (!button || !template) return;
    button.addEventListener('click', () => {
      const video = template.content.querySelector('video')?.cloneNode(true) as HTMLVideoElement | undefined;
      if (!video) return;
      frame.appendChild(video);
      button.remove();
      video.focus();
      void video.play().catch(() => undefined);
    });
  });
}

export function initFilmDialog(root: ParentNode = document) {
  const dialog = root.querySelector<HTMLDialogElement>('dialog[data-film-dialog]');
  const frame = dialog?.querySelector<HTMLElement>('[data-film-frame]');
  const template = dialog?.querySelector<HTMLTemplateElement>('template[data-film-video]');
  // without <dialog> the links simply lead to the article's film
  if (!dialog || !frame || !template || typeof dialog.showModal !== 'function') return;
  let video: HTMLVideoElement | null = null;
  let opener: HTMLElement | null = null;
  root.querySelectorAll<HTMLAnchorElement>('a[data-film-open]').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      opener = link;
      if (!video) {
        video = template.content.querySelector('video')?.cloneNode(true) as HTMLVideoElement | null;
        if (video) frame.append(video);
      }
      dialog.showModal();
      void video?.play().catch(() => undefined);
    });
  });
  dialog.querySelector('[data-film-close]')?.addEventListener('click', () => dialog.close());
  // a click on the backdrop, outside the window, closes it too
  dialog.addEventListener('click', (e) => {
    const r = dialog.getBoundingClientRect();
    if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    video?.pause();
    opener?.focus();
  });
}
