var y = Object.defineProperty;
var _ = (n, e, o) => e in n ? y(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o;
var h = (n, e, o) => _(n, typeof e != "symbol" ? e + "" : e, o);
import { defineComponent as b, watch as M, createElementBlock as R, openBlock as S, createElementVNode as E, ref as v, onMounted as B, onBeforeUnmount as z } from "vue";
import "@babylonjs/loaders/glTF";
import { cloneDeep as O, isEqual as P } from "lodash";
import { Engine as C, Scene as D, ArcRotateCamera as L, Vector3 as k, PhotoDome as m, PointerEventTypes as A } from "@babylonjs/core";
const I = { class: "zerov-widget" }, T = b({ name: "zv-commons-vr-photo" }), F = /* @__PURE__ */ b({
  ...T,
  props: {
    basicOption: {}
  },
  setup(n) {
    const e = n, o = (l) => {
      const i = v(), p = v();
      class d {
        constructor(s, t) {
          h(this, "scene");
          h(this, "engine");
          this.canvas = s, this.option = t, this.engine = new C(this.canvas, !0, {}, !1), p.value = !0, window.addEventListener("resize", () => {
            this.engine.resize();
          }), this.scene = this.createScene();
        }
        createScene() {
          const s = new D(this.engine), t = new L("Camera", -Math.PI / 2, Math.PI / 2, 5, k.Zero(), s);
          t.attachControl(i.value, !0), t.useAutoRotationBehavior = this.option.cameraAutoRotation, t.inputs.attached.mousewheel.detachControl();
          const r = new m("", this.option.url, {
            resolution: this.option.resolution || 32,
            size: 1e3,
            useDirectMapping: !1
          }, s);
          if (this.option.isReversal && (t.angularSensibilityX = -t.angularSensibilityX, t.angularSensibilityY = -t.angularSensibilityY), this.option.imageMode && (r.imageMode = m[this.option.imageMode]), r.fovMultiplier = this.option.defaultFov || 1, this.option.isScale) {
            let a = r.fovMultiplier;
            s.onPointerObservable.add(
              (w) => {
                r !== void 0 && (a += w.event.wheelDelta * -5e-4, a < 0 && (a = 0), a > 2 && (a = 2), r.fovMultiplier = a);
              },
              A.POINTERWHEEL
            );
          }
          return setTimeout(() => {
            p.value = !1;
          }, 200), s;
        }
        run() {
          return this.engine.runRenderLoop(() => {
            this.scene.render();
          }), this;
        }
        dispose() {
          this.scene && this.engine && (this.scene.dispose(), this.engine.dispose());
        }
      }
      const c = v();
      return B(() => {
        c.value = new d(i.value, l).run();
      }), z(() => {
        c.value && c.value.dispose();
      }), { canvasRef: i, babylon: c, Babylon: d, loadingStatus: p };
    }, { canvasRef: f, babylon: u, Babylon: g } = o(e.basicOption);
    return M(() => O(e.basicOption), (l, i) => {
      !P(l, i) && u.value && (u.value.dispose(), u.value = new g(f.value, e.basicOption).run());
    }, {
      deep: !0
    }), (l, i) => (S(), R("div", I, [
      E("canvas", {
        ref_key: "canvasRef",
        ref: f,
        class: "widget"
      }, null, 512)
    ]));
  }
});
export {
  F as default
};
