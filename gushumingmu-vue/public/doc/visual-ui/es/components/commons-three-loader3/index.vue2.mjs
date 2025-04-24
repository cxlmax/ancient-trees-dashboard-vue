import { defineComponent as z, ref as Z, onMounted as q, onBeforeUnmount as K, watch as m, createElementBlock as N, openBlock as W, createElementVNode as Y, normalizeClass as J } from "vue";
import "@babylonjs/loaders/glTF";
import * as t from "@babylonjs/core";
import { cloneDeep as b, isEqual as f } from "lodash";
import { SHJParseEvent as k } from "../../commons/plugins/event/index.mjs";
const U = { class: "zerov-widget" }, X = z({ name: "zv-commons-three-loader3" }), ie = /* @__PURE__ */ z({
  ...X,
  props: {
    basicOption: {},
    basicEvents: {},
    useEvents: {}
  },
  emits: [
    "on-load-success",
    "on-play-animation"
  ],
  setup(V, { expose: P, emit: _ }) {
    const e = V, S = _;
    let v, o, s, p, u, l, w, g, d, O, r, n;
    const A = () => {
      s || (s = new t.ArcRotateCamera(
        "Camera",
        e.basicOption.camera.alpha,
        e.basicOption.camera.beta,
        e.basicOption.camera.radius,
        new t.Vector3(
          e.basicOption.camera.target[0],
          e.basicOption.camera.target[1],
          e.basicOption.camera.target[2]
        ),
        o
      )), s.alpha = e.basicOption.camera.alpha, s.beta = e.basicOption.camera.beta, s.radius = e.basicOption.camera.radius, s.target = new t.Vector3(
        e.basicOption.camera.target[0],
        e.basicOption.camera.target[1],
        e.basicOption.camera.target[2]
      ), s.lowerRadiusLimit = e.basicOption.camera.lowerRadiusLimit, s.upperRadiusLimit = e.basicOption.camera.upperRadiusLimit, s.lowerBetaLimit = t.Tools.ToRadians(e.basicOption.camera.lowerBetaLimit), s.upperBetaLimit = t.Tools.ToRadians(e.basicOption.camera.upperBetaLimit), s.useBouncingBehavior = e.basicOption.camera.useBouncingBehavior, s.wheelDeltaPercentage = e.basicOption.camera.wheelDeltaPercentage || 0.01, s.useAutoRotationBehavior = e.basicOption.camera.autoRotation, s.panningSensibility = 1 / (e.basicOption.camera.panningSensibility || 0.01), s.attachControl(T.value, !0);
    }, E = () => {
      o || (o = new t.Scene(v)), o.environmentTexture = t.CubeTexture.CreateFromPrefilteredData(e.basicOption.scene.environmentTexture, o), o.environmentIntensity = e.basicOption.scene.environmentIntensity, e.basicOption.scene.colorShow ? o.clearColor = t.Color4.FromHexString(e.basicOption.scene.color || "#000000") : o.clearColor = new t.Color4(0, 0, 0, 0), o.fogEnabled = e.basicOption.scene.fogEnabled, o.fogMode = e.basicOption.scene.fogMode || 1, o.fogColor = t.Color3.FromHexString(e.basicOption.scene.fogColor || "#ffffff"), o.fogEnd = e.basicOption.scene.fogEnd || 2e3, o.fogStart = e.basicOption.scene.fogStart || 1, o.fogDensity = e.basicOption.scene.fogDensity * 1e-4;
    }, B = () => {
      if (p || (p = new t.DirectionalLight("dirLight", new t.Vector3(
        e.basicOption.directionalLight.direction[0],
        e.basicOption.directionalLight.direction[1],
        e.basicOption.directionalLight.direction[2]
      ), o)), p.direction = new t.Vector3(
        e.basicOption.directionalLight.direction[0],
        e.basicOption.directionalLight.direction[1],
        e.basicOption.directionalLight.direction[2]
      ), p.position = new t.Vector3(
        e.basicOption.directionalLight.position[0],
        e.basicOption.directionalLight.position[1],
        e.basicOption.directionalLight.position[2]
      ), p.diffuse = t.Color3.FromHexString(e.basicOption.directionalLight.diffuse || "#ffffff"), p.intensity = e.basicOption.directionalLight.intensity, p.shadowMinZ = e.basicOption.directionalLight.shadowMinZ, p.shadowMaxZ = e.basicOption.directionalLight.shadowMaxZ, p.autoCalcShadowZBounds = e.basicOption.directionalLight.autoCalcShadowZBounds, e.basicOption.directionalLight.shadowGenerator.enable) {
        const { mapSize: i, transparencyShadow: a, usePercentageCloserFiltering: c, bias: h } = e.basicOption.directionalLight.shadowGenerator;
        if (!l && (l = new t.ShadowGenerator(i, p), r))
          for (let L = 0; L < r.length; L++)
            e.basicOption.meshes.isCasterShadow && l && l.addShadowCaster(r[L], !0);
        l.mapSize = i, l.transparencyShadow = a, l.usePercentageCloserFiltering = c, l.bias = h;
      } else
        l && (l.dispose(), l = null);
      e.basicOption.directionalLight.lightGizmo && e.basicOption.directionalLight.lightGizmo.enable ? (u || (u = new t.LightGizmo(), u.light = p), u.scaleRatio = e.basicOption.directionalLight.lightGizmo.scaleRatio) : u && (u.dispose(), u = null);
    }, F = () => {
      w || (w = new t.HemisphericLight("light", new t.Vector3(
        e.basicOption.hemisphericLight.direction[0],
        e.basicOption.hemisphericLight.direction[1],
        e.basicOption.hemisphericLight.direction[2]
      ), o)), w.direction = new t.Vector3(
        e.basicOption.hemisphericLight.direction[0],
        e.basicOption.hemisphericLight.direction[1],
        e.basicOption.hemisphericLight.direction[2]
      ), w.intensity = e.basicOption.hemisphericLight.intensity, w.diffuse = t.Color3.FromHexString(e.basicOption.hemisphericLight.diffuse || "#ffffff"), e.basicOption.hemisphericLight.lightGizmo && e.basicOption.hemisphericLight.lightGizmo.enable ? (g || (g = new t.LightGizmo(), g.light = w), g.scaleRatio = e.basicOption.hemisphericLight.lightGizmo.scaleRatio) : g && (g.dispose(), g = null);
    }, R = () => {
      if (e.basicOption.ground.enable) {
        const { width: i, height: a, position: c, rotation: h, scaling: L, material: y, receiveShadows: I } = e.basicOption.ground;
        d || (d = t.MeshBuilder.CreateGround("ground", { width: i, height: a }, o)), d.position = new t.Vector3(
          c[0],
          c[1],
          c[2]
        ), d.rotation = new t.Vector3(
          t.Tools.ToRadians(h[0]),
          t.Tools.ToRadians(h[1]),
          t.Tools.ToRadians(h[2])
        ), d.scaling = new t.Vector3(
          L[0],
          L[1],
          L[2]
        );
        const x = new t.StandardMaterial("", o);
        x.emissiveTexture = new t.Texture(y.emissiveTexture, o), x.diffuseTexture = new t.Texture(y.emissiveTexture, o), x.ambientTexture = new t.Texture(y.emissiveTexture, o), x.diffuseColor = new t.Color3(1, 1, 1), x.opacityTexture = new t.Texture(y.opacityTexture, o), d.material = x, d.receiveShadows = I;
      } else
        d && (d.dispose(), d = null);
    }, G = () => {
      if (e.basicOption.skybox.enable) {
        const { size: i } = e.basicOption.skybox;
        O || (O = t.MeshBuilder.CreateBox("skyBox", { size: i }, o));
        const a = new t.StandardMaterial("skyBox", o);
        a.backFaceCulling = !1, a.reflectionTexture = t.CubeTexture.CreateFromPrefilteredData(e.basicOption.scene.environmentTexture, o), a.reflectionTexture.coordinatesMode = t.Texture.SKYBOX_MODE, a.diffuseColor = new t.Color3(1, 1, 1), a.specularColor = new t.Color3(1, 1, 1), a.disableLighting = !0, O.material = a, O.isPickable = !1;
      } else
        O && (O.dispose(), O = null);
    }, M = (i, a = {
      loop: !1,
      speedRatio: 1
    }) => {
      if (o) {
        o.stopAllAnimations();
        const c = o.getAnimationGroupByName(i);
        c && (S("on-play-animation"), k.parseEvents(e.useEvents, "on-play-animation"), c.start(a.loop, a.speedRatio, c.from, c.to, !1));
      }
    }, C = async () => {
      r || (r = (await t.SceneLoader.ImportMeshAsync("", e.basicOption.meshes.url, "", o)).meshes), r[0].position = new t.Vector3(
        e.basicOption.meshes.position[0],
        e.basicOption.meshes.position[1],
        e.basicOption.meshes.position[2]
      ), r[0].scaling = new t.Vector3(
        e.basicOption.meshes.scaling[0],
        e.basicOption.meshes.scaling[1],
        e.basicOption.meshes.scaling[2]
      ), r[0].rotation = new t.Vector3(
        t.Tools.ToRadians(e.basicOption.meshes.rotation[0]),
        t.Tools.ToRadians(e.basicOption.meshes.rotation[1]),
        t.Tools.ToRadians(e.basicOption.meshes.rotation[2])
      );
      for (let i = 0; i < r.length; i++)
        r[i].isPickable = !1, r[i].receiveShadows = e.basicOption.meshes.isCasterShadow, e.basicOption.meshes.isCasterShadow && l && l.addShadowCaster(r[i], !0);
      e.basicOption.animationGroups = o.animationGroups.map((i) => ({ uniqueId: i.uniqueId, name: i.name })), e.basicEvents && (e.basicEvents.function[0].args[0].select = o.animationGroups.map((i) => ({ name: i.name, value: i.name }))), e.basicOption.defaultAnimation && e.basicOption.defaultAnimation.name ? M(e.basicOption.defaultAnimation.name, {
        loop: e.basicOption.defaultAnimation.loop,
        speedRatio: e.basicOption.defaultAnimation.speedRatio
      }) : o.animationGroups && o.animationGroups[0] && o.animationGroups[0].stop();
    }, D = () => {
      const i = e.basicOption.pipelineOption;
      i && i.enabled ? (n || (n = new t.DefaultRenderingPipeline(
        "defaultPipeline",
        !0,
        o,
        [s]
      )), n.samples = i.samples ? 4 : 1, n.fxaaEnabled = i.fxaaEnabled, n.grainEnabled = i.grainEnabled, n.grain.intensity = i.grainIntensity, n.grain.animated = i.grainAnimated, n.bloomEnabled = i.bloomEnabled, n.bloomThreshold = i.bloomThreshold, n.bloomWeight = i.bloomWeight, n.bloomKernel = i.bloomKernel, n.bloomScale = i.bloomScale, n.depthOfFieldEnabled = i.depthOfFieldEnabled, i.depthOfFieldBlurLevel < 1 ? n.depthOfFieldBlurLevel = t.DepthOfFieldEffectBlurLevel.Low : i.depthOfFieldBlurLevel < 2 ? n.depthOfFieldBlurLevel = t.DepthOfFieldEffectBlurLevel.Medium : i.depthOfFieldBlurLevel < 3 && (n.depthOfFieldBlurLevel = t.DepthOfFieldEffectBlurLevel.High), n.depthOfField.focusDistance = i.depthOfFieldFocusDistance, n.depthOfField.fStop = i.depthOfFieldFStop, n.depthOfField.focalLength = i.depthOfFieldFocalLength, n.chromaticAberrationEnabled = i.chromaticAberrationEnabled, n.chromaticAberration.aberrationAmount = i.chromaticAberrationAberrationAmount, n.chromaticAberration.radialIntensity = i.chromaticAberrationRadialIntensity, i.chromaticAberrationDirection === 0 ? (n.chromaticAberration.direction.x = 0, n.chromaticAberration.direction.y = 0) : (n.chromaticAberration.direction.x = Math.sin(i.chromaticAberrationDirection), n.chromaticAberration.direction.y = Math.cos(i.chromaticAberrationDirection)), n.sharpenEnabled = i.sharpenEnabled, n.sharpen.edgeAmount = i.sharpenEdgeAmount, n.sharpen.colorAmount = i.sharpenColorAmount) : n && (n.dispose(), n = null);
    }, H = function(i) {
      E(), A(), F(), B(), R(), G(), C(), D(), S("on-load-success"), k.parseEvents(e.useEvents, "on-load-success");
    }, T = Z();
    return q(() => {
      v = new t.Engine(T.value, !0), v && e.basicOption.meshes.url && (H(), v.runRenderLoop(function() {
        o && o.render();
      }));
    }), K(() => {
      o.dispose(), v.dispose();
    }), P({
      playAnimation: (i, a) => {
        const c = i[0].value, h = {
          loop: i[1].keys[0].defaultValue,
          speedRatio: i[1].keys[1].defaultValue
        };
        M(c, h);
      }
    }), m(() => b(e.basicOption.camera), (i, a) => {
      !f(i, a) && s && A();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.scene), (i, a) => {
      !f(i, a) && o && E();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.directionalLight), (i, a) => {
      f(i, a) || B();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.hemisphericLight), (i, a) => {
      f(i, a) || F();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.ground), (i, a) => {
      f(i, a) || R();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.skybox), (i, a) => {
      f(i, a) || G();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.meshes), (i, a) => {
      !f(i, a) && r && i.url === a.url && C();
    }, {
      deep: !0
    }), m(() => b(e.basicOption.meshes.url), (i, a) => {
      f(i, a) || (o.meshes.forEach((c, h) => {
        h > 1 && c.dispose();
      }), r = null, C());
    }, {
      deep: !0
    }), m(() => b(e.basicOption.pipelineOption), (i, a) => {
      f(i, a) || D();
    }, {
      deep: !0
    }), (i, a) => (W(), N("div", U, [
      Y("canvas", {
        ref_key: "canvasRef",
        ref: T,
        class: J(["widget", { show: !0 }])
      }, null, 512)
    ]));
  }
});
export {
  ie as default
};
