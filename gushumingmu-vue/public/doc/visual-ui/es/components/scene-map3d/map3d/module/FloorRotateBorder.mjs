import { Vector3 as s, MeshBasicMaterial as p, AdditiveBlending as d, Color as m } from "three";
import "d3-geo";
import "three/examples/jsm/controls/OrbitControls";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { Plane as l } from "../mini3d/components/Plane.mjs";
import "lodash";
import { getTextureResource as f } from "../map/utils.mjs";
function j(e, t, n = !0) {
  const a = e.scene.getObjectByName("rotateBorder1");
  a && e.scene.remove(a);
  const i = e.scene.getObjectByName("rotateBorder2");
  i && e.scene.remove(i);
  const c = 100, B = f(e, "rotateBorder1Map", t.rotateBorder1.texture, "map"), w = f(e, "rotateBorder2Map", t.rotateBorder2.texture, "map"), r = new l(e, {
    width: c * t.rotateBorder1.size,
    needRotate: !0,
    rotateSpeed: t.rotateBorder1.rotateSpeed * 1e-3,
    material: new p({
      ...B,
      color: new m(t.rotateBorder1.color || "#48afff"),
      transparent: !0,
      opacity: t.rotateBorder1.opacity,
      depthWrite: !1,
      blending: d
    }),
    position: new s(0, 0.17, 0)
  });
  r.instance.renderOrder = 6, n && r.instance.scale.set(0, 0, 0), r.instance.visible = t.rotateBorder1.show, r.instance.name = "rotateBorder1", r.setParent(e.scene);
  const o = new l(e, {
    width: c * t.rotateBorder2.size,
    needRotate: !0,
    rotateSpeed: t.rotateBorder2.rotateSpeed * 1e-3,
    material: new p({
      ...w,
      color: new m(t.rotateBorder2.color || "#48afff"),
      transparent: !0,
      opacity: t.rotateBorder2.opacity,
      depthWrite: !1,
      blending: d
    }),
    position: new s(0, 0.16, 0)
  });
  o.instance.renderOrder = 6, n && o.instance.scale.set(0, 0, 0), o.instance.visible = t.rotateBorder2.show, o.instance.name = "rotateBorder2", o.setParent(e.scene), e.rotateBorder1 = r.instance, e.rotateBorder2 = o.instance;
}
export {
  j as createFloorRotateBorder
};
