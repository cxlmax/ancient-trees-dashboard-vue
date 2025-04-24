import { PerspectiveCamera as i } from "three";
import { OrbitControls as o } from "three/examples/jsm/controls/OrbitControls";
class l {
  constructor({ sizes: s, scene: t, canvas: e }, n = {}) {
    this.sizes = s, this.scene = t, this.canvas = e, this.option = n, this.setInstance(), this.setControls(this.option.orbitControls);
  }
  setInstance() {
    const s = this.sizes.width / this.sizes.height;
    this.instance = new i(45, s, 0.1, 2e3), this.instance.position.set(10, 10, 10), this.scene.add(this.instance);
  }
  setControls(s) {
    this.controls || (this.controls = new o(this.instance, this.canvas)), this.controls && (s === void 0 ? (this.controls.enableZoom = !0, this.controls.minDistance = 50, this.controls.maxDistance = 300, this.controls.zoomSpeed = 1, this.controls.enablePan = !0, this.controls.panSpeed = 1, this.controls.minPolarAngle = 0 * Math.PI / 180, this.controls.maxPolarAngle = 75 * Math.PI / 180, this.controls.enableDamping = !0) : (this.controls.enableZoom = s.enableZoom, this.controls.minDistance = s.minDistance, this.controls.maxDistance = s.maxDistance, this.controls.zoomSpeed = s.zoomSpeed, this.controls.enablePan = s.enablePan, this.controls.panSpeed = s.panSpeed, this.controls.minPolarAngle = s.minPolarAngle * Math.PI / 180, this.controls.maxPolarAngle = s.maxPolarAngle * Math.PI / 180, this.controls.enableDamping = s.enableDamping), this.controls.update());
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height, this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
  destroy() {
    this.controls.dispose();
  }
}
export {
  l as Camera
};
