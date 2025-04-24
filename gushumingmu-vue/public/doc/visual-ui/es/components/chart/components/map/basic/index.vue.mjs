import { defineComponent as s, createBlock as o, openBlock as u, mergeProps as n } from "vue";
import r from "../../../commons/components/common-chart-map/index.vue.mjs";
const t = s({ name: "zv-chart-map-basic" }), m = /* @__PURE__ */ s({
  ...t,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(i) {
    return (e, p) => (u(), o(r, n({
      option: e.basicOption,
      sources: e.sources,
      "use-events": e.useEvents,
      uuid: e.uuid
    }, e.$attrs), null, 16, ["option", "sources", "use-events", "uuid"]));
  }
});
export {
  m as default
};
