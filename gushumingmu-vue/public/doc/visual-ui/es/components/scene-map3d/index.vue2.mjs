import { defineComponent as P, ref as f, onMounted as Q, onBeforeUnmount as X, computed as Y, watch as b, createElementBlock as d, openBlock as p, normalizeClass as L, createCommentVNode as E, normalizeStyle as m, Fragment as R, renderList as T, createElementVNode as I, toDisplayString as w, unref as Z } from "vue";
import { cloneDeep as v, isEqual as k } from "lodash";
import $ from "gsap";
import { useFps as x } from "@vueuse/core";
import { World as ee } from "./map3d/map.mjs";
import { initWatch as te } from "./watch.mjs";
import "three";
import "d3-geo";
import "three/examples/jsm/controls/OrbitControls";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { createHistory as ae } from "./map3d/mini3d/utils/CreateHistory.mjs";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { SHJDatasourceV2 as oe } from "../../commons/plugins/datasource/index.mjs";
import { autoInstallFont as H, jsonToCssStyle as O } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as i } from "../../commons/plugins/event/index.mjs";
const le = { class: "value" }, ne = ["onClick"], re = {
  key: 3,
  class: "fps"
}, ie = P({ name: "zv-scene-map3d" }), Be = /* @__PURE__ */ P({
  ...ie,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: [
    "on-loaded",
    "on-animated",
    "on-drill-down",
    "on-area-mouseover",
    "on-area-mouseout",
    "on-area-click",
    "on-bar-click",
    "on-scatter-click",
    "on-flyline-click",
    "on-return",
    "on-data-change"
  ],
  setup(V, { expose: N, emit: j }) {
    const o = V, s = j;
    i.parseEvents(o.useEvents, "on-page-loaded", null);
    const l = f(), C = f(!1), B = f(!1), S = "zerov-map3d-scene", A = "zerov-map3d-scene-wrap", n = new ae(), g = f(!1), y = (e = !0) => {
      l.value.cleanAllBar(), l.value.cleanAllScatter(), l.value.cleanAllFlyLine(), l.value.createAllRegionalLevel(), o.sources && o.sources.length > 0 && oe.parse({
        tId: o.uuid,
        sources: o.sources,
        callback: (a) => {
          try {
            const t = o.basicOption.widgets && o.basicOption.widgets.find((u) => u._sourceId === a.id);
            t && t.type === "bar" && l.value.createBar(t, a.data[0].data, !0, e), t && t.type === "scatter" && l.value.createScatter(t, a.data[0].data, !0, e), t && t.type === "flyline" && l.value.createFlyLine(t, a.data[0].data, !0, e), t && t.type === "regionalLevel" && l.value.createRegionalLevel(t, a.data[0].data, !0, e), e && (l.value.createBarTimeLine(), l.value.createScatterTimeLine(), l.value.createFlyLineTimeLine(), l.value.createRegionalLevelTimeLine()), s("on-data-change", a), i.parseEvents(o.useEvents, "on-data-change", a);
          } catch {
            s("on-data-change", null), i.parseEvents(o.useEvents, "on-data-change", null);
          }
        }
      });
    }, D = () => {
      document.getElementById(S) && document.getElementById(A).removeChild(document.getElementById(S));
      const e = document.createElement("canvas");
      e.id = S, e.className = "zerov-map-3d", e.style.width = "100%", e.style.height = "100%", document.getElementById(A).appendChild(e);
    }, h = (e) => (C.value = !1, B.value = !1, l.value && (l.value.destroy(), l.value = null), D(), new ee(document.getElementById(S), { geoProjectionCenter: [108.55, 36.32] }, e, {
      onAreaMouseover: (t) => {
        s("on-area-mouseover", t), i.parseEvents(o.useEvents, "on-area-mouseover", t);
      },
      onAreaMouseout: (t) => {
        s("on-area-mouseout", t), i.parseEvents(o.useEvents, "on-area-mouseout", t);
      },
      onLoadChild: (t) => {
        if (s("on-area-click", t), i.parseEvents(o.useEvents, "on-area-click", t), t.adcode !== n.present && o.basicOption.scene.isDrilling && o.basicOption.scene.defaultMapAdcode !== 1) {
          s("on-drill-down", t), i.parseEvents(o.useEvents, "on-drill-down", t);
          const u = v(o.basicOption);
          u.scene.defaultMapAdcode = t.adcode, l.value = h(u), n.push(t.adcode), n.past.length <= 0 ? g.value = !1 : g.value = !0;
        }
      },
      onMapSuccess: () => {
        C.value = !0, s("on-loaded"), i.parseEvents(o.useEvents, "on-loaded", null);
      },
      onMapAnimationSuccess: () => {
        y(), B.value = !0, s("on-animated"), i.parseEvents(o.useEvents, "on-animated", null);
      },
      onClickBar: (t) => {
        s("on-bar-click", t), i.parseEvents(o.useEvents, "on-bar-click", t);
      },
      onClickScatter: (t) => {
        s("on-scatter-click", t), i.parseEvents(o.useEvents, "on-scatter-click", t);
      },
      onClickFlyline: (t) => {
        s("on-flyline-click", t), i.parseEvents(o.useEvents, "on-flyline-click", t);
      }
    }));
    Q(() => {
      setTimeout(() => {
        l.value = h(o.basicOption), n.push(o.basicOption.scene.defaultMapAdcode), te(o, l, h, y, J);
      }, 0);
    }), X(() => {
      l.value && l.value.destroy();
    });
    const F = () => {
      s("on-return", {
        parentAdcode: n.past[n.past.length - 1],
        adcode: n.present
      }), i.parseEvents(o.useEvents, "on-return", {
        parentAdcode: n.past[n.past.length - 1],
        adcode: n.present
      }), n.undo();
      const e = v(o.basicOption);
      e.scene.defaultMapAdcode = n.present, l.value = h(e), n.past.length <= 0 ? g.value = !1 : g.value = !0;
    }, J = () => {
      n.empty(), n.push(o.basicOption.scene.defaultMapAdcode), l.value = h(o.basicOption), n.past.length <= 0 ? g.value = !1 : g.value = !0;
    }, U = (e, a, t) => {
      $.timeline().add($.to(l.value.camera.instance.position, {
        duration: 2,
        delay: 0,
        x: e,
        y: a,
        z: t,
        ease: "circ.out"
      }));
    };
    N({
      refresh: () => y(),
      refreshView: () => y(),
      refreshData: () => y(),
      // 返回上一级
      goBack: () => F(),
      // 更新相机位置
      setCameraPosition: (e, a, t) => U(e, a, t)
    });
    const _ = x(), W = f(), q = (e) => {
      if (W.value && e) {
        H(o.basicOption.backButtonCss.fontFamily);
        const a = `url(${e.backgroundImage})`;
        return {
          ...O(e),
          left: o.basicOption.backButtonLeft + "%",
          bottom: o.basicOption.backButtonBottom + "%",
          "background-image": a
        };
      }
      return {};
    }, c = f(v(o.basicOption.widgets)), r = Y(() => {
      try {
        const e = c.value.filter((a) => a.type === "regionalLevel");
        return e.length > 0 ? (H(e[0].labelStyle.fontFamily), e[0].isHide ? null : e[0]) : null;
      } catch {
        return null;
      }
    });
    b(() => v(o.basicOption.widgets), (e, a) => {
      try {
        !k(e, a) && l.value && (c.value = v(o.basicOption.widgets));
      } catch {
      }
    }, {
      deep: !0
    }), b(() => v(c.value.filter((e) => e.type === "bar")), (e, a) => {
      try {
        !k(e, a) && l.value && e.length === a.length && e.forEach((t) => {
          l.value.createBar(t, void 0, !1);
        });
      } catch {
      }
    }, {
      deep: !0
    }), b(() => v(c.value.filter((e) => e.type === "scatter")), (e, a) => {
      try {
        !k(e, a) && l.value && e.length === a.length && e.forEach((t) => {
          l.value.createScatter(t, void 0, !1);
        });
      } catch {
      }
    }, {
      deep: !0
    }), b(() => v(c.value.filter((e) => e.type === "flyline")), (e, a) => {
      try {
        !k(e, a) && l.value && e.length === a.length && e.forEach((t) => {
          l.value.createFlyLine(t, void 0, !1);
        });
      } catch {
      }
    }, {
      deep: !0
    }), b(() => v(c.value.filter((e) => e.type === "regionalLevel")), (e, a) => {
      try {
        !k(e, a) && l.value && e.length === a.length && e.forEach((t) => {
          l.value.createRegionalLevel(t, void 0, !1);
        });
      } catch {
      }
    }, {
      deep: !0
    });
    const G = (e) => {
      try {
        e.isHide === void 0 ? e.isHide = !0 : e.isHide = !e.isHide;
      } catch {
      }
    }, K = () => {
      try {
        const e = c.value.every((a) => !a.isHide);
        c.value.forEach((a) => a.isHide = e);
      } catch {
      }
    }, M = (e) => {
      H(o.basicOption.widgetControlStyle.fontFamily);
      const a = `url(${e.backgroundImage})`, t = `url(${z(e.hover.backgroundImage)})`, u = `url(${z(e.active.backgroundImage)})`;
      return {
        ...O(e),
        ...O(e.hover, "hover"),
        ...O(e.active, "active"),
        "background-image": a,
        "--hover-background-image": t,
        "--active-background-image": u
      };
    }, z = (e) => !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e;
    return (e, a) => (p(), d("div", {
      id: "zerov-map3d-scene-wrap",
      class: L(["map-3d-wrap", { show: C.value }])
    }, [
      B.value && g.value && e.basicOption.backButton ? (p(), d("div", {
        key: 0,
        ref_key: "buttonRef",
        ref: W,
        class: "return-btn",
        style: m(q(e.basicOption.backButtonCss)),
        onClick: F
      }, " 返回上一级 ", 4)) : E("", !0),
      r.value ? (p(), d("div", {
        key: 1,
        class: "regional-level",
        style: m({
          left: r.value.labelStyle.left + "%",
          top: r.value.labelStyle.top + "%",
          flexDirection: r.value.labelStyle.direction,
          gap: r.value.labelStyle.gap + "px",
          fontSize: r.value.labelStyle.fontSize + "px",
          fontFamily: r.value.labelStyle.fontFamily,
          fontStyle: r.value.labelStyle.fontStyle,
          color: r.value.labelStyle.color,
          "--color-width": r.value.labelStyle.colorStyle.width + "px",
          "--color-height": r.value.labelStyle.colorStyle.height + "px",
          "--color-borderRadius": r.value.labelStyle.colorStyle.borderRadius + "px"
        })
      }, [
        (p(!0), d(R, null, T(r.value.rules, (t, u) => (p(), d("div", {
          key: u,
          class: "item"
        }, [
          I("div", {
            class: "color",
            style: m({ backgroundColor: t.color })
          }, null, 4),
          I("span", le, w(t.label), 1)
        ]))), 128))
      ], 4)) : E("", !0),
      e.basicOption.widgets.length > 0 && e.basicOption.widgetControlStyle && e.basicOption.widgetControlStyle.show ? (p(), d("div", {
        key: 2,
        class: "widget-control",
        style: m({
          left: e.basicOption.widgetControlStyle.left + "%",
          top: e.basicOption.widgetControlStyle.top + "%",
          flexDirection: e.basicOption.widgetControlStyle.direction,
          gap: e.basicOption.widgetControlStyle.gap + "px",
          "--widget-width": e.basicOption.widgetControlStyle.width + "px",
          "--widget-height": e.basicOption.widgetControlStyle.height + "px"
        })
      }, [
        I("div", {
          class: L(["control-button", {
            active: c.value.every((t) => !t.isHide)
          }]),
          style: m(M(e.basicOption.widgetControlStyle)),
          onClick: K
        }, w(c.value.every((t) => !t.isHide) ? "隐藏" : "显示") + "/全部 ", 7),
        (p(!0), d(R, null, T(c.value, (t) => (p(), d("div", {
          key: t.id,
          class: L(["control-button", {
            active: !t.isHide
          }]),
          style: m(M(e.basicOption.widgetControlStyle)),
          onClick: (u) => G(t)
        }, w(t.name || "-"), 15, ne))), 128))
      ], 4)) : E("", !0),
      e.basicOption.debugger ? (p(), d("div", re, " fps:" + w(Z(_)), 1)) : E("", !0)
    ], 2));
  }
});
export {
  Be as default
};
