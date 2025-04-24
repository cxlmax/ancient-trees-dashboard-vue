import { PointsMaterial as i, AdditiveBlending as n, Color as o } from "three";
import "d3-geo";
import "three/examples/jsm/controls/OrbitControls";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { Particles as a } from "../mini3d/components/Particles.mjs";
import "lodash";
function b(e, t) {
  const r = e.scene.getObjectByName("Particles");
  r && e.scene.remove(r), e.particles = new a(e, {
    num: t.num,
    // 粒子数量
    range: t.range,
    // 范围
    dir: t.dir,
    speed: t.speed,
    material: new i({
      map: a.createTexture(),
      size: t.material.size,
      color: new o(t.material.color || "#00eeee"),
      transparent: !0,
      opacity: t.material.opacity,
      depthTest: !1,
      depthWrite: !1,
      vertexColors: !0,
      blending: n,
      sizeAttenuation: !0
    })
  }), e.particles.name = "particle", e.particles.instance.position.set(0, 0, 0), e.particles.instance.rotation.x = -Math.PI / 2, e.particles.setParent(e.scene), e.particles.enable = !0, e.particles.instance.visible = t.show;
}
export {
  b as createParticles
};
