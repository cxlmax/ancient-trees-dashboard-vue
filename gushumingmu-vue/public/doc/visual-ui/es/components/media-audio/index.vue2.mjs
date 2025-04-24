import { defineComponent as p, ref as i, watch as w, createElementBlock as A, openBlock as O, withDirectives as b, createElementVNode as u, vShow as L, normalizeClass as k, createStaticVNode as F } from "vue";
import { nanoid as l } from "nanoid";
import { cloneDeep as x, isEqual as D } from "lodash";
import { SHJParseEvent as a } from "../../commons/plugins/event/index.mjs";
const S = ["autoplay", "loop", "muted"], V = ["src"], B = /* @__PURE__ */ F('<svg width="100%" height="100%" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a535f752><circle cx="37.5" cy="37.5" r="37.5" fill="#3D9CFF" fill-opacity="0.1" data-v-a535f752></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M51.3268 20.4054H33.1254C32.2255 20.4 31.3554 20.728 30.6832 21.3264C30.0109 21.9247 29.5841 22.7508 29.4852 23.6453L27.0161 44.2762C26.1001 43.746 25.053 43.4598 23.9763 43.4598C22.3672 43.4598 20.824 44.099 19.6862 45.2368C18.5484 46.3746 17.9092 47.9178 17.9092 49.5269C17.9092 51.136 18.5484 52.6792 19.6862 53.817C20.824 54.9548 22.3672 55.594 23.9763 55.594C25.5854 55.594 27.1286 54.9548 28.2664 53.817C29.3529 52.7305 29.9848 51.2743 30.0395 49.744L30.0555 49.746L32.361 31.3141H50.5623L48.8975 44.2994C47.9722 43.7543 46.9103 43.4598 45.818 43.4598C44.2089 43.4598 42.6657 44.099 41.5279 45.2368C40.3901 46.3746 39.7509 47.9178 39.7509 49.5269C39.7509 51.136 40.3901 52.6792 41.5279 53.817C42.6657 54.9548 44.2089 55.594 45.818 55.594C47.4271 55.594 48.9703 54.9548 50.1081 53.817C51.1946 52.7305 51.8265 51.2743 51.8812 49.744L51.8971 49.746L54.9792 24.434C55.034 23.9233 54.9801 23.4069 54.8211 22.9185C54.6621 22.4301 54.4015 21.981 54.0566 21.6005C53.7116 21.22 53.29 20.9168 52.8196 20.7108C52.3491 20.5049 51.8403 20.4008 51.3268 20.4054Z" fill="url(#paint0_linear_534:1941)" data-v-a535f752></path><defs data-v-a535f752><linearGradient id="paint0_linear_534:1941" x1="17.9092" y1="37.9996" x2="56.4836" y2="37.9996" gradientUnits="userSpaceOnUse" data-v-a535f752><stop stop-color="#3D9CFF" data-v-a535f752></stop><stop offset="1" stop-color="#43E8F3" data-v-a535f752></stop></linearGradient></defs></svg>', 1), H = [
  B
], z = p({ name: "zv-media-audio" }), U = /* @__PURE__ */ p({
  ...z,
  props: {
    basicOption: {},
    useEvents: {}
  },
  emits: [
    "on-audio-progress",
    "on-audio-play",
    "on-audio-pause",
    "on-audio-ended",
    "on-audio-playing",
    "on-audio-timeupdate",
    "on-audio-error",
    "on-audio-volumechange"
  ],
  setup(c, { expose: v, emit: f }) {
    const e = c, d = i(l()), n = i(!1);
    w(() => x(e.basicOption), (s, r) => {
      D(s, r) || (d.value = l());
    }, {
      deep: !0
    });
    const t = i(), o = f, m = () => {
      o("on-audio-progress"), a.parseEvents(e.useEvents, "on-audio-progress"), n.value = !0;
    }, E = () => {
      o("on-audio-play"), a.parseEvents(e.useEvents, "on-audio-play"), n.value = !0;
    }, y = () => {
      o("on-audio-pause"), a.parseEvents(e.useEvents, "on-audio-pause"), n.value = !1;
    }, C = () => {
      o("on-audio-ended"), a.parseEvents(e.useEvents, "on-audio-ended"), n.value = !1;
    }, g = () => {
      o("on-audio-playing"), a.parseEvents(e.useEvents, "on-audio-playing");
    }, h = () => {
      o("on-audio-timeupdate"), a.parseEvents(e.useEvents, "on-audio-timeupdate");
    }, _ = () => {
      o("on-audio-error"), a.parseEvents(e.useEvents, "on-audio-error"), n.value = !1;
    }, P = () => {
      o("on-audio-volumechange"), a.parseEvents(e.useEvents, "on-audio-volumechange");
    };
    return v({
      /** 开始播放 */
      play: () => {
        t.value && t.value.play();
      },
      /** 暂停播放 */
      pause: () => {
        t.value && t.value.pause();
      }
    }), (s, r) => (O(), A("div", {
      key: d.value,
      class: "audio"
    }, [
      b(u("audio", {
        ref_key: "audioRef",
        ref: t,
        autoplay: s.basicOption.autoplay,
        loop: s.basicOption.loop,
        controls: !1,
        muted: s.basicOption.muted,
        onProgress: m,
        onPlay: E,
        onEnded: C,
        onPlaying: g,
        onPause: y,
        onTimeupdate: h,
        onError: _,
        onVolumechange: P
      }, [
        u("source", {
          src: s.basicOption.src
        }, null, 8, V)
      ], 40, S), [
        [L, !1]
      ]),
      u("div", {
        class: k(["audio-svg", {
          animation: n.value
        }])
      }, H, 2)
    ]));
  }
});
export {
  U as default
};
