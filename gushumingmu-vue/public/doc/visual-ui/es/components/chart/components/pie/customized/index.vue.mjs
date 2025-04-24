import { defineComponent as s, createBlock as o, openBlock as u, mergeProps as r } from "vue";
import t from "../../../commons/components/common-chart/index.vue.mjs";
const i = s({ name: "zv-chart-pie-customized" }), m = /* @__PURE__ */ s({
  ...i,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(n) {
    return (e, p) => (u(), o(t, r({
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
