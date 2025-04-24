import { defineComponent as a, ref as t, createElementBlock as P, openBlock as V } from "vue";
import { nanoid as b } from "nanoid";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const h = ["poster", "autoplay", "controls", "loop", "muted", "src"], O = a({ name: "zv-media-video" }), R = /* @__PURE__ */ a({
  ...O,
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
  setup(d, { expose: r, emit: p }) {
    const e = d, v = t(b()), i = t(), o = p, u = () => {
      o("on-video-progress"), n.parseEvents(e.useEvents, "on-video-progress");
    }, l = () => {
      o("on-video-play"), n.parseEvents(e.useEvents, "on-video-play");
    }, c = () => {
      o("on-video-pause"), n.parseEvents(e.useEvents, "on-video-pause");
    }, m = () => {
      o("on-video-ended"), n.parseEvents(e.useEvents, "on-video-ended");
    }, E = () => {
      o("on-video-playing"), n.parseEvents(e.useEvents, "on-video-playing");
    }, y = () => {
      o("on-video-timeupdate"), n.parseEvents(e.useEvents, "on-video-timeupdate");
    }, g = () => {
      o("on-video-error"), n.parseEvents(e.useEvents, "on-video-error");
    }, f = () => {
      o("on-video-volumechange"), n.parseEvents(e.useEvents, "on-video-volumechange");
    };
    return r({
      /** 开始播放 */
      play: () => {
        i.value && i.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        i.value && i.value.pause();
      }
    }), (s, k) => (V(), P("video", {
      ref_key: "videoRef",
      ref: i,
      key: v.value,
      poster: s.basicOption.poster,
      autoplay: s.basicOption.autoplay,
      controls: s.basicOption.controls,
      loop: s.basicOption.loop,
      muted: s.basicOption.muted,
      class: "zerov-widget-video",
      src: s.basicOption.src,
      onProgress: u,
      onPlay: l,
      onEnded: m,
      onPlaying: E,
      onPause: c,
      onTimeupdate: y,
      onError: g,
      onVolumechange: f
    }, null, 40, h));
  }
});
export {
  R as default
};
