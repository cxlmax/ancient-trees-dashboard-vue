import { defineComponent as a, watch as i, createElementBlock as l, openBlock as m, createElementVNode as u } from "vue";
import { cloneDeep as c, isEqual as n } from "lodash";
import { useEcharts as h } from "./compileAndRunEcharts.mjs";
const _ = { class: "zerov-widget" }, b = a({ name: "zv-commons-echarts" }), w = /* @__PURE__ */ a({
  ...b,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {}
  },
  setup(p, { expose: f }) {
    const e = p, { iframeRef: d, renderingComponent: r, initEcharts: o } = h(e.basicOption, e.sources, e.useEvents);
    return i(() => c(e.basicOption), (s, t) => {
      !n(s, t) && r.value && o(s.code);
    }, {
      deep: !0
    }), i(() => c(e.sources), (s, t) => {
      !n(s, t) && r.value && o(e.basicOption.code);
    }, { deep: !0 }), f({
      refreshData: () => {
        o(e.basicOption.code);
      },
      refreshView: () => {
        o(e.basicOption.code);
      },
      refresh: () => {
        o(e.basicOption.code);
      }
    }), (s, t) => (m(), l("div", _, [
      u("iframe", {
        ref_key: "iframeRef",
        ref: d,
        style: { width: "100%", height: "100%", border: "0" },
        sandbox: "allow-scripts allow-same-origin"
      }, null, 512)
    ]));
  }
});
export {
  w as default
};
