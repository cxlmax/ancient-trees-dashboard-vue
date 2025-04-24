import { defineComponent as b, ref as c, onMounted as E, watch as k, createElementBlock as L, openBlock as l, createElementVNode as O, unref as z, createVNode as W, withCtx as N, createBlock as d, createCommentVNode as v } from "vue";
import { cloneDeep as n, debounce as I, isEqual as g } from "lodash";
import { nanoid as T } from "nanoid";
import { SHJDatasourceV2 as V } from "../../commons/plugins/datasource/index.mjs";
import A from "../../commons/core/earth/main.vue.mjs";
import p from "../../commons/core/earth/border.vue.mjs";
import { SHJParseEvent as y } from "../../commons/plugins/event/index.mjs";
const D = { class: "zerov-widget" }, j = ["id"], F = b({ name: "zv-map-earth-cool-tech" }), Y = /* @__PURE__ */ b({
  ...F,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-success"],
  setup(w, { expose: B, emit: S }) {
    const C = S, r = w, _ = T(), s = c(), m = c(!0), e = c(n(r.basicOption)), o = I((t = !1) => {
      m.value = !0, e.value = n(r.basicOption), r.sources && r.sources.length > 0 ? V.parse({
        tId: r.uuid,
        sources: r.sources,
        callback: (a) => {
          try {
            y.parseEvents(r.useEvents, "dataListener", a.data);
            const u = e.value.lines && e.value.lines.find((i) => i._sourceId === a.id);
            u && (u.data = a.data[0].data);
            const h = e.value.flylines && e.value.flylines.find((i) => i._sourceId === a.id);
            h && (h.data = a.data[0].data);
            const f = e.value.lightBeams && e.value.lightBeams.find((i) => i._sourceId === a.id);
            f && (f.data = a.data[0].data), !t && s.value.refresh();
          } catch {
            y.parseEvents(r.useEvents, "dataListener", null);
          }
        }
      }) : !t && s.value.refresh();
    }, 200);
    E(() => o(!0)), k(() => n(r.basicOption), (t, a) => {
      g(t, a) || o();
    }, { deep: !0 }), k(() => n(r.sources), (t, a) => {
      g(t, a) || o();
    }, { deep: !0 }), B({
      refresh: () => o(),
      refreshView: () => o(),
      refreshData: () => o()
    });
    const x = () => {
      m.value = !1, C("on-success"), y.parseEvents(r.useEvents, "on-success", null);
    };
    return (t, a) => (l(), L("div", D, [
      O("div", {
        id: z(_),
        class: "widget"
      }, [
        W(A, {
          ref_key: "earthRef",
          ref: s,
          style: { height: "100%" },
          background: e.value.background,
          "is-background": e.value.isBackground,
          fog: e.value.fog,
          "fog-color": e.value.fogColor,
          "fog-near": e.value.fogNear,
          "fog-far": e.value.fogFar,
          stats: e.value.stats,
          "stats-type": e.value.statsType,
          radius: e.value.radius,
          subdivision: e.value.subdivision,
          animation: e.value.animation,
          "animation-speed": e.value.animationSpeed,
          texture: e.value.texture,
          color: e.value.color,
          opacity: e.value.opacity,
          transparent: e.value.transparent,
          wireframe: e.value.wireframe,
          label: e.value.label,
          particle: e.value.particle,
          "particle-color": e.value.particleColor,
          "particle-size": e.value.particleSize,
          aperture: e.value.aperture,
          "aperture-color": e.value.apertureColor,
          "aperture-opacity": e.value.apertureOpacity,
          "aperture-transparent": e.value.apertureTransparent,
          "aperture-depth-write": e.value.apertureDepthWrite,
          "cloud-cover": e.value.cloudCover,
          "cloud-cover-color": e.value.cloudCoverColor,
          "cloud-cover-opacity": e.value.cloudCoverOpacity,
          "cloud-cover-transparent": e.value.cloudCoverTransparent,
          "cloud-cover-animation": e.value.cloudCoverAnimation,
          "cloud-cover-animation-speed": e.value.cloudCoverAnimationSpeed,
          "starry-sky": e.value.starrySky,
          "starry-sky-texture": e.value.starrySkyTexture,
          "starry-sky-number": e.value.starrySkyNumber,
          "starry-sky-size": e.value.starrySkySize,
          "starry-sky-color": e.value.starrySkyColor,
          "starry-sky-opacity": e.value.starrySkyOpacity,
          "starry-sky-animation": e.value.starrySkyAnimation,
          "starry-sky-animation-speed": e.value.starrySkyAnimationSpeed,
          "ambient-light-color": e.value.ambientLightColor,
          "ambient-light-intensity": e.value.ambientLightIntensity,
          "directional-light-x": e.value.directionalLightX,
          "directional-light-y": e.value.directionalLightY,
          "directional-light-z": e.value.directionalLightZ,
          "directional-light-intensity": e.value.directionalLightIntensity,
          "directional-light-color": e.value.directionalLightColor,
          "is-composer": e.value.isComposer,
          composer: e.value.composer,
          flylines: e.value.flylines,
          lines: e.value.lines,
          "light-beam": e.value.lightBeams,
          onOnSuccess: x
        }, {
          default: N(() => [
            e.value.chinaBorderShow ? (l(), d(p, {
              key: 0,
              geojson: "china",
              color: e.value.chinaBorderColor,
              width: e.value.chinaBorderWidth,
              opacity: e.value.chinaBorderOpacity,
              wakeline: e.value.chinaBorderWakeline,
              "wakeline-number": e.value.chinaBorderWakelineNumber
            }, null, 8, ["color", "width", "opacity", "wakeline", "wakeline-number"])) : v("", !0),
            e.value.china2BorderShow ? (l(), d(p, {
              key: 1,
              geojson: "china-border",
              color: e.value.china2BorderColor,
              width: e.value.china2BorderWidth,
              opacity: e.value.china2BorderOpacity,
              wakeline: e.value.china2BorderWakeline,
              "wakeline-number": e.value.china2BorderWakelineNumber
            }, null, 8, ["color", "width", "opacity", "wakeline", "wakeline-number"])) : v("", !0),
            e.value.worldBorderShow ? (l(), d(p, {
              key: 2,
              geojson: "world",
              color: e.value.worldBorderColor,
              width: e.value.worldBorderWidth,
              opacity: e.value.worldBorderOpacity,
              wakeline: e.value.worldBorderWakeline,
              "wakeline-number": e.value.worldBorderWakelineNumber
            }, null, 8, ["color", "width", "opacity", "wakeline", "wakeline-number"])) : v("", !0)
          ]),
          _: 1
        }, 8, ["background", "is-background", "fog", "fog-color", "fog-near", "fog-far", "stats", "stats-type", "radius", "subdivision", "animation", "animation-speed", "texture", "color", "opacity", "transparent", "wireframe", "label", "particle", "particle-color", "particle-size", "aperture", "aperture-color", "aperture-opacity", "aperture-transparent", "aperture-depth-write", "cloud-cover", "cloud-cover-color", "cloud-cover-opacity", "cloud-cover-transparent", "cloud-cover-animation", "cloud-cover-animation-speed", "starry-sky", "starry-sky-texture", "starry-sky-number", "starry-sky-size", "starry-sky-color", "starry-sky-opacity", "starry-sky-animation", "starry-sky-animation-speed", "ambient-light-color", "ambient-light-intensity", "directional-light-x", "directional-light-y", "directional-light-z", "directional-light-intensity", "directional-light-color", "is-composer", "composer", "flylines", "lines", "light-beam"])
      ], 8, j)
    ]));
  }
});
export {
  Y as default
};
