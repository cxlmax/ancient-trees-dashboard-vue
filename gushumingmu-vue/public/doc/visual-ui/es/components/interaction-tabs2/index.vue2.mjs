import { defineComponent as m, ref as u, watch as T, createElementBlock as s, openBlock as c, normalizeStyle as p, unref as b, Fragment as I, renderList as O, withModifiers as _, normalizeClass as R, toDisplayString as z } from "vue";
import { cloneDeep as B, isEqual as F, isArray as f } from "lodash";
import { SHJParseEvent as h } from "../../commons/plugins/event/index.mjs";
import { autoInstallFont as v, jsonToCssStyle as l } from "../../commons/utils/json2css.mjs";
const L = ["onClick"], W = m({ name: "zv-interaction-tabs2" }), J = /* @__PURE__ */ m({
  ...W,
  props: {
    basicOption: {},
    useEvents: {},
    sceneOption: {}
  },
  emits: ["on-click-item", "on-change"],
  setup(S, { emit: x }) {
    const d = x, a = S, y = () => {
      const t = u(), o = (e) => !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e;
      return {
        rendererTabDomStyle: (e) => t.value ? {
          ...l(e)
        } : {},
        rendererTabItemDomStyle: (e) => {
          if (t.value) {
            v(e.fontFamily), v(e.selected.fontFamily);
            const $ = `url(${e.backgroundImage})`, D = `url(${o(e.selected.backgroundImage)})`;
            return {
              ...l(e),
              ...l(e.selected, "selected"),
              ...e.textShadow && e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {},
              ...e.selected.textShadow && e.selected.textShadow.show ? { "--selected-text-shadow": `${e.selected.textShadow.x}px ${e.selected.textShadow.y}px ${e.selected.textShadow.value}px ${e.selected.textShadow.color}` } : {},
              "--item-background-image": $,
              "--selected-background-image": D
            };
          }
          return {};
        },
        tabsRef: t
      };
    }, r = u(a.basicOption.value), w = (t) => {
      r.value.map((o) => o.selected = !1), t.selected = !0, d("on-click-item", t), a.useEvents && f(a.useEvents) && h.parseEvents(a.useEvents.filter((o) => o.clickname === t.id), "on-click-item"), d("on-change", t), a.useEvents && f(a.useEvents) && h.parseEvents(a.useEvents, "on-change", {
        data: t.label
      });
    }, {
      rendererTabDomStyle: g,
      rendererTabItemDomStyle: k,
      tabsRef: E
    } = y();
    return T(() => B(a.basicOption), (t, o) => {
      F(t, o) || (r.value = a.basicOption.value);
    }, { deep: !0 }), (t, o) => (c(), s("div", {
      ref_key: "tabsRef",
      ref: E,
      class: "zerov-widget-tabs",
      style: p({
        ...b(g)(t.basicOption.css.tab)
      })
    }, [
      (c(!0), s(I, null, O(r.value, (n, i) => (c(), s("div", {
        key: i,
        class: R(["tab-item", { selected: n.selected }]),
        style: p({
          ...b(k)(t.basicOption.css.item),
          borderRadius: t.basicOption.css.tab.borderRadius + "px"
        }),
        onClick: _((e) => w(n), ["stop"])
      }, z(n.label), 15, L))), 128))
    ], 4));
  }
});
export {
  J as default
};
