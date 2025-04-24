import { defineComponent as a, createElementBlock as t, openBlock as n, normalizeStyle as r } from "vue";
const c = a({ name: "zv-media-image" }), u = /* @__PURE__ */ a({
  ...c,
  props: {
    basicOption: {}
  },
  setup(o) {
    const e = o;
    return (i, p) => (n(), t("div", {
      class: "zerov-image",
      style: r({
        backgroundImage: `url('${e.basicOption.url}')`,
        ...e.basicOption.mode === "repeat" ? {
          backgroundRepeat: "repeat",
          backgroundSize: "auto"
        } : {
          backgroundSize: e.basicOption.mode,
          backgroundRepeat: "no-repeat"
        }
      })
    }, null, 4));
  }
});
export {
  u as default
};
