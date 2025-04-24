import { defineComponent as r, watch as O, createElementBlock as M, openBlock as _, ref as R, onMounted as S } from "vue";
import d from "hls.js";
import { cloneDeep as T, isEqual as k } from "lodash";
import { SHJParseEvent as s } from "../../commons/plugins/event/index.mjs";
const w = ["poster", "autoplay", "controls", "loop", "muted"], z = r({ name: "zv-media-m3u8" }), q = /* @__PURE__ */ r({
  ...z,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {}
  },
  emits: [
    "on-video-progress",
    "on-video-play",
    "on-video-pause",
    "on-video-ended",
    "on-video-playing",
    "on-video-timeupdate",
    "on-video-error",
    "on-video-volumechange"
  ],
  setup(v, { expose: u, emit: l }) {
    const o = v, c = () => {
      const e = R(), t = (a) => {
        if (a)
          if (d.isSupported()) {
            const p = new d();
            p.loadSource(a), p.attachMedia(e.value), p.on(d.Events.MANIFEST_PARSED, () => {
              o.basicOption.autoplay && e.value.play();
            });
          } else e.value.canPlayType("application/vnd.apple.mpegurl") && (e.value.src = a);
      };
      return S(() => t(o.basicOption.src)), { videoRef: e, initM3u8Video: t };
    }, { videoRef: i, initM3u8Video: m } = c();
    O(() => T(o.basicOption), (e, t) => {
      k(e, t) || m(e.src);
    }, { deep: !0 });
    const n = l, E = () => {
      n("on-video-progress"), s.parseEvents(o.useEvents, "on-video-progress");
    }, f = () => {
      n("on-video-play"), s.parseEvents(o.useEvents, "on-video-play");
    }, y = () => {
      n("on-video-pause"), s.parseEvents(o.useEvents, "on-video-pause");
    }, g = () => {
      n("on-video-ended"), s.parseEvents(o.useEvents, "on-video-ended");
    }, V = () => {
      n("on-video-playing"), s.parseEvents(o.useEvents, "on-video-playing");
    }, P = () => {
      n("on-video-timeupdate"), s.parseEvents(o.useEvents, "on-video-timeupdate");
    }, h = () => {
      n("on-video-error"), s.parseEvents(o.useEvents, "on-video-error");
    }, b = () => {
      n("on-video-volumechange"), s.parseEvents(o.useEvents, "on-video-volumechange");
    };
    return u({
      /** 开始播放 */
      play: () => {
        i.value && i.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        i.value && i.value.pause();
      }
    }), (e, t) => (_(), M("video", {
      ref_key: "videoRef",
      ref: i,
      class: "zerov-widget",
      poster: e.basicOption.poster,
      autoplay: e.basicOption.autoplay,
      controls: e.basicOption.controls,
      loop: e.basicOption.loop,
      muted: e.basicOption.muted,
      onProgress: E,
      onPlay: f,
      onEnded: g,
      onPlaying: V,
      onPause: y,
      onTimeupdate: P,
      onError: h,
      onVolumechange: b
    }, null, 40, w));
  }
});
export {
  q as default
};
