var U = Object.defineProperty;
var W = (r, i, d) => i in r ? U(r, i, { enumerable: !0, configurable: !0, writable: !0, value: d }) : r[i] = d;
var b = (r, i, d) => W(r, typeof i != "symbol" ? i + "" : i, d);
import { defineComponent as D, watch as l, createElementBlock as x, openBlock as E, createElementVNode as F, createCommentVNode as k, normalizeClass as A, unref as B, ref as y, onMounted as G, onBeforeUnmount as H } from "vue";
import "@babylonjs/loaders/glTF";
import { useResizeObserver as P } from "@vueuse/core";
import { Vector3 as m, Engine as V, Scene as N, Color4 as v, Color3 as _, GaussianSplattingMesh as q, ArcRotateCamera as Z, Tools as w } from "@babylonjs/core";
import { cloneDeep as u, isEqual as c } from "lodash";
const j = { class: "zerov-widget" }, J = {
  key: 0,
  ref: "babylonLoadingRef",
  class: "babylon-loading"
}, K = D({ name: "zv-commons-gaussian-splatting-view" }), oe = /* @__PURE__ */ D({
  ...K,
  props: {
    basicOption: {},
    basicEvents: {}
  },
  setup(r) {
    const i = r, d = (s, a) => {
      const g = y(), S = y(!0);
      class M {
        // eslint-disable-next-line no-useless-constructor
        constructor(e) {
          // optional, but needed due to interface definitions
          b(this, "loadingUIBackgroundColor");
          this.loadingUIText = e;
        }
        displayLoadingUI() {
          g.value && (S.value = !0);
        }
        hideLoadingUI() {
          g.value && (S.value = !1);
        }
      }
      class L {
        constructor(e, n, o) {
          b(this, "scene");
          b(this, "engine");
          b(this, "gs");
          this.canvas = e, this.option = n, this.events = o;
          try {
            this.engine = new V(this.canvas, !0, {}, !1), this.engine.loadingScreen = new M(""), window.addEventListener("resize", () => {
              this.engine.resize();
            }), this.scene = this.createScene();
          } catch {
          }
        }
        createScene() {
          return this.engine.displayLoadingUI(), this.scene = new N(this.engine), this.option.scene.colorShow ? this.scene.clearColor = v.FromHexString(this.option.scene.color || "#000000") : this.scene.clearColor = new v(0, 0, 0, 0), this.scene.fogEnabled = this.option.scene.fogEnabled, this.scene.fogMode = this.option.scene.fogMode || 1, this.scene.fogColor = _.FromHexString(this.option.scene.fogColor || "#ffffff"), this.scene.fogEnd = this.option.scene.fogEnd || 60, this.scene.fogStart = this.option.scene.fogStart || 1, this.scene.fogDensity = this.option.scene.fogDensity || 0.1, this.createCamera(this.option.camera, this.scene), this.gs = new q("", null, this.scene), this.gs.loadFileAsync(this.option.meshs.url).then(() => {
            this.setGSSize(this.option.meshs), setTimeout(() => {
              this.engine.hideLoadingUI();
            }, 100);
          }), this.scene;
        }
        setGSSize(e) {
          if (e.autoSize) {
            const o = this.gs.getBoundingInfo().boundingBox, f = 0.7 / (Math.max(
              o.maximumWorld.x - o.minimumWorld.x,
              o.maximumWorld.y - o.minimumWorld.y,
              o.maximumWorld.z - o.minimumWorld.z
            ) || 1);
            this.gs.scaling = new m(f, f, f);
            const I = o.centerWorld;
            this.gs.position = this.gs.position.subtract(I.multiplyByFloats(f, f, f)), this.gs.rotation = new m(0, 0, 0);
          } else {
            const { position: n, scaling: o, rotation: p } = e;
            this.gs.position.set(n[0] || 0, n[1] || 0, n[2] || 0), this.gs.scaling.set(o[0] || 1, o[1] || 1, o[2] || 1), this.gs.rotation = new m(p[0] || 0, p[1] || 0, p[2] || 0);
          }
        }
        updateScene(e) {
          e.colorShow ? this.scene.clearColor = v.FromHexString(e.color || "#000000") : this.scene.clearColor = new v(0, 0, 0, 0), this.scene.fogEnabled = e.fogEnabled, this.scene.fogMode = e.fogMode || 1, this.scene.fogColor = _.FromHexString(e.fogColor || "#ffffff"), this.scene.fogEnd = e.fogEnd || 60, this.scene.fogStart = e.fogStart || 1, this.scene.fogDensity = e.fogDensity || 0.1;
        }
        createCamera(e, n) {
          const o = new Z("", w.ToRadians(e.alpha || 90), w.ToRadians(e.beta || 75), e.radius || 1, new m(...e.target), n);
          o.attachControl(g.value, !0), o.useAutoRotationBehavior = e.autoRotation, o.wheelDeltaPercentage = e.wheelDeltaPercentage || 0.01, o.zoomToMouseLocation = e.zoomToMouseLocation, o.lowerRadiusLimit = e.lowerRadiusLimit, o.upperRadiusLimit = e.upperRadiusLimit, o.minZ = 0.01;
        }
        updateCamera(e) {
          const n = this.scene.activeCamera;
          n && (e.radius && (n.radius = e.radius), n.beta = w.ToRadians(e.beta), n.alpha = w.ToRadians(e.alpha), n.useAutoRotationBehavior = e.autoRotation, n.zoomToMouseLocation = e.zoomToMouseLocation, n.wheelDeltaPercentage = e.wheelDeltaPercentage || 0.01, n.lowerRadiusLimit = e.lowerRadiusLimit, n.upperRadiusLimit = e.upperRadiusLimit, n.target = new m(...e.target));
        }
        run() {
          return this.engine.runRenderLoop(() => {
            this.scene.render();
          }), this;
        }
        dispose() {
          this.scene && this.engine && (this.scene.dispose(), this.engine.dispose(), this.gs.dispose(), this.gs = null);
        }
      }
      const h = y();
      return G(() => {
        s.meshs && (h.value = new L(g.value, s, a).run(), P(g.value, (z) => {
          h.value && h.value.engine.resize();
        }));
      }), H(() => {
        h.value && h.value.dispose();
      }), {
        canvasRef: g,
        babylon: h,
        Babylon: L,
        babylonLoadingStatus: S
      };
    }, { babylon: t, Babylon: T, canvasRef: R, babylonLoadingStatus: C } = d(i.basicOption, i.basicEvents);
    return l(() => u(i.basicOption.scene), (s, a) => {
      !c(s, a) && t.value && t.value.updateScene(s);
    }, {
      deep: !0
    }), l(() => u(i.basicOption.meshs.url), (s, a) => {
      !c(s, a) && t.value && (t.value.dispose(), t.value = new T(R.value, i.basicOption, i.basicEvents).run());
    }, {
      deep: !0
    }), l(() => u(i.basicOption.meshs.position), (s, a) => {
      !c(s, a) && t.value && t.value.gs && t.value.gs.position.set(s[0], s[1], s[2]);
    }, {
      deep: !0
    }), l(() => u(i.basicOption.meshs.scaling), (s, a) => {
      !c(s, a) && t.value && t.value.gs && t.value.gs.scaling.set(s[0], s[1], s[2]);
    }, {
      deep: !0
    }), l(() => u(i.basicOption.meshs.rotation), (s, a) => {
      !c(s, a) && t.value && t.value.gs && (t.value.gs.rotation = new m(s[0], s[1], s[2]));
    }, {
      deep: !0
    }), l(() => u(i.basicOption.meshs.autoSize), (s, a) => {
      !c(s, a) && t.value && t.value.gs && t.value.setGSSize(i.basicOption.meshs);
    }, {
      deep: !0
    }), l(() => u(i.basicOption.camera), (s, a) => {
      !c(s, a) && t.value && t.value.updateCamera(s);
    }, {
      deep: !0
    }), (s, a) => (E(), x("div", j, [
      F("canvas", {
        ref_key: "canvasRef",
        ref: R,
        class: A(["widget", { show: !B(C) }])
      }, null, 2),
      B(C) ? (E(), x("div", J, " 正在加载模型... ", 512)) : k("", !0)
    ]));
  }
});
export {
  oe as default
};
