// Stage clips, for every chapter: a video[data-clip] inside a [data-look] layer plays while that look is the stage's
// state (lazy-video.ts gates loading, visibility and the two-decoder limit). Moving forward into the state restarts
// the clip; coming back up holds its last frame instead of replaying it.
import { refresh } from '../lazy-video';
import { watch } from '../scrolly';

function stageClips(stage: HTMLElement) {
  const clips = new Map<HTMLVideoElement, string>();
  stage.querySelectorAll<HTMLVideoElement>('video[data-clip]').forEach((v) => {
    const look = v.closest<HTMLElement>('[data-look]')?.dataset.look;
    if (look) clips.set(v, look);
  });
  if (!clips.size) return;
  watch(stage, {
    enter({ state, direction }) {
      clips.forEach((look, video) => {
        const on = look === state;
        if (on && direction > 0) {
          video.removeAttribute('data-ended');
          if (video.readyState > 0) video.currentTime = 0;
        } else if (on) {
          video.setAttribute('data-ended', '');
          if (video.readyState > 0 && Number.isFinite(video.duration)) video.currentTime = Math.max(0, video.duration - 0.05);
        }
        video.toggleAttribute('data-active', on);
      });
      refresh();
    },
  });
}

export function initStageClips(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-stage]').forEach(stageClips);
}
