import { defineComponent as v, watch as D, ref as a, createElementBlock as w, openBlock as T, unref as u, onMounted as z, nextTick as B } from "vue";
import { nanoid as H } from "nanoid";
import { cloneDeep as J, isEqual as L } from "lodash";
import { SHJDatasourceV2 as R } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const S = ["poster", "autoplay", "controls", "loop", "muted", "src"], q = v({ name: "zv-media-video-dynamic" }), G = /* @__PURE__ */ v({
  ...q,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
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
  setup(c, { expose: l, emit: m }) {
    const e = c, E = () => {
      const o = a(""), r = a(H()), d = () => {
        R.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: p }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", p), o.value = p[0].data[0].src;
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null);
            }
          }
        });
      };
      return z(() => B(() => d())), { init: d, src: o, key: r };
    }, { init: i, src: y, key: f } = E();
    D(() => J(e.sources), (o, r) => {
      L(o, r) || i();
    }, { deep: !0 });
    const t = a(), s = m, g = () => {
      s("on-video-progress"), n.parseEvents(e.useEvents, "on-video-progress");
    }, V = () => {
      s("on-video-play"), n.parseEvents(e.useEvents, "on-video-play");
    }, h = () => {
      s("on-video-pause"), n.parseEvents(e.useEvents, "on-video-pause");
    }, P = () => {
      s("on-video-ended"), n.parseEvents(e.useEvents, "on-video-ended");
    }, k = () => {
      s("on-video-playing"), n.parseEvents(e.useEvents, "on-video-playing");
    }, b = () => {
      s("on-video-timeupdate"), n.parseEvents(e.useEvents, "on-video-timeupdate");
    }, O = () => {
      s("on-video-error"), n.parseEvents(e.useEvents, "on-video-error");
    }, _ = () => {
      s("on-video-volumechange"), n.parseEvents(e.useEvents, "on-video-volumechange");
    };
    return l({
      /** 开始播放 */
      play: () => {
        t.value && t.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        t.value && t.value.pause();
      },
      refresh: () => i(),
      refreshView: () => i(),
      refreshData: () => i()
    }), (o, r) => (T(), w("video", {
      ref_key: "videoRef",
      ref: t,
      key: u(f),
      poster: o.basicOption.poster,
      autoplay: o.basicOption.autoplay,
      controls: o.basicOption.controls,
      loop: o.basicOption.loop,
      muted: o.basicOption.muted,
      class: "zerov-widget-video",
      src: u(y),
      onProgress: g,
      onPlay: V,
      onEnded: P,
      onPlaying: k,
      onPause: h,
      onTimeupdate: b,
      onError: O,
      onVolumechange: _
    }, null, 40, S));
  }
});
export {
  G as default
};
