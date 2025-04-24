import { Line2 as s } from "three/examples/jsm/lines/Line2";
import { LineGeometry as c } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial as m } from "three/examples/jsm/lines/LineMaterial";
const u = (o, e) => {
  const r = [];
  o.forEach(({ x: n, y: a, z: l }) => r.push(n, a, l));
  const t = new c();
  t.setPositions(r);
  const i = new m({
    transparent: !0,
    color: e.color,
    linewidth: e.lineWidth * 0.01,
    opacity: e.opacity,
    worldUnits: !0,
    alphaToCoverage: !0
  });
  return new s(t, i);
};
export {
  u as DrawLine
};
