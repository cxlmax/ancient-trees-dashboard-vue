import { defineComponent as j, useSlots as M, computed as i, onMounted as D, onBeforeUnmount as X, createElementBlock as Y, openBlock as Z, createElementVNode as G, unref as R, renderSlot as U } from "vue";
import { nanoid as V } from "nanoid";
import { debounce as $ } from "lodash";
import { Earth as q } from "./main.mjs";
const J = { class: "earth-wrap" }, K = ["id"], re = /* @__PURE__ */ j({
  __name: "main",
  props: {
    isComposer: { type: Boolean, default: !1 },
    radius: { default: 50 },
    subdivision: { default: 80 },
    color: { default: "#1a1a1a" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !0 },
    wireframe: { type: Boolean, default: !1 },
    label: { default: () => ({
      show: !1,
      color: "#ffffff",
      fontSize: 8
    }) },
    texture: { type: [String, Boolean], default: void 0 },
    animation: { type: Boolean, default: !0 },
    animationSpeed: { default: 2 },
    background: { default: "#050b16" },
    isBackground: { type: Boolean, default: !0 },
    fog: { type: Boolean, default: !1 },
    fogColor: { default: "#020924" },
    fogNear: { default: 20 },
    fogFar: { default: 50 },
    stats: { type: Boolean, default: !1 },
    statsType: { default: 0 },
    aperture: { type: Boolean, default: !1 },
    apertureColor: { default: "#ffffff" },
    apertureOpacity: { default: 0.1 },
    apertureTransparent: { type: Boolean, default: !0 },
    apertureDepthWrite: { type: Boolean, default: !1 },
    cloudCover: { type: Boolean, default: !1 },
    cloudCoverColor: { default: "#ffffff" },
    cloudCoverOpacity: { default: 1 },
    cloudCoverTransparent: { type: Boolean, default: !0 },
    cloudCoverTexture: {},
    cloudCoverAnimation: { type: Boolean, default: !0 },
    cloudCoverAnimationSpeed: { default: 3 },
    starrySky: { type: Boolean, default: !1 },
    starrySkyTexture: { default: void 0 },
    starrySkyNumber: { default: 1e4 },
    starrySkySize: { default: 1 },
    starrySkyColor: { default: "#ffffff" },
    starrySkyOpacity: { default: 1 },
    starrySkyAnimation: { type: Boolean, default: !0 },
    starrySkyAnimationSpeed: { default: 1 },
    gridHelper: { type: Boolean, default: !1 },
    gridHelperWidth: { default: 500 },
    gridHelperHeight: { default: 500 },
    gridHelperColor: { default: "#ffffff" },
    axesHelper: { type: Boolean, default: !1 },
    axesHelperSize: { default: 100 },
    ambientLightColor: { default: "#ffffff" },
    ambientLightIntensity: { default: 0.2 },
    directionalLightX: { default: 0 },
    directionalLightY: { default: 5 },
    directionalLightZ: { default: 10 },
    directionalLightIntensity: { default: 2 },
    directionalLightColor: { default: "#ffffff" },
    composer: { default: {
      unrealBloomPass: {},
      glitchPass: {},
      dotScreenPass: {},
      filmPass: {}
    } },
    particle: { type: Boolean, default: !1 },
    particleColor: { default: "#6acadd" },
    particleSize: { default: 5 },
    flylines: { default: () => [] },
    lines: { default: () => [] },
    lightBeam: { default: () => [] }
  },
  emits: ["on-success"],
  setup(S, { expose: C, emit: w }) {
    const n = V(), l = M(), t = S, v = i(() => ({
      background: t.background,
      isBackground: t.isBackground,
      fog: t.fog,
      fogColor: t.fogColor,
      fogNear: t.fogNear,
      fogFar: t.fogFar,
      stats: t.stats,
      statsType: t.statsType
    })), B = i(() => ({
      isComposer: t.isComposer,
      composer: t.composer
    })), P = i(() => ({
      radius: t.radius,
      subdivision: t.subdivision,
      animation: t.animation,
      animationSpeed: t.animationSpeed / 1e4,
      texture: t.texture,
      color: t.color,
      opacity: t.opacity,
      transparent: t.transparent,
      wireframe: t.wireframe,
      particle: t.particle,
      particleColor: t.particleColor,
      particleSize: t.particleSize,
      label: t.label
    })), k = i(() => ({
      show: t.aperture,
      color: t.apertureColor,
      opacity: t.apertureOpacity,
      transparent: t.apertureTransparent,
      depthWrite: t.apertureDepthWrite
    })), L = i(() => ({
      show: t.cloudCover,
      color: t.cloudCoverColor,
      opacity: t.cloudCoverOpacity,
      transparent: t.cloudCoverTransparent,
      animation: t.cloudCoverAnimation,
      animationSpeed: t.cloudCoverAnimationSpeed / 1e4
    })), z = i(() => ({
      show: t.starrySky,
      texture: t.starrySkyTexture,
      number: t.starrySkyNumber,
      size: t.starrySkySize,
      color: t.starrySkyColor,
      opacity: t.starrySkyOpacity,
      animation: t.starrySkyAnimation,
      animationSpeed: t.starrySkyAnimationSpeed / 1e4
    })), b = i(() => ({
      color: t.ambientLightColor,
      intensity: t.ambientLightIntensity
    })), H = i(() => ({
      x: t.directionalLightX,
      y: t.directionalLightY,
      z: t.directionalLightZ,
      intensity: t.directionalLightIntensity,
      color: t.directionalLightColor
    })), x = i(() => ({
      sceneParameter: v.value,
      earthParameter: P.value,
      apertureParameter: k.value,
      cloudCoverParameter: L.value,
      starrySkyParameter: z.value,
      gridHelperParameter: {
        show: t.gridHelper,
        width: t.gridHelperWidth,
        height: t.gridHelperHeight,
        color: t.gridHelperColor
      },
      axesHelperParameter: {
        show: t.axesHelper,
        size: t.axesHelperSize
      },
      ambientLightParameter: b.value,
      directionalLightParameter: H.value,
      composerParameter: B.value
    })), T = w;
    let a;
    const E = () => new Promise((r) => {
      new q(document.getElementById(n), x.value).start().then((e) => {
        a = e, r(e);
      });
    }), N = async () => {
      F("th-earth-border").forEach(async (e) => {
        var f, c, d, p, u, y, m, h, g;
        const o = ((f = e.props) == null ? void 0 : f.geojson) || e.type.props.geojson.default, W = {
          color: ((c = e.props) == null ? void 0 : c.color) || e.type.props.color.default,
          lineWidth: ((d = e.props) == null ? void 0 : d.width) === void 0 ? e.type.props.width.default : (p = e.props) == null ? void 0 : p.width,
          opacity: ((u = e.props) == null ? void 0 : u.opacity) || e.type.props.opacity.default,
          wakeline: ((y = e.props) == null ? void 0 : y.wakeline) === void 0 ? e.type.props.wakeline.default : (m = e.props) == null ? void 0 : m.wakeline,
          wakelineNumber: ((h = e.props) == null ? void 0 : h.wakelineNumber) === void 0 ? e.type.props.wakelineNumber.default : (g = e.props) == null ? void 0 : g.wakelineNumber
          // wakelineColors: border.props?.wakelineColors || border.type.props.wakelineColors.default,
        }, I = await a.createMapBorder(o, W);
        a.earth.add(I);
      });
    }, O = () => {
      (t.lines || []).forEach((e) => {
        e.data && a.earth.add(a.createFlightLines(e.data, {
          labelParameter: {
            show: e.labelShow || !1,
            color: e.labelColor || "#ffffff",
            fontSize: e.labelFontSize || 12
          },
          lineParameter: {
            color: e.color || "#ffffff",
            lineWidth: e.width || 1,
            opacity: e.opacity || 1
          },
          startScatterParameter: {
            color: e.startScatterColor || "#fff111",
            size: e.startScatterSize || 8,
            opacity: e.startScatterOpacity || 1
          },
          endScatterParameter: {
            color: e.endScatterColor || "#fff111",
            size: e.endScatterSize || 10,
            opacity: e.endScatterOpacity || 1
          }
        }));
      });
    }, _ = async () => {
      const r = t.flylines || [];
      for await (const e of r)
        e.data && a.createFlyLines(e.data, {
          labelParameter: {
            show: e.labelShow || !1,
            color: e.labelColor || "#ffffff",
            fontSize: e.labelFontSize || 12
          },
          lineParameter: {
            color: e.color || "",
            number: e.number || 1,
            speed: e.speed || 1,
            length: e.length || 0.5,
            size: e.size || 1
          },
          bgLineParameter: {
            show: e.bgLineShow,
            opacity: e.bgLineOpacity || 0.2,
            color: e.bgLineColor || "#cccccc",
            segments: e.bgLineSegments || 8,
            radius: e.bgLineRadius || 0.02
          },
          startScatterParameter: {
            color: e.startScatterColor || "#fff111",
            size: e.startScatterSize || 8,
            opacity: e.startScatterOpacity || 1
          },
          endScatterParameter: {
            color: e.endScatterColor || "#fff111",
            size: e.endScatterSize || 10,
            opacity: e.endScatterOpacity || 1
          }
        }).then((o) => {
          a.earth.add(o);
        });
    }, A = () => {
      (t.lightBeam || []).forEach((e) => {
        e.data && a.createLightBeamScatter(e.data, {
          scatterParameter: {
            color: e.color || "#ffffff",
            opacity: e.opacity || 1,
            size: e.scatterSize || 10
          },
          lightBeamParameter: {
            type: e.type || 1,
            color: e.color || "#ffffff",
            opacity: e.opacity || 1,
            radius: e.beamSize || 0.2,
            baseHeight: e.baseHeight || 0.02
          }
        }).then((o) => {
          a.earth.add(o);
        });
      });
    }, s = async () => {
      const r = document.getElementById(n);
      r && r.classList.remove("showLabel"), E().then((e) => {
        setTimeout(async () => {
          await N(), await O(), await _(), await A(), await T("on-success"), a.accessAnimation().then((o) => {
            r && r.classList.add("showLabel");
          });
        }, 300);
      });
    };
    D(() => s()), C({
      dispose: () => {
        a && a.dispose();
      },
      refresh: $(() => {
        a && a.dispose(), setTimeout(() => s());
      }, 100)
    }), X(() => {
      a && a.dispose();
    });
    const F = (r) => (l == null ? void 0 : l.default) === void 0 ? [] : l == null ? void 0 : l.default().map((e) => {
      var o;
      return ((o = e.type) == null ? void 0 : o.name) === r ? e : !1;
    }).filter((e) => e !== !1);
    return (r, e) => (Z(), Y("div", J, [
      G("div", {
        id: R(n),
        class: "zv-earth"
      }, [
        U(r.$slots, "default", {}, void 0, !0)
      ], 8, K)
    ]));
  }
});
export {
  re as default
};
