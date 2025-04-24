var U = Object.defineProperty;
var k = (f, u, g) => u in f ? U(f, u, { enumerable: !0, configurable: !0, writable: !0, value: g }) : f[u] = g;
var v = (f, u, g) => k(f, typeof u != "symbol" ? u + "" : u, g);
import { defineComponent as I, watch as r, createElementBlock as T, openBlock as M, createElementVNode as q, createCommentVNode as N, normalizeClass as V, unref as E, toDisplayString as K, ref as L, onMounted as J, onBeforeUnmount as Z } from "vue";
import "@babylonjs/loaders/glTF";
import { cloneDeep as d, isEqual as h } from "lodash";
import { Vector3 as c, Engine as j, Scene as Q, Color4 as P, Color3 as y, DefaultRenderingPipeline as X, DepthOfFieldEffectBlurLevel as R, ArcRotateCamera as Y, Tools as S, HemisphericLight as $, DirectionalLight as O, PointLight as ee, SceneLoader as ie } from "@babylonjs/core";
import { useResizeObserver as te } from "@vueuse/core";
import { SHJParseEvent as se } from "../../commons/plugins/event/index.mjs";
const oe = { class: "zerov-widget" }, ne = I({ name: "zv-commons-three-loader" }), me = /* @__PURE__ */ I({
  ...ne,
  props: {
    basicOption: {},
    basicEvents: {},
    useEvents: {}
  },
  emits: [
    "on-load-success",
    "on-play-animation"
  ],
  setup(f, { expose: u, emit: g }) {
    const x = g, a = f, H = (t, n) => {
      const b = L(), B = L(), A = L(!0);
      class W {
        // eslint-disable-next-line no-useless-constructor
        constructor(e) {
          // optional, but needed due to interface definitions
          v(this, "loadingUIBackgroundColor");
          this.loadingUIText = e;
        }
        displayLoadingUI() {
          b.value && (A.value = !0);
        }
        hideLoadingUI() {
          b.value && (A.value = !1);
        }
      }
      class D {
        constructor(e, s, i) {
          v(this, "scene");
          v(this, "engine");
          v(this, "meshe");
          v(this, "defaultPipeline");
          this.canvas = e, this.option = s, this.events = i;
          try {
            this.engine = new j(this.canvas, !0, {}, !1), this.engine.loadingScreen = new W(""), window.addEventListener("resize", () => {
              this.engine.resize();
            }), this.scene = this.createScene();
          } catch {
          }
        }
        createScene() {
          return this.scene = new Q(this.engine), this.option.scene.colorShow ? this.scene.clearColor = P.FromHexString(this.option.scene.color || "#000000") : this.scene.clearColor = new P(0, 0, 0, 0), this.scene.fogEnabled = this.option.scene.fogEnabled, this.scene.fogMode = this.option.scene.fogMode || 1, this.scene.fogColor = y.FromHexString(this.option.scene.fogColor || "#ffffff"), this.scene.fogEnd = this.option.scene.fogEnd || 60, this.scene.fogStart = this.option.scene.fogStart || 1, this.scene.fogDensity = this.option.scene.fogDensity || 0.1, this.createCamera(this.option.camera, this.scene), this.createLights(this.option.lights, this.scene), this.createMeshs(this.scene), this.scene;
        }
        updateScenePipeline(e) {
          this.scene.activeCamera && e && (e.enabled ? (this.defaultPipeline || (this.defaultPipeline = new X(
            "defaultPipeline",
            !0,
            this.scene,
            [this.scene.activeCamera]
          )), this.defaultPipeline.samples = e.samples ? 4 : 1, this.defaultPipeline.fxaaEnabled = e.fxaaEnabled, this.defaultPipeline.grainEnabled = e.grainEnabled, this.defaultPipeline.grain.intensity = e.grainIntensity, this.defaultPipeline.grain.animated = e.grainAnimated, this.defaultPipeline.bloomEnabled = e.bloomEnabled, this.defaultPipeline.bloomThreshold = e.bloomThreshold, this.defaultPipeline.bloomWeight = e.bloomWeight, this.defaultPipeline.bloomKernel = e.bloomKernel, this.defaultPipeline.bloomScale = e.bloomScale, this.defaultPipeline.depthOfFieldEnabled = e.depthOfFieldEnabled, e.depthOfFieldBlurLevel < 1 ? this.defaultPipeline.depthOfFieldBlurLevel = R.Low : e.depthOfFieldBlurLevel < 2 ? this.defaultPipeline.depthOfFieldBlurLevel = R.Medium : e.depthOfFieldBlurLevel < 3 && (this.defaultPipeline.depthOfFieldBlurLevel = R.High), this.defaultPipeline.depthOfField.focusDistance = e.depthOfFieldFocusDistance, this.defaultPipeline.depthOfField.fStop = e.depthOfFieldFStop, this.defaultPipeline.depthOfField.focalLength = e.depthOfFieldFocalLength, this.defaultPipeline.chromaticAberrationEnabled = e.chromaticAberrationEnabled, this.defaultPipeline.chromaticAberration.aberrationAmount = e.chromaticAberrationAberrationAmount, this.defaultPipeline.chromaticAberration.radialIntensity = e.chromaticAberrationRadialIntensity, e.chromaticAberrationDirection === 0 ? (this.defaultPipeline.chromaticAberration.direction.x = 0, this.defaultPipeline.chromaticAberration.direction.y = 0) : (this.defaultPipeline.chromaticAberration.direction.x = Math.sin(e.chromaticAberrationDirection), this.defaultPipeline.chromaticAberration.direction.y = Math.cos(e.chromaticAberrationDirection)), this.defaultPipeline.sharpenEnabled = e.sharpenEnabled, this.defaultPipeline.sharpen.edgeAmount = e.sharpenEdgeAmount, this.defaultPipeline.sharpen.colorAmount = e.sharpenColorAmount) : this.defaultPipeline && (this.defaultPipeline.dispose(), this.defaultPipeline = null));
        }
        updateScene(e) {
          e.colorShow ? this.scene.clearColor = P.FromHexString(e.color || "#000000") : this.scene.clearColor = new P(0, 0, 0, 0), this.scene.fogEnabled = e.fogEnabled, this.scene.fogMode = e.fogMode || 1, this.scene.fogColor = y.FromHexString(e.fogColor || "#ffffff"), this.scene.fogEnd = e.fogEnd || 60, this.scene.fogStart = e.fogStart || 1, this.scene.fogDensity = e.fogDensity || 0.1;
        }
        createCamera(e, s) {
          const i = new Y("", S.ToRadians(e.alpha || 90), S.ToRadians(e.beta || 75), e.radius || 1, new c(...e.target), s);
          i.attachControl(b.value, !0), i.useAutoRotationBehavior = e.autoRotation, i.wheelDeltaPercentage = e.wheelDeltaPercentage || 0.01, i.zoomToMouseLocation = e.zoomToMouseLocation, i.lowerRadiusLimit = e.lowerRadiusLimit, i.upperRadiusLimit = e.upperRadiusLimit, i.minZ = 0.01;
        }
        updateCamera(e) {
          const s = this.scene.activeCamera;
          s && (e.radius && (s.radius = e.radius), s.beta = S.ToRadians(e.beta), s.alpha = S.ToRadians(e.alpha), s.useAutoRotationBehavior = e.autoRotation, s.zoomToMouseLocation = e.zoomToMouseLocation, s.wheelDeltaPercentage = e.wheelDeltaPercentage || 0.01, s.lowerRadiusLimit = e.lowerRadiusLimit, s.upperRadiusLimit = e.upperRadiusLimit, s.target = new c(...e.target));
        }
        createLights(e, s) {
          this.scene && this.scene.lights && this.scene.lights.forEach((i, l) => {
            setTimeout(() => {
              i.dispose();
            });
          }), setTimeout(() => {
            e.forEach((i) => {
              if (i.type === "HemisphericLight") {
                const l = new $("", new c(...i.direction), s);
                l.intensity = i.intensity !== void 0 ? i.intensity : 0.5, l.groundColor = y.FromHexString(i.groundColor || "#ffffff"), l.diffuse = y.FromHexString(i.diffuse || "#ffffff");
              }
              if (i.type === "DirectionalLight") {
                const l = new O("", new c(...i.direction), s);
                l.intensity = i.intensity !== void 0 ? i.intensity : 0.5, l.diffuse = y.FromHexString(i.diffuse || "#ffffff");
              }
              if (i.type === "PointLight") {
                const l = new ee("", new c(...i.position), s);
                l.intensity = i.intensity !== void 0 ? i.intensity : 0.5, l.diffuse = y.FromHexString(i.diffuse || "#ffffff");
              }
            });
          });
        }
        createMeshs(e) {
          e.meshes.forEach((s) => setTimeout(() => s.dispose())), ie.ImportMeshAsync("", this.option.meshs.url, "", e, (s) => {
            B.value = (s.loaded / s.total * 100).toFixed(2);
          }).then((s) => {
            this.meshe = s.meshes, this.updateScenePipeline(this.option.pipelineOption), this.option.animationGroups = e.animationGroups.map((i) => ({
              uniqueId: i.uniqueId,
              name: i.name
            })), this.events && (this.events.function[0].args[0].select = e.animationGroups.map((i) => ({
              name: i.name,
              value: i.name
            }))), this.option.defaultAnimation && this.option.defaultAnimation.name ? this.playAnimation(this.option.defaultAnimation.name, {
              loop: this.option.defaultAnimation.loop,
              speedRatio: this.option.defaultAnimation.speedRatio
            }) : e.animationGroups && e.animationGroups[0] && e.animationGroups[0].stop(), this.setMeshSize(this.option.meshs), setTimeout(() => {
              this.engine.hideLoadingUI(), x("on-load-success"), this.engine.hideLoadingUI();
            }, 100);
          });
        }
        setMeshSize(e) {
          if (e.autoSize) {
            const i = this.meshe[0].getBoundingInfo().boundingBox, p = 0.7 / (Math.max(
              i.maximumWorld.x - i.minimumWorld.x,
              i.maximumWorld.y - i.minimumWorld.y,
              i.maximumWorld.z - i.minimumWorld.z
            ) || 1);
            this.meshe[0].scaling = new c(p, p, p);
            const G = i.centerWorld;
            this.meshe[0].position = this.meshe[0].position.subtract(G.multiplyByFloats(p, p, p)), this.meshe[0].rotation = new c(0, 0, 0);
          } else {
            const { position: s, scaling: i, rotation: l } = e;
            this.meshe[0].position.set(s[0] || 0, s[1] || 0, s[2] || 0), this.meshe[0].scaling.set(i[0] || 1, i[1] || 1, i[2] || 1), this.meshe[0].rotation = new c(l[0] || 0, l[1] || 0, l[2] || 0);
          }
        }
        run() {
          return this.engine.runRenderLoop(() => this.scene.render()), this;
        }
        dispose() {
          this.scene && this.engine && (this.scene.dispose(), this.engine.dispose());
        }
        playAnimation(e, s = {
          loop: !1,
          speedRatio: 1
        }) {
          if (this.scene) {
            this.scene.stopAllAnimations();
            const i = this.scene.getAnimationGroupByName(e);
            i && (x("on-play-animation"), se.parseEvents(a.useEvents, "on-play-animation"), i.start(s.loop, s.speedRatio, i.from, i.to, !1));
          }
        }
      }
      const m = L();
      return J(() => {
        t.meshs && (m.value = new D(b.value, t, n).run(), te(b.value, (z) => {
          m.value && m.value.engine.resize();
        }));
      }), Z(() => {
        m.value && (m.value.dispose(), m.value.meshe = []);
      }), {
        canvasRef: b,
        babylon: m,
        Babylon: D,
        babylonLoadingStatus: A,
        babylonLoadingTitle: B
      };
    }, { canvasRef: w, babylon: o, Babylon: C, babylonLoadingStatus: F, babylonLoadingTitle: _ } = H(a.basicOption, a.basicEvents);
    return u({
      playAnimation: (t, n) => {
        o.value.playAnimation(t, n);
      }
    }), r(() => d(a.basicOption.camera), (t, n) => {
      !h(t, n) && o.value && o.value.updateCamera(t);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.scene), (t, n) => {
      !h(t, n) && o.value && o.value.updateScene(t);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.lights), (t, n) => {
      !h(t, n) && o.value && o.value.createLights(t, o.value.scene);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.meshs.url), (t, n) => {
      !h(t, n) && o.value && (o.value.dispose(), o.value = new C(w.value, a.basicOption, a.basicEvents).run());
    }, {
      deep: !0
    }), r(() => d(a.basicOption.meshs.position), (t, n) => {
      !h(t, n) && o.value && o.value.meshe[0] && o.value.meshe[0].position.set(t[0], t[1], t[2]);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.meshs.scaling), (t, n) => {
      !h(t, n) && o.value && o.value.meshe[0] && o.value.meshe[0].scaling.set(t[0], t[1], t[2]);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.meshs.rotation), (t, n) => {
      !h(t, n) && o.value && o.value.meshe[0] && (o.value.meshe[0].rotation = new c(t[0], t[1], t[2]));
    }, {
      deep: !0
    }), r(() => d(a.basicOption.meshs.autoSize), (t, n) => {
      !h(t, n) && o.value && o.value.meshe[0] && o.value.setMeshSize(a.basicOption.meshs);
    }, {
      deep: !0
    }), r(() => d(a.basicOption.defaultAnimation), (t, n) => {
      !h(t, n) && o.value && (o.value.dispose(), o.value = new C(w.value, a.basicOption, a.basicEvents).run());
    }, {
      deep: !0
    }), r(() => d(a.basicOption.pipelineOption), (t, n) => {
      !h(t, n) && o.value && o.value.updateScenePipeline(t);
    }, {
      deep: !0
    }), (t, n) => (M(), T("div", oe, [
      q("canvas", {
        ref_key: "canvasRef",
        ref: w,
        class: V(["widget", { show: !E(F) }])
      }, null, 2),
      E(F) ? (M(), T("div", {
        key: 0,
        ref: "babylonLoadingRef",
        class: "babylon-loading"
      }, " 正在加载模型...(" + K(E(_)) + "%) ", 513)) : N("", !0)
    ]));
  }
});
export {
  me as default
};
