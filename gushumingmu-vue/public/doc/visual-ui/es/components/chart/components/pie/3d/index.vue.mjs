import { defineComponent as o, createBlock as u, openBlock as i, mergeProps as a } from "vue";
import "echarts-gl";
import { getPie3D as p } from "./renderPie3d.mjs";
import c from "../../../commons/components/common-chart/index.vue.mjs";
const m = o({ name: "zv-chart-pie-3d" }), O = /* @__PURE__ */ o({
  ...m,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(d) {
    const t = (e, s, r) => {
      const n = p(s[0].data, e);
      r(n, "canvas");
    };
    return (e, s) => (i(), u(c, a({
      option: e.basicOption,
      sources: e.sources,
      "use-events": e.useEvents,
      uuid: e.uuid,
      "is-multi-series": !1,
      "custom-render-data": t
    }, e.$attrs), null, 16, ["option", "sources", "use-events", "uuid"]));
  }
});
export {
  O as default
};
