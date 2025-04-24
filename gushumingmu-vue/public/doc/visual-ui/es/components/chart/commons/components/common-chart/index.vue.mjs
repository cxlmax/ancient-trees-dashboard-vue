import { defineComponent as p, createElementBlock as f, openBlock as h, createElementVNode as v, unref as E } from "vue";
import { cloneDeep as s } from "lodash";
import { useCommonChart as _ } from "./hooks/useCommonChart.mjs";
import { SHJDatasourceV2 as D } from "../../../../../commons/plugins/datasource/index.mjs";
import { useChart as k } from "../../hooks/useChart.mjs";
import { parseDataset as C } from "../../../../../commons/utils/parseDataset.mjs";
import { cloneSeries as L } from "../../../../../commons/utils/cloneSeries.mjs";
import { SHJParseEvent as n } from "../../../../../commons/plugins/event/index.mjs";
const S = { class: "zerov-widget" }, x = ["id"], O = /* @__PURE__ */ p({
  __name: "index",
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {},
    isMultiSeries: { type: Boolean },
    customRenderData: { type: Function }
  },
  emits: ["dataListener", "chart-click", "chart-dblclick", "chart-mousedown", "chart-mouseover", "chart-mouseout", "chart-contextmenu"],
  setup(c, { emit: i }) {
    const e = c, o = i, {
      id: u,
      setOption: a,
      chart: m,
      renderChart: d,
      renderData: l
    } = k({
      basicOption: s(e.option),
      useEvents: s(e.useEvents),
      customRenderData: (t) => {
        t = s(t), D.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: r }) => {
            try {
              if (o("dataListener", r), n.parseEvents(e.useEvents, "dataListener", r), e.customRenderData) {
                e.customRenderData(t, r, a);
                return;
              }
              t.dataset = C(s(r)), e.isMultiSeries && (t.series = L(r, t.series)), a(t);
            } catch {
              o("dataListener", null), n.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emits: o
    });
    return _(e, l, d, m), (t, r) => (h(), f("div", S, [
      v("div", {
        id: E(u),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  O as default
};
