import { AmbientLight as m, Color as i, DirectionalLight as l, DirectionalLightHelper as w, PointLightHelper as r, PointLight as y } from "three";
function a(n) {
  const e = new y(n.color, n.intensity, n.distance, 1);
  return e.position.set(n.x, n.y, n.z), e;
}
function L(n, e) {
  const t = n.scene.getObjectByName("AmbientLight");
  t && n.scene.remove(t);
  const f = new m(new i(e.color || "#ffffff"), e.intensity);
  f.visible = e.show, f.name = "AmbientLight", n.scene.add(f);
}
function d(n, e, t) {
  const f = n.scene.getObjectByName("DirectionalLight");
  f && n.scene.remove(f);
  const s = n.scene.getObjectByName("DirectionalLightHelper");
  s && n.scene.remove(s);
  const c = new l(new i(e.color || "#ffffff"), e.intensity);
  c.target.position.set(e.target.position.x, e.target.position.y, e.target.position.z), c.position.set(e.position.x, e.position.y, e.position.z), c.castShadow = !0, c.shadow.radius = 20, c.shadow.mapSize.width = 1024, c.shadow.mapSize.height = 1024, c.visible = e.show, c.name = "DirectionalLight", n.scene.add(c);
  const o = new w(c, 10, "#ffffff");
  o.name = "DirectionalLightHelper", o.visible = e.show && t, n.scene.add(o);
}
function b(n, e, t) {
  const f = n.scene.getObjectByName("PointLight1");
  f && n.scene.remove(f);
  const s = n.scene.getObjectByName("PointLightHelper1");
  s && n.scene.remove(s);
  const c = a({
    color: new i(e.color || "#ffffff"),
    intensity: e.intensity,
    distance: e.distance,
    x: e.x,
    y: e.y,
    z: e.z
  });
  c.visible = e.show, c.name = "PointLight1", n.scene.add(c);
  const o = new r(c, 2, "#ffffff");
  o.visible = e.show && t, o.name = "PointLightHelper1", n.scene.add(o);
}
function g(n, e, t) {
  const f = n.scene.getObjectByName("PointLight2");
  f && n.scene.remove(f);
  const s = n.scene.getObjectByName("PointLightHelper2");
  s && n.scene.remove(s);
  const c = a({
    color: new i(e.color || "#ffffff"),
    intensity: e.intensity,
    distance: e.distance,
    x: e.x,
    y: e.y,
    z: e.z
  });
  c.visible = e.show, c.name = "PointLight2", n.scene.add(c);
  const o = new r(c, 2, "#ffffff");
  o.visible = e.show && t, o.name = "PointLightHelper2", n.scene.add(o);
}
function P(n, e, t) {
  L(n, e.ambientLight), d(n, e.directionalLight, t), b(n, e.pointLight1, t), g(n, e.pointLight2, t);
}
export {
  L as createAmbientLight,
  d as createDirectionalLight,
  P as createEnvironment,
  b as createPointLight1,
  g as createPointLight2
};
