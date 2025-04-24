import { PlaneGeometry as s, RepeatWrapping as i, MeshBasicMaterial as c, DoubleSide as p, AdditiveBlending as g, Color as l, Mesh as u } from "three";
function m(o, t, d) {
  const n = new s(200, 200), e = o.assets.instance.getResource("gaoguang1");
  e.colorSpace = "srgb", e.wrapS = e.wrapT = i, e.repeat.set(1, 1);
  const r = new c({
    map: e,
    color: new l(t.color || "#ffffff"),
    opacity: 0,
    transparent: !0,
    blending: g,
    side: p
  }), a = new u(n, r);
  a.rotateX(-Math.PI / 2), a.position.set(0, -1, 0), o.gaoguangMesh = a, o.gaoguangMesh.visible = t.show, o.scene.add(a);
}
export {
  m as createFloorGaoGuang
};
