import { defineComponent as u, watch as n, createElementBlock as v, openBlock as b, createElementVNode as E, unref as _ } from "vue";
import { cloneDeep as r, isEqual as O } from "lodash";
import { SHJDatasourceV2 as g } from "../../commons/plugins/datasource/index.mjs";
import { useChart as k } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as i } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, D = ["id"], x = u({ name: "zv-chart-other-label-gauge" }), J = /* @__PURE__ */ u({
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
  setup(d, { expose: p, emit: l }) {
    const e = d, m = l, {
      id: h,
      setOption: o,
      chart: f,
      renderChart: c,
      renderData: a
    } = k({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (s) => {
        s = r(s), g.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: t }) => {
            try {
              i.parseEvents(e.useEvents, "dataListener", t), s.dataset = {
                dimensions: ["score"],
                source: r(t[0].data)
              }, o(s);
            } catch {
              i.parseEvents(e.useEvents, "dataListener", null), o(s);
            }
          }
        });
      },
      emit: m
    });
    return n(() => e.sources, () => {
      e.sources && e.sources.length > 0 && a(e.basicOption);
    }, {
      deep: !0
    }), n(() => r(e.basicOption), (s, t) => {
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
    }), (s, t) => (b(), v("div", w, [
      E("div", {
        id: _(h),
        class: "widget"
      }, null, 8, D)
    ]));
  }
});
export {
  J as default
};
