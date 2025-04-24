import { defineComponent as e, createElementBlock as l, openBlock as c, normalizeStyle as i, unref as s, toDisplayString as f, ref as m } from "vue";
import p from "color-js";
import { autoInstallFont as b, jsonToCssStyle as d } from "../../commons/utils/json2css.mjs";
const y = e({ name: "zv-interaction-button" }), v = /* @__PURE__ */ e({
  ...y,
  props: {
    basicOption: {}
  },
  setup(S) {
    const r = () => {
      const o = m();
      return { rendererDomStyle: (t) => o.value ? (b(t.fontFamily), {
        ...d(t),
        "--hover-auto-background-color": p(t.backgroundColor).lightenByAmount(0.05).toCSS(),
        "--active-auto-background-color": t.backgroundColor
      }) : {}, buttonRef: o };
    }, { rendererDomStyle: n, buttonRef: u } = r();
    return (o, a) => (c(), l("button", {
      ref_key: "buttonRef",
      ref: u,
      class: "zv-button",
      style: i(s(n)(o.basicOption.css))
    }, f(o.basicOption.value), 5));
  }
});
export {
  v as default
};
