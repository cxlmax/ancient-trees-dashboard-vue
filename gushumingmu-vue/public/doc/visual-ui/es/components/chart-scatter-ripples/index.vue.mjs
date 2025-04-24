import { defineComponent as u, watch as i, createElementBlock as v, openBlock as E, createElementVNode as _, unref as b } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import { SHJDatasourceV2 as g } from "../../commons/plugins/datasource/index.mjs";
import { useChart as D } from "../../commons/core/useChart.mjs";
import { parseOtherData as k } from "../../commons/utils/parseOtherData.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-scatter-ripples" }), S = /* @__PURE__ */ u({
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
  setup(p, { expose: m, emit: d }) {
    const e = p, l = d, {
      id: h,
      setOption: a,
      chart: f,
      renderChart: c,
      renderData: o
    } = D({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), g.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", s), a(k(s, t));
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: l
    });
    return i(() => e.sources, () => {
      e.sources && e.sources.length > 0 && o(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      O(t, s) || c(t);
    }, {
      deep: !0
    }), m({
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
        id: b(h),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  S as default
};
