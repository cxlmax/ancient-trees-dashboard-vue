import { defineComponent as s, createBlock as o, openBlock as u, mergeProps as r } from "vue";
import n from "../../../commons/components/common-chart/index.vue.mjs";
const t = s({ name: "zv-chart-bar-stack-line" }), m = /* @__PURE__ */ s({
  ...t,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(i) {
    return (e, a) => (u(), o(n, r({
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
