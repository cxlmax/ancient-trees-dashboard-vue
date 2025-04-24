import { defineComponent as t, createElementBlock as o, openBlock as i, createElementVNode as s } from "vue";
const n = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, r = ["stroke", "stroke-width", "fill"], p = t({ name: "zv-graphical-right-triangle" }), _ = /* @__PURE__ */ t({
  ...p,
  props: {
    basicOption: {}
  },
  setup(l) {
    return (e, a) => (i(), o("svg", n, [
      s("polygon", {
        points: "10,10 10,90 90,90",
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
