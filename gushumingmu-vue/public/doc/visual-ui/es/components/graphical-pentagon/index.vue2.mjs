import { defineComponent as o, createElementBlock as t, openBlock as n, createElementVNode as s } from "vue";
const i = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, r = ["stroke", "stroke-width", "fill"], p = o({ name: "zv-graphical-pentagon" }), _ = /* @__PURE__ */ o({
  ...p,
  props: {
    basicOption: {}
  },
  setup(a) {
    return (e, l) => (n(), t("svg", i, [
      s("polygon", {
        points: "50,5 95,30 85,85 15,85 5,30",
        stroke: e.basicOption.stroke,
        "stroke-width": e.basicOption.strokeWidth,
        fill: e.basicOption.fill
      }, null, 8, r)
    ]));
  }
});
export {
  _ as default
};
