import { defineComponent as o, createElementBlock as t, openBlock as s, createElementVNode as i } from "vue";
const n = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, r = ["stroke", "stroke-width", "fill"], p = o({ name: "zv-graphical-diamond" }), d = /* @__PURE__ */ o({
  ...p,
  props: {
    basicOption: {}
  },
  setup(a) {
    return (e, l) => (s(), t("svg", n, [
      i("polygon", {
        points: "50,10 90,50 50,90 10,50",
        stroke: e.basicOption.stroke,
        "stroke-width": e.basicOption.strokeWidth,
        fill: e.basicOption.fill
      }, null, 8, r)
    ]));
  }
});
export {
  d as default
};
