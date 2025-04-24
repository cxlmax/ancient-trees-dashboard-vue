import { defineComponent as t, computed as r, createElementBlock as o, openBlock as a } from "vue";
import l from "xss";
const n = ["innerHTML"], c = t({ name: "zv-commons-svg" }), m = /* @__PURE__ */ t({
  ...c,
  props: {
    basicOption: {}
  },
  setup(e) {
    const s = e, i = r(() => l(s.basicOption.code, {
      whiteList: {
        // Basic SVG elements
        svg: ["width", "height", "viewBox", "xmlns", "fill", "stroke", "stroke-width", "opacity", "style", "class", "id", "xmlns:xlink"],
        g: ["fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        path: ["d", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        rect: ["width", "height", "x", "y", "rx", "ry", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        circle: ["cx", "cy", "r", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        ellipse: ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        line: ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        polyline: ["points", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        polygon: ["points", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        text: ["x", "y", "dx", "dy", "rotate", "textLength", "lengthAdjust", "font-size", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id", "text-anchor"],
        tspan: ["x", "y", "dx", "dy", "rotate", "textLength", "lengthAdjust", "font-size", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        defs: ["class", "id"],
        linearGradient: ["id", "x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform", "spreadMethod", "class"],
        radialGradient: ["id", "cx", "cy", "r", "fx", "fy", "gradientUnits", "gradientTransform", "spreadMethod", "class"],
        stop: ["offset", "stop-color", "stop-opacity", "class"],
        clipPath: ["id", "class"],
        pattern: ["id", "width", "height", "patternUnits", "patternTransform", "viewBox", "preserveAspectRatio", "class"],
        use: ["href", "x", "y", "width", "height", "fill", "stroke", "stroke-width", "opacity", "transform", "class", "id"],
        symbol: ["id", "viewBox", "preserveAspectRatio", "class"],
        image: ["href", "x", "y", "width", "height", "preserveAspectRatio", "transform", "class", "id"],
        // Additional elements for full coverage
        animate: ["attributeName", "from", "to", "begin", "dur", "repeatCount", "fill", "class", "id"],
        animateMotion: ["path", "keyPoints", "keyTimes", "rotate", "from", "to", "begin", "dur", "repeatCount", "fill", "class", "id"],
        animateTransform: ["attributeName", "type", "from", "to", "begin", "dur", "repeatCount", "fill", "class", "id"],
        marker: ["id", "viewBox", "refX", "refY", "markerWidth", "markerHeight", "orient", "class"],
        foreignObject: ["x", "y", "width", "height", "class", "id"],
        filter: ["id", "x", "y", "width", "height", "filterUnits", "primitiveUnits", "class"],
        feGaussianBlur: ["in", "stdDeviation", "class"],
        feOffset: ["in", "dx", "dy", "result", "class"],
        feBlend: ["in", "in2", "mode", "class"],
        feColorMatrix: ["in", "type", "values", "class"],
        feComponentTransfer: ["in", "class"],
        feComposite: ["in", "in2", "operator", "k1", "k2", "k3", "k4", "class"],
        feFlood: ["flood-color", "flood-opacity", "result", "class"],
        feImage: ["href", "result", "preserveAspectRatio", "class"],
        feMerge: ["class"],
        feMergeNode: ["in", "class"],
        feMorphology: ["in", "operator", "radius", "result", "class"],
        feSpecularLighting: ["in", "surfaceScale", "specularConstant", "specularExponent", "result", "class"],
        feTile: ["in", "result", "class"],
        feTurbulence: ["baseFrequency", "numOctaves", "seed", "stitchTiles", "type", "class"]
      },
      stripIgnoreTag: !0,
      // 过滤掉不在白名单中的标签
      stripIgnoreTagBody: ["script"]
      // 特殊标签中的内容也会被过滤掉
    }));
    return (d, f) => (a(), o("div", {
      innerHTML: i.value,
      class: "zerov-widget svg-wrap"
    }, null, 8, n));
  }
});
export {
  m as default
};
