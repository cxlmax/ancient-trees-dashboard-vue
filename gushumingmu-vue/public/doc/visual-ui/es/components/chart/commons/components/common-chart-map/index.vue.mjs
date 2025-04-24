import { defineComponent as f, createElementBlock as v, openBlock as _, createElementVNode as E, unref as k } from "vue";
import { cloneDeep as o } from "lodash";
import { useCommonChart as C } from "./hooks/useCommonChart.mjs";
import { SHJDatasourceV2 as L } from "../../../../../commons/plugins/datasource/index.mjs";
import { useChart as x } from "../../hooks/useChart.mjs";
import { SHJParseEvent as c } from "../../../../../commons/plugins/event/index.mjs";
const D = { class: "zerov-widget" }, b = ["id"], J = /* @__PURE__ */ f({
  __name: "index",
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["dataListener", "chart-click", "chart-dblclick", "chart-mousedown", "chart-mouseover", "chart-mouseout", "chart-contextmenu"],
  setup(i, { emit: d }) {
    const e = i, s = d, {
      id: u,
      setOption: n,
      chart: m,
      renderChart: p,
      renderData: l
    } = x({
      basicOption: o(e.option),
      useEvents: o(e.useEvents),
      customRenderData: (t) => {
        t = o(t), L.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: (r) => {
            try {
              s("dataListener", r.data), c.parseEvents(e.useEvents, "dataListener", r.data);
              const a = t.series.find((h) => h._sourceId === r.id);
              a && (a.data = r.data[0].data), n(t);
            } catch {
              s("dataListener", null), c.parseEvents(e.useEvents, "dataListener", null), n(t);
            }
          }
        });
      },
      emits: s
    });
    return C(e, l, p, m), (t, r) => (_(), v("div", D, [
      E("div", {
        id: k(u),
        class: "widget"
      }, null, 8, b)
    ]));
  }
});
export {
  J as default
};
