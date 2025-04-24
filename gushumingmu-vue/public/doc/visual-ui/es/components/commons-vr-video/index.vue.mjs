var g = Object.defineProperty;
var w = (t, e, n) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => w(t, typeof e != "symbol" ? e + "" : e, n);
import { defineComponent as m, watch as M, createElementBlock as _, openBlock as P, createElementVNode as R, ref as v, onMounted as S, onBeforeUnmount as E } from "vue";
import "@babylonjs/loaders/glTF";
import { cloneDeep as B, isEqual as D } from "lodash";
import { Engine as O, Scene as k, ArcRotateCamera as z, Vector3 as C, VideoDome as T, PhotoDome as L, PointerEventTypes as A } from "@babylonjs/core";
const I = { class: "zerov-widget" }, V = m({ name: "zv-commons-vr-video" }), H = /* @__PURE__ */ m({
  ...V,
  props: {
    basicOption: {}
  },
  setup(t) {
    const e = t, n = (l) => {
      const i = v(), p = v();
      class f {
        constructor(s, o) {
          h(this, "scene");
          h(this, "engine");
          this.canvas = s, this.option = o, this.engine = new O(this.canvas, !0, {}, !1), p.value = !0, window.addEventListener("resize", () => {
            this.engine.resize();
          }), this.scene = this.createScene();
        }
        createScene() {
          const s = new k(this.engine), o = new z("Camera", -Math.PI / 2, Math.PI / 2, 5, C.Zero(), s);
          o.attachControl(i.value, !0), o.useAutoRotationBehavior = this.option.cameraAutoRotation, o.inputs.attached.mousewheel.detachControl();
          const r = new T(
            "",
            this.option.url,
            {
              resolution: this.option.resolution || 32,
              clickToPlay: this.option.clickToPlay,
              autoPlay: this.option.autoPlay,
              loop: this.option.loop,
              poster: this.option.poster,
              useDirectMapping: !1,
              halfDomeMode: this.option.halfDomeMode
              // false=360° true=180°
            },
            s
          );
          if (this.option.isReversal && (o.angularSensibilityX = -o.angularSensibilityX, o.angularSensibilityY = -o.angularSensibilityY), this.option.videoMode && (r.videoMode = L[this.option.videoMode]), r.fovMultiplier = this.option.defaultFov || 1, this.option.isScale) {
            let a = r.fovMultiplier;
            s.onPointerObservable.add(
              (y) => {
                r !== void 0 && (a += y.event.wheelDelta * -5e-4, a < 0 && (a = 0), a > 2 && (a = 2), r.fovMultiplier = a);
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
      return S(() => {
        c.value = new f(i.value, l).run();
      }), E(() => {
        c.value && c.value.dispose();
      }), { canvasRef: i, babylon: c, Babylon: f, loadingStatus: p };
    }, { canvasRef: d, babylon: u, Babylon: b } = n(e.basicOption);
    return M(() => B(e.basicOption), (l, i) => {
      !D(l, i) && u.value && (u.value.dispose(), u.value = new b(d.value, e.basicOption).run());
    }, {
      deep: !0
    }), (l, i) => (P(), _("div", I, [
      R("canvas", {
        ref_key: "canvasRef",
        ref: d,
        class: "widget"
      }, null, 512)
    ]));
  }
});
export {
  H as default
};
