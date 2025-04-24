import { defineComponent as o, createElementBlock as t, openBlock as s, createElementVNode as i } from "vue";
const n = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, r = ["stroke", "stroke-width", "fill"], l = o({ name: "zv-graphical-isosceles-triangle" }), _ = /* @__PURE__ */ o({
  ...l,
  props: {
    basicOption: {}
  },
  setup(p) {
    return (e, a) => (s(), t("svg", n, [
      i("polygon", {
        points: "50,10 90,90 10,90",
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
