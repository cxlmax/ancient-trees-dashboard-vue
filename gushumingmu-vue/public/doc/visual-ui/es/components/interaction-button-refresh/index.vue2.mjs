import { defineComponent as l, createElementBlock as h, createCommentVNode as I, unref as r, openBlock as R, normalizeStyle as C, ref as c, onMounted as O } from "vue";
import { jsonToCssStyle as i } from "../../commons/utils/json2css.mjs";
import { imgsPreloader as B } from "../../commons/utils/imgPreloader.mjs";
const S = l({ name: "zv-interaction-button-refresh" }), z = /* @__PURE__ */ l({
  ...S,
  props: {
    basicOption: {}
  },
  setup(s) {
    const n = s, u = () => {
      const t = c(), o = c(!1), a = (e) => !e.startsWith("http") && !e.startsWith("//") ? "../" + e : e, b = (e) => {
        if (t.value) {
          const k = `url(${e.backgroundImage})`, v = `url(${a(e.hover.backgroundImage)})`, y = `url(${a(e.active.backgroundImage)})`;
          return {
            ...i(e),
            ...i(e.hover, "hover"),
            ...i(e.active, "active"),
            "background-image": k,
            "--hover-background-image": v,
            "--active-background-image": y
          };
        }
        return {};
      }, p = (e) => {
        t.value && (e.type === "click" && e.isOpen && location.reload(), e.type === "delay" && (e.delay > 0 ? setTimeout(() => {
          location.reload();
        }, e.delay * 1e3) : location.reload()));
      };
      return O(() => {
        B(
          [
            n.basicOption.css.backgroundImage,
            n.basicOption.css.hover.backgroundImage,
            n.basicOption.css.active.backgroundImage
          ]
        ).finally(() => {
          setTimeout(() => o.value = !0, 100);
        });
      }), { rendererDomStyle: b, handleClickRefreshPage: p, buttonRef: t, loading: o };
    }, { rendererDomStyle: d, handleClickRefreshPage: g, buttonRef: m, loading: f } = u();
    return (t, o) => r(f) ? (R(), h("button", {
      key: 0,
      ref_key: "buttonRef",
      ref: m,
      class: "zv-button",
      style: C(r(d)(t.basicOption.css)),
      onClick: o[0] || (o[0] = (a) => r(g)(t.basicOption.refresh))
    }, null, 4)) : I("", !0);
  }
});
export {
  z as default
};
