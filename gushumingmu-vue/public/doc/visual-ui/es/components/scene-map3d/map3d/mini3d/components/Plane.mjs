import { MeshBasicMaterial as o, Vector3 as n, PlaneGeometry as a, Mesh as h } from "three";
class r {
  constructor({ time: s }, e) {
    this.time = s, this.options = Object.assign(
      {},
      {
        width: 10,
        scale: 1,
        position: new n(0, 0, 0),
        needRotate: !1,
        rotateSpeed: 1e-3,
        material: new o({
          transparent: !0,
          opacity: 1,
          depthTest: !0
        })
      },
      e
    );
    const i = new a(this.options.width, this.options.width), t = new h(i, this.options.material);
    t.rotateX(-Math.PI / 2), t.position.copy(this.options.position), t.scale.set(this.options.scale, this.options.scale, this.options.scale), this.instance = t;
  }
  setParent(s) {
    s.add(this.instance), this.time.on("tick", () => {
      this.update();
    });
  }
  update() {
    this.options.needRotate && (this.instance.rotation.z += this.options.rotateSpeed);
  }
}
export {
  r as Plane
};
