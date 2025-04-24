var k = Object.defineProperty;
var A = (S, y, e) => y in S ? k(S, y, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[y] = e;
var h = (S, y, e) => A(S, typeof y != "symbol" ? y + "" : y, e);
import { nanoid as x } from "nanoid";
import * as r from "three";
import T from "gsap";
import { textureCallout as F } from "./base64/Callout.mjs";
import { textureCalloutAperture as R } from "./base64/CalloutAperture.mjs";
import { innner as H } from "./base64/rotation/innner.mjs";
import { out as E } from "./base64/rotation/out.mjs";
import { textureLightColumn as _ } from "./base64/LightColumn.mjs";
import { Scene as D } from "./utils/scene.mjs";
import { ObtControls as O } from "./utils/controls/obt.mjs";
import { createComposer as I } from "./utils/composer.mjs";
import { DrawLine as B } from "./utils/line2.mjs";
import { createGradientLine as W, startAnimationGradientLine as $ } from "./utils/GradientLine.mjs";
import { tag2D as N } from "./utils/label.mjs";
class ae extends D {
  constructor(e, t) {
    super(e, t.sceneParameter);
    h(this, "group", new r.Group());
    h(this, "name");
    h(this, "mesh");
    h(this, "earth");
    h(this, "geometry");
    h(this, "material");
    h(this, "apertureName");
    h(this, "apertureSprite");
    h(this, "apertureMaterial");
    h(this, "cloudCoverName");
    h(this, "cloudCoverGeometry");
    h(this, "cloudCoverMaterial");
    h(this, "cloudCoverMesh");
    h(this, "starrySkyName");
    h(this, "starrySkyGeometry");
    h(this, "starrySkyPoints");
    h(this, "starrySkyMaterial");
    h(this, "flightLinesName");
    h(this, "flightLinesGroup");
    h(this, "lightBeamScatterName");
    h(this, "lightBeamScatterGroup");
    h(this, "scatterPoints", []);
    h(this, "rotationPoints", []);
    h(this, "lineCurve", []);
    h(this, "earthParameter");
    h(this, "apertureParameter");
    h(this, "cloudCoverParameter");
    h(this, "starrySkyParameter");
    h(this, "composerParameter");
    h(this, "gridHelperParameter");
    h(this, "axesHelperParameter");
    h(this, "ambientLightParameter");
    h(this, "directionalLightParameter");
    h(this, "animationGradientSegmentLine");
    h(this, "flyLineAnimation", { time: { value: 0 } });
    h(this, "starrySky");
    /**
    * Test Data
    * progress | velocity
    */
    h(this, "progress", 0);
    h(this, "velocity", 0.01);
    h(this, "composer");
    this.group.scale.set(0, 0, 0), this.name = "Earth", this.apertureName = "Aperture", this.cloudCoverName = "CloudCover", this.starrySkyName = "StarrySky", this.flightLinesName = "flightLinesName", this.earth = new r.Group(), this.apertureSprite = new r.Sprite(), this.earthParameter = t.earthParameter, this.apertureParameter = t.apertureParameter, this.cloudCoverParameter = t.cloudCoverParameter, this.starrySkyParameter = t.starrySkyParameter, this.composerParameter = t.composerParameter, this.gridHelperParameter = t.gridHelperParameter, this.axesHelperParameter = t.axesHelperParameter, this.ambientLightParameter = t.ambientLightParameter, this.directionalLightParameter = t.directionalLightParameter;
  }
  /** ********************************* 创建地球 START ******************************************** */
  async createEarth(e) {
    const t = this.earth.getObjectByName(this.name);
    return t && this.earth.remove(t), this.geometry = new r.SphereGeometry(
      e.radius * 0.1,
      e.subdivision,
      e.subdivision
    ), e.particle && this.earth.add(new r.Points(this.geometry, new r.PointsMaterial({
      color: e.particleColor,
      transparent: !0,
      size: e.particleSize / 100
    }))), this.material = new r.MeshStandardMaterial({
      map: this.textures.earthTexture,
      color: new r.Color(e.color),
      side: r.DoubleSide,
      transparent: e.transparent,
      opacity: e.opacity,
      wireframe: e.wireframe
    }), this.mesh = new r.Mesh(this.geometry, this.material), this.mesh.name = this.name, this.earth.add(this.mesh), this.earth.rotation.set(0, 3.6, 0), this.earth;
  }
  /** ********************************* 创建地图描边 START ******************************************** */
  async createMapBorder(e, t) {
    let o = e;
    e === "china" && (o = (await import("./geojson/china.mjs")).default), e === "china-border" && (o = (await import("./geojson/china-border.mjs")).default), e === "world" && (o = (await import("./geojson/world.mjs")).default);
    const a = new r.Group(), c = [];
    if (o.features.forEach((i) => {
      const s = new r.Group();
      if (s.name = "border" + i.properties.name, this.earthParameter.label && this.earthParameter.label.show && e === "china" && i.properties.center && i.properties.name) {
        const n = N(`<p style="color:${this.earthParameter.label.color};font-size:${this.earthParameter.label.fontSize}px;">${i.properties.name}</p>`);
        n.position.copy(this.coordinateTransform(i.properties.center[0], i.properties.center[1])), a.add(n);
      }
      i.geometry.coordinates.forEach((n) => {
        const u = [];
        n.forEach((l, p) => {
          if (l[p] instanceof Array) {
            const f = l.map((m) => this.coordinateTransform(m[0], m[1]));
            c.push(f), s.add(B(f, t));
          } else
            u.push(this.coordinateTransform(l[0], l[1]));
        }), u.length > 0 && s.add(B(u, t));
      }), a.add(s);
    }), t.wakeline) {
      const i = new r.CatmullRomCurve3(c[0]), { animations: s, mesh: n } = W(i, t.wakelineNumber);
      this.animationGradientSegmentLine = s, n.forEach((u) => {
        this.earth.add(u);
      });
    }
    return a.name = e, a;
  }
  /** ********************************* 创建光晕 START ******************************************** */
  async createAperture(e, t) {
    const o = this.scene.getObjectByName(this.apertureName);
    if (o && this.scene.remove(o), e.show)
      return this.apertureMaterial = new r.SpriteMaterial({
        map: new r.TextureLoader().load((await import("./base64/Aperture.mjs")).texture),
        transparent: e.transparent,
        color: new r.Color(e.color),
        opacity: e.opacity,
        depthWrite: e.depthWrite
      }), this.apertureSprite = new r.Sprite(this.apertureMaterial), this.apertureSprite.scale.set(
        t.radius * 0.1 * 3,
        t.radius * 0.1 * 3,
        1
      ), this.apertureSprite.name = this.apertureName, this.apertureSprite;
  }
  /** ********************************* 创建云层 START ******************************************** */
  async createCloudCover(e, t) {
    const o = this.earth.getObjectByName(this.cloudCoverName);
    if (o && this.earth.remove(o), e.show)
      return this.cloudCoverGeometry = new r.SphereGeometry(
        t.radius * 0.1 + 0.1,
        t.subdivision,
        t.subdivision
      ), this.cloudCoverMaterial = new r.MeshStandardMaterial({
        map: new r.TextureLoader().load((await import("./base64/CloudCover.mjs")).texture),
        color: new r.Color(e.color),
        side: r.DoubleSide,
        transparent: e.transparent,
        opacity: e.opacity,
        depthWrite: !1
      }), this.cloudCoverMesh = new r.Mesh(this.cloudCoverGeometry, this.cloudCoverMaterial), this.cloudCoverMesh.name = this.cloudCoverName, this.cloudCoverMesh;
  }
  /** ********************************* 创建星空 START ******************************************** */
  async createStarrySky(e) {
    const t = this.scene.getObjectByName(this.starrySkyName);
    if (t && this.scene.remove(t), e.show) {
      const o = [], a = [];
      this.starrySkyGeometry = new r.BufferGeometry();
      for (let c = 0; c < e.number; c++) {
        const i = new r.Vector3();
        i.x = Math.random() * 2 - 1, i.y = Math.random() * 2 - 1, i.z = Math.random() * 2 - 1, o.push(i.x, i.y, i.z);
        const s = new r.Color();
        s.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55), a.push(s.r, s.g, s.b);
      }
      return this.starrySkyGeometry.setAttribute(
        "position",
        new r.Float32BufferAttribute(o, 3)
      ), this.starrySkyGeometry.setAttribute(
        "color",
        new r.Float32BufferAttribute(a, 3)
      ), this.starrySkyMaterial = new r.PointsMaterial({
        map: new r.TextureLoader().load((await import("./base64/StarrySky.mjs")).texture),
        color: e.color,
        size: e.size,
        transparent: !0,
        opacity: e.opacity,
        vertexColors: !0,
        blending: r.AdditiveBlending,
        sizeAttenuation: !0
      }), this.starrySkyPoints = new r.Points(this.starrySkyGeometry, this.starrySkyMaterial), this.starrySkyPoints.name = this.starrySkyName, this.starrySkyPoints.scale.set(500, 500, 500), this.starrySkyPoints;
    }
  }
  /** ********************************* 创建航线 START ******************************************** */
  createFlightLines(e, t) {
    const o = this.earth.getObjectByName(this.flightLinesName);
    return o && this.earth.remove(o), this.flightLinesGroup = new r.Group(), this.flightLinesGroup.name = this.flightLinesName + x(), e.forEach((a) => {
      const c = this.coordinateTransform(a.coords[0][0], a.coords[0][1]), i = this.coordinateTransform(a.coords[1][0], a.coords[1][1]), s = this.createFlightLineBezierCurve(a, c, i, t.lineParameter, t.labelParameter), n = this.createScatterPoint("s->" + a.fromName, c, t.startScatterParameter), u = this.createScatterPoint("e->" + a.toName, i, t.endScatterParameter);
      this.flightLinesGroup.add(s, n, u);
    }), this.flightLinesGroup;
  }
  createFlightLineBezierCurve(e, t, o, a, c) {
    const [i, s, n, u] = this.getBezierCurveVCoords(
      t,
      o
    );
    if (c.show) {
      const m = N(`
                <p style="color:${c.color};font-size:${c.fontSize}px;">${e.fromName + " > " + e.toName}</p>
            `), v = new r.Vector3().copy(s).add(n).multiplyScalar(0.5);
      m.position.copy(v), this.flightLinesGroup.add(m);
    }
    const l = new r.CubicBezierCurve3(
      i,
      s,
      n,
      u
    );
    this.lineCurve.push(l);
    const p = l.getSpacedPoints(100), f = B(p, a);
    return f.name = e.fromName + "->" + e.toName, f;
  }
  /** ********************************* 创建飞线 START ******************************************** */
  async createFlyLines(e, t) {
    const o = this.earth.getObjectByName(this.flightLinesName);
    o && this.earth.remove(o), this.flightLinesGroup = new r.Group(), this.flightLinesGroup.name = this.flightLinesName + x();
    let a, c, i;
    for await (const s of e) {
      const n = this.coordinateTransform(s.coords[0][0], s.coords[0][1]), u = this.coordinateTransform(s.coords[1][0], s.coords[1][1]);
      if (!i)
        i = this.createFlyLineBezierCurve(s, n, u, t.lineParameter, t.labelParameter, t.bgLineParameter), this.flightLinesGroup.add(i);
      else {
        const l = i.clone(), [p, f, m, v] = this.getBezierCurveVCoords(
          n,
          u
        ), w = new r.CubicBezierCurve3(p, f, m, v).getPoints(1e3), z = new r.CatmullRomCurve3(w), G = t.bgLineParameter.radius, d = t.bgLineParameter.segments, g = new r.TubeGeometry(z, w.length * d, G, d, !1);
        l.getObjectByName("hollowTube").geometry = g;
        const L = new r.BufferGeometry().setFromPoints(w), M = w.length, b = new Float32Array(M);
        for (let C = 0; C < M; C += 1)
          b[C] = C / M;
        L.setAttribute("percent", new r.BufferAttribute(b, 1)), l.getObjectByName("line").geometry = L, this.flightLinesGroup.add(l);
      }
      if (t.labelParameter.show && this.flightLinesGroup.add(this.createFlyLine2DLabel(s, n, u, t.labelParameter)), !c)
        c = this.createScatterPoint("e->" + s.toName, u, t.endScatterParameter), this.flightLinesGroup.add(c);
      else {
        const l = c.clone();
        l.position.set(n.x, n.y, n.z), l.quaternion.setFromUnitVectors(
          new r.Vector3(0, 0, 1),
          new r.Vector3(n.x, n.y, n.z).normalize()
        ), this.flightLinesGroup.add(l);
      }
      if (!a)
        a = this.createScatterPoint("s->" + s.fromName, n, t.startScatterParameter), this.flightLinesGroup.add(a);
      else {
        const l = a.clone();
        l.position.set(n.x, n.y, n.z), l.quaternion.setFromUnitVectors(
          new r.Vector3(0, 0, 1),
          new r.Vector3(n.x, n.y, n.z).normalize()
        ), this.flightLinesGroup.add(l);
      }
    }
    return this.flightLinesGroup;
  }
  createFlyLineMaterial(e) {
    const t = {
      number: { value: e.number },
      speed: { value: e.speed },
      length: { value: e.length },
      size: { value: e.size },
      color: { value: e.color }
    };
    return new r.ShaderMaterial({
      uniforms: {
        time: this.flyLineAnimation.time,
        number: t.number,
        speed: t.speed,
        length: t.length,
        size: t.size,
        color: {
          value: t.color.value ? new r.Color(t.color.value) : new r.Color(Math.random(), Math.random(), Math.random())
        }
      },
      vertexShader: `
            attribute float percent;
            uniform float time;
            uniform float number;
            uniform float speed;
            uniform float length;
            varying float opacity;
            uniform float size;
        
            void main()
            {
                float l = clamp(1.0-length, 0.0, 1.0);
        
                gl_PointSize = clamp(fract(percent*number + l - time*number*speed)-l, 0.0, 1.) * size * (1./length);
        
                opacity = gl_PointSize/size;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,
      fragmentShader: `
            varying float opacity;
            uniform vec3 color;

            void main(){
                if (opacity <=0.2){
                    discard;
                }
                gl_FragColor = vec4(color, 1.0);
            }
            `,
      transparent: !0,
      blending: r.AdditiveBlending
    });
  }
  createFlyLineBezierCurve(e, t, o, a, c, i) {
    const s = new r.Group(), [n, u, l, p] = this.getBezierCurveVCoords(
      t,
      o
    ), m = new r.CubicBezierCurve3(n, u, l, p).getPoints(1e3);
    try {
      let d = function(g) {
        const L = new r.CatmullRomCurve3(g), M = i.radius, b = i.segments, C = new r.TubeGeometry(L, g.length * b, M, b, !1), V = new r.MeshStandardMaterial({
          color: i.color,
          opacity: i.opacity,
          transparent: !0,
          depthTest: !1
        });
        return new r.Mesh(C, V);
      };
      if (i.show) {
        const g = d(m);
        g && (g.name = "hollowTube", s.add(g));
      }
    } catch {
    }
    const v = new r.BufferGeometry().setFromPoints(m), P = m.length, w = new Float32Array(P);
    for (let d = 0; d < P; d += 1)
      w[d] = d / P;
    v.setAttribute("percent", new r.BufferAttribute(w, 1));
    const z = this.createFlyLineMaterial(a), G = new r.Points(v, z);
    return G.name = "line", s.add(G), s;
  }
  createFlyLine2DLabel(e, t, o, a) {
    const [c, i, s, n] = this.getBezierCurveVCoords(
      t,
      o
    );
    if (a.show) {
      const u = N(`
                    <p style="color:${a.color};font-size:${a.fontSize}px;">${e.fromName + " > " + e.toName}</p>
                `), l = new r.Vector3().copy(i).add(s).multiplyScalar(0.5);
      return u.position.copy(l), u;
    }
    return null;
  }
  /** ********************************* 创建散点 START ******************************************** */
  createScatterPoint(e, t, o) {
    const a = new r.Group();
    a.name = e, a.position.set(t.x, t.y, t.z), a.quaternion.setFromUnitVectors(
      new r.Vector3(0, 0, 1),
      new r.Vector3(t.x, t.y, t.z).normalize()
    );
    const c = this.createScatterPointMesh("in", F, o), i = this.createScatterPointMesh("out", R, o);
    return this.scatterPoints.push(i), a.add(c, i);
  }
  createScatterPointMesh(e, t, o) {
    const a = new r.TextureLoader().load(t), c = new r.PlaneGeometry(1, 1);
    c.rotateX(Math.PI);
    const i = new r.MeshStandardMaterial({
      color: o.color,
      opacity: o.opacity,
      map: a,
      transparent: !0,
      side: r.DoubleSide,
      depthWrite: !1
    }), s = new r.Mesh(c, i), n = (e === "out" ? 0.025 : 0.015) * o.size;
    return s.scale.set(n, n, n), e === "out" && (s.size = n, s._s = Math.random() * 1 + 1), s;
  }
  /** ********************************* 创建旋转点 START ******************************************** */
  createRotationPoint(e, t, o) {
    const a = new r.Group();
    a.name = e, a.position.set(t.x, t.y, t.z), a.quaternion.setFromUnitVectors(
      new r.Vector3(0, 0, 1),
      new r.Vector3(t.x, t.y, t.z).normalize()
    );
    const c = this.createRotationPointMesh("in", H, o), i = this.createRotationPointMesh("out", E, o);
    return this.rotationPoints.push(c), a.add(c, i);
  }
  createRotationPointMesh(e, t, o) {
    const a = new r.TextureLoader().load(t), c = new r.PlaneGeometry(1, 1);
    c.rotateX(Math.PI);
    const i = new r.MeshStandardMaterial({
      color: o.color,
      opacity: o.opacity,
      map: a,
      transparent: !0,
      side: r.DoubleSide,
      depthWrite: !1
    }), s = new r.Mesh(c, i), n = (e === "out" ? 0.02 : 0.015) * o.size;
    return s.scale.set(n, n, n), e === "out" && (s.size = n, s._s = Math.random() * 1 + 1), s;
  }
  /** ********************************* 创建光柱 START ******************************************** */
  async createLightBeamScatter(e, t) {
    const o = this.earth.getObjectByName(this.lightBeamScatterName);
    o && this.earth.remove(o), this.lightBeamScatterGroup = new r.Group(), this.lightBeamScatterGroup.name = this.lightBeamScatterName + x();
    for await (const a of e) {
      const c = this.coordinateTransform(a.value[0], a.value[1]), i = this.createRotationPoint(a.name, c, t.scatterParameter), s = this.createLightBeam(c, a.value[2], t.lightBeamParameter);
      this.earth.add(s), this.lightBeamScatterGroup.add(i);
    }
    return this.lightBeamScatterGroup;
  }
  createLightBeam(e, t, o) {
    const a = new r.Group(), c = t ? o.baseHeight * t : o.baseHeight;
    let i, s;
    if (o.type === 1) {
      const p = new r.TextureLoader().load(_);
      i = new r.PlaneGeometry(o.radius / 2, c), i.rotateX(Math.PI / 2), i.translate(0, 0, c / 2), s = new r.MeshStandardMaterial({
        map: p,
        color: o.color,
        opacity: o.opacity,
        transparent: !0,
        side: r.DoubleSide,
        depthWrite: !1
      });
    }
    o.type === 2 && (i = new r.BoxGeometry(0.05, c, 0.05), i.rotateX(Math.PI / 2), i.translate(0, 0, c / 2), s = new r.MeshBasicMaterial({
      color: o.color,
      opacity: o.opacity,
      transparent: !0,
      side: r.DoubleSide,
      depthWrite: !1
    }));
    const n = new r.Mesh(i, s);
    a.position.set(e.x, e.y, e.z), a.add(n, n.clone().rotateZ(Math.PI / 2));
    const u = new r.Vector3(e.x, e.y, e.z).normalize(), l = new r.Vector3(0, 0, 1);
    return a.quaternion.setFromUnitVectors(l, u), a;
  }
  moveOnCurve(e, t) {
    if (!(!e && !t)) if (this.progress <= 1 - this.velocity) {
      const o = e.getPointAt(this.progress), a = e.getPointAt(this.progress + this.velocity);
      if (o && a) {
        t.position.set(o.x, o.y, o.z);
        const c = a, i = 0, s = new r.Matrix4();
        s.lookAt(t.position, c, t.up), s.multiply(new r.Matrix4().makeRotationFromEuler(new r.Euler(0, i, 0)));
        const n = new r.Quaternion().setFromRotationMatrix(s);
        t.quaternion.slerp(n, 0.2);
      }
      this.progress += this.velocity;
    } else
      this.progress = 0;
  }
  /** ********************************* 场景渲染 START ******************************************** */
  render() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.starrySkyPoints && this.starrySkyParameter.animation && (this.starrySkyPoints.rotation.y += this.starrySkyParameter.animationSpeed), this.earth && this.earthParameter.animation && (this.earth.rotation.y += this.earthParameter.animationSpeed), this.cloudCoverMesh && this.cloudCoverParameter.animation && (this.cloudCoverMesh.rotation.y += this.cloudCoverParameter.animationSpeed), this.scatterPoints.length && this.scatterPoints.forEach((e) => {
        e._s += 4e-3, e.scale.set(e.size * e._s, e.size * e._s, e.size * e._s), e._s <= 1.5 ? e.material.opacity = (e._s - 1) * 2 : e._s > 1.5 && e._s <= 2 ? e.material.opacity = 1 - (e._s - 1.5) * 2 : e._s = 1;
      }), this.rotationPoints.length && this.rotationPoints.forEach((e) => {
        e.rotation.z += 0.01;
      }), this.stats && this.stats.update(), this.animationGradientSegmentLine && $(this.animationGradientSegmentLine), this.webGlRenderer.autoClear = !1, this.webGlRenderer.clear(), this.composerParameter.isComposer ? (this.composer.render(), this.webGlRenderer.clearDepth()) : this.webGlRenderer.render(this.scene, this.camera), this.labelRenderer.render(this.scene, this.camera), this.flyLineAnimation.time.value += 0.01, this.render();
    });
  }
  start() {
    return new Promise((e) => {
      this.loadTextures([{
        key: "earthTexture",
        value: this.earthParameter.texture
      }], () => {
        this.createEarth(this.earthParameter).then((i) => {
          this.add(i);
        }), this.createAperture(this.apertureParameter, this.earthParameter).then((i) => {
          this.add(i);
        }), this.createCloudCover(this.cloudCoverParameter, this.earthParameter).then((i) => {
          this.add(i);
        }), this.createStarrySky(this.starrySkyParameter).then((i) => {
          this.starrySky = i;
        });
        const t = this.createGridHelper(this.gridHelperParameter), o = this.createAxesHelper(this.axesHelperParameter), a = this.createAmbientLight(this.ambientLightParameter), c = this.createDirectionalLight(this.directionalLightParameter);
        this.add(t, o, a, c), this.scene.add(this.group), new O(this.camera, this.webGlRenderer).init(), this.composer = I(this.webGlRenderer, this.scene, this.camera, this.composerParameter.composer), this.render(), e(this);
      });
    });
  }
  /**
   * 进入
   */
  accessAnimation() {
    return new Promise((e) => {
      T.to(this.group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: "Quadratic",
        onComplete: () => {
          this.add(this.starrySky), e(!0);
        }
      });
    });
  }
  /** ********************************* 场景工具 START ******************************************** */
  add(...e) {
    e.forEach((t) => {
      t && this.group.add(t);
    });
  }
  coordinateTransform(e, t) {
    const o = (90 - t) * (Math.PI / 180), a = (90 + e) * (Math.PI / 180), c = new r.Spherical(this.earthParameter.radius * 0.1, o, a);
    return new r.Vector3().setFromSpherical(c);
  }
  getBezierCurveVCoords(e, t) {
    const o = e.angleTo(t) * 1.5 / Math.PI / 0.1, a = o * 0.4, c = o * o * 12, i = new r.Ray(new r.Vector3(0, 0, 0), e.clone().add(t.clone()).divideScalar(2)), s = i.at(
      c / i.at(1, new r.Vector3()).distanceTo(new r.Vector3(0, 0, 0)) + 1,
      new r.Vector3()
    ), n = e.clone().lerp(s, a / e.clone().distanceTo(s)), u = t.clone().lerp(s, a / t.clone().distanceTo(s));
    return [e, n, u, t];
  }
}
export {
  ae as Earth
};
