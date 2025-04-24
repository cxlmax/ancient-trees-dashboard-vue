import { defineComponent as o, createElementBlock as t, openBlock as s, createElementVNode as n } from "vue";
const i = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, r = ["stroke", "stroke-width", "fill"], p = o({ name: "zv-graphical-hexagon" }), _ = /* @__PURE__ */ o({
  ...p,
  props: {
    basicOption: {}
  },
  setup(a) {
    return (e, l) => (s(), t("svg", i, [
      n("polygon", {
        points: "50,5 90,25 90,75 50,95 10,75 10,25",
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
