import { defineComponent as m, watch as k, createElementBlock as h, openBlock as W, createElementVNode as i, ref as a, onMounted as x, onBeforeUnmount as b } from "vue";
import { cloneDeep as B, isEqual as C } from "lodash";
import E from "wavesurfer.js";
const M = { class: "wavesurfer-wrap" }, O = m({ name: "zv-media-wavesurfer" }), q = /* @__PURE__ */ m({
  ...O,
  props: {
    basicOption: {}
  },
  setup(v) {
    const f = v, p = (t) => {
      const r = a(), n = a(), o = a(), c = a(!1);
      let e;
      const d = (l) => {
        e && e.destroy(), e = E.create({
          container: r.value,
          ...l,
          url: l.url
        }), e.on("ready", () => {
          c.value = !0;
        }), e.on("click", () => {
          e.play();
        }), o.value && n.value && e && (e.on("decode", (s) => o.value.textContent = u(s)), e.on("timeupdate", (s) => n.value.textContent = u(s)));
      };
      return x(() => d(t)), b(() => {
        e && e.destroy();
      }), { wavesurRef: r, timeRef: n, durationRef: o, loadingStatus: c, initWavesurfer: d };
    }, u = (t) => {
      const r = Math.floor(t / 60), o = `0${Math.round(t) % 60}`.slice(-2);
      return `${r}:${o}`;
    }, { wavesurRef: R, timeRef: _, durationRef: w, initWavesurfer: y } = p(f.basicOption);
    return k(() => B(f.basicOption), (t, r) => {
      C(t, r) || y(t);
    }, {
      deep: !0
    }), (t, r) => (W(), h("div", M, [
      i("div", {
        ref_key: "wavesurRef",
        ref: R,
        class: "wavesurfer"
      }, [
        i("div", {
          ref_key: "timeRef",
          ref: _,
          class: "time"
        }, "0:00", 512),
        i("div", {
          ref_key: "durationRef",
          ref: w,
          class: "duration"
        }, "0:00", 512)
      ], 512)
    ]));
  }
});
export {
  q as default
};
