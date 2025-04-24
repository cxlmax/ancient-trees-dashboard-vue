import { defineComponent as l, watch as i, createElementBlock as b, openBlock as O, createElementVNode as g, unref as w } from "vue";
import { cloneDeep as r, isEqual as k } from "lodash";
import { SHJDatasourceV2 as x } from "../../commons/plugins/datasource/index.mjs";
import { useChart as D } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as u } from "../../commons/plugins/event/index.mjs";
const y = { class: "zerov-widget" }, C = ["id"], V = l({ name: "zv-chart-other-grid-percentage" }), J = /* @__PURE__ */ l({
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
  setup(d, { expose: p, emit: h }) {
    const e = d, m = h, {
      id: f,
      setOption: o,
      chart: v,
      renderChart: a,
      renderData: c
    } = D({
      basicOption: r(e.basicOption),
      useEvents: r(e.useEvents),
      customRenderData: (t) => {
        t = r(t), x.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: s }) => {
            try {
              u.parseEvents(e.useEvents, "dataListener", s);
              const n = [
                ...new Array(r(s[0].data[0].value) % 5 / 5 * 20).fill(Math.floor(r(s[0].data[0].value) / 5 + 1) * 5),
                ...new Array(20 - r(s[0].data[0].value) % 5 / 5 * 20).fill(Math.floor(r(s[0].data[0].value) / 5) * 5)
              ];
              t.title.text = r(s[0].data[0].value) + "%", t.dataset = {
                source: n.map((E, _) => [_, E])
              }, o(t);
            } catch {
              u.parseEvents(e.useEvents, "dataListener", null), o(t);
            }
          }
        });
      },
      emit: m
    });
    return i(() => e.sources, () => {
      e.sources && e.sources.length > 0 && c(e.basicOption);
    }, {
      deep: !0
    }), i(() => r(e.basicOption), (t, s) => {
      k(t, s) || a(t);
    }, {
      deep: !0
    }), p({
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
    }), (t, s) => (O(), b("div", y, [
      g("div", {
        id: w(f),
        class: "widget"
      }, null, 8, C)
    ]));
  }
});
export {
  J as default
};
