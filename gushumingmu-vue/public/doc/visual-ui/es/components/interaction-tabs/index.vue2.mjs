import { defineComponent as S, ref as i, watch as D, createElementBlock as c, openBlock as l, normalizeStyle as b, unref as p, Fragment as O, renderList as T, withModifiers as _, normalizeClass as R, toDisplayString as z } from "vue";
import { cloneDeep as B, isEqual as F, isArray as f } from "lodash";
import { SHJParseEvent as h } from "../../commons/plugins/event/index.mjs";
import { autoInstallFont as v, jsonToCssStyle as s } from "../../commons/utils/json2css.mjs";
const L = ["onClick"], W = S({ name: "zv-interaction-tabs" }), J = /* @__PURE__ */ S({
  ...W,
  props: {
    basicOption: {},
    sceneOption: {},
    useEvents: {}
  },
  emits: ["on-click-item", "on-change"],
  setup(g, { emit: x }) {
    const d = x, o = g, k = () => {
      const t = i(), a = (e) => e && !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e;
      return {
        rendererTabDomStyle: (e) => t.value ? {
          ...s(e)
        } : {},
        rendererTabItemDomStyle: (e) => {
          if (t.value) {
            v(e.fontFamily), v(e.selected.fontFamily);
            const I = e.backgroundImage !== "" ? `url(${e.backgroundImage})` : e.backgroundColor, $ = e.selected.backgroundImage !== "" ? `url(${a(e.selected.backgroundImage)})` : e.selected.backgroundColor;
            return {
              ...s(e),
              ...s(e.selected, "selected"),
              ...e.textShadow && e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {},
              ...e.selected.textShadow && e.selected.textShadow.show ? { "--selected-text-shadow": `${e.selected.textShadow.x}px ${e.selected.textShadow.y}px ${e.selected.textShadow.value}px ${e.selected.textShadow.color}` } : {},
              "--item-background": I,
              "--selected-background": $
            };
          }
          return {};
        },
        tabsRef: t
      };
    }, n = i(o.basicOption.value), m = (t) => {
      n.value.map((a) => a.selected = !1), t.selected = !0, d("on-click-item", t), o.useEvents && f(o.useEvents) && h.parseEvents(o.useEvents.filter((a) => a.clickname === t.id), "on-click-item"), d("on-change", t), o.useEvents && f(o.useEvents) && h.parseEvents(o.useEvents, "on-change", {
        data: t.label
      });
    }, {
      rendererTabDomStyle: y,
      rendererTabItemDomStyle: w,
      tabsRef: E
    } = k();
    return D(() => B(o.basicOption), (t, a) => {
      F(t, a) || (n.value = o.basicOption.value);
    }, { deep: !0 }), (t, a) => (l(), c("div", {
      ref_key: "tabsRef",
      ref: E,
      class: "zerov-widget-tabs",
      style: b({
        ...p(y)(t.basicOption.css.tab)
      })
    }, [
      (l(!0), c(O, null, T(n.value, (r, u) => (l(), c("div", {
        key: u,
        class: R(["tab-item", { selected: r.selected }]),
        style: b({
          ...p(w)(t.basicOption.css.item),
          borderRadius: t.basicOption.css.tab.borderRadius + "px"
        }),
        onClick: _((e) => m(r), ["stop"])
      }, z(r.label), 15, L))), 128))
    ], 4));
  }
});
export {
  J as default
};
