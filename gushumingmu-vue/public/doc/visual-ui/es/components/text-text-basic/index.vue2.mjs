import { defineComponent as n, createElementBlock as a, openBlock as d, normalizeStyle as p, unref as u, toDisplayString as f } from "vue";
import { autoInstallFont as x, jsonToCssStyle as c } from "../../commons/utils/json2css.mjs";
const m = ["ztitle"], y = n({ name: "zv-text-text-basic" }), s = /* @__PURE__ */ n({
  ...y,
  props: {
    basicOption: {}
  },
  setup(S) {
    const r = () => ({ rendererDomStyle: (t) => {
      x(t.fontFamily);
      const o = {};
      t.color && t.color.includes("linear-gradient") && (o.backgroundImage = t.color, o["-webkit-background-clip"] = "text", o.color = "transparent");
      const l = {};
      return t.textAlign === "left" && (t.justifyContent = "flex-start"), t.textAlign === "center" && (t.justifyContent = "center"), t.textAlign === "right" && (t.justifyContent = "flex-end"), {
        ...c(t),
        ...o,
        ...l,
        ...t.textShadow.show ? { "--text-shadow": `${t.textShadow.x}px ${t.textShadow.y}px ${t.textShadow.value}px ${t.textShadow.color}` } : {}
      };
    } }), { rendererDomStyle: i } = r();
    return (e, t) => (d(), a("p", {
      class: "zerov-widget-text",
      style: p(u(i)(e.basicOption.css)),
      ztitle: e.basicOption.value
    }, f(e.basicOption.value), 13, m));
  }
});
export {
  s as default
};
