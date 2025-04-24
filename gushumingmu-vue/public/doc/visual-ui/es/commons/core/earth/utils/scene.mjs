var d = Object.defineProperty;
var c = (s, e, t) => e in s ? d(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => c(s, typeof e != "symbol" ? e + "" : e, t);
import * as r from "three";
import f from "stats.js";
import { labelRenderer as m } from "./label.mjs";
class b {
  constructor(e, t) {
    i(this, "stats");
    i(this, "scene");
    i(this, "camera");
    i(this, "webGlRenderer");
    i(this, "labelRenderer");
    i(this, "element");
    i(this, "animationFrameId", 0);
    i(this, "textures", {});
    this.element = e, this.scene = this.createScene(t), this.stats = this.createStats(t), this.camera = this.createCamera(this.element), this.webGlRenderer = this.createWebGLRenderer(this.element), window.addEventListener("resize", () => this.onWindowResize(this.element));
  }
  createScene(e) {
    const t = new r.Scene();
    return e.isBackground ? t.background = new r.Color(e.background) : t.background = null, e.fog && (t.fog = new r.Fog(e.fogColor, e.fogNear, e.fogFar)), t;
  }
  createCamera(e) {
    const t = new r.PerspectiveCamera(45, e.offsetWidth / e.offsetHeight, 0.1, 1e4);
    return t.position.set(10, 10, 10), t.lookAt(0, 0, 0), t;
  }
  createWebGLRenderer(e) {
    const t = new r.WebGLRenderer({
      preserveDrawingBuffer: !0,
      // 开启缓冲区保护
      antialias: !0,
      alpha: !0
    });
    return t.setClearAlpha(0), t.setPixelRatio(window.devicePixelRatio), t.autoClear = !1, t.clearColor(), t.setSize(e.offsetWidth, e.offsetHeight), e.appendChild(t.domElement), this.labelRenderer = m(e), t;
  }
  createAmbientLight(e) {
    return new r.AmbientLight(
      new r.Color(e.color),
      e.intensity
    );
  }
  createDirectionalLight(e) {
    const t = new r.DirectionalLight(
      new r.Color(e.color),
      e.intensity
    );
    return t.position.set(
      e.x,
      e.y,
      e.z
    ), t.lookAt(0, 0, 0), t;
  }
  createGridHelper(e) {
    if (e.show)
      return new r.GridHelper(
        e.width,
        e.height,
        new r.Color(e.color),
        new r.Color(e.color)
      );
  }
  createAxesHelper(e) {
    if (e.show)
      return new r.AxesHelper(e.size);
  }
  createStats(e) {
    if (e.stats) {
      const t = new f();
      return t.domElement.style.position = "absolute", t.domElement.style.top = "5px", t.domElement.style.left = "5px", t.showPanel(e.statsType), this.element.appendChild(t.dom), t;
    }
    return null;
  }
  resize() {
    this.webGlRenderer.setSize(this.element.offsetWidth, this.element.offsetHeight), this.camera.aspect = this.element.offsetWidth / this.element.offsetHeight, this.camera.updateProjectionMatrix();
  }
  render() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.stats && this.stats.update(), this.render(), this.webGlRenderer.clear(), this.webGlRenderer.render(this.scene, this.camera);
    });
  }
  add(...e) {
    e.forEach((t) => {
      t && this.scene.add(t);
    });
  }
  dispose() {
    try {
      cancelAnimationFrame(this.animationFrameId), this.element.innerHTML = "", this.camera.clear(), this.webGlRenderer.forceContextLoss(), this.webGlRenderer.dispose(), this.scene.clear();
    } catch {
    }
  }
  onWindowResize(e) {
    const t = e.offsetWidth, o = e.offsetHeight;
    this.webGlRenderer.setSize(t, o), this.camera.aspect = t / o, this.camera.updateProjectionMatrix();
  }
  loadTextures(e, t) {
    const o = new r.TextureLoader();
    let n = 0;
    const a = () => {
      if (n < e.length) {
        const l = e[n].value;
        l ? o.load(
          l,
          (h) => {
            this.textures[e[n].key] = h, n++, a();
          },
          void 0,
          function(h) {
            n++, a();
          }
        ) : (n++, a());
      } else
        t(this.textures);
    };
    a();
  }
}
export {
  b as Scene
};
