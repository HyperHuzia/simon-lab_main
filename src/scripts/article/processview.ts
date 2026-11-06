// ProcessView stage (ProcessViewStage.astro): on pv-registers the three registers switch once, like tabs (materials,
// pipelines, instruments, then it stays on instruments; coming back up or a calm reader gets instruments at once), and
// the batch chart follows the pv-sim clip (the clips themselves are started and held by clips.ts).
import { prefs, watch } from '../scrolly';
import { createSimChart } from './sim-chart';

const REGISTER_MS = 1800;

function processView(stage: HTMLElement, pv: HTMLElement) {
  const registers = pv.querySelector<HTMLElement>('[data-registers]');
  const simClip = pv.querySelector<HTMLVideoElement>('video[data-clip="pv-sim"]');
  const chart = createSimChart(pv.querySelector<HTMLElement>('[data-sim]'));
  let cycle = 0;

  const setRegister = (i: number) => {
    if (registers) registers.dataset.reg = String(i % 3);
  };

  watch(stage, {
    enter({ state, direction }) {
      clearInterval(cycle);
      if (state === 'pv-registers') {
        if (prefs.calm || direction < 0) setRegister(2);
        else {
          let i = 0;
          setRegister(i);
          cycle = window.setInterval(() => {
            setRegister(++i);
            if (i >= 2) clearInterval(cycle);
          }, REGISTER_MS);
        }
      }

      if (state === 'pv-sim') chart?.start(simClip, direction, prefs.calm);
      else if (state === 'pv-plc') chart?.finish();
      else chart?.stop();
    },
    leave({ state }) {
      if (state === 'pv-registers') clearInterval(cycle);
    },
  });
}

export function initProcessView(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-stage] [data-pv]').forEach((pv) => {
    const stage = pv.closest<HTMLElement>('[data-stage]');
    if (stage) processView(stage, pv);
  });
}
