import { defineComponent as k, watch as y, withDirectives as C, createElementBlock as z, openBlock as M, withModifiers as l, normalizeStyle as H, unref as v, isRef as J, vModelDynamic as L, ref as f, onMounted as j } from "vue";
import { cloneDeep as h, isEqual as E } from "lodash";
import { nanoid as b } from "nanoid";
import { SHJDatasourceV2 as q } from "../../commons/plugins/datasource/index.mjs";
import { autoInstallFont as I, jsonToCssStyle as d } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as s } from "../../commons/plugins/event/index.mjs";
const x = ["type", "placeholder"], P = k({ name: "zv-interaction-input" }), W = /* @__PURE__ */ k({
  ...P,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-blur", "on-focus", "on-input", "on-change"],
  setup(D, { expose: S, emit: V }) {
    const n = D, r = V, g = () => {
      const e = f(""), o = f(), p = (u) => {
        if (I(u.fontFamily), I(u.focus.fontFamily), o.value)
          return {
            ...d(u),
            ...d(u.focus, "focus"),
            ...d(u.placeholder, "placeholder")
          };
      }, c = f(), m = () => {
        q.parse({
          tId: n.uuid,
          sources: n.sources,
          callback: ({ data: u }) => {
            try {
              s.parseEvents(n.useEvents, "dataListener", u), c.value = b(), e.value = u[0].data[0].value;
            } catch {
              s.parseEvents(n.useEvents, "dataListener", null), c.value = b();
            }
          }
        });
      };
      return j(() => m()), {
        key: c,
        init: m,
        rendererDomStyle: p,
        inputRef: o,
        inputValue: e
      };
    }, { key: _, init: a, rendererDomStyle: w, inputRef: t, inputValue: i } = g(), F = (e) => {
      t.value && (r("on-blur", e, t.value.value), s.parseEvents(n.useEvents, "on-blur", {
        data: t.value.value,
        event: e
      }));
    }, O = (e) => {
      t.value && (r("on-focus", e, t.value.value), s.parseEvents(n.useEvents, "on-focus", {
        data: t.value.value,
        event: e
      }));
    }, R = (e) => {
      t.value && (r("on-input", e, t.value.value), s.parseEvents(n.useEvents, "on-input", {
        data: t.value.value,
        event: e
      }));
    }, B = (e) => {
      t.value && (r("on-change", e, t.value.value), s.parseEvents(n.useEvents, "on-change", {
        data: t.value.value,
        event: e
      }));
    };
    return y(
      () => h(n.basicOption),
      (e, o) => {
        E(e, o) || a();
      },
      { deep: !0 }
    ), y(
      () => h(n.sources),
      (e, o) => {
        E(e, o) || a();
      },
      { deep: !0 }
    ), S({
      refresh: () => a(),
      refreshView: () => a(),
      refreshData: () => a()
    }), (e, o) => C((M(), z("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (p) => J(i) ? i.value = p : null),
      key: v(_),
      ref_key: "inputRef",
      ref: t,
      type: e.basicOption.css.type || "text",
      class: "zerov-widget-input",
      placeholder: e.basicOption.placeholderValue,
      style: H(v(w)(e.basicOption.css)),
      onBlur: l(F, ["stop"]),
      onFocus: l(O, ["stop"]),
      onInput: l(R, ["stop"]),
      onChange: l(B, ["stop"])
    }, null, 44, x)), [
      [L, v(i)]
    ]);
  }
});
export {
  W as default
};
