import { ref as p, shallowRef as O, onMounted as b, onBeforeUnmount as k } from "vue";
import { useResizeObserver as D } from "@vueuse/core";
import { debounce as M, cloneDeep as y, isArray as n } from "lodash";
import T from "is-electron";
import * as m from "echarts";
import { nanoid as x } from "nanoid";
import "echarts-wordcloud";
import "echarts-liquidfill";
import { SHJParseEvent as f } from "../../../../commons/plugins/event/index.mjs";
import { HoverLoop as L } from "../utils/hoverLoop.mjs";
const z = (l) => {
  const e = [];
  l.geo && (n(l.geo) ? e.push(...l.geo.map((r) => r.map)) : e.push(l.geo.map)), l.series && n(l.series) && l.series.forEach((r) => {
    r.map && e.push(r.map);
  });
  const v = e.map((r) => {
    if (r === "customize")
      if (n(l.geo)) {
        const c = JSON.parse(l.geo.find((h) => h.map === "customize").geoData);
        return m.registerMap(r, c);
      } else {
        const c = JSON.parse(l.geo.geoData);
        return m.registerMap(r, c);
      }
    else
      return fetch((T() ? "gismap/" : "/gismap/") + r + ".json").then((c) => c.json()).then((c) => {
        m.registerMap(r, c);
      }).catch((c) => {
      });
  });
  return Promise.all(v);
}, B = async (l) => {
  l.bmap && await import(
    /* @vite-ignore */
    "echarts/extension/bmap/bmap"
  );
}, _ = ({ basicOption: l, useEvents: e, customRenderData: v, emits: r }) => {
  const c = x(), h = p(!0), t = O(null), d = v, u = p(null), i = p(null), S = (s, w) => {
    try {
      t.value || (t.value = m.init(document.getElementById(c), null, { renderer: w || "svg" }));
      const a = y(s);
      if (a) {
        if (t.value.setOption(a, !0), a.hoverLoop)
          if (i.value && clearInterval(i.value), u.value && u.value.closeSwitchTooltip(), a.hoverLoop.type === "方式二") {
            let o = 0;
            a.dataset && a.dataset.source && (o = a.dataset.source.length), a.series[0] && a.series[0].data && (o = a.series[0].data.length);
            const Z = a.dataZoom[0].endValue, I = a.dataZoom[0].startValue, V = () => {
              i.value = setInterval(() => {
                a.dataZoom[0].endValue > o - 2 ? (a.dataZoom[0].endValue = Z, a.dataZoom[0].startValue = I) : (a.dataZoom[0].endValue = a.dataZoom[0].endValue + 1, a.dataZoom[0].startValue = a.dataZoom[0].startValue + 1), t.value.setOption(a);
              }, a.hoverLoop.delay2);
            };
            t.value.on("mousemove", function() {
              i.value && clearInterval(i.value);
            }), t.value.on("mouseout", function() {
              i.value && clearInterval(i.value), V();
            }), V();
          } else a.hoverLoop.type === "方式一" && (t.value.on("mousemove", function() {
            u.value && u.value.closeSwitchTooltip();
          }), t.value.on("mouseout", function() {
            u.value && u.value.closeSwitchTooltip(), u.value = new L(t.value, a);
          }), u.value = new L(t.value, a));
        else
          i.value && clearInterval(i.value), u.value && u.value.closeSwitchTooltip();
        t.value.on("click", (o) => {
          e && n(e) && e.length > 0 && (r("chart-click", o), f.parseEvents(e, "chart-click", o));
        }), t.value.on("dblclick", (o) => {
          e && n(e) && e.length > 0 && (r("chart-dblclick", o), f.parseEvents(e, "chart-dblclick", o));
        }), t.value.on("mousedown", (o) => {
          e && n(e) && e.length > 0 && (r("chart-mousedown", o), f.parseEvents(e, "chart-mousedown", o));
        }), t.value.on("mouseup", (o) => {
          e && n(e) && e.length > 0 && (r("chart-mouseup", o), f.parseEvents(e, "chart-mouseup", o));
        }), t.value.on("mouseover", (o) => {
          e && n(e) && e.length > 0 && (r("chart-mouseover", o), f.parseEvents(e, "chart-mouseover", o));
        }), t.value.on("mouseout", (o) => {
          e && n(e) && e.length > 0 && (r("chart-mouseout", o), f.parseEvents(e, "chart-mouseout", o));
        }), t.value.on("contextmenu", (o) => {
          e && n(e) && e.length > 0 && (r("chart-contextmenu", o), f.parseEvents(e, "chart-contextmenu", o));
        }), h.value = !1;
      }
    } catch {
      try {
        t.value.dispose();
      } catch {
      }
      t.value = null;
    }
  }, g = M((s) => {
    h.value = !0, s = y(s), z(s).then(() => {
      B(s).then(() => {
        d(s);
      });
    }).catch((w) => {
    });
  }, 100);
  return b(() => {
    g(l), D(document.getElementById(c), (s) => {
      t.value && t.value.resize();
    });
  }), k(() => {
    u.value && u.value.closeSwitchTooltip(), i.value && clearInterval(i.value);
    try {
      t.value && t.value.dispose();
    } catch {
    }
  }), {
    id: c,
    status: h,
    chart: t,
    setOption: S,
    renderChart: g,
    renderData: d
  };
};
export {
  _ as useChart
};
