var c = Object.defineProperty;
var h = (i, r, e) => r in i ? c(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e;
var n = (i, r, e) => h(i, typeof r != "symbol" ? r + "" : r, e);
import { Scene as m, AxesHelper as d, Mesh as p } from "three";
import { geoMercator as f } from "d3-geo";
import { Renderer as g } from "./Renderer.mjs";
import { Camera as l } from "./Camera.mjs";
import { EventEmitter as u } from "../utils/EventEmitter.mjs";
import { Sizes as y } from "../utils/Sizes.mjs";
import { Time as j } from "../utils/Time.mjs";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
class A extends u {
  constructor(e, t = {}, s = {}) {
    super();
    n(this, "geoProjection", (e) => {
      const { geoProjectionCenter: t, geoProjectionScale: s, geoProjectionTranslate: o } = this.config;
      return f().center(t).scale(s).translate(o)(e);
    });
    this.canvas = e, this.scene = new m(), this.sizes = new y(this), this.time = new j(this), this.camera = new l(this, s), this.renderer = new g(this);
    const o = {
      geoProjectionCenter: [0, 0],
      geoProjectionScale: 120,
      geoProjectionTranslate: [0, 0]
    };
    this.config = Object.assign({}, o, t), this.sizes.on("resize", () => {
      this.resize();
    }), this.time.on("tick", (a) => {
      this.update(a);
    });
  }
  setCss3dVisible(e, t) {
    e && (this[e].visible = t, this[e].children.map((s) => {
      t ? s.show() : s.hide();
    }));
  }
  /**
  * 设置AxesHelper
  * @param {*} size 尺寸
  * @returns
  */
  setAxesHelper(e = 250) {
    if (!e)
      return !1;
    const t = new d(e);
    this.scene.add(t);
  }
  resize() {
    this.camera.resize(), this.renderer.resize();
  }
  update(e) {
    this.camera.update(e), this.renderer.update(e);
  }
  destroy() {
    try {
      this.sizes.destroy(), this.time.destroy(), this.camera.destroy(), this.renderer.destroy(), this.scene.traverse((e) => {
        if (e instanceof p) {
          e.geometry.dispose();
          for (const t in e.material) {
            const s = e.material[t];
            s && typeof s.dispose == "function" && s.dispose();
          }
        }
      }), this.canvas.parentNode.removeChild(this.canvas);
    } catch {
    }
  }
}
export {
  A as Mini3d
};
