import { defineComponent as r, createBlock as a, openBlock as c, mergeProps as m } from "vue";
import { cloneDeep as t } from "lodash";
import p from "../../../commons/components/common-chart/index.vue.mjs";
import { parseDataset as o } from "../../../../../commons/utils/parseDataset.mjs";
const l = r({ name: "zv-chart-pie-index" }), b = /* @__PURE__ */ r({
  ...l,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(d) {
    const u = (e, s, n) => {
      const i = t(e.title.text);
      e.dataset = o(t(s)), e.title.text = (o(t(s)).source[0][o(t(s)).dimensions[1]] || 0) + i, n(e);
    };
    return (e, s) => (c(), a(p, m({
      option: e.basicOption,
      sources: e.sources,
      "use-events": e.useEvents,
      uuid: e.uuid,
      "is-multi-series": !1,
      "custom-render-data": u
    }, e.$attrs), null, 16, ["option", "sources", "use-events", "uuid"]));
  }
});
export {
  b as default
};
