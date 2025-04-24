import { defineComponent as p, watch as O, createElementBlock as _, openBlock as F, ref as R, onMounted as k } from "vue";
import { cloneDeep as w, isEqual as z } from "lodash";
import d from "flv.js";
import { SHJParseEvent as s } from "../../commons/plugins/event/index.mjs";
const B = ["poster", "autoplay", "controls", "loop", "muted"], M = p({ name: "zv-media-flv" }), C = /* @__PURE__ */ p({
  ...M,
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
  setup(v, { expose: l, emit: u }) {
    const e = v, c = () => {
      const o = R(), t = (r) => {
        if (r && d.isSupported())
          try {
            const a = d.createPlayer({
              type: "flv",
              url: r
            });
            a.attachMediaElement(o.value), a.load(), e.basicOption.autoplay && a.play();
          } catch {
          }
      };
      return k(() => t(e.basicOption.src)), { videoRef: o, initFlvVideo: t };
    }, { videoRef: i, initFlvVideo: m } = c();
    O(() => w(e.basicOption), (o, t) => {
      z(o, t) || m(o.src);
    }, { deep: !0 });
    const n = u, f = () => {
      n("on-video-progress"), s.parseEvents(e.useEvents, "on-video-progress");
    }, E = () => {
      n("on-video-play"), s.parseEvents(e.useEvents, "on-video-play");
    }, y = () => {
      n("on-video-pause"), s.parseEvents(e.useEvents, "on-video-pause");
    }, g = () => {
      n("on-video-ended"), s.parseEvents(e.useEvents, "on-video-ended");
    }, V = () => {
      n("on-video-playing"), s.parseEvents(e.useEvents, "on-video-playing");
    }, P = () => {
      n("on-video-timeupdate"), s.parseEvents(e.useEvents, "on-video-timeupdate");
    }, h = () => {
      n("on-video-error"), s.parseEvents(e.useEvents, "on-video-error");
    }, b = () => {
      n("on-video-volumechange"), s.parseEvents(e.useEvents, "on-video-volumechange");
    };
    return l({
      /** 开始播放 */
      play: () => {
        i.value && i.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        i.value && i.value.pause();
      }
    }), (o, t) => (F(), _("video", {
      ref_key: "videoRef",
      ref: i,
      class: "zerov-widget",
      poster: o.basicOption.poster,
      autoplay: o.basicOption.autoplay,
      controls: o.basicOption.controls,
      loop: o.basicOption.loop,
      muted: o.basicOption.muted,
      onProgress: f,
      onPlay: E,
      onEnded: g,
      onPlaying: V,
      onPause: y,
      onTimeupdate: P,
      onError: h,
      onVolumechange: b
    }, null, 40, B));
  }
});
export {
  C as default
};
