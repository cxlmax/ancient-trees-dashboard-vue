import { defineComponent as p, watch as i, createElementBlock as E, openBlock as _, createElementVNode as b, unref as O } from "vue";
import { cloneDeep as r, isEqual as g } from "lodash";
import { SHJDatasourceV2 as k } from "../../commons/plugins/datasource/index.mjs";
import { parseOtherData as D } from "../../commons/utils/parseOtherData.mjs";
import { useChart as w } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as u } from "../../commons/plugins/event/index.mjs";
const x = { class: "zerov-widget" }, C = ["id"], V = p({ name: "zv-chart-other-parallel-mul" }), L = /* @__PURE__ */ p({
  ...V,
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
  setup(l, { expose: m, emit: d }) {
    const e = l, h = d, {
      id: f,
      setOption: o,
      chart: v,
      renderChart: a,
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
              u.parseEvents(e.useEvents, "dataListener", s), t.legend.data = s.map((n) => n.key), o(D(r(s), t));
            } catch {
              u.parseEvents(e.useEvents, "dataListener", null), o(t);
            }
          }
        });
      },
      emit: h
    });
    return i(() => e.sources, () => {
      c(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      g(t, s) || a(t);
    }, {
      deep: !0
    }), m({
      getEchartsInstance: () => v.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && a(e.basicOption), c(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && a(e.basicOption);
      },
      refreshData: () => {
        c(e.basicOption);
      }
    }), (t, s) => (_(), E("div", x, [
      b("div", {
        id: O(f),
        class: "widget"
      }, null, 8, C)
    ]));
  }
});
export {
  L as default
};
