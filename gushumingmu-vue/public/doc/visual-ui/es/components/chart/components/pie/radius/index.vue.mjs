import { defineComponent as s, createBlock as o, openBlock as u, mergeProps as r } from "vue";
import i from "../../../commons/components/common-chart/index.vue.mjs";
const n = s({ name: "zv-chart-pie-radius" }), m = /* @__PURE__ */ s({
  ...n,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(t) {
    return (e, p) => (u(), o(i, r({
      option: e.basicOption,
      sources: e.sources,
      "use-events": e.useEvents,
      uuid: e.uuid,
      "is-multi-series": !1
    }, e.$attrs), null, 16, ["option", "sources", "use-events", "uuid"]));
  }
});
export {
  m as default
};
