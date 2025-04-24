var _ = Object.defineProperty;
var U = (h, l, g) => l in h ? _(h, l, { enumerable: !0, configurable: !0, writable: !0, value: g }) : h[l] = g;
var d = (h, l, g) => U(h, typeof l != "symbol" ? l + "" : l, g);
import { defineComponent as T, watch as f, createElementBlock as B, openBlock as D, createElementVNode as V, createCommentVNode as K, normalizeClass as W, unref as P, toDisplayString as q, ref as S, onMounted as N, onBeforeUnmount as Y } from "vue";
import "@babylonjs/loaders/glTF";
import { cloneDeep as c, isEqual as m } from "lodash";
import { useResizeObserver as J } from "@vueuse/core";
import { Engine as j, Scene as Q, Color4 as w, Color3 as b, DefaultRenderingPipeline as X, DepthOfFieldEffectBlurLevel as A, Vector3 as v, DirectionalLight as Z, ShadowGenerator as $, Tools as G, SceneLoader as O } from "@babylonjs/core";
import { SHJParseEvent as z } from "../../commons/plugins/event/index.mjs";
const ee = { class: "zerov-widget" }, ie = T({ name: "zv-commons-product-model" }), de = /* @__PURE__ */ T({
  ...ie,
  props: {
    basicOption: {},
    basicEvents: {},
    useEvents: {}
  },
  emits: [
    "on-load-success",
    "on-play-animation"
  ],
  setup(h, { expose: l, emit: g }) {
    const x = g, o = h, H = (i, s) => {
      const u = S(), y = S(), E = S(!0);
      class I {
        // eslint-disable-next-line no-useless-constructor
        constructor(e) {
          // optional, but needed due to interface definitions
          d(this, "loadingUIBackgroundColor");
          this.loadingUIText = e;
        }
        displayLoadingUI() {
          u.value && (E.value = !0);
        }
        hideLoadingUI() {
          u.value && (E.value = !1);
        }
      }
      class M {
        constructor(e, t, n) {
          d(this, "scene");
          d(this, "engine");
          // 默认环境
          d(this, "environmentHelper");
          d(this, "shadowsLight");
          // 全局阴影
          d(this, "shadowGenerator");
          // 默认后期
          d(this, "defaultPipeline");
          this.canvas = e, this.option = t, this.events = n;
          try {
            this.engine = new j(this.canvas, !0, {}, !1), this.engine.loadingScreen = new I(""), window.addEventListener("resize", () => {
              this.engine.resize();
            }), this.scene = this.createScene();
          } catch {
          }
        }
        createScene() {
          return this.engine.displayLoadingUI(), this.scene = new Q(this.engine), this.option.scene.colorShow ? this.scene.clearColor = w.FromHexString(this.option.scene.color || "#000000") : this.scene.clearColor = new w(0, 0, 0, 0), this.scene.fogEnabled = this.option.scene.fogEnabled, this.scene.fogMode = this.option.scene.fogMode || 1, this.scene.fogColor = b.FromHexString(this.option.scene.fogColor || "#ffffff"), this.scene.fogEnd = this.option.scene.fogEnd || 60, this.scene.fogStart = this.option.scene.fogStart || 1, this.scene.fogDensity = this.option.scene.fogDensity || 0.1, this.scene.createDefaultCamera(!0, !1, !0), this.updateMeshs(this.scene), this.scene;
        }
        updateScenePipeline(e) {
          this.scene.activeCamera && e && (e.enabled ? (this.defaultPipeline || (this.defaultPipeline = new X(
            "defaultPipeline",
            !0,
            this.scene,
            [this.scene.activeCamera]
          )), this.defaultPipeline.samples = e.samples ? 4 : 1, this.defaultPipeline.fxaaEnabled = e.fxaaEnabled, this.defaultPipeline.grainEnabled = e.grainEnabled, this.defaultPipeline.grain.intensity = e.grainIntensity, this.defaultPipeline.grain.animated = e.grainAnimated, this.defaultPipeline.bloomEnabled = e.bloomEnabled, this.defaultPipeline.bloomThreshold = e.bloomThreshold, this.defaultPipeline.bloomWeight = e.bloomWeight, this.defaultPipeline.bloomKernel = e.bloomKernel, this.defaultPipeline.bloomScale = e.bloomScale, this.defaultPipeline.depthOfFieldEnabled = e.depthOfFieldEnabled, e.depthOfFieldBlurLevel < 1 ? this.defaultPipeline.depthOfFieldBlurLevel = A.Low : e.depthOfFieldBlurLevel < 2 ? this.defaultPipeline.depthOfFieldBlurLevel = A.Medium : e.depthOfFieldBlurLevel < 3 && (this.defaultPipeline.depthOfFieldBlurLevel = A.High), this.defaultPipeline.depthOfField.focusDistance = e.depthOfFieldFocusDistance, this.defaultPipeline.depthOfField.fStop = e.depthOfFieldFStop, this.defaultPipeline.depthOfField.focalLength = e.depthOfFieldFocalLength, this.defaultPipeline.chromaticAberrationEnabled = e.chromaticAberrationEnabled, this.defaultPipeline.chromaticAberration.aberrationAmount = e.chromaticAberrationAberrationAmount, this.defaultPipeline.chromaticAberration.radialIntensity = e.chromaticAberrationRadialIntensity, e.chromaticAberrationDirection === 0 ? (this.defaultPipeline.chromaticAberration.direction.x = 0, this.defaultPipeline.chromaticAberration.direction.y = 0) : (this.defaultPipeline.chromaticAberration.direction.x = Math.sin(e.chromaticAberrationDirection), this.defaultPipeline.chromaticAberration.direction.y = Math.cos(e.chromaticAberrationDirection)), this.defaultPipeline.sharpenEnabled = e.sharpenEnabled, this.defaultPipeline.sharpen.edgeAmount = e.sharpenEdgeAmount, this.defaultPipeline.sharpen.colorAmount = e.sharpenColorAmount) : this.defaultPipeline && (this.defaultPipeline.dispose(), this.defaultPipeline = null));
        }
        updateScene(e) {
          e.colorShow ? this.scene.clearColor = w.FromHexString(e.color || "#000000") : this.scene.clearColor = new w(0, 0, 0, 0), this.scene.fogEnabled = e.fogEnabled, this.scene.fogMode = e.fogMode || 1, this.scene.fogColor = b.FromHexString(e.fogColor || "#ffffff"), this.scene.fogEnd = e.fogEnd || 60, this.scene.fogStart = e.fogStart || 1, this.scene.fogDensity = e.fogDensity || 0.1;
        }
        updateShadowsLight(e) {
          if (e.show) {
            if (this.shadowsLight) {
              this.shadowsLight.direction = new v(...e.direction), this.shadowsLight.position = new v(...e.position), this.shadowsLight.intensity = e.intensity, this.shadowsLight.diffuse = b.FromHexString(e.diffuse || "#ffffff"), this.shadowGenerator.mapSize = e.mapSize;
              return;
            }
            this.shadowsLight = new Z("shadowsLight", new v(...e.direction), this.scene), this.shadowsLight.intensity = e.intensity || 0.6, this.shadowsLight.diffuse = b.FromHexString(e.diffuse || "#ffffff"), this.shadowsLight.position = new v(...e.position), this.shadowGenerator = new $(e.mapSize, this.shadowsLight);
          } else
            this.shadowsLight && (this.shadowsLight.dispose(), this.shadowsLight = null);
        }
        updateCamera(e) {
          const t = this.scene.activeCamera;
          t && (e.radius && (t.radius = e.radius), t.beta = G.ToRadians(e.beta), t.alpha = G.ToRadians(e.alpha), t.useAutoRotationBehavior = e.autoRotation, t.wheelDeltaPercentage = e.wheelDeltaPercentage || 0.01, t.panningSensibility = 1 / (e.panningSensibility || 0.01), t.lowerRadiusLimit = e.lowerRadiusLimit, t.upperRadiusLimit = e.upperRadiusLimit, t.lowerBetaLimit = 0, t.upperBetaLimit = Math.PI / 2.1);
        }
        updateDefaultEnvironment(e) {
          this.environmentHelper && this.environmentHelper.dispose(), this.environmentHelper = this.scene.createDefaultEnvironment({
            // 是否创建地面
            createGround: e.createGround,
            // 地面颜色
            groundColor: b.FromHexString(e.groundColor || "#ffffff"),
            // 地面大小
            groundSize: e.groundSize || 15,
            // 地面透明度
            groundOpacity: e.groundOpacity || 1,
            // 使地面能够接收阴影。
            enableGroundShadow: e.enableGroundShadow,
            // 接收阴影等级
            groundShadowLevel: e.groundShadowLevel || 0.5,
            // 地面反射
            enableGroundMirror: e.enableGroundMirror === void 0 ? !0 : e.enableGroundMirror,
            // 地面反射大小比率
            groundMirrorSizeRatio: e.groundMirrorSizeRatio || 0.3,
            // 地面反射模糊大小
            groundMirrorBlurKernel: e.groundMirrorBlurKernel || 64,
            // 指定地面反射镜的可见性。
            groundMirrorAmount: e.groundMirrorAmount || 1,
            // 指定地面镜反射率权重。这使用背景材质的标准重量来设置菲涅耳效果的镜子。
            groundMirrorFresnelWeight: e.groundMirrorFresnelWeight || 1,
            // 指定应用于地面垂直位置的偏移
            groundYBias: e.groundYBias || 0,
            // 创建天空盒
            createSkybox: e.createSkybox,
            // 天空盒大小
            skyboxSize: e.skyboxSize || 20,
            ...e.skyboxTexture ? { skyboxTexture: e.skyboxTexture } : {},
            // 天空盒颜色
            // 自动计算元素的大小以最适合场景。
            sizeAuto: !0,
            // 如果autoSize不为true，rootMesh的默认位置。
            // rootPosition: Vector3,
            // 环境贴图
            ...e.environmentTexture ? { environmentTexture: e.environmentTexture } : {},
            // 相机曝光
            cameraExposure: e.cameraExposure || 0.6,
            // 相机对比度
            cameraContrast: e.cameraContrast || 1.6
          }), this.environmentHelper.ground && (this.environmentHelper.ground.position.y += 0.01);
        }
        updateMeshs(e) {
          e.meshes.forEach((t) => setTimeout(() => t.dispose())), O.ImportMeshAsync("", this.option.meshs.url, "", e, (t) => {
            y.value = (t.loaded / t.total * 100).toFixed(2);
          }).then((t) => {
            const n = t.meshes;
            if (this.option.animationGroups = e.animationGroups.map((r) => ({
              uniqueId: r.uniqueId,
              name: r.name
            })), this.events && (this.events.function[0].args[0].select = e.animationGroups.map((r) => ({
              name: r.name,
              value: r.name
            }))), this.option.defaultAnimation && this.option.defaultAnimation.name ? this.playAnimation(this.option.defaultAnimation.name, {
              loop: this.option.defaultAnimation.loop,
              speedRatio: this.option.defaultAnimation.speedRatio
            }) : e.animationGroups && e.animationGroups[0] && e.animationGroups[0].stop(), this.updateShadowsLight(this.option.shadow), e.createDefaultCamera(!0, !0, !0), this.updateCamera(this.option.camera), this.updateScenePipeline(this.option.pipelineOption), this.updateDefaultEnvironment(this.option.environment), this.option.meshs.isCasterShadow && this.shadowGenerator) {
              this.shadowGenerator.addShadowCaster(e.meshes[0], !0);
              for (let r = 0; r < n.length; r++)
                n[r].receiveShadows = !1;
            }
            n[0].position = new v(...this.option.meshs.position), setTimeout(() => {
              this.engine.hideLoadingUI(), x("on-load-success"), z.parseEvents(o.useEvents, "on-load-success");
            }, 100);
          });
        }
        run() {
          return this.engine.runRenderLoop(() => {
            this.scene.render();
          }), this;
        }
        dispose() {
          this.scene && this.engine && (this.scene.dispose(), this.engine.dispose());
        }
        playAnimation(e, t = {
          loop: !1,
          speedRatio: 1
        }) {
          if (this.scene) {
            this.scene.stopAllAnimations();
            const n = this.scene.getAnimationGroupByName(e);
            n && (x("on-play-animation"), z.parseEvents(o.useEvents, "on-play-animation"), n.start(t.loop, t.speedRatio, n.from, n.to, !1));
          }
        }
      }
      const p = S();
      return N(() => {
        i.meshs && (p.value = new M(u.value, i, s).run(), J(u.value, (R) => {
          p.value && p.value.engine.resize();
        }));
      }), Y(() => {
        p.value && p.value.dispose();
      }), {
        canvasRef: u,
        babylon: p,
        Babylon: M,
        babylonLoadingStatus: E,
        babylonLoadingTitle: y
      };
    }, { canvasRef: L, babylon: a, Babylon: C, babylonLoadingStatus: F, babylonLoadingTitle: k } = H(o.basicOption, o.basicEvents);
    return l({
      playAnimation: (i, s) => {
        const u = i[0].value, y = {
          loop: i[1].keys[0].defaultValue,
          speedRatio: i[1].keys[1].defaultValue
        };
        a.value.playAnimation(u, y);
      }
    }), f(() => c(o.basicOption.environment), (i, s) => {
      !m(i, s) && a.value && a.value.updateDefaultEnvironment(i);
    }, {
      deep: !0
    }), f(() => c(o.basicOption.shadow), (i, s) => {
      !m(i, s) && a.value && a.value.updateShadowsLight(i);
    }, {
      deep: !0
    }), f(() => c(o.basicOption.camera), (i, s) => {
      !m(i, s) && a.value && a.value.updateCamera(i);
    }, {
      deep: !0
    }), f(() => c(o.basicOption.meshs), (i, s) => {
      !m(i, s) && a.value && (a.value.dispose(), a.value = new C(L.value, o.basicOption, o.basicEvents).run());
    }, {
      deep: !0
    }), f(() => c(o.basicOption.defaultAnimation), (i, s) => {
      !m(i, s) && a.value && (a.value.dispose(), a.value = new C(L.value, o.basicOption, o.basicEvents).run());
    }, {
      deep: !0
    }), f(() => c(o.basicOption.scene), (i, s) => {
      !m(i, s) && a.value && a.value.updateScene(i);
    }, {
      deep: !0
    }), f(() => c(o.basicOption.pipelineOption), (i, s) => {
      !m(i, s) && a.value && a.value.updateScenePipeline(i);
    }, {
      deep: !0
    }), (i, s) => (D(), B("div", ee, [
      V("canvas", {
        ref_key: "canvasRef",
        ref: L,
        class: W(["widget", { show: !P(F) }])
      }, null, 2),
      P(F) ? (D(), B("div", {
        key: 0,
        ref: "babylonLoadingRef",
        class: "babylon-loading"
      }, " 正在加载模型...(" + q(P(k)) + "%) ", 513)) : K("", !0)
    ]));
  }
});
export {
  de as default
};
