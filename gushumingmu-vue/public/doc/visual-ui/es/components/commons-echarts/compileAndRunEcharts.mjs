var w = Object.defineProperty;
var y = (a, r, o) => r in a ? w(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o;
var d = (a, r, o) => y(a, typeof r != "symbol" ? r + "" : r, o);
import { ref as m, onMounted as v } from "vue";
import * as g from "echarts";
import { nanoid as E } from "nanoid";
import { SHJParseEvent as p } from "../../commons/plugins/event/index.mjs";
import { SHJDatasourceV2 as C } from "../../commons/plugins/datasource/index.mjs";
const W = (a, r, o) => {
  const l = m(), s = m(!1);
  class f {
    constructor() {
      d(this, "_iframe");
      d(this, "isChartInitialized", !1);
      this._iframe = l.value;
    }
    fastEval(t) {
      const e = this._iframe.contentWindow.document.getElementsByTagName("head")[0], n = this._iframe.contentWindow.document.createElement("script");
      n.setAttribute("type", "text/javascript");
      const i = this._iframe.contentWindow.document.createElement("style");
      i.innerHTML = `
            *{
                margin:0;
                padding:0;
            }
            body, html {
                height:100%;
                overflow: hidden;
                background-color: transparent;
            }
            #renderDom {
                width:100%;
                height:100%;
                background-color: transparent;
                outline: none !important;
            }
        `, n.innerHTML = `
        try {
            ${t};
        } catch(e) {
            handleException(e);
        }`, e.innerHTML = "", e.appendChild(i), e.appendChild(n);
    }
    async compileAndRunAsync(t) {
      try {
        if (t.includes("window.") || t.includes("parent.") || t.includes("top."))
          return;
        let e = "";
        s.value = !0;
        const n = this._iframe.contentWindow;
        let i = n.document.getElementById("renderDom");
        if (i || (i = n.document.createElement("div"), i.id = "renderDom", n.document.body.appendChild(i)), n.echarts = g, n.renderDom = i, !t) return;
        e += `
                    window.initFunction = async function() {
                        if (!window.myChart) {
                            window.myChart = echarts.init(renderDom, null, { renderer: 'svg' });
                        }
                        window.option;
                        ${t}
                        option && myChart.setOption(option, true); // 合并选项
                    }
                `;
        try {
          this.fastEval(e);
        } catch {
        }
        await n.initFunction(), this.isChartInitialized = !0, s.value = !1;
      } catch {
        s.value = !1;
      }
    }
  }
  const h = (u) => {
    C.parse({
      tId: E(),
      sources: r,
      callback: ({ data: t }) => {
        try {
          p.parseEvents(o, "dataListener", t);
          const e = `var echartsData = ${JSON.stringify(t[0].data[0].echartsData)};`;
          c.value.compileAndRunAsync(e + `
` + u);
        } catch {
          p.parseEvents(o, "dataListener", null);
        }
      }
    });
  }, c = m();
  return v(() => {
    c.value = new f(), h(a.code);
  }), { iframeRef: l, loadingStatus: s, renderingComponent: c, initEcharts: h };
};
export {
  W as useEcharts
};
