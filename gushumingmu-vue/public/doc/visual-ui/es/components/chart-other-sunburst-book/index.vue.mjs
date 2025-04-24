import { defineComponent as u, watch as n, createElementBlock as b, openBlock as v, createElementVNode as E, unref as O } from "vue";
import { cloneDeep as r, isEqual as _ } from "lodash";
import { SHJDatasourceV2 as k } from "../../commons/plugins/datasource/index.mjs";
import { parseOtherData as D } from "../../commons/utils/parseOtherData.mjs";
import { useChart as g } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as i } from "../../commons/plugins/event/index.mjs";
const w = { class: "zerov-widget" }, x = ["id"], C = u({ name: "zv-chart-other-sunburst-book" }), S = /* @__PURE__ */ u({
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
      renderChart: o,
      renderData: c
    } = g({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), k.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              i.parseEvents(e.useEvents, "dataListener", s), a(D(r(s), e.basicOption));
            } catch {
              i.parseEvents(e.useEvents, "dataListener", null), a(t);
            }
          }
        });
      },
      emit: h
    });
    return n(() => e.sources, () => {
      c(e.basicOption);
    }, {
      deep: !0
    }), n(() => r(e.basicOption), (t, s) => {
      _(t, s) || o(t);
    }, {
      deep: !0
    }), m({
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
