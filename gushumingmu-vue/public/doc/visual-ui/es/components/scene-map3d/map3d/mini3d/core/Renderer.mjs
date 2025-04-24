import { WebGLRenderer as a } from "three";
class o {
  constructor({ canvas: s, sizes: e, scene: i, camera: t, postprocessing: n, composer: h }) {
    this.canvas = s, this.sizes = e, this.scene = i, this.camera = t, this.postprocessing = n, this.composer = h, this.setInstance();
  }
  setInstance() {
    this.instance = new a({
      alpha: !0,
      antialias: !0,
      canvas: this.canvas
    }), this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  update() {
    this.postprocessing && this.composer ? this.composer.render() : this.instance.render(this.scene, this.camera.instance);
  }
  destroy() {
    this.instance.dispose(), this.instance.forceContextLoss();
  }
}
export {
  o as Renderer
};
