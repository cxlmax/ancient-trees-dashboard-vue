import { defineComponent as x, ref as i, onMounted as O, createElementBlock as a, openBlock as c, normalizeStyle as u, unref as v, createCommentVNode as k, Fragment as w, renderList as L, withModifiers as V, normalizeClass as B, createVNode as D, nextTick as N } from "vue";
import { useResizeObserver as T } from "@vueuse/core";
import { useTabsWatch as W } from "./hooks/useTabsWatch.mjs";
import { SHJDatasourceV2 as H } from "../../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as g } from "../../../commons/plugins/event/index.mjs";
import { Utils as f } from "../../../commons/utils/utils.mjs";
import I from "../../../commons/components/text.vue.mjs";
const J = ["onClick"], M = x({ name: "shj-tabs" }), K = /* @__PURE__ */ x({
  ...M,
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-change"],
  setup(y, { expose: _, emit: C }) {
    const e = y, h = C, s = i([]), o = i(e.option.value), r = () => {
      H.parse({
        tId: e.uuid,
        sources: e.sources,
        callback: ({ data: t }) => {
          if (!t) {
            s.value = [];
            return;
          }
          s.value = t[0].data, !o.value && s.value.length > 0 && (o.value = s.value[0].value, h("on-change", s.value[0]), g.parseEvents(e.useEvents, "on-change", s.value[0])), m();
        }
      });
    };
    O(() => r());
    const j = (t) => {
      t.value !== o.value && (h("on-change", t), g.parseEvents(e.useEvents, "on-change", t)), o.value = t.value;
    };
    W(e, r, o, s), _({
      refresh: () => r(),
      refreshView: () => {
      },
      // 刷新视图 无需刷新
      refreshData: () => r()
    });
    const n = i(null), d = 150, p = i(!1), m = () => {
      N(() => {
        if (n.value) {
          const { scrollWidth: t, clientWidth: b } = n.value;
          p.value = t > b;
        }
      });
    }, S = () => {
      n.value && (n.value.scrollLeft -= d);
    }, E = () => {
      n.value && (n.value.scrollLeft += d);
    };
    return T(n, (t) => m()), (t, b) => (c(), a("div", {
      ref_key: "tabsContainer",
      ref: n,
      class: "height-100 flex overflow-hidden scroll-behavior-smooth",
      style: u(v(f).json2cssObject(e.option.css.tab))
    }, [
      p.value ? (c(), a("button", {
        key: 0,
        class: "flex-none cursor-pointer position-absolute translate-center-left-active-scale-095 top-50 background-size-cover",
        style: u(v(f).json2cssObject(e.option.css.nav.left)),
        onClick: S
      }, null, 4)) : k("", !0),
      (c(!0), a(w, null, L(s.value, (l, z) => (c(), a("div", {
        key: z,
        class: B(["flex flex-none cursor-pointer transition-color-background-color background-size-cover", { selected: l.value === o.value }]),
        style: u(v(f).json2cssObject(l.value === o.value ? e.option.css.item.selected : e.option.css.item)),
        onClick: V((R) => j(l), ["stop"])
      }, [
        D(I, {
          "text-style": l.value === o.value ? e.option.css.item.selected.textStyle : e.option.css.item.textStyle,
          text: l.label
        }, null, 8, ["text-style", "text"])
      ], 14, J))), 128)),
      p.value ? (c(), a("button", {
        key: 1,
        class: "flex-none cursor-pointer position-absolute translate-center-right-active-scale-095 top-50 background-size-cover",
        style: u(v(f).json2cssObject(e.option.css.nav.right)),
        onClick: E
      }, null, 4)) : k("", !0)
    ], 4));
  }
});
export {
  K as default
};
