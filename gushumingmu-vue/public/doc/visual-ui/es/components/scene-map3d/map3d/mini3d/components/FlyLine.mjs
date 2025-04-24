import { Group as V, MeshBasicMaterial as G, AdditiveBlending as P, Vector3 as c, QuadraticBezierCurve3 as j, TubeGeometry as B, Mesh as F } from "three";
class M {
  constructor({ time: e, geoProjection: t, label3d: d, flyLineLabelGroup: h, depth: m, allFlyLineLabel: p, scale: u }, b) {
    this.time = e, this.geoProjection = t, this.label3d = d, this.flyLineLabelGroup = h, this.allFlyLineLabel = p, this.scale = u, this.depth = m, this.instance = new V();
    const f = {
      middleHeight: 15,
      speed: 3,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      option: {},
      material: new G({
        color: 16506760,
        transparent: !0,
        fog: !1,
        opacity: 1,
        depthTest: !1,
        blending: P
      })
    };
    this.options = Object.assign({}, f, b), this.init();
  }
  // 初始化
  init() {
    const { material: e, option: t, allFlyLine: d, texture: h, segments: m, radius: p, radialSegments: u, data: b, speed: f, middleHeight: L } = this.options, w = (s, y, g) => {
      let o = t.format;
      try {
        const n = t.format.match(/\{(.*?)}/g);
        if (n)
          for (let l = 0; l < n.length; l++)
            o = o.replaceAll(n[l], s[n[l].slice(1, -1)]);
      } catch {
      }
      const i = this.label3d.create("", "flyline-label flyline-" + t.id, !0);
      return i.init('<div class="wrap"><span class="label">' + o + "</span></div>", g), this.label3d.setLabelStyle(i, 0.08 / this.scale, "x"), i.name = "flyline-" + t.id, i.setParent(this.flyLineLabelGroup), i;
    };
    b.map((s) => {
      const [y, g] = this.geoProjection(s.coords[0]), o = new c(y, -g, 0), [i, n] = this.geoProjection(s.coords[1]), l = new c(i, -n, 0), r = new c();
      r.addVectors(o, l).multiplyScalar(0.5), r.setZ(L);
      const x = new j(o, r, l), v = new B(x, m, p, u, !1), a = new F(v, e);
      a.name = "flyline-" + t.id, a.position.set(0, 0, 0), a.renderOrder = 21, a.userData.toName = s.toName, a.userData.fromName = s.fromName, a.userData.coords = s.coords, d.push(a);
      const S = w(s, 0, new c(r.x, r.y, r.z - t.label.bottom / this.scale));
      this.allFlyLineLabel.push(S), this.instance.add(a);
    }), this.time.on("tick", () => {
      h.offset.x -= f * 1e-3;
    });
  }
  // 获取实例
  getInstance() {
    return this.instance;
  }
  // 设置父级
  setParent(e) {
    e.add(this.instance);
  }
  // 设置隐藏显示
  setVisible(e) {
    this.instance.visible = e, this.run = e;
  }
}
export {
  M as FlyLine
};
