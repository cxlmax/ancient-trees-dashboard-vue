var b = Object.defineProperty;
var F = (a, t, e) => t in a ? b(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var i = (a, t, e) => F(a, typeof t != "symbol" ? t + "" : t, e);
import { geoMercator as j } from "d3-geo";
import { BufferGeometry as f, Mesh as B, Group as l, LineBasicMaterial as H, MeshBasicMaterial as v, Vector2 as N, Vector3 as E, Shape as P, ExtrudeGeometry as S, LineLoop as V } from "three";
import { computeBoundsTree as k, disposeBoundsTree as A, acceleratedRaycast as C } from "three-mesh-bvh";
import "three/examples/jsm/controls/OrbitControls";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { transfromMapGeoJSON as J } from "../mini3d/utils/utils.mjs";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "lodash";
f.prototype.computeBoundsTree = k;
f.prototype.disposeBoundsTree = A;
B.prototype.raycast = C;
class ee {
  constructor({ assets: t, time: e, depth: r }, n = {}) {
    i(this, "coordinates");
    i(this, "config");
    i(this, "mapGroup");
    i(this, "assets");
    i(this, "depth");
    i(this, "time");
    i(this, "geoProjection", (t) => {
      const { center: e } = this.config;
      return j().center(e).scale(120).translate([0, 0])(t);
    });
    this.mapGroup = new l(), this.assets = t, this.depth = r, this.time = e, this.coordinates = [], this.config = Object.assign(
      {
        position: new E(0, 0, 0),
        center: new N(0, 0),
        data: "",
        renderOrder: 1,
        topFaceMaterial: new v({
          color: 1582651,
          transparent: !0,
          opacity: 1
        }),
        sideMaterial: new v({
          color: 464171,
          transparent: !0,
          opacity: 1
        }),
        lineMaterial: new H({ color: 2868444 }),
        depth: 0.1
      },
      n
    ), this.mapGroup.position.copy(this.config.position);
    const h = J(this.config.data);
    this.create(h);
  }
  create(t) {
    t.features.forEach((e, r) => {
      const { name: n, center: h = [], centroid: R = [], adcode: u, parent: g } = e.properties;
      this.coordinates.push({
        name: n,
        center: h,
        centroid: e.properties.centroid || e.properties.center,
        adcode: u,
        enName: "",
        value: 0
      });
      const c = new l();
      c.name = "meshGroup" + r, c.userData = {
        index: r,
        name: n,
        center: h,
        centroid: e.properties.centroid || e.properties.center,
        adcode: u,
        childrenNum: e.properties.childrenNum
      }, c.userData.materialEmissiveHex = this.config.topFaceMaterial.emissive.getHex();
      const s = new l();
      s.name = "lineGroup", s.userData.index = r, s.userData.adcode = u, s.userData.parent = g;
      const T = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1
      }, L = [this.config.topFaceMaterial, this.config.sideMaterial];
      e.geometry.coordinates.forEach((M) => {
        M.forEach((p, G) => {
          const m = new P();
          for (let d = 0; d < p.length; d++) {
            if (!p[d][0] || !p[d][1])
              return !1;
            const [x, D] = this.geoProjection(p[d]);
            d === 0 && m.moveTo(x, -D), m.lineTo(x, -D);
          }
          const O = new S(m, T), o = new B(O, L);
          o.userData.depth = this.config.depth, o.userData.name = n, o.userData.adcode = u, o.userData.parent = g, o.userData.materialEmissiveHex = this.config.topFaceMaterial.emissive.getHex(), o.renderOrder = this.config.renderOrder, o.name = "mapArea-" + n, o.geometry.computeBoundsTree(), c.add(o);
        });
        const w = [];
        let y = null;
        M[0].forEach((p) => {
          const [G, m] = this.geoProjection(p);
          w.push(new E(G, -m, 0)), y = this.createLine(w);
        }), s.add(y);
      }), s.position.set(0, 0, this.config.depth + 0.21), c.add(s), this.mapGroup.add(c);
    });
  }
  createLine(t) {
    const e = new f();
    e.setFromPoints(t);
    const r = new V(e, this.config.lineMaterial);
    return r.renderOrder = 2, r.name = "mapLine", r;
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(t) {
    t.add(this.mapGroup);
  }
}
export {
  ee as ExtrudeMap
};
