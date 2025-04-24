import { defineComponent as u, watch as i, createElementBlock as v, openBlock as b, createElementVNode as E, unref as _ } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import { SHJDatasourceV2 as g } from "../../commons/plugins/datasource/index.mjs";
import { useChart as k } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, D = ["id"], x = u({ name: "zv-chart-other-treemap-basic" }), J = /* @__PURE__ */ u({
  ...x,
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
    const e = p, h = m, {
      id: l,
      setOption: o,
      chart: f,
      renderChart: c,
      renderData: a
    } = k({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), g.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", s), t.series[0].data = r(s[0].data), o(t);
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null), o(t);
            }
          }
        });
      },
      emit: h
    });
    return i(() => e.sources, () => {
      a(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      O(t, s) || c(t);
    }, {
      deep: !0
    }), d({
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
    }), (t, s) => (b(), v("div", w, [
      E("div", {
        id: _(l),
        class: "widget"
      }, null, 8, D)
    ]));
  }
});
export {
  J as default
};
