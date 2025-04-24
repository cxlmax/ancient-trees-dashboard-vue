import { defineComponent as t, createElementBlock as o, openBlock as i, createElementVNode as s } from "vue";
const r = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, n = ["r", "stroke", "stroke-width", "fill"], c = t({ name: "zv-graphical-circle" }), d = /* @__PURE__ */ t({
  ...c,
  props: {
    basicOption: {}
  },
  setup(a) {
    return (e, l) => (i(), o("svg", r, [
      s("circle", {
        cx: "50",
        cy: "50",
        r: Math.max(10, 50 - e.basicOption.strokeWidth),
        stroke: e.basicOption.stroke,
        "stroke-width": e.basicOption.strokeWidth,
        fill: e.basicOption.fill
      }, null, 8, n)
    ]));
  }
});
export {
  d as default
};
