import { PlaneGeometry as G, MeshBasicMaterial as M, AdditiveBlending as y, Color as c, Mesh as w, Group as g } from "three";
import { isEmpty as d } from "lodash";
import { DiffuseShader as x } from "../map/DiffuseShader.mjs";
import { getTextureResource as m } from "../map/utils.mjs";
function v(e, o) {
  const a = o.repeat || 100, f = e.scene.getObjectByName("GridRipple");
  f && e.scene.remove(f);
  const s = new G(600, 600), r = m(e, "gridRippleMap", o.map, "map");
  d(r) || r.map.repeat.set(a, a);
  const i = m(e, "gridRippleAlphaMap", o.alphaMap, "alphaMap");
  d(r) || i.alphaMap.repeat.set(a, a);
  const p = new M({
    ...r,
    ...i,
    color: new c(o.color || "#00ffff"),
    transparent: !0,
    opacity: o.diffuseOpacity,
    blending: y
  }), t = new w(s, p);
  t.rotateX(-Math.PI / 2);
  const [l, u] = e.geoProjection(e.pointCenter);
  t.position.set(l, -u, 0.01);
  const n = t.clone();
  n.material = p.clone(), n.material.opacity = o.opacity, e.gridRippleGroup = new g(), e.gridRippleGroup.name = "GridRipple", e.gridRippleGroup.add(t, n), e.gridRippleGroup.visible = o.show, e.scene.add(e.gridRippleGroup), e.diffuseShader = new x({
    material: p,
    time: e.time,
    size: 600,
    diffuseColor: new c(o.diffuseColor || "#079fe6"),
    diffuseSpeed: o.diffuseSpeed,
    diffuseWidth: o.diffuseWidth,
    diffuseDir: 2
  });
}
export {
  v as createFloorGridRipple
};
