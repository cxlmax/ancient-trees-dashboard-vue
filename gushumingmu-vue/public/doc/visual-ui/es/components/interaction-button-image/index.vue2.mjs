import { defineComponent as s, createElementBlock as k, createCommentVNode as y, unref as c, openBlock as h, normalizeStyle as I, toDisplayString as O, ref as i, onMounted as _ } from "vue";
import { autoInstallFont as S, jsonToCssStyle as r } from "../../commons/utils/json2css.mjs";
import { imgsPreloader as B } from "../../commons/utils/imgPreloader.mjs";
const D = s({ name: "zv-interaction-button-image" }), $ = /* @__PURE__ */ s({
  ...D,
  props: {
    basicOption: {}
  },
  setup(u) {
    const o = u, m = () => {
      const t = i(), n = i(!1), a = (e) => !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e, d = (e) => {
        if (t.value) {
          S(o.basicOption.css.fontFamily);
          const p = `url(${e.backgroundImage})`, f = `url(${a(e.hover.backgroundImage)})`, v = `url(${a(e.active.backgroundImage)})`;
          return {
            ...r(e),
            ...r(e.hover, "hover"),
            ...r(e.active, "active"),
            "background-image": p,
            "--hover-background-image": f,
            "--active-background-image": v
          };
        }
        return {};
      };
      return _(() => {
        B(
          [
            o.basicOption.css.backgroundImage,
            o.basicOption.css.hover.backgroundImage,
            o.basicOption.css.active.backgroundImage
          ]
        ).finally(() => {
          setTimeout(() => n.value = !0, 100);
        });
      }), { rendererDomStyle: d, buttonRef: t, loading: n };
    }, { rendererDomStyle: g, buttonRef: l, loading: b } = m();
    return (t, n) => c(b) ? (h(), k("button", {
      key: 0,
      ref_key: "buttonRef",
      ref: l,
      class: "zv-button",
      style: I(c(g)(t.basicOption.css))
    }, O(t.basicOption.value), 5)) : y("", !0);
  }
});
export {
  $ as default
};
