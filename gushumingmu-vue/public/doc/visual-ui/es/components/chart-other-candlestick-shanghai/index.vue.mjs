import { defineComponent as u, watch as n, createElementBlock as v, openBlock as E, createElementVNode as _, unref as b } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import { SHJDatasourceV2 as g } from "../../commons/plugins/datasource/index.mjs";
import { useChart as k } from "../../commons/core/useChart.mjs";
import { parseOtherData as D } from "../../commons/utils/parseOtherData.mjs";
import { SHJParseEvent as i } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-other-candlestick-shanghai" }), S = /* @__PURE__ */ u({
  ...C,
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
  setup(p, { expose: h, emit: d }) {
    const e = p, m = d, {
      id: l,
      setOption: a,
      chart: f,
      renderChart: c,
      renderData: o
    } = k({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), g.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              i.parseEvents(e.useEvents, "dataListener", s), a(D(r(s), t));
            } catch {
              i.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: m
    });
    return n(() => e.sources, () => {
      e.sources && e.sources.length > 0 && o(e.basicOption);
    }, {
      deep: !0
    }), n(() => r(e.basicOption), (t, s) => {
      O(t, s) || c(t);
    }, {
      deep: !0
    }), h({
      getEchartsInstance: () => f.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption), o(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption);
      },
      refreshData: () => {
        o(e.basicOption);
      }
    }), (t, s) => (E(), v("div", w, [
      _("div", {
        id: b(l),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  S as default
};
