import { EventEmitter as t } from "./EventEmitter.mjs";
class h extends t {
  constructor({ canvas: i }) {
    super(), this.canvas = i, this.pixelRatio = 0, this.init(), window.addEventListener("resize", () => {
      this.init(), this.emit("resize");
    });
  }
  init() {
    this.width = this.canvas.offsetWidth, this.height = this.canvas.offsetHeight, this.pixelRatio = this.pixelRatio || Math.min(window.devicePixelRatio, 2);
  }
  destroy() {
    this.off("resize");
  }
}
export {
  h as Sizes
};
