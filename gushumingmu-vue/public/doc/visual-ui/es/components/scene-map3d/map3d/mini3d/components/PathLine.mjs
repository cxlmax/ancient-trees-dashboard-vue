import { isArray as w } from "lodash";
import { Group as x, MeshBasicMaterial as P, AdditiveBlending as b, Vector3 as l, CatmullRomCurve3 as O, TubeGeometry as j, Mesh as v } from "three";
class B {
  constructor({ time: e, geoProjection: d }, s) {
    this.time = e, this.geoProjection = d, this.instance = new x(), this.instance.name = "PathLine", this.run = !0;
    const n = {
      speed: 3e-3,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      renderOrder: 1,
      material: new P({
        color: 16777215,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: b
      })
    };
    this.options = Object.assign({}, n, s), this.init();
  }
  // 初始化
  init() {
    const { material: e, texture: d, segments: s, radius: n, radialSegments: u, data: f, speed: G, renderOrder: m } = this.options;
    try {
      f.map((h) => {
        const i = [];
        h.geometry.coordinates.map((a, y) => {
          y === 0 && (w(a[0][0]) ? a[0].forEach((o) => {
            const [t, c] = this.geoProjection(o);
            (t !== void 0 || t !== NaN) && i.push(new l(t, -c, 0));
          }) : a.forEach((o) => {
            const [t, c] = this.geoProjection(o);
            (t !== void 0 || t !== NaN) && i.push(new l(t, -c, 0));
          }));
        });
        const p = new O(i), g = new j(p, s, n, u, !1), r = new v(g, e);
        r.position.set(0, 0, 0), r.renderOrder = m, this.instance.add(r);
      });
    } catch {
    }
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
  B as PathLine
};
