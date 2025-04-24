import { defineComponent as d, watch as i, createElementBlock as v, openBlock as _, createElementVNode as b, unref as E } from "vue";
import { cloneDeep as s } from "lodash";
import { SHJDatasourceV2 as O } from "../../commons/plugins/datasource/index.mjs";
import { useChart as w } from "../../commons/core/useChart.mjs";
import { SHJParseEvent as u } from "../../commons/plugins/event/index.mjs";
const g = { class: "zerov-widget" }, k = ["id"], D = d({ name: "zv-chart-other-word-cloud" }), I = /* @__PURE__ */ d({
  ...D,
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
  setup(p, { expose: l, emit: m }) {
    const e = p, h = m, {
      id: f,
      setOption: n,
      chart: r,
      renderChart: c,
      renderData: a
    } = w({
      basicOption: s(e.basicOption),
      useEvents: s(e.useEvents),
      customRenderData: (t) => {
        t = s(t), O.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: o }) => {
            try {
              u.parseEvents(e.useEvents, "dataListener", o), t.series[0].data = s(o[0].data), n(t);
            } catch {
              u.parseEvents(e.useEvents, "dataListener", null), n(t);
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
    }), i(() => e.basicOption, (t) => {
      r.value && (r.value.clear(), c(s(t)));
    }, {
      deep: !0
    }), l({
      getEchartsInstance: () => r.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption), a(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && c(e.basicOption);
      },
      refreshData: () => {
        a(e.basicOption);
      }
    }), (t, o) => (_(), v("div", g, [
      b("div", {
        id: E(f),
        class: "widget"
      }, null, 8, k)
    ]));
  }
});
export {
  I as default
};
