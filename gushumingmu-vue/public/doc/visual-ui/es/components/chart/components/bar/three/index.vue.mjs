import { defineComponent as s, createBlock as o, openBlock as r, mergeProps as u } from "vue";
import t from "../../../commons/components/common-chart/index.vue.mjs";
const n = s({ name: "zv-chart-bar-three" }), m = /* @__PURE__ */ s({
  ...n,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(i) {
    return (e, p) => (r(), o(t, u({
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
