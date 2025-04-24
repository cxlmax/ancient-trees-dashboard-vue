import * as s from "three";
import { EventEmitter as r } from "./EventEmitter.mjs";
class n extends r {
  constructor() {
    super(), this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, this.clock = new s.Clock(), this.timer = window.requestAnimationFrame(() => {
      this.tick();
    });
  }
  tick() {
    const t = Date.now();
    this.delta = t - this.current, this.current = t, this.elapsed = this.current - this.start;
    const i = this.clock.getDelta(), e = this.clock.getElapsedTime();
    if (this.emit("tick", i, e), this.stop)
      return window.cancelAnimationFrame(this.timer), !1;
    this.timer = window.requestAnimationFrame(() => {
      this.tick();
    });
  }
  destroy() {
    this.stop = !0, this.off("tick");
  }
}
export {
  n as Time
};
