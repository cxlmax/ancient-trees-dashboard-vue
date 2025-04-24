import { defineComponent as t, createElementBlock as o, openBlock as i, createElementVNode as s } from "vue";
const r = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, n = ["stroke", "stroke-width", "fill"], c = t({ name: "zv-graphical-rect" }), _ = /* @__PURE__ */ t({
  ...c,
  props: {
    basicOption: {}
  },
  setup(p) {
    return (e, a) => (i(), o("svg", r, [
      s("rect", {
        x: "0",
        y: "0",
        width: "100",
        height: "100",
        stroke: e.basicOption.stroke,
        "stroke-width": e.basicOption.strokeWidth,
        fill: e.basicOption.fill
      }, null, 8, n)
    ]));
  }
});
export {
  _ as default
};
