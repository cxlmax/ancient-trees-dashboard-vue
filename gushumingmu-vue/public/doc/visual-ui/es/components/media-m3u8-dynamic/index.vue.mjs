import { defineComponent as E, watch as l, createElementBlock as D, openBlock as T, unref as H, ref as d, onMounted as z } from "vue";
import u from "hls.js";
import { cloneDeep as c, isEqual as m } from "lodash";
import { nanoid as A } from "nanoid";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
import { SHJDatasourceV2 as B } from "../../commons/plugins/datasource/index.mjs";
const I = ["poster", "autoplay", "controls", "loop", "muted"], J = E({ name: "zv-media-m3u8-dynamic" }), G = /* @__PURE__ */ E({
  ...J,
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
  setup(f, { expose: y, emit: g }) {
    const e = f, V = () => {
      const o = d(), s = d(""), w = d(A()), p = () => {
        B.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: v }) => {
            try {
              if (n.parseEvents(e.useEvents, "dataListener", v), s.value = v[0].data[0].src, s.value)
                if (u.isSupported()) {
                  const r = new u();
                  r.loadSource(s.value), r.attachMedia(o.value), r.on(u.Events.MANIFEST_PARSED, () => {
                    e.basicOption.autoplay && o.value.play();
                  });
                } else o.value.canPlayType("application/vnd.apple.mpegurl") && (o.value.src = s.value);
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null);
            }
          }
        });
      };
      return z(() => p()), { key: w, videoRef: o, initM3u8Video: p };
    }, { key: h, videoRef: i, initM3u8Video: a } = V();
    l(() => c(e.basicOption), (o, s) => {
      m(o, s) || a();
    }, { deep: !0 }), l(() => c(e.sources), (o, s) => {
      m(o, s) || a();
    }, { deep: !0 });
    const t = g, P = () => {
      t("on-video-progress"), n.parseEvents(e.useEvents, "on-video-progress");
    }, b = () => {
      t("on-video-play"), n.parseEvents(e.useEvents, "on-video-play");
    }, k = () => {
      t("on-video-pause"), n.parseEvents(e.useEvents, "on-video-pause");
    }, O = () => {
      t("on-video-ended"), n.parseEvents(e.useEvents, "on-video-ended");
    }, M = () => {
      t("on-video-playing"), n.parseEvents(e.useEvents, "on-video-playing");
    }, _ = () => {
      t("on-video-timeupdate"), n.parseEvents(e.useEvents, "on-video-timeupdate");
    }, S = () => {
      t("on-video-error"), n.parseEvents(e.useEvents, "on-video-error");
    }, R = () => {
      t("on-video-volumechange"), n.parseEvents(e.useEvents, "on-video-volumechange");
    };
    return y({
      /** 开始播放 */
      play: () => {
        i.value && i.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        i.value && i.value.pause();
      },
      refresh: () => a(),
      refreshView: () => a(),
      refreshData: () => a()
    }), (o, s) => (T(), D("video", {
      key: H(h),
      ref_key: "videoRef",
      ref: i,
      class: "zerov-widget",
      poster: o.basicOption.poster,
      autoplay: o.basicOption.autoplay,
      controls: o.basicOption.controls,
      loop: o.basicOption.loop,
      muted: o.basicOption.muted,
      onProgress: P,
      onPlay: b,
      onEnded: O,
      onPlaying: M,
      onPause: k,
      onTimeupdate: _,
      onError: S,
      onVolumechange: R
    }, null, 40, I));
  }
});
export {
  G as default
};
