import { defineComponent as u, watch as i, createElementBlock as v, openBlock as b, createElementVNode as E, unref as _ } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import { useChart as g } from "../../commons/core/useChart.mjs";
import { parseDataset as D } from "../../commons/utils/parseDataset.mjs";
import { cloneSeries as k } from "../../commons/utils/cloneSeries.mjs";
import { SHJDatasourceV2 as w } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const x = { class: "zerov-widget" }, C = ["id"], S = u({ name: "zv-chart-scatter-basic" }), y = /* @__PURE__ */ u({
  ...S,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: [
    "chart-click",
    "chart-dblclick",
    "chart-mousedown",
    "chart-mouseover",
    "chart-mouseout",
    "chart-contextmenu"
  ],
  setup(m, { expose: p, emit: d }) {
    const e = m, l = d, {
      id: h,
      setOption: o,
      chart: f,
      renderChart: c,
      renderData: a
    } = g({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (s) => {
        s = r(s), w.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: t }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", t), s.dataset = D(r(t)), s.series = k(t, s.series), o(s);
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null), o(s);
            }
          }
        });
      },
      emit: l
    });
    return i(() => e.sources, () => {
      e.sources && e.sources.length > 0 && a(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (s, t) => {
      O(s, t) || c(s);
    }, {
      deep: !0
    }), p({
      getEchartsInstance: () => f.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption), a(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption);
      },
      refreshData: () => {
        a(e.basicOption);
      }
    }), (s, t) => (b(), v("div", x, [
      E("div", {
        id: _(h),
        class: "widget"
      }, null, 8, C)
    ]));
  }
});
export {
  y as default
};
