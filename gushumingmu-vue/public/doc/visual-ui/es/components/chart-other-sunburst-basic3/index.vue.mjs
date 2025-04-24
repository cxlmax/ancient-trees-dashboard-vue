import { defineComponent as u, watch as i, createElementBlock as b, openBlock as v, createElementVNode as E, unref as O } from "vue";
import { cloneDeep as r, isEqual as _ } from "lodash";
import { SHJDatasourceV2 as D } from "../../commons/plugins/datasource/index.mjs";
import { parseOtherData as g } from "../../commons/utils/parseOtherData.mjs";
import { useChart as k } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-other-sunburst-basic3" }), S = /* @__PURE__ */ u({
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
    const e = p, h = d, {
      id: l,
      setOption: a,
      chart: f,
      renderChart: c,
      renderData: o
    } = k({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), D.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", s), a(g(r(s), e.basicOption));
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: h
    });
    return i(() => e.sources, () => {
      o(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      _(t, s) || c(t);
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
