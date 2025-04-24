import { PointsMaterial as m, AdditiveBlending as b, BufferGeometry as x, BufferAttribute as p, Points as v, CanvasTexture as w } from "three";
class f {
  /**
  *
  * @param {*} base this
  * @param {*} config
  */
  constructor({ time: t }, r = {}) {
    this.instance = null, this.time = t, this.enable = !0, this.config = Object.assign(
      {
        num: 100,
        // 粒子数量
        range: 500,
        // 范围
        speed: 0.01,
        renderOrder: 99,
        dir: "up",
        // up-上  down-下
        material: new m({
          map: f.createTexture(),
          size: 20,
          color: 16777215,
          transparent: !0,
          opacity: 1,
          depthTest: !1,
          vertexColors: !0,
          blending: b,
          sizeAttenuation: !0
          // 指定点的大小是否因相机深度而衰减
        })
      },
      r
    ), this.create();
  }
  create() {
    const { range: t, speed: r, dir: n, material: d, num: g, renderOrder: l } = this.config, s = [], o = [], h = [];
    for (let u = 0; u < g; u++) {
      s.push(
        Math.random() * t - t / 2,
        Math.random() * t - t / 2,
        Math.random() * t - t / 2
      );
      const i = n === "up" ? 1 : -1;
      h.push(Math.random() * i, (0.1 + Math.random()) * i, 0.1 + Math.random() * i);
      const a = d.color.clone(), c = {};
      a.getHSL(c), a.setHSL(c.h, c.s, c.l * Math.random()), o.push(a.r, a.g, a.b);
    }
    const e = new x();
    e.setAttribute("position", new p(new Float32Array(s), 3)), e.setAttribute("velocities", new p(new Float32Array(h), 3)), e.setAttribute("color", new p(new Float32Array(o), 3)), this.instance = new v(e, d), this.instance.name = "Particles", this.instance.renderOrder = l;
  }
  static createTexture() {
    const t = document.createElement("canvas");
    t.width = 1024, t.height = 1024;
    const r = t.getContext("2d"), n = r.createRadialGradient(512, 512, 0, 512, 512, 512);
    return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = n, r.fillRect(0, 0, 1024, 1024), new w(t);
  }
  update(t, r) {
    if (!this.instance) return !1;
    const { range: n, speed: d, dir: g } = this.config, l = g === "up" ? 1 : -1, s = this.instance.geometry.getAttribute("position"), o = this.instance.geometry.getAttribute("velocities"), h = s.count;
    for (let e = 0; e < h; e++) {
      let u = s.getX(e);
      s.getY(e);
      let i = s.getZ(e);
      const a = o.getX(e), c = o.getY(e);
      o.getZ(e), u += Math.sin(a * r) * t, i += d * l, i > n / 2 && l === 1 && (i = -n / 2), i < -n / 2 && l == -1 && (i = n / 2), s.setX(e, u), s.setZ(e, i), o.setX(e, a), o.setY(e, c);
    }
    s.needsUpdate = !0, o.needsUpdate = !0;
  }
  // 设置父级，并运行
  setParent(t) {
    t.add(this.instance), this.time.on("tick", (r, n) => {
      this.enable && this.update(r, n);
    });
  }
}
export {
  f as Particles
};
