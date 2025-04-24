import { CSS3DRenderer as d, CSS3DObject as m, CSS3DSprite as h } from "three/examples/jsm/renderers/CSS3DRenderer";
import "three";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { uuid as a } from "../utils/utils.mjs";
class E {
  constructor({ scene: s, camera: i, time: l, sizes: t, canvas: e }) {
    this.scene = s, this.camera = i, this.time = l, this.sizes = t, this.canvas = e, this.parent = null;
    const { width: o, height: r } = this.sizes, n = new d();
    n.setSize(o, r), n.domElement.style.position = "absolute", n.domElement.style.left = "0px", n.domElement.style.top = "0px", n.domElement.style.pointerEvents = "none", n.domElement.className = "label3d-" + a();
    try {
      this.canvas.parentNode.appendChild(n.domElement);
    } catch {
    }
    this.css3dRender = n, this.time.on("tick", () => {
      this.update();
    }), this.sizes.on("resize", () => {
      this.resize();
    });
  }
  /**
  * 创建3d标签，默认用CSS3DObject，
  * @param {*} name  标签内容
  * @param {*} className 标签class
  * @param {*} isSprite  是否是CSS3DSprite   fasle|true
  * @returns
  */
  create(s = "", i = "", l = !1) {
    const t = document.createElement("div");
    t.innerHTML = s, t.className = i, t.style.visibility = "hidden", t.style.position = "absolute", i || (t.style.padding = "10px", t.style.color = "#fff", t.style.fontSize = "12px", t.style.textAlign = "center", t.style.background = "rgba(0,0,0,0.6)", t.style.borderRadius = "4px");
    let e = null;
    return l ? e = new h(t) : e = new m(t), e.init = (o, r) => {
      e.element.innerHTML = o, e.element.style.visibility = "visible", e.position.copy(r);
    }, e.hide = () => {
      e.element.style.visibility = "hidden";
    }, e.show = () => {
      e.element.style.visibility = "visible";
    }, e.setParent = (o) => {
      this.parent = o, o.add(e);
    }, e.remove = () => {
      this.parent.remove(e);
    }, e;
  }
  /**
  * 设置label的样式，
  * @param {*} label 标签对象
  * @param {*} scale 缩放值
  * @param {*} axis 旋转轴
  * @param {*} pointerEvents 鼠标事件控制 none | auto
  */
  setLabelStyle(s, i = 0.1, l = "x", t = "none") {
    s.element.style.pointerEvents = t, s.scale.set(i, i, i), s.rotation[l] = Math.PI / 2;
  }
  update() {
    this.css3dRender.render(this.scene, this.camera.instance);
  }
  destroy() {
    if (this.css3dRender) {
      const s = this.css3dRender.domElement;
      s.parentNode.removeChild(s);
    }
  }
  resize() {
    const { width: s, height: i } = this.sizes;
    this.css3dRender.setSize(s, i);
  }
}
export {
  E as Label3d
};
