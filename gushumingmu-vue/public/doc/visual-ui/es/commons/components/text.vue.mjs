import { defineComponent as l, createElementBlock as o, createCommentVNode as r, openBlock as s, normalizeStyle as t, unref as i, createElementVNode as n, normalizeClass as a, toDisplayString as p } from "vue";
import { Utils as y } from "../utils/utils.mjs";
const S = /* @__PURE__ */ l({
  __name: "text",
  props: {
    textStyle: {},
    text: {}
  },
  setup(f) {
    return (e, x) => e.textStyle ? (s(), o("p", {
      key: 0,
      class: "flex width-100 height-100 font-size-13px color-white",
      style: t(i(y).json2cssObject(e.textStyle))
    }, [
      n("span", {
        class: a(["line-height-normal", {
          "text-overflow-ellipsis-2": e.textStyle.textOverflow && e.textStyle.textOverflow.enable && e.textStyle.textOverflow.displayLines !== 1,
          "text-overflow-ellipsis": e.textStyle.textOverflow && e.textStyle.textOverflow.enable && e.textStyle.textOverflow.displayLines === 1
        }]),
        style: t({
          "-webkit-line-clamp": e.textStyle.textOverflow && e.textStyle.textOverflow.enable ? e.textStyle.textOverflow.displayLines : void 0
        })
      }, p(e.text), 7)
    ], 4)) : r("", !0);
  }
});
export {
  S as default
};
