import { defineComponent as u, watch as n, createElementBlock as v, openBlock as E, createElementVNode as _, unref as b } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import g from "./default-option.json.mjs";
import { SHJDatasourceV2 as k } from "../../commons/plugins/datasource/index.mjs";
import { useChart as w } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as i } from "../../commons/plugins/event/index.mjs";
const D = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-other-candlestick-demo" }), S = /* @__PURE__ */ u({
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
  setup(p, { expose: d, emit: m }) {
    const e = p, l = m, {
      id: h,
      setOption: a,
      chart: f,
      renderChart: o,
      renderData: c
    } = w({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), k.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              i.parseEvents(e.useEvents, "dataListener", s), a(g);
            } catch {
              i.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: l
    });
    return n(() => e.sources, () => {
      e.sources && e.sources.length > 0 && c(e.basicOption);
    }, {
      deep: !0
    }), n(() => r(e.basicOption), (t, s) => {
      O(t, s) || o(t);
    }, {
      deep: !0
    }), d({
      getEchartsInstance: () => f.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && o(e.basicOption), c(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && o(e.basicOption);
      },
      refreshData: () => {
        c(e.basicOption);
      }
    }), (t, s) => (E(), v("div", D, [
      _("div", {
        id: b(h),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  S as default
};
