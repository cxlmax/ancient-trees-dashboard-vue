import { defineComponent as a, useCssVars as d, ref as l, onMounted as x, createElementBlock as v, openBlock as f, normalizeStyle as i, unref as c, createElementVNode as b, toDisplayString as h } from "vue";
import { useButtonWatch as u } from "./hooks/useButtonWatch.mjs";
import { SHJDatasourceV2 as S } from "../../../commons/plugins/datasource/index.mjs";
import { Utils as n } from "../../../commons/utils/utils.mjs";
const g = a({ name: "shj-button" }), j = /* @__PURE__ */ a({
  ...g,
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-click-item", "on-change"],
  setup(p, { expose: r, emit: y }) {
    d((o) => ({
      d93a17e2: t.option.css.hover.backgroundColor,
      "4aa97d6e": t.option.css.hover.borderRadius + "px",
      "338af0f9": t.option.css.hover.borderWidth + "px",
      "9a4fc1c2": t.option.css.hover.borderStyle,
      "9c179e5e": t.option.css.hover.borderColor,
      d89323f2: t.option.css.hover.backgroundImage,
      "46d8d5d5": t.option.css.hover.backgroundSize,
      "1bee0322": t.option.css.hover.backgroundRepeat,
      "0a9f8752": t.option.css.hover.backgroundPositionX + "px",
      "7280b431": t.option.css.hover.backgroundPositionY + "px",
      "55f7a47b": t.option.css.hover.paddingLeft + "px",
      "635cd008": t.option.css.hover.paddingRight + "px",
      "352a7563": t.option.css.hover.paddingTop + "px",
      "6aeea097": t.option.css.hover.paddingBottom + "px",
      "530ee5f2": t.option.css.hover.textStyle.fontStyle,
      "10e4c97a": t.option.css.hover.textStyle.fontFamily,
      "7641c2b3": t.option.css.hover.textStyle.color,
      e763f9e6: t.option.css.hover.textStyle.fontSize + "px",
      "14c68257": t.option.css.hover.textStyle.fontWeight,
      "012cfa6b": t.option.css.hover.textStyle.alignItems,
      e314f30e: t.option.css.hover.textStyle.justifyContent,
      "861f5074": t.option.css.hover.textStyle["-webkit-text-stroke-color"],
      "6c7c3db8": t.option.css.hover.textStyle["-webkit-text-stroke-width"] + "px",
      "740e5580": t.option.css.hover.textStyle.letterSpacing + "px",
      "21ce64eb": t.option.css.hover.textStyle.lineHeight,
      "260a10fe": t.option.css.active.backgroundColor,
      "4e5f888a": t.option.css.active.borderRadius + "px",
      "5483e047": t.option.css.active.borderWidth + "px",
      "24cfab91": t.option.css.active.borderStyle,
      "23ebbd43": t.option.css.active.borderColor,
      "25631d0e": t.option.css.active.backgroundImage,
      "854cc7ba": t.option.css.active.backgroundSize,
      "691d2d86": t.option.css.active.backgroundRepeat,
      "77d96ec0": t.option.css.active.backgroundPositionX + "px",
      "2bf4757f": t.option.css.active.backgroundPositionY + "px",
      "76f093c9": t.option.css.active.paddingLeft + "px",
      "6712db24": t.option.css.active.paddingRight + "px",
      ee613756: t.option.css.active.paddingTop + "px",
      "3168f465": t.option.css.active.paddingBottom + "px",
      "5133e064": t.option.css.active.textStyle.fontStyle,
      "83f021de": t.option.css.active.textStyle.fontFamily,
      "604c73b6": t.option.css.active.textStyle.color,
      78544002: t.option.css.active.textStyle.fontSize + "px",
      "497e53b6": t.option.css.active.textStyle.fontWeight,
      "70b1638e": t.option.css.active.textStyle.alignItems,
      "24e54347": t.option.css.active.textStyle.justifyContent,
      "55b69414": t.option.css.active.textStyle["-webkit-text-stroke-color"],
      "535bd116": t.option.css.active.textStyle["-webkit-text-stroke-width"] + "px",
      "3ff68064": t.option.css.active.textStyle.letterSpacing + "px",
      "2f6e8e8e": t.option.css.active.textStyle.lineHeight
    }));
    const t = p, s = l(""), e = () => {
      S.parse({
        tId: t.uuid,
        sources: t.sources,
        callback: ({ data: o }) => {
          s.value = o[0].data[0].data;
        }
      });
    };
    return x(() => e()), u(t, e), r({
      refresh: () => e(),
      refreshView: () => {
      },
      // 刷新视图 无需刷新
      refreshData: () => e()
    }), (o, m) => (f(), v("button", {
      class: "height-100 transition-all",
      style: i(c(n).json2cssObject(t.option.css))
    }, [
      b("p", {
        class: "flex width-100 height-100 transition-all",
        style: i(c(n).json2cssObject(t.option.css.textStyle))
      }, h(s.value), 5)
    ], 4));
  }
});
export {
  j as default
};
