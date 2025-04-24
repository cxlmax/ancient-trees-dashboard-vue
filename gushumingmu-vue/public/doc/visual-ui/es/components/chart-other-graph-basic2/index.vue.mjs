import { defineComponent as u, watch as i, createElementBlock as b, openBlock as v, createElementVNode as E, unref as O } from "vue";
import { cloneDeep as r, isEqual as _ } from "lodash";
import { SHJDatasourceV2 as g } from "../../commons/plugins/datasource/index.mjs";
import { useChart as D } from "../../commons/core/useChart.mjs";
import { parseOtherData as k } from "../../commons/utils/parseOtherData.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-other-graph-basic2" }), S = /* @__PURE__ */ u({
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
  setup(p, { expose: h, emit: m }) {
    const e = p, d = m, {
      id: l,
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
              n.parseEvents(e.useEvents, "dataListener", s), a(k(r(s), e.basicOption));
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: d
    });
    return i(() => e.sources, () => {
      e.sources && e.sources.length > 0 && o(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      _(t, s) || c(t);
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
    }), (t, s) => (v(), b("div", w, [
      E("div", {
        id: O(l),
        class: "widget"
      }, null, 8, x)
    ]));
  }
});
export {
  S as default
};
