import { defineComponent as p, useCssVars as v, ref as d, watch as f, createElementBlock as b, openBlock as h, normalizeClass as O, withDirectives as m, createElementVNode as n, vModelCheckbox as w, pushScopeId as C, popScopeId as E } from "vue";
import { cloneDeep as V, isEqual as z } from "lodash";
import { SHJParseEvent as l } from "../../commons/plugins/event/index.mjs";
const S = (t) => (C("data-v-3644cf76"), t = t(), E(), t), _ = ["true-value", "false-value"], k = /* @__PURE__ */ S(() => /* @__PURE__ */ n("div", { class: "zv-switch__action" }, null, -1)), g = [
  k
], B = p({ name: "zv-interaction-switch" }), $ = /* @__PURE__ */ p({
  ...B,
  props: {
    basicOption: {},
    useEvents: {},
    sceneOption: {}
  },
  emits: ["on-change", "on-open", "on-close"],
  setup(t, { emit: u }) {
    v((e) => ({
      "1e49fb33": e.basicOption.css.onColor,
      "3d1276a5": e.basicOption.css.offColor,
      "785e8df6": e.basicOption.css.actionSize + "px",
      af899230: e.basicOption.css.minWidth + "px",
      "5b444888": e.basicOption.css.coreSize + "px",
      79766582: e.basicOption.css.coreBorderRadius + "px",
      "7e0e5188": e.basicOption.css.actionBorderRadius + "px",
      "2e4dc5ee": e.basicOption.css.actionBackgroundColor
    }));
    const i = u, a = t, s = d(JSON.parse(a.basicOption.defaultValue)), r = (e) => {
      s.value = !s.value;
      const o = a.basicOption.trueValue === s.value ? "open" : "close";
      i("on-change", s.value), l.parseEvents(a.useEvents, "on-change", {
        data: s.value
      }), i(`on-${o}`, s.value), l.parseEvents(a.useEvents, `on-${o}`, {
        data: s.value
      });
    };
    return f(() => V(a.basicOption), (e, o) => {
      z(e, o) || (s.value = JSON.parse(a.basicOption.defaultValue));
    }, { deep: !0 }), (e, o) => (h(), b("div", {
      class: O(["zv-switch", {
        "is-checked": s.value
      }])
    }, [
      m(n("input", {
        "onUpdate:modelValue": o[0] || (o[0] = (c) => s.value = c),
        class: "zv-switch__input",
        type: "checkbox",
        "true-value": e.basicOption.trueValue,
        "false-value": e.basicOption.falseValue
      }, null, 8, _), [
        [w, s.value]
      ]),
      n("span", {
        class: "zv-switch__core",
        onClick: o[1] || (o[1] = (c) => r(s.value))
      }, g)
    ], 2));
  }
});
export {
  $ as default
};
