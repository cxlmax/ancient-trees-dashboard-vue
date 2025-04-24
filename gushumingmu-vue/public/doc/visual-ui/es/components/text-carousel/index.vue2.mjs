import { defineComponent as n, useCssVars as l, createElementBlock as p, openBlock as s, createElementVNode as u, normalizeStyle as d, unref as c, toDisplayString as f } from "vue";
import { autoInstallFont as x, jsonToCssStyle as m } from "../../commons/utils/json2css.mjs";
const y = { class: "text-carousel" }, S = ["text", "ztitle"], g = n({ name: "zv-text-carousel" }), _ = /* @__PURE__ */ n({
  ...g,
  props: {
    basicOption: {},
    sources: {}
  },
  setup(h) {
    l((e) => ({
      ac059ce8: e.basicOption.animation + "s",
      "62e7f995": e.basicOption.gap + "px"
    }));
    const r = () => ({ rendererDomStyle: (t) => {
      x(t.fontFamily);
      const o = {};
      t.color && t.color.includes("linear-gradient") && (o.backgroundImage = t.color, o["-webkit-background-clip"] = "text", o.color = "transparent");
      const i = {};
      return t.textAlign === "left" && (t.justifyContent = "flex-start"), t.textAlign === "center" && (t.justifyContent = "center"), t.textAlign === "right" && (t.justifyContent = "flex-end"), {
        ...m(t),
        ...o,
        ...i,
        ...t.textShadow.show ? { "--text-shadow": `${t.textShadow.x}px ${t.textShadow.y}px ${t.textShadow.value}px ${t.textShadow.color}` } : {}
      };
    } }), { rendererDomStyle: a } = r();
    return (e, t) => (s(), p("div", y, [
      u("p", {
        class: "words",
        text: e.basicOption.value,
        style: d(c(a)(e.basicOption.css)),
        ztitle: e.basicOption.value
      }, f(e.basicOption.value), 13, S)
    ]));
  }
});
export {
  _ as default
};
