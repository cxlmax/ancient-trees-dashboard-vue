import { defineComponent as p, watch as d, createElementBlock as b, openBlock as O, createElementVNode as g, unref as k } from "vue";
import { cloneDeep as r, isArray as w, isEqual as x } from "lodash";
import { SHJDatasourceV2 as D } from "../../commons/plugins/datasource/index.mjs";
import { useChart as y } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as h } from "../../commons/plugins/event/index.mjs";
const C = { class: "zerov-widget" }, V = ["id"], z = p({ name: "zv-chart-other-theme-river" }), q = /* @__PURE__ */ p({
  ...z,
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
  setup(l, { expose: m, emit: f }) {
    const e = l, v = f, {
      id: E,
      setOption: i,
      chart: _,
      renderChart: a,
      renderData: c
    } = y({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), D.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              h.parseEvents(e.useEvents, "dataListener", s);
              const o = [];
              w(s) && s.forEach((n, B) => {
                n.data.length > 0 && n.data.forEach((u) => {
                  o.push(r([u.category, u.value, n.key]));
                });
              }), t.series[0].data = r(o), i(t);
            } catch {
              h.parseEvents(e.useEvents, "dataListener", null), i(t);
            }
          }
        });
      },
      emit: v
    });
    return d(() => e.sources, () => {
      c(e.basicOption);
    }, {
      deep: !0
    }), d(() => r(e.basicOption), (t, s) => {
      x(t, s) || a(t);
    }, {
      deep: !0
    }), m({
      getEchartsInstance: () => _.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && a(e.basicOption), c(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && a(e.basicOption);
      },
      refreshData: () => {
        c(e.basicOption);
      }
    }), (t, s) => (O(), b("div", C, [
      g("div", {
        id: k(E),
        class: "widget"
      }, null, 8, V)
    ]));
  }
});
export {
  q as default
};
