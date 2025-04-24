var r = Object.defineProperty;
var n = (e, t, o) => t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var s = (e, t, o) => n(e, typeof t != "symbol" ? t + "" : t, o);
import { OrbitControls as l } from "three/examples/jsm/controls/OrbitControls";
class h {
  constructor(t, o) {
    s(this, "OrbitControls");
    s(this, "Controls");
    s(this, "camera");
    s(this, "webGlRenderer");
    this.camera = t, this.webGlRenderer = o;
  }
  init() {
    return this.Controls = new l(this.camera, this.webGlRenderer.domElement), this.Controls.enableZoom = !0, this.Controls.autoRotate = !1, this.Controls.autoRotateSpeed = 2, this.Controls.minDistance = 5, this.Controls.maxDistance = 100, this.Controls.enablePan = !0, this.Controls.enableKeys = !1, this.Controls.update(), this;
  }
}
export {
  h as ObtControls
};
