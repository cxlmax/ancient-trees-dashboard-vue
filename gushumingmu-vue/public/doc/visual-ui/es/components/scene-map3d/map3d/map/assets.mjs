var i = Object.defineProperty;
var n = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var r = (a, t, e) => n(a, typeof t != "symbol" ? t + "" : t, e);
import { FileLoader as s } from "three";
import h from "./assets/texture/bg.png.mjs";
import m from "./assets/texture/guangquan01.png.mjs";
import u from "./assets/texture/guangquan02.png.mjs";
import g from "./assets/texture/huiguang.png.mjs";
import l from "./assets/texture/gaoguang1.png.mjs";
import d from "./assets/texture/flyLine2.png.mjs";
import "d3-geo";
import "three/examples/jsm/controls/OrbitControls";
import { Resource as c } from "../mini3d/utils/Resource.mjs";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "lodash";
class P {
  constructor(t = null, e) {
    r(this, "instance");
    r(this, "onLoadCallback");
    this.res = e, this.onLoadCallback = t, this.init();
  }
  init() {
    this.instance = new c(), this.instance.addLoader(s, "FileLoader"), this.instance.on("onProgress", (e, p, o) => {
      (p / o * 100).toFixed(2) + "";
    }), this.instance.on("onLoad", () => {
      this.onLoadCallback && this.onLoadCallback();
    });
    const t = [
      // { type: 'Texture', name: 'quan', path: quan },
      { type: "Texture", name: "gaoguang1", path: l },
      { type: "Texture", name: "topMap", path: this.res.topMap },
      { type: "Texture", name: "topNormal", path: this.res.topNormal },
      { type: "Texture", name: "sideMap", path: this.res.sideMap },
      { type: "Texture", name: "pathLine", path: this.res.pathLine },
      { type: "Texture", name: "gridRippleMap", path: this.res.gridRippleMap },
      { type: "Texture", name: "gridRippleAlphaMap", path: this.res.gridRippleAlphaMap },
      { type: "Texture", name: "rotateBorder1Map", path: this.res.rotateBorder1Map },
      { type: "Texture", name: "rotateBorder2Map", path: this.res.rotateBorder2Map },
      { type: "Texture", name: "flyLine", path: d },
      { type: "Texture", name: "huiguang", path: g },
      { type: "Texture", name: "guangquan1", path: m },
      { type: "Texture", name: "guangquan2", path: u },
      { type: "Texture", name: "bg", path: h }
    ];
    this.instance.loadAll(t);
  }
}
export {
  P as Assets
};
