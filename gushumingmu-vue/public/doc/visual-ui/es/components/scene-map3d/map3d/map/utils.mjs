import { TextureLoader as u, RepeatWrapping as i, sRGBEncoding as h } from "three";
import "d3-geo";
import "three/examples/jsm/controls/OrbitControls";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { getBoundBox as p } from "../mini3d/utils/utils.mjs";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "lodash";
function x(r, t) {
  const o = r[0] / t[0], n = r[1] / t[1];
  return Math.min(o, n);
}
function T(r, t) {
  const o = [129.00074005126953, 94.67551803588867], n = p(t.mapGroup), e = x(o, [n.boxSize.x, n.boxSize.y]);
  t.mapGroup.scale.set(e, e, 1);
  const s = p(t.mapGroup);
  return t.mapGroup.position.x = -s.center.x, t.mapGroup.position.y = -s.center.y, r.scale = e, r.boundBox = s, t;
}
function _(r, t) {
  fetch(r).then((o) => o.text()).then((o) => {
    try {
      JSON.parse(o) && t && t(o);
    } catch {
      t(null);
    }
  }).catch((o) => {
    t(null);
  });
}
function D(r, t) {
  const o = `https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/china/${r}_full.json`;
  fetch(o).then((n) => n.text()).then((n) => {
    try {
      JSON.parse(n) && t && t(n);
    } catch {
      t(null);
    }
  }).catch((n) => {
    y(r, t), t(null);
  });
}
function y(r, t) {
  const o = `https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/china/${r}.json`;
  fetch(o).then((n) => n.text()).then((n) => {
    try {
      JSON.parse(n) && t && t(n);
    } catch {
      t(null);
    }
  }).catch((n) => {
    t(null);
  });
}
function J(r, t, o, n, e) {
  const s = r.attributes.position, a = r.attributes.uv, d = r.groups[0].count;
  for (let c = 0; c < d; c++) {
    const g = s.getX(c), l = s.getY(c), m = (g - n) / t, f = (l - e) / o;
    a.setXY(c, m, f);
  }
  a.needsUpdate = !0, r.computeVertexNormals();
}
function O(r, t, o, n) {
  let e = r.assets.instance.getResource3(t);
  return e.data ? e.path ? o ? (o !== e.path && (e.data = new u().load(o), e.path = o), e.data.wrapS = e.data.wrapT = i, { [n]: e.data }) : {} : {} : !e.data && o ? (e.data = new u().load(o), e.data.encoding = h, e.path = o, e.data.wrapS = e.data.wrapT = i, { [n]: e.data }) : {};
}
export {
  J as calcUv2,
  x as calculateScale,
  D as getMapDataByAdcode,
  y as getMapDataByAdcode2,
  _ as getMapDataByUrl,
  O as getTextureResource,
  T as setScaleArea
};
