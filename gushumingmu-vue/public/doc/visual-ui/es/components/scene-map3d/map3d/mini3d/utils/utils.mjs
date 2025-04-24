import { Vector3 as m, Box3 as a } from "three";
function u(r = 10, o = 62) {
  const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), t = [];
  let e;
  if (o = o || n.length, r)
    for (e = 0; e < r; e++) t[e] = n[0 | Math.random() * o];
  else {
    let s;
    for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", e = 0; e < 36; e++)
      t[e] || (s = 0 | Math.random() * 16, t[e] = n[e == 19 ? s & 3 | 8 : s]);
  }
  return t.join("");
}
function y(r) {
  const o = new m(), n = new a();
  n.expandByObject(r);
  const t = new m();
  n.getSize(t);
  const e = new m();
  n.getCenter(e);
  const s = {
    box3: n,
    boxSize: t,
    center: e
  };
  if (r.geometry) {
    r.geometry.computeBoundingBox(), r.geometry.computeBoundingSphere();
    const { max: c, min: i } = r.geometry.boundingBox;
    o.x = c.x - i.x, o.y = c.y - i.y, o.z = c.z - i.z, s.size = o;
  }
  return s;
}
const g = (r) => {
  const o = JSON.parse(r), n = o.features;
  for (let t = 0; t < n.length; t++) {
    const e = n[t];
    e.geometry.type === "Polygon" && (e.geometry.coordinates = [e.geometry.coordinates]);
  }
  return o;
};
export {
  y as getBoundBox,
  g as transfromMapGeoJSON,
  u as uuid
};
