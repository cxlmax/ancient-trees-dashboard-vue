var m = Object.defineProperty;
var p = (r, i, a) => i in r ? m(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[i] = a;
var u = (r, i, a) => p(r, typeof i != "symbol" ? i + "" : i, a);
import { ref as l, onMounted as h } from "vue";
import * as g from "@babylonjs/core";
const E = (r) => {
  const i = l(), a = l(!1);
  class f {
    constructor() {
      u(this, "_iframe");
      this._iframe = i.value;
    }
    fastEval(n) {
      const e = this._iframe.contentWindow.document.getElementsByTagName("head")[0], t = this._iframe.contentWindow.document.createElement("script");
      t.setAttribute("type", "text/javascript");
      const s = this._iframe.contentWindow.document.createElement("style");
      s.innerHTML = `
            *{
                margin:0;
                padding:0;
            }
            body, html {
                height:100%;
                overflow: hidden;
                background-color: transparent;
                position: relative;
            }
            #renderCanvas {
                width:100%;
                height:100%;
                background-color: transparent;
                outline: none !important;
                position: absolute;
                inset: 0;
            }
        `, t.innerHTML = `
        try {
            ${n};
        } catch(e) {
            handleException(e);
        }`, e.innerHTML = "", e.appendChild(s), e.appendChild(t);
    }
    async loadScriptAsync(n) {
      return new Promise((e) => {
        const t = document.createElement("script");
        t.src = n, t.onload = () => {
          e();
        }, document.head.appendChild(t);
      });
    }
    async compileAndRunAsync(n) {
      try {
        if (n.includes("window.") || n.includes("parent.") || n.includes("top."))
          return;
        a.value = !0;
        const e = this._iframe.contentWindow;
        if (e.engine) {
          try {
            e.engine.dispose(), e.scene.dispose();
          } catch {
          }
          e.engine = null, e.scene = null;
        }
        delete e.engine, delete e.scene, delete e.initFunction, delete e.canvas;
        let t = e.document.getElementById("renderCanvas");
        if (t || (t = e.document.createElement("canvas"), t.id = "renderCanvas", e.document.body.appendChild(t)), e.BABYLON = g, !t || (e.canvas = t, !n))
          return;
        let s = "createDefaultEngine", c = "";
        if (n.indexOf("createEngine") !== -1 && (s = "createEngine"), n.indexOf("delayCreateScene") !== -1 ? c = "delayCreateScene" : n.indexOf("createScene") !== -1 ? c = "createScene" : n.indexOf("CreateScene") !== -1 ? c = "CreateScene" : n.indexOf("createscene") !== -1 && (c = "createscene"), !c)
          a.value = !1;
        else {
          n += `
                        window.initFunction = async function() {
                            window.engine = new BABYLON.Engine(canvas, true);
                    `, n += `

                            if (!engine) throw 'engine should not be null.';`, n += `

                            engine.runRenderLoop(function () {
                                if(window.scene){
                                    scene.render();
                                }
                            });
                        `, n += `\r
window.scene = ` + c + "();", n += `

                        }`;
          try {
            this.fastEval(n);
          } catch {
          }
          try {
            await e.initFunction();
          } catch {
          }
          if (!e.engine)
            return;
          e.scene, a.value = !1;
        }
      } catch {
        a.value = !1;
      }
    }
  }
  const o = l();
  return h(() => {
    o.value = new f(), o.value.compileAndRunAsync(r.code);
  }), { iframeRef: i, loadingStatus: a, renderingComponent: o };
};
export {
  E as useBabaylon
};
