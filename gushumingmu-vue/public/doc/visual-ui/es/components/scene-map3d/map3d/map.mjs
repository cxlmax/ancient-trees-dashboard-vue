var W = Object.defineProperty;
var U = (A, B, e) => B in A ? W(A, B, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[B] = e;
var l = (A, B, e) => U(A, typeof B != "symbol" ? B + "" : B, e);
import { BufferGeometry as E, Mesh as S, Sprite as X, Color as M, AxesHelper as Y, Raycaster as q, Vector2 as H, Group as L, PlaneGeometry as z, TextureLoader as R, sRGBEncoding as _, MeshBasicMaterial as v, DoubleSide as C, RepeatWrapping as k, AdditiveBlending as T, Vector3 as j, MeshStandardMaterial as O, BoxGeometry as V, NearestFilter as J, Shape as Z, ShapeGeometry as K, LineBasicMaterial as ee, Box3Helper as te } from "three";
import { computeBoundsTree as ae, disposeBoundsTree as ie, acceleratedRaycast as $ } from "three-mesh-bvh";
import { pinyin as se } from "pinyin-pro";
import { Mini3d as re } from "./mini3d/core/index.mjs";
import "three/examples/jsm/loaders/GLTFLoader";
import "three/examples/jsm/loaders/DRACOLoader.js";
import { getBoundBox as N, transfromMapGeoJSON as oe } from "./mini3d/utils/utils.mjs";
import "three/examples/jsm/libs/lil-gui.module.min";
import "three/examples/jsm/utils/BufferGeometryUtils";
import { Label3d as le } from "./mini3d/components/Label3d.mjs";
import { FlyLine as ne } from "./mini3d/components/FlyLine.mjs";
import { ToastLoading as ce } from "./mini3d/components/ToastLoading.mjs";
import { PathLine as he } from "./mini3d/components/PathLine.mjs";
import { Assets as pe } from "./map/assets.mjs";
import { ExtrudeMap as ue } from "./map/extrudeMap.mjs";
import m from "gsap";
import { isEmpty as Q, isArray as F, isNumber as de, cloneDeep as me } from "lodash";
import { autoInstallFont as D } from "../../../commons/utils/json2css.mjs";
import { createFloorGaoGuang as fe } from "./module/FloorGaoGuang.mjs";
import { createFloorRotateBorder as be } from "./module/FloorRotateBorder.mjs";
import { createFloorGridRipple as ye } from "./module/FloorGridRipple.mjs";
import { createMirror as ge } from "./module/MapMirror.mjs";
import { createTimeLine as Me } from "./module/Timeline.mjs";
import { createParticles as Le } from "./module/Particles.mjs";
import { getMapDataByAdcode as Ge, getMapDataByUrl as xe, getTextureResource as I, getMapDataByAdcode2 as we, setScaleArea as Be, calcUv2 as ve } from "./map/utils.mjs";
import { createEnvironment as Se } from "./module/Environment.mjs";
E.prototype.computeBoundsTree = ae;
E.prototype.disposeBoundsTree = ie;
S.prototype.raycast = $;
X.prototype.raycast = $;
class et extends re {
  constructor(e, t, a, r) {
    super(e, t, a);
    l(this, "pointCenter");
    l(this, "depth");
    l(this, "toastLoading");
    l(this, "sceneGroup");
    l(this, "assets");
    l(this, "mainSceneGroup");
    l(this, "childSceneGroup");
    l(this, "allAreaLabel");
    l(this, "areaLabelGroup");
    l(this, "label3d");
    l(this, "rotateBorder1");
    l(this, "rotateBorder2");
    l(this, "mapBoxHelper");
    l(this, "quan");
    l(this, "areaMapGroup");
    l(this, "provinceMesh");
    l(this, "provinceLineMaterial");
    l(this, "areaMapTopMaterial");
    l(this, "areaMapSideMaterial");
    l(this, "childMap");
    l(this, "groundMirror");
    l(this, "particles");
    l(this, "barGroup");
    l(this, "barGuangQuanGroup");
    l(this, "allBar");
    l(this, "allBarMaterial");
    l(this, "allBarGuangquan");
    l(this, "allBarLabel");
    l(this, "allScatterLabel");
    l(this, "barLabelGroup");
    l(this, "scatterLabelGroup");
    l(this, "pathLine");
    l(this, "pathLineTexture");
    l(this, "gaoguangMesh");
    l(this, "gridRippleGroup");
    l(this, "diffuseShader");
    l(this, "scale", 1);
    l(this, "datasource", {});
    l(this, "flyLineGroup");
    l(this, "allFlyLine");
    l(this, "hoverAreaMap");
    l(this, "raycasterMousemove");
    l(this, "clientRect");
    l(this, "mouse");
    l(this, "isMousedown");
    l(this, "isMapAnimationSuccess");
    l(this, "mapBackgroundImgMesh");
    l(this, "mapBackgroundImgMaterial");
    l(this, "mapJsonData");
    l(this, "allRegionalLevel");
    l(this, "axesHelper");
    this.option = a, this.onCallBack = r, this.pointCenter = t.geoProjectionCenter, this.depth = this.option.map.depth, this.option.scene.isBackground !== !1 && (this.scene.background = new M(this.option.scene.background || "#000000")), this.camera.instance.position.set(
      this.option.camera.position.x + (a.scene.translateX || 0),
      this.option.camera.position.y + (a.scene.translateY || 0) + 200,
      this.option.camera.position.z + (a.scene.translateZ || 0)
    ), this.camera.instance.near = 1, this.camera.instance.far = 1e4, this.camera.instance.updateProjectionMatrix(), this.option.camera.target && this.camera.controls.target.set(
      this.option.camera.target[0] + (a.scene.translateX || 0),
      this.option.camera.target[1] + (a.scene.translateY || 0),
      this.option.camera.target[2] + (a.scene.translateZ || 0)
    ), this.hoverAreaMap = null, this.clickMapObj = null, this.axesHelper = new Y(100), this.axesHelper.visible = this.option.debugger, this.scene.add(this.axesHelper), this.raycasterMousemove = new q(), this.clientRect = this.renderer.instance.domElement.getBoundingClientRect(), this.mouse = new H(), this.isMousedown = !1, this.isMapAnimationSuccess = !1, Se(this, this.option.light, this.option.debugger), this.toastLoading = new ce(), this.assets = new pe(() => {
      this.mapBoxHelper = null, this.sceneGroup = new L(), this.mainSceneGroup = new L(), this.childSceneGroup = new L(), this.mapTitleLabel = null, this.mapTitleLableGroup = new L(), this.areaMapGroup = new L(), this.allAreaLabel = [], this.areaLabelGroup = new L(), this.allBar = [], this.allBarLabel = [], this.allBarMaterial = [], this.allBarGuangquan = [], this.barGroup = new L(), this.barLabelGroup = new L(), this.barGuangQuanGroup = new L(), this.allScatterLabel = [], this.scatterLabelGroup = new L(), this.flyLineGroup = new L(), this.flyLineLabelGroup = new L(), this.allFlyLine = [], this.allFlyLineLabel = [], this.allRegionalLevel = [], this.label3d = new le(this), this.mainSceneGroup.rotateX(-Math.PI / 2), this.mainSceneGroup.add(this.areaLabelGroup, this.areaMapGroup, this.mapTitleLableGroup), this.sceneGroup.add(this.mainSceneGroup, this.childSceneGroup), this.scene.add(this.sceneGroup), this.createAreaMapModel(() => {
        this.createAreaMapStorke(this.option.map.storkeAnimation, !0).then(() => {
          this.time.on("tick", (i) => {
            this.pathLineTexture && (this.pathLineTexture.offset.x += this.option.map.storkeAnimation.speed * i);
          }), Le(this, this.option.particle), fe(this, this.option.floor.gaoguang, this.option.floor.quan), be(this, this.option.floor.rotateBorder), ye(this, this.option.floor.gridRipple), this.time.on("tick", (i) => {
            this.diffuseShader.pointShader && (this.diffuseShader.pointShader.uniforms.uTime.value += i, this.diffuseShader.pointShader.uniforms.uTime.value > 600 / this.option.floor.gridRipple.diffuseSpeed && (this.diffuseShader.pointShader.uniforms.uTime.value = 0));
          }), this.createMapBackgroundImg(), this.canvas.addEventListener("mousemove", this.handleHoverAreaMap.bind(this), !1), this.canvas.addEventListener("mousedown", this.handleMapMousedown.bind(this), !1), this.canvas.addEventListener("mouseup", this.handleMapMouseup.bind(this), !1);
          try {
            this.onCallBack.onMapSuccess();
          } catch {
          }
          Me(this, this.option);
        });
      });
    }, {
      topMap: this.option.map.topMaterial.map,
      topNormal: this.option.map.topMaterial.normalMap,
      sideMap: this.option.map.sideMaterial.map,
      pathLine: this.option.map.storkeAnimation.texture,
      gridRippleMap: this.option.floor.gridRipple.map,
      gridRippleAlphaMap: this.option.floor.gridRipple.alphaMap,
      rotateBorder1Map: this.option.floor.rotateBorder.rotateBorder1.map,
      rotateBorder2Map: this.option.floor.rotateBorder.rotateBorder2.map
    });
  }
  createMapBackgroundImg(e = !0) {
    try {
      const t = this.scene.getObjectByName("MapBackgroundImgMesh");
      if (t && this.scene.remove(t), this.option.map.backgroundImg && this.option.map.backgroundImg.show) {
        const { src: a, alphaMap: r, color: i, opacity: s, rotation: o, position: h, scale: n } = this.option.map.backgroundImg, c = new z(500, 500), p = new R().load(a);
        p.encoding = _;
        const u = a ? { map: p } : {}, d = new R().load(r), g = r ? { alphaMap: d } : {};
        this.mapBackgroundImgMaterial = new v({
          ...u,
          ...g,
          color: i,
          transparent: !0,
          opacity: e ? 0 : s,
          side: C
        }), p.wrapS = p.wrapT = k, this.mapBackgroundImgMesh = new S(c, this.mapBackgroundImgMaterial), this.mapBackgroundImgMesh.rotation.x = o[0] * (Math.PI / 180), this.mapBackgroundImgMesh.rotation.y = o[1] * (Math.PI / 180), this.mapBackgroundImgMesh.rotation.z = o[2] * (Math.PI / 180), this.mapBackgroundImgMesh.position.x = h[0], this.mapBackgroundImgMesh.position.y = h[1], this.mapBackgroundImgMesh.position.z = h[2], this.mapBackgroundImgMesh.scale.x = n[0], this.mapBackgroundImgMesh.scale.y = n[1], this.mapBackgroundImgMesh.scale.z = n[2], this.mapBackgroundImgMesh.name = "MapBackgroundImgMesh", this.scene.add(this.mapBackgroundImgMesh);
      }
    } catch {
    }
  }
  /** 模型区域地图渲染 */
  createAreaMapModel(e) {
    this.createArea((t) => {
      this.provinceMesh = t, this.createMapTitleLabel(this.mapTitleLableGroup), t.setParent(this.areaMapGroup), this.areaMapGroup.position.set(0, 0, -5), this.areaMapGroup.scale.set(1, 1, 0), this.areaMapGroup.visible = !1, this.createAreaLabel(this.areaData, this.areaLabelGroup), ge(this), e(!0);
    });
  }
  /** 创建区域 */
  createArea(e) {
    const t = (a) => {
      this.mapJsonData = a, this.provinceLineMaterial = new ee({
        color: new M(this.option.map.lineColor || "#000000"),
        transparent: !0
      });
      let [r, i] = this.createProvinceMaterial(this.option.map.topMaterial, this.option.map.sideMaterial);
      this.areaMapTopMaterial = r, this.areaMapSideMaterial = i;
      let s = new ue(this, {
        center: this.pointCenter,
        position: new j(0, 0, 0.06),
        data: a,
        depth: this.depth,
        topFaceMaterial: this.areaMapTopMaterial,
        sideMaterial: this.areaMapSideMaterial,
        lineMaterial: this.provinceLineMaterial,
        renderOrder: 9
      });
      this.option.scene.defaultMapAdcode !== 1e5 && Be(this, s), this.areaData = s.coordinates, this.time.on("tick", () => {
        i.map && (i.map.offset.y += 2e-3);
      });
      const o = N(s.mapGroup);
      this.mapBoxHelper = new te(o.box3, new M("#ffffff")), this.mapBoxHelper.rotation.x = Math.PI / 2, this.mapBoxHelper.visible = this.option.debugger, this.mapBoxHelper.name = "mapBoxHelper", this.scene.add(this.mapBoxHelper), s.mapGroup.children.map((h, n) => {
        h.children.map((c) => {
          c.type === "Mesh" && ve(c.geometry, o.boxSize.x, o.boxSize.y, o.box3.min.x, o.box3.min.y);
        });
      }), e && e(s);
    };
    this.option.scene.defaultMapAdcode && this.option.scene.defaultMapAdcode !== 1 && Ge(this.option.scene.defaultMapAdcode, (a) => t(a)), this.option.scene.defaultMapAdcode && this.option.scene.defaultMapAdcode === 1 && this.option.scene.geojson && xe(this.option.scene.geojson, (a) => t(a));
  }
  /** 创建轮廓 */
  createAreaMapStorke(e, t = !0) {
    return new Promise((a, r) => {
      if (this.option.scene.defaultMapAdcode === 1) {
        a(!0);
        return;
      }
      try {
        const i = this.mainSceneGroup.getObjectByName("PathLine");
        i && this.mainSceneGroup.remove(i);
        let s = I(this, "pathLine", e.texture, "texture");
        if (Q(s))
          a(!0);
        else {
          let o = s.texture;
          o.wrapS = o.wrapT = k, o.repeat.set(1, 1), this.pathLineTexture = o, we(this.option.scene.defaultMapAdcode, (h) => {
            try {
              if (h) {
                h = JSON.parse(h);
                let n = h.features.map((u) => ({ geometry: u.geometry })), c = new he(this, {
                  data: n,
                  texture: o,
                  renderOrder: 21,
                  speed: e.speed,
                  radius: e.radius / this.scale,
                  segments: e.segments || 2560,
                  radialSegments: 4,
                  material: new v({
                    color: new M(e.color || "#2bc4dc"),
                    map: o,
                    alphaMap: o,
                    fog: !1,
                    transparent: !0,
                    opacity: t ? 0 : 1,
                    blending: T
                  })
                });
                c.instance.name = "PathLine";
                const p = this.mainSceneGroup.getObjectByName("PathLine");
                if (p && this.mainSceneGroup.remove(p), c.setParent(this.mainSceneGroup), this.boundBox) {
                  c.instance.scale.set(this.scale, this.scale, this.scale);
                  const u = this.boundBox;
                  c.instance.position.x = -u.center.x, c.instance.position.y = -u.center.y;
                }
                c.instance.position.z = this.depth + 0.38 + (e.top || 0), this.pathLine = c;
              }
            } catch {
            } finally {
              a(!0);
            }
          });
        }
      } catch {
        a(!0);
      }
    });
  }
  /** 创建地图区域标签 */
  createAreaLabel(e, t) {
    const a = (r, i, s) => {
      let o = this.label3d.create("", "area-label", !0);
      return o.init(`<p class="label">${r.name}</p>`, s), this.label3d.setLabelStyle(o, 0.08 / this.scale, "x"), o.setParent(t), o.userData.adcode = r.adcode, o.userData.position = [s.x, s.y, s.z], o;
    };
    e.map((r, i) => {
      if (r.name && r.centroid && r.adcode) {
        let [s, o] = this.geoProjection(r.centroid), h = a(r, i, new j(s, -o, this.depth + 2));
        this.allAreaLabel.push(h);
      }
    }), this.option.scene.defaultMapAdcode !== 1e5 && this.setAreaLabelScale(), this.setAreaLabelStyle(this.option.map.arealabel);
  }
  /** 创建地图标题标签 */
  createMapTitleLabel(e) {
    if (this.option.scene.defaultMapAdcode !== 1e5 && this.option.scene.defaultMapAdcode !== 1) {
      let t = N(this.provinceMesh.mapGroup);
      const a = this.option.map.titleLabel && this.option.map.titleLabel.gaodeAPI || "", r = `https://restapi.amap.com/v3/config/district?keywords=${this.option.scene.defaultMapAdcode}&subdistrict=0&key=${a}`;
      fetch(r).then((i) => i.text()).then((i) => {
        try {
          const s = JSON.parse(i);
          if (s.status === "1" && s.districts.length > 0) {
            const o = this.option.map.titleLabel && this.option.map.titleLabel.offsetX || 0, h = this.option.map.titleLabel && this.option.map.titleLabel.offsetY || 2, n = (u) => {
              let d = this.label3d.create("", "map-label", !1);
              return d.init(
                `<div class="other-label"><span class="title">${u.name}</span><span>${u.enName}</span></div>`,
                new j(t.center.x / this.scale + o, (t.center.y - t.boxSize.y / 2 - h) / this.scale, 0.4)
              ), this.label3d.setLabelStyle(d, 0.115 / this.scale, "x"), d.setParent(e), d;
            }, c = se(s.districts[0].name.slice(0, -1), { toneType: "none", separator: "" }).toUpperCase();
            this.mapTitleLabel = n({ name: s.districts[0].name, enName: c + " " + s.districts[0].level.toUpperCase() }), this.mapTitleLableGroup.scale.set(this.scale, this.scale, this.scale);
            let p = (this.depth + 0.4) / this.scale;
            this.mapTitleLabel.position.z = p, this.mapTitleLabel.position.y -= 1.5 / this.scale, this.setMapTitleLabelStyle(this.option.map.titleLabel);
          }
        } catch {
        }
      }).catch((i) => {
      });
    }
  }
  /**设置地图标题标签样式 */
  setMapTitleLabelStyle(e) {
    if (e) {
      D(e.fontFamily);
      const t = this.mapTitleLabel.element.querySelector(".map-label>.other-label");
      e.show ? t.style.opacity = 1 : t.style.opacity = 0, t.style.fontSize = e.fontSize + "px", t.style.fontFamily = e.fontFamily, t.style.color = e.color;
    } else
      this.mapTitleLabel.element.style.opacity = 0;
  }
  /** 设置地图区域标签缩放 */
  setAreaLabelScale() {
    this.areaLabelGroup.scale.set(this.scale, this.scale, this.scale);
    const e = this.boundBox;
    this.areaLabelGroup.position.x = -e.center.x, this.areaLabelGroup.position.y = -e.center.y, this.allAreaLabel.map((t) => {
      let a = (this.depth + 0.4) / this.scale;
      t.position.z = a, t.position.y -= 1.5 / this.scale, t.userData.position = [t.position.x, t.position.y, t.position.z];
    });
  }
  /** 设置地图区域标签的样式 */
  setAreaLabelStyle(e) {
    e && (D(e.fontFamily), this.allAreaLabel.map((t, a) => {
      const r = t.element.querySelector(".area-label>p.label");
      e.show ? r.style.opacity = 1 : r.style.opacity = 0, r.style.fontSize = e.fontSize + "px", r.style.fontFamily = e.fontFamily, r.style.color = e.color;
    }));
  }
  /** 设置地图区域标签移动 */
  setAreaLabelMove(e, t = "up") {
    this.allAreaLabel.map((a) => {
      if (a.userData.adcode === e) {
        const r = a.userData.position[2] + (this.depth / 2 + 0.3) / this.scale, i = a.userData.position[2];
        m.to(a.position, {
          duration: 0.3,
          z: t === "up" ? r : i
        });
      }
    });
  }
  /** 创建省份材质 */
  createProvinceMaterial(e, t) {
    let a = I(this, "topMap", e.map, "map"), r = I(this, "topNormal", e.normalMap, "normalMap"), i = new O({
      ...a,
      ...r,
      color: new M(e.color || "#061e47"),
      emissive: new M(e.emissive || "#000000"),
      transparent: !0,
      opacity: e.opacity
    }), s = I(this, "sideMap", t.map, "map");
    Q(s) || (s.map.repeat.set(1, 0.2), s.map.offset.y += 0.01);
    let o = new O({
      ...s,
      color: new M(t.color || "#061e47"),
      transparent: !0,
      opacity: t.opacity,
      side: C
    });
    return [i, o];
  }
  /** 创建柱状图 */
  createBar(e, t, a = !0, r = !1) {
    if (!(!a && (t = this.datasource[e._sourceId], !t)) && (a || (this.barGroup.remove(...this.barGroup.children.filter((i) => i.name === "bar-" + e.id)), this.barGuangQuanGroup.remove(...this.barGuangQuanGroup.children.filter((i) => i.name === "bar-" + e.id)), this.barLabelGroup.remove(...this.barLabelGroup.children.filter((i) => i.name === "bar-" + e.id)), this.allBar = this.allBar.filter((i) => i.name !== "bar-" + e.id), this.allBarLabel = this.allBarLabel.filter((i) => i.name !== "bar-" + e.id), this.allBarMaterial = this.allBarMaterial.filter((i) => i.name !== "bar-" + e.id), this.allBarGuangquan = this.allBarGuangquan.filter((i) => i.name !== "bar-" + e.id)), t && F(t) && t.length > 0))
      try {
        if (this.datasource[e._sourceId] = t, !e.isHide) {
          const i = (n, c, p) => {
            let u = e.format;
            try {
              const g = e.format.match(/\{(.*?)}/g);
              if (g)
                for (let b = 0; b < g.length; b++)
                  u = u.replaceAll(g[b], n[g[b].slice(1, -1)]);
            } catch {
            }
            let d = this.label3d.create("", "bar-label bar-" + e.id, !0);
            return d.init(`
            <div class="wrap">
              <span class="label">${u}</span>
              <span class="unit">${e.label.unit || ""}</span>
            </div>
          `, p), this.label3d.setLabelStyle(d, 0.08 / this.scale, "x"), d.name = "bar-" + e.id, d.setParent(this.barLabelGroup), d.userData.adcode = n.adcode, d.userData.value = n.value, d.userData.name = n.name, d.userData.position = [p.x, p.y, p.z], d;
          }, s = e.width || 7, o = e.height || 7, h = Math.max.apply(Math, t.map((n) => n.value));
          t.map((n, c) => {
            if (de(n.value)) {
              let p = n.value <= 0 ? 0.1 : o * (n.value / h), u = new v({
                color: new M(e.color || "#ffffff"),
                transparent: !0,
                opacity: r ? 0 : e.opacity,
                depthTest: !1,
                fog: !1
              });
              u.name = "bar-" + e.id, u.userData.opacity = e.opacity;
              const d = new V(0.05 * s, 0.05 * s, p);
              d.translate(0, 0, p / 2);
              const g = new S(d, u);
              g.renderOrder = 22, g.geometry.computeBoundsTree();
              let b = g, [x, w] = this.geoProjection(n.coords);
              b.position.set(x, -w, (this.depth + 0.46) / this.scale), r ? b.scale.set(1 / this.scale, 1 / this.scale, 0) : b.scale.set(1 / this.scale, 1 / this.scale, 1 / this.scale), b.userData.name = n.name, b.userData.adcode = n.adcode, b.userData.value = n.value, b.userData.position = [x, -w, (this.depth + 0.46) / this.scale];
              let G = this.createBarGuangQuan(e.bottom, r);
              if (G.position.set(x, -w, (this.depth + 0.46) / this.scale), G.userData.name = n.name, G.userData.adcode = n.adcode, G.userData.position = [x, -w, (this.depth + 0.46) / this.scale], G.name = "bar-" + e.id, this.barGuangQuanGroup.add(G), e.huiguang.show && p > 0) {
                let f = this.createBarHUIGUANG(p, e.huiguang);
                b.add(...f);
              }
              b.name = "bar-" + e.id, this.barGroup.add(b);
              let y = i(n, c, new j(x, -w, (this.depth + 0.9 + p) / this.scale));
              this.allBar.push(b), this.allBarMaterial.push(u), this.allBarGuangquan.push(G), this.allBarLabel.push(y);
            }
          }), this.setBarLabelStyle(e.label, e.id), this.barGroup.scale.set(this.scale, this.scale, this.scale), this.barGuangQuanGroup.scale.set(this.scale, this.scale, this.scale), this.barLabelGroup.scale.set(this.scale, this.scale, this.scale), this.mainSceneGroup.add(this.barGroup), this.mainSceneGroup.add(this.barGuangQuanGroup), this.mainSceneGroup.add(this.barLabelGroup), this.option.scene.defaultMapAdcode !== 1e5 && this.setBarScale();
        }
      } catch {
      }
  }
  cleanAllBar() {
    for (; this.barGroup.children.length; )
      this.barGroup.remove(this.barGroup.children[0]);
    for (; this.barGuangQuanGroup.children.length; )
      this.barGuangQuanGroup.remove(this.barGuangQuanGroup.children[0]);
    for (; this.barLabelGroup.children.length; )
      this.barLabelGroup.remove(this.barLabelGroup.children[0]);
    this.allBar = [], this.allBarLabel = [], this.allBarMaterial = [], this.allBarGuangquan = [];
  }
  createBarTimeLine() {
    const e = m.timeline();
    this.allBar.map((t, a) => {
      e.add(
        m.to(t.scale, {
          duration: 1,
          delay: 0.05 * a,
          x: 1 / this.scale,
          y: 1 / this.scale,
          z: 1 / this.scale,
          ease: "circ.out"
        }),
        "bar"
      );
    }), this.allBarMaterial.map((t, a) => {
      e.add(
        m.to(t, {
          duration: 0.5,
          delay: 0.05 * a,
          opacity: t.userData.opacity,
          ease: "circ.out"
        }),
        "bar"
      );
    }), this.allBarGuangquan.map((t, a) => {
      e.add(
        m.to(t.children[0].scale, {
          duration: 0.5,
          delay: 0.05 * a,
          x: 1 / this.scale,
          y: 1 / this.scale,
          z: 1 / this.scale,
          ease: "circ.out"
        }),
        "bar"
      ), e.add(
        m.to(t.children[1].scale, {
          duration: 0.5,
          delay: 0.05 * a,
          x: 1 / this.scale,
          y: 1 / this.scale,
          z: 1 / this.scale,
          ease: "circ.out"
        }),
        "bar"
      );
    }), this.allBarLabel.map((t) => {
      const a = t.element.querySelector(".bar-label .wrap");
      a.style.opacity = 0;
    }), this.allBarLabel.map((t, a) => {
      const r = t.element.querySelector(".bar-label .label"), i = t.element.querySelector(".bar-label .wrap"), s = Number(r.innerText), o = { score: 0 };
      if (e.add(
        m.to(r, {
          duration: 0.5,
          delay: 0.05 * a,
          opacity: 1,
          ease: "circ.out"
        }),
        "bar"
      ), e.add(
        m.to(i, {
          duration: 0.5,
          delay: 0.05 * a,
          opacity: 1,
          ease: "circ.out"
        }),
        "bar"
      ), s) {
        let h = function() {
          r.innerText = o.score.toFixed(0);
        };
        const n = m.to(o, {
          duration: 2,
          delay: 0.05 * a,
          score: s,
          onUpdate: h
        });
        e.add(n, "bar");
      }
    });
  }
  setBarLabelStyle(e, t) {
    e && (D(e.fontFamily), D(e.unitStyle.fontFamily), this.allBarLabel.map((a, r) => {
      if (a.name === "bar-" + t) {
        const i = a.element.querySelector(".bar-label.bar-" + t + " .wrap");
        e.show ? i.style.opacity = 1 : i.style.opacity = 0, i && (i.style.backgroundColor = e.bg.color, i.style.padding = `${e.bg.paddingW}px ${e.bg.paddingH}px`, i.style.borderRadius = e.bg.borderRadius + "px", i.style.borderWidth = e.bg.borderWidth + "px", i.style.borderColor = e.bg.borderColor, i.style.borderStyle = e.bg.borderStyle);
        const s = a.element.querySelector(".bar-label.bar-" + t + " .label");
        e.show ? s.innerText = s.innerText : s.innerText = "", s.style.fontSize = e.fontSize + "px", s.style.fontFamily = e.fontFamily, s.style.color = e.color;
        const o = a.element.querySelector(".bar-label.bar-" + t + " .unit");
        e.show && e.unitStyle.show ? o.innerText = o.innerText : o.innerText = "", o.style.fontSize = e.unitStyle.fontSize + "px", o.style.fontFamily = e.unitStyle.fontFamily, o.style.color = e.unitStyle.color;
      }
    }));
  }
  /** 柱状图缩放 */
  setBarScale() {
    const e = this.boundBox;
    this.barGroup.position.x = -e.center.x, this.barGroup.position.y = -e.center.y, this.barGuangQuanGroup.position.x = -e.center.x, this.barGuangQuanGroup.position.y = -e.center.y, this.barLabelGroup.position.x = -e.center.x, this.barLabelGroup.position.y = -e.center.y;
  }
  /** 创建柱状图辉光效果 */
  createBarHUIGUANG(e, t) {
    let a = new z(t.size, e);
    a.translate(0, e / 2, 0);
    const r = this.assets.instance.getResource("huiguang");
    r.colorSpace = "srgb", r.wrapS = k, r.wrapT = k;
    let i = new v({
      color: new M(t.color || "#ffffff"),
      map: r,
      transparent: !0,
      opacity: t.opacity,
      depthWrite: !1,
      side: C,
      blending: T
    }), s = new S(a, i);
    s.renderOrder = 23, s.rotateX(Math.PI / 2);
    let o = s.clone(), h = s.clone();
    return o.rotateY(Math.PI / 180 * 60), h.rotateY(Math.PI / 180 * 120), [s, o, h];
  }
  /** 创建柱状图底部光圈 */
  createBarGuangQuan(e, t) {
    const a = this.assets.instance.getResource("guangquan1"), r = this.assets.instance.getResource("guangquan2");
    let i = new z(e.width, e.height), s = new v({
      color: new M(e.color || "#ffffff"),
      map: a,
      alphaMap: a,
      opacity: e.opacity,
      transparent: !0,
      depthTest: !1,
      fog: !1,
      blending: T
    }), o = new v({
      color: new M(e.color || "#ffffff"),
      map: r,
      alphaMap: r,
      opacity: e.opacity,
      transparent: !0,
      depthTest: !1,
      fog: !1,
      blending: T
    }), h = new S(i, s), n = new S(i, o);
    h.renderOrder = 24, n.renderOrder = 24, n.position.z -= 1e-3, t ? (h.scale.set(0, 0, 0), n.scale.set(0, 0, 0)) : (h.scale.set(1 / this.scale, 1 / this.scale, 1 / this.scale), n.scale.set(1 / this.scale, 1 / this.scale, 1 / this.scale));
    const c = new L();
    return c.add(h, n), this.time.on("tick", (p) => {
      h.rotation.z += p * 2;
    }), c;
  }
  /** 设置柱状图移动 */
  setBarMove(e, t = "up") {
    this.allBar.map((a) => {
      a.userData.adcode === e && m.to(a.position, {
        duration: 0.3,
        z: t === "up" ? a.userData.position[2] + this.depth / 2 + 0.3 : a.userData.position[2]
      });
    });
  }
  /** 设置柱状图光圈移动 */
  setBarGuangQuanMove(e, t = "up") {
    this.allBarGuangquan.map((a) => {
      a.userData.adcode === e && m.to(a.position, {
        duration: 0.3,
        z: t === "up" ? a.userData.position[2] + this.depth / 2 + 0.3 : a.userData.position[2]
      });
    });
  }
  /** 设置柱状图标签移动 */
  setBarLabelMove(e, t = "up") {
    this.allBarLabel.map((a) => {
      a.userData.adcode === e && m.to(a.position, {
        duration: 0.3,
        z: t === "up" ? a.userData.position[2] + this.depth / 2 + 0.3 : a.userData.position[2]
      });
    });
  }
  /** 创建散点图 */
  createScatter(e, t = [], a = !0, r = !1) {
    if (!(!a && (t = this.datasource[e._sourceId], !t)) && (a || (this.scatterLabelGroup.remove(...this.scatterLabelGroup.children.filter((i) => i.name === "scatter-" + e.id)), this.allScatterLabel = this.allScatterLabel.filter((i) => i.name !== "scatter-" + e.id)), t && F(t) && t.length > 0))
      try {
        if (this.datasource[e._sourceId] = t, !e.isHide) {
          const i = (s, o, h) => {
            let n = e.format;
            try {
              const p = e.format.match(/\{(.*?)}/g);
              if (p)
                for (let u = 0; u < p.length; u++)
                  n = n.replaceAll(p[u], s[p[u].slice(1, -1)]);
            } catch {
            }
            let c = this.label3d.create("", "scatter-label scatter-" + e.id, e.follow);
            return c.init(
              `<div class="wrap">
                <span class="label">${n}</span>
                <img src="${e.map}" style="width:${e.width}px; height:${e.height}px;" >
              </div>`,
              h
            ), this.label3d.setLabelStyle(c, 0.08 / this.scale, "x"), e.rotation && (c.rotation.x = e.rotation[0] * (Math.PI / 180), c.rotation.y = e.rotation[1] * (Math.PI / 180), c.rotation.z = e.rotation[2] * (Math.PI / 180)), c.name = "scatter-" + e.id, c.setParent(this.scatterLabelGroup), c.userData.adcode = s.adcode, c.userData.scale = s, c.userData.name = s.name, c.userData.labelShow = e.label.show, c.userData.value = s.value, c.userData.position = [h.x, h.y, h.z], c;
          };
          t.map((s, o) => {
            let [h, n] = this.geoProjection([s.lng, s.lat]), c = i(s, o, new j(h, -n, this.depth / this.scale));
            this.allScatterLabel.push(c);
          }), this.setScatterLabelStyle(e.label, e.id), this.mainSceneGroup.add(this.scatterLabelGroup), this.scatterLabelGroup.scale.set(this.scale, this.scale, this.scale), this.option.scene.defaultMapAdcode !== 1e5 && this.setScatterScale();
        }
      } catch {
      }
  }
  setScatterLabelStyle(e, t) {
    e && (D(e.fontFamily), this.allScatterLabel.map((a, r) => {
      if (a.name === "scatter-" + t) {
        const i = a.element.querySelector(".scatter-label.scatter-" + t + " .wrap");
        e.show ? i.style.opacity = 1 : i.style.opacity = 0;
        const s = a.element.querySelector(".scatter-label.scatter-" + t + " .label");
        e.show ? s.innerText = s.innerText : s.innerText = "", s.style.left = e.left + "px", s.style.top = e.top + "px", s.style.fontSize = e.fontSize + "px", s.style.fontFamily = e.fontFamily, s.style.color = e.color, s.style.backgroundColor = e.bg.color, s.style.padding = `${e.bg.paddingW}px ${e.bg.paddingH}px`, s.style.borderRadius = e.bg.borderRadius + "px", s.style.borderWidth = e.bg.borderWidth + "px", s.style.borderColor = e.bg.borderColor, s.style.borderStyle = e.bg.borderStyle;
      }
    }));
  }
  setScatterScale() {
    const e = this.boundBox;
    this.scatterLabelGroup.position.x = -e.center.x, this.scatterLabelGroup.position.y = -e.center.y;
  }
  createScatterTimeLine() {
    const e = m.timeline();
    this.allScatterLabel.map((t) => {
      const a = t.element.querySelector(".scatter-label .wrap");
      a.style.opacity = 0;
    }), this.allScatterLabel.map((t, a) => {
      if (t.userData.labelShow) {
        const r = t.element.querySelector(".scatter-label .wrap");
        e.add(
          m.to(r, {
            duration: 0.5,
            delay: 0.05 * a,
            opacity: 1,
            ease: "circ.out"
          }),
          "scatter"
        );
      }
    });
  }
  cleanAllScatter() {
    for (; this.scatterLabelGroup.children.length; )
      this.scatterLabelGroup.remove(this.scatterLabelGroup.children[0]);
    this.allScatterLabel = [];
  }
  /** 设置柱状图标签移动 */
  setScatterLabelMove(e, t = "up") {
    this.allScatterLabel.map((a) => {
      a.userData.adcode === e && m.to(a.position, {
        duration: 0.3,
        z: t === "up" ? a.userData.position[2] + this.depth / 2 + 0.3 : a.userData.position[2]
      });
    });
  }
  // 创建飞线
  createFlyLine(e, t, a = !0, r = !1) {
    if (!(!a && (t = this.datasource[e._sourceId], !t)) && (a || (this.flyLineGroup.remove(...this.flyLineGroup.children.filter((i) => i.name === "flyline-" + e.id)), this.flyLineLabelGroup.remove(...this.flyLineLabelGroup.children.filter((i) => i.name === "flyline-" + e.id)), this.allFlyLine = this.allFlyLine.filter((i) => i.name !== "flyline-" + e.id), this.allFlyLineLabel = this.allFlyLineLabel.filter((i) => i.name !== "flyline-" + e.id)), t && F(t) && t.length > 0))
      try {
        if (this.datasource[e._sourceId] = t, !e.isHide) {
          const i = new R().load(e.texture);
          i.wrapS = i.wrapT = k, i.generateMipmaps = !1, i.magFilter = J, i.repeat.set(0.5, 1);
          let s = new ne(this, {
            data: t,
            option: e,
            texture: i,
            radius: e.radius / this.scale,
            speed: e.speed,
            middleHeight: e.middleHeight / this.scale,
            segments: e.segments,
            radialSegments: e.radialSegments,
            allFlyLine: this.allFlyLine,
            material: new v({
              map: i,
              alphaMap: i,
              color: new M(e.material.color),
              transparent: !0,
              opacity: r ? 0 : e.material.opacity,
              fog: !1,
              depthTest: !1,
              blending: T
            })
          });
          s.instance.name = "flyline-" + e.id, s.instance.position.z = (this.depth + 0.4) / this.scale, this.flyLineGroup.add(s.instance), this.setFlylineLabelStyle(e.label, e.id), this.flyLineGroup.scale.set(this.scale, this.scale, this.scale), this.flyLineLabelGroup.scale.set(this.scale, this.scale, this.scale), this.mainSceneGroup.add(this.flyLineGroup), this.mainSceneGroup.add(this.flyLineLabelGroup), this.option.scene.defaultMapAdcode !== 1e5 && this.setFlylineScale();
        }
      } catch {
      }
  }
  setFlylineLabelStyle(e, t) {
    e && (D(e.fontFamily), this.allFlyLineLabel.map((a, r) => {
      if (a.name === "flyline-" + t) {
        const i = a.element.querySelector(".flyline-label.flyline-" + t + " .wrap");
        e.show ? i.style.opacity = 1 : i.style.opacity = 0, i && (i.style.backgroundColor = e.bg.color, i.style.padding = `${e.bg.paddingW}px ${e.bg.paddingH}px`, i.style.borderRadius = e.bg.borderRadius + "px", i.style.borderWidth = e.bg.borderWidth + "px", i.style.borderColor = e.bg.borderColor, i.style.borderStyle = e.bg.borderStyle);
        const s = a.element.querySelector(".flyline-label.flyline-" + t + " .label");
        e.show ? s.innerText = s.innerText : s.innerText = "", s.style.fontSize = e.fontSize + "px", s.style.fontFamily = e.fontFamily, s.style.color = e.color;
      }
    }));
  }
  setFlylineScale() {
    const e = this.boundBox;
    this.flyLineGroup.position.x = -e.center.x, this.flyLineGroup.position.y = -e.center.y, this.flyLineLabelGroup.position.x = -e.center.x, this.flyLineLabelGroup.position.y = -e.center.y;
  }
  cleanAllFlyLine() {
    for (; this.flyLineGroup.children.length; )
      this.flyLineGroup.remove(this.flyLineGroup.children[0]);
    for (; this.flyLineLabelGroup.children.length; )
      this.flyLineLabelGroup.remove(this.flyLineLabelGroup.children[0]);
    this.allFlyLine = [], this.allFlyLineLabel = [];
  }
  createFlyLineTimeLine() {
    const e = m.timeline();
    this.allFlyLine.map((t, a) => {
      e.add(
        m.to(t.material, {
          duration: 0.2,
          opacity: 1,
          ease: "circ.out"
        }),
        "flyLine"
      );
    }), this.allFlyLineLabel.map((t) => {
      const a = t.element.querySelector(".flyline-label .wrap");
      a.style.opacity = 0;
    }), this.allFlyLineLabel.map((t, a) => {
      const r = t.element.querySelector(".flyline-label .wrap");
      e.add(
        m.to(r, {
          duration: 0.5,
          delay: 0.05 * a,
          opacity: 1,
          ease: "circ.out"
        }),
        "flyline"
      );
    });
  }
  createRegionalLevel(e, t, a = !0, r = !1) {
    try {
      if (!a && (t = this.datasource[e._sourceId], !t))
        return;
      a || this.areaMapGroup.children[0].children.forEach((i) => {
        i.remove(...i.children.filter((s) => s.name === "shapeGroup-" + e.id));
      }), t && F(t) && t.length > 0 && (this.datasource[e._sourceId] = t, e.isHide || oe(this.mapJsonData).features.forEach((s, o) => {
        const { name: h, adcode: n, parent: c } = s.properties, p = new L();
        p.name = "shapeGroup-" + e.id, s.geometry.coordinates.forEach((d) => {
          d.forEach((g, b) => {
            const x = new Z();
            for (let y = 0; y < g.length; y++) {
              if (!g[y][0] || !g[y][1])
                return !1;
              const [f, P] = this.geoProjection(g[y]);
              y === 0 && x.moveTo(f, -P), x.lineTo(f, -P);
            }
            const w = t.find((y) => y.name === h);
            let G = e.defaultColor;
            if (w)
              for (let y = 0; y < e.rules.length; y++) {
                const f = e.rules[y];
                w.value >= f.min && w.value <= f.max && (G = f.color || e.defaultColor);
              }
            try {
              const y = new K(me(x)), f = new S(y, new O({
                color: new M(G),
                transparent: !0,
                opacity: r ? 0 : e.opacity
              }));
              f.userData.depth = this.depth, f.userData.name = h, f.userData.adcode = n, f.userData.parent = c, f.userData.opacity = e.opacity, f.renderOrder = 20, f.name = "shapeArea", this.allRegionalLevel.push(f), p.add(f);
            } catch {
            }
          });
        }), p.position.set(0, 0, this.depth + 0.2);
        const u = this.areaMapGroup.getObjectByName("meshGroup" + o);
        if (u && u.children.length > 1) {
          const d = this.areaMapGroup.getObjectByName("meshGroup" + o);
          d && d.add(p);
        }
      }));
    } catch {
    }
  }
  createAllRegionalLevel() {
    this.areaMapGroup.children[0].children.forEach((e) => {
      e.remove(...e.children.filter((t) => t.name.includes("shapeGroup-")));
    });
  }
  createRegionalLevelTimeLine() {
    const e = m.timeline();
    this.allRegionalLevel.map((t, a) => {
      e.add(
        m.to(t.material, {
          duration: 0.5,
          delay: 2e-3 * a,
          opacity: t.userData.opacity,
          ease: "circ.out"
        }),
        "RegionalLevel"
      );
    });
  }
  handleMapMousedown(e) {
    if (e.preventDefault(), this.isMousedown = !0, !this.isMapAnimationSuccess) return;
    const t = new q(), a = new H(), r = this.renderer.instance.domElement.getBoundingClientRect();
    a.x = (e.clientX - r.left) / r.width * 2 - 1, a.y = -((e.clientY - r.top) / r.height) * 2 + 1, t.setFromCamera(a, this.camera.instance);
    let i = t.intersectObjects(this.scene.children, !0);
    i = i.filter((s) => s.object.name.includes("scatter-") || s.object.name.includes("bar-") || s.object.name.includes("flyline-") || s.object.name.includes("mapArea-")), i.length > 0 && i[0] ? this.clickMapObj = i[0] : this.clickMapObj = null;
  }
  handleMapMouseup(e) {
    if (e.preventDefault(), this.isMousedown = !1, !!this.isMapAnimationSuccess && this.clickMapObj) {
      if (this.clickMapObj.object.name.includes("scatter-") && this.clickMapObj.object.visible && this.onCallBack.onClickScatter(this.clickMapObj.object.userData), this.clickMapObj.object.name.includes("bar-") && this.clickMapObj.object.visible && this.onCallBack.onClickBar(this.clickMapObj.object.userData), this.clickMapObj.object.name.includes("flyline-") && this.clickMapObj.object.visible && this.onCallBack.onClickFlyline(this.clickMapObj.object.userData), this.clickMapObj.object.name.includes("mapArea-")) {
        let t = this.clickMapObj.object.userData;
        this.onCallBack.onLoadChild(t);
      }
      this.clickMapObj = null;
    }
  }
  handleHoverAreaMap(e) {
    if (e.preventDefault(), this.clickMapObj = null, !this.isMapAnimationSuccess) return;
    if (this.isMousedown) {
      this.hoverAreaMap && this.reset(this.hoverAreaMap.parent);
      return;
    }
    this.mouse.x = (e.clientX - this.clientRect.left) / this.clientRect.width * 2 - 1, this.mouse.y = -((e.clientY - this.clientRect.top) / this.clientRect.height) * 2 + 1, this.raycasterMousemove.setFromCamera(this.mouse, this.camera.instance);
    let t = this.raycasterMousemove.intersectObjects(this.areaMapGroup.children, !0);
    if (t = t.filter((a) => a.object.name.includes("mapArea-")), t.length > 0 && t[0] && t[0].object.name.includes("mapArea-")) {
      if (this.hoverAreaMap === null) {
        this.move(t[0].object.parent, t[0].object);
        return;
      }
      this.hoverAreaMap.name !== t[0].object.name && (this.reset(this.hoverAreaMap.parent), this.move(t[0].object.parent, t[0].object));
    } else
      this.hoverAreaMap && this.reset(this.hoverAreaMap.parent);
  }
  move(e, t) {
    try {
      const a = this.areaMapTopMaterial.clone();
      a.opacity = this.option.map.topMaterial.hoverOpacity || 1, e.children[0].material[0] = a;
      const r = e.getObjectByName("lineGroup");
      if (r && r.children && r.children[0]) {
        const i = this.provinceLineMaterial.clone();
        i.color = new M(this.option.map.hoverLineColor || this.option.map.lineColor || "#000000"), r.children[0].material = i;
      }
    } catch {
    }
    m.to(e.scale, { duration: 0.3, z: this.option.map.hoverDepth || 1.5 }), this.setAreaLabelMove(e.userData.adcode), this.setBarMove(e.userData.adcode), this.setBarGuangQuanMove(e.userData.adcode), this.setBarLabelMove(e.userData.adcode), this.setScatterLabelMove(e.userData.adcode), this.onCallBack.onAreaMouseover(t.userData), this.hoverAreaMap = t;
  }
  reset(e) {
    try {
      e.children[0].material[0] = this.areaMapTopMaterial;
      const t = e.getObjectByName("lineGroup");
      t && t.children && t.children[0] && (t.children[0].material = this.provinceLineMaterial);
    } catch {
    }
    m.to(e.scale, { duration: 0.3, z: 1 }), this.setAreaLabelMove(e.userData.adcode, "down"), this.setBarMove(e.userData.adcode, "down"), this.setBarGuangQuanMove(e.userData.adcode, "down"), this.setBarLabelMove(e.userData.adcode, "down"), this.setScatterLabelMove(e.userData.adcode, "down"), this.onCallBack.onAreaMouseout(this.hoverAreaMap.userData), this.hoverAreaMap = null;
  }
  update() {
    super.update();
  }
  destroy() {
    try {
      super.destroy(), this.canvas.removeEventListener("mousedown", this.handleMapMousedown.bind(this), !1), this.canvas.removeEventListener("mouseup", this.handleMapMouseup.bind(this), !1), this.canvas.removeEventListener("mousemove", this.handleHoverAreaMap.bind(this), !1), this.label3d && this.label3d.destroy(), this.groundMirror && this.groundMirror.dispose(), this.toastLoading && this.toastLoading.destroy(), this.childMap && this.childMap.destroy();
    } catch {
    }
  }
}
export {
  et as World
};
