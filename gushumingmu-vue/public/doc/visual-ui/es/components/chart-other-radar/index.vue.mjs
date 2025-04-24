import { defineComponent as E, watch as l, createElementBlock as k, openBlock as w, createElementVNode as D, unref as y } from "vue";
import { cloneDeep as o, isEqual as V } from "lodash";
import { SHJDatasourceV2 as C } from "../../commons/plugins/datasource/index.mjs";
import { useChart as N } from "../../commons/core/useChart.mjs";
import { parseDataset as f } from "../../commons/utils/parseDataset.mjs";
import { cloneSeries as S } from "../../commons/utils/cloneSeries.mjs";
import { SHJParseEvent as p } from "../../commons/plugins/event/index.mjs";
const q = { class: "zerov-widget" }, z = ["id"], B = E({ name: "zv-chart-other-radar" }), R = /* @__PURE__ */ E({
  ...B,
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
  setup(b, { expose: O, emit: _ }) {
    const e = b, v = _, {
      id: x,
      setOption: m,
      chart: g,
      renderChart: n,
      renderData: i
    } = N({
      basicOption: o(e.basicOption),
      useEvents: o(e.useEvents),
      customRenderData: (s) => {
        s = o(s), C.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: c }) => {
            try {
              let u = function(r) {
                return r.reduce((t, a) => t.includes(a) ? t : [...t, a], []);
              };
              p.parseEvents(e.useEvents, "dataListener", c), s.dataset = f(o(c)), s.series = S(c, s.series);
              const d = [], h = [];
              s.dataset.source.forEach((r) => {
                for (const t in r)
                  if (Object.prototype.hasOwnProperty.call(r, t)) {
                    const a = r[t];
                    Number(a) && (h.push(Number(a)), d.push(t));
                  }
              }), s.radar.indicator = [], u(d).forEach((r) => {
                s.radar.indicator.push(
                  {
                    text: r,
                    max: 2e3
                  }
                );
              }), s.radar.indicator.forEach((r) => {
                r.max = h.sort((t, a) => a - t)[0];
              }), s.dataset = f(o(c), u(d)), m(s);
            } catch {
              p.parseEvents(e.useEvents, "dataListener", null), m(s);
            }
          }
        });
      },
      emit: v
    });
    return l(() => e.sources, () => {
      e.sources && e.sources.length > 0 && i(e.basicOption);
    }, {
      deep: !0
    }), l(() => o(e.basicOption), (s, c) => {
      V(s, c) || n(s);
    }, {
      deep: !0
    }), O({
      getEchartsInstance: () => g.value,
      refresh: () => {
        e.sources && e.sources.length > 0 && n(e.basicOption), i(e.basicOption);
      },
      refreshView: () => {
        e.sources && e.sources.length > 0 && n(e.basicOption);
      },
      refreshData: () => {
        i(e.basicOption);
      }
    }), (s, c) => (w(), k("div", q, [
      D("div", {
        id: y(x),
        class: "widget"
      }, null, 8, z)
    ]));
  }
});
export {
  R as default
};
