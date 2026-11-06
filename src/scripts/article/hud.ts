// The layer HUD (LayerHud.astro) lights the layer of the chapter whose stage is pinned; hidden elsewhere. In the
// documents chapter every layer is lit ("all") and each landing page pulses the layer that produced it.
import type { ChapterDetail } from '../scrolly';

export function initHud() {
  const hud = document.querySelector<HTMLElement>('[data-hud]');
  if (!hud) return;
  document.addEventListener('scrolly:chapter', (e) => {
    const { layer } = (e as CustomEvent<ChapterDetail>).detail;
    if (layer) hud.dataset.layer = layer;
    else delete hud.dataset.layer;
  });
  document.addEventListener('docs:land', (e) => {
    const plate = hud.querySelector<SVGElement>(`[data-hud-layer="${(e as CustomEvent<string>).detail}"]`);
    if (!plate) return;
    plate.classList.remove('pulse');
    void plate.getBoundingClientRect();
    plate.classList.add('pulse');
  });
}
