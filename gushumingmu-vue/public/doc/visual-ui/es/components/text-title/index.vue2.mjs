import { defineComponent as n, createBlock as a, openBlock as p, resolveDynamicComponent as d, normalizeStyle as u, unref as f, withCtx as x, createTextVNode as c, toDisplayString as y } from "vue";
import { autoInstallFont as m, jsonToCssStyle as s } from "../../commons/utils/json2css.mjs";
const S = n({ name: "zv-text-title" }), b = /* @__PURE__ */ n({
  ...S,
  props: {
    basicOption: {},
    sources: {}
  },
  setup(g) {
    const r = () => ({ rendererDomStyle: (t) => {
      m(t.fontFamily);
      const o = {};
      t.color && t.color.includes("linear-gradient") && (o.backgroundImage = t.color, o["-webkit-background-clip"] = "text", o.color = "transparent");
      const l = {};
      return t.textAlign === "left" && (t.justifyContent = "flex-start"), t.textAlign === "center" && (t.justifyContent = "center"), t.textAlign === "right" && (t.justifyContent = "flex-end"), {
        ...s(t),
        ...o,
        ...l,
        ...t.textShadow.show ? { "--text-shadow": `${t.textShadow.x}px ${t.textShadow.y}px ${t.textShadow.value}px ${t.textShadow.color}` } : {}
      };
    } }), { rendererDomStyle: i } = r();
    return (e, t) => (p(), a(d(e.basicOption.type), {
      class: "zerov-widget-title",
      style: u(f(i)(e.basicOption.css)),
      ztitle: e.basicOption.value
    }, {
      default: x(() => [
        c(y(e.basicOption.value), 1)
      ]),
      _: 1
    }, 8, ["style", "ztitle"]));
  }
});
export {
  b as default
};
