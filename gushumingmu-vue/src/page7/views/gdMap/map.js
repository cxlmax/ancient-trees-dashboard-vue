import {
  Fog,
  Group,
  MeshBasicMaterial,
  DirectionalLight,
  AmbientLight,
  Vector3,
  CylinderGeometry,
  MeshLambertMaterial,
  LineBasicMaterial,
  Color,
  MeshStandardMaterial,
  ShaderMaterial,
  PlaneGeometry,
  Mesh,
  DoubleSide,
  RepeatWrapping,
  SRGBColorSpace,
  AdditiveBlending,
  TubeGeometry,
  QuadraticBezierCurve3,
  Sprite,
  SpriteMaterial,
  EdgesGeometry,
  LineSegments,
  MathUtils,
} from "three";
import {
  Mini3d,
  ExtrudeMap,
  BaseMap,
  Line,
  Label3d,
  Label2d,
  Plane,
  Debug,
  RippleShader,
  GradientShader,
  Focus,
  HeatMap,
  emptyObject,
  InteractionManager,
  getBoundBox,
} from "@/mini3d";
import stats from "three/examples/jsm/libs/stats.module";
import { geoMercator } from "d3-geo";
import pointIcon from "@/assets/texture/point-icon.svg";
import cityData from "./map/cityData";
import barData from "./map/barData";
import scatterData from "./map/scatter";
import gsap from "gsap";
import emitter from "@/utils/emitter";
import { sleep } from "@/utils";
import { useToast } from "vue-toastification";
const showToast = useToast();
function sortByValue(data) {
  data.sort((a, b) => b.value - a.value);
  return data;
}
export class World extends Mini3d {
  constructor(canvas, assets, worldConfig) {
    super(canvas);
    this.sizes.pixelRatio = 1;
    this.renderer.resize();
    this.debug = new Debug(worldConfig.debug);
    // 中心坐标
    this.geoProjectionCenter = worldConfig.geoProjectionCenter || [
      120.109913, 29.181466,
    ];
    // 缩放比例
    this.geoProjectionScale = worldConfig.geoProjectionScale || 90;
    // 飞线中心
    this.flyLineCenter = worldConfig.flyLineCenter || [
      120.20341805, 30.23969507,
    ];
    // 地图拉伸高度
    this.depth = worldConfig.depth;
    // 雾
    // this.scene.fog = new Fog(0x000000, 1, 50);
    // 背景
    // this.scene.background = new Color(0x000000);
    this.renderer.instance.setClearColor(0x000000, 0);
    // 相机初始位置
    this.camera.instance.position.set(
      -13.767695123014105,
      12.990152163077308,
      39.28228164159694
    );
    this.camera.instance.near = 1;
    this.camera.instance.far = 10000;
    this.camera.controls.enabled = false;

    // 创建交互管理
    this.interactionManager = new InteractionManager(
      this.renderer.instance,
      this.camera.instance,
      this.canvas
    );

    this.assets = assets;
    // 创建环境光
    this.initEnvironment();
    this.init();
  }
  init() {
    this.focusMapGroup = new Group();
    // 点位组
    this.pointGroup = new Group();
    this.pointGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.pointGroup);

    // 路径组
    this.trackGroup = new Group();
    this.trackGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.trackGroup);

    // 路径点标签组
    this.pathLabelGroup = new Group();
    this.pathLabelGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.pathLabelGroup);

    // 区域名称标签组
    this.labelGroup = new Group();
    this.labelGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.labelGroup);

    // bar 标签组
    this.barLabelGroup = new Group();
    this.barLabelGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.barLabelGroup);
    // 热力图
    this.hotmapGroup = new Group();
    this.scene.add(this.hotmapGroup);
    //
    this.label3d = new Label3d(this);
    this.label2d = new Label2d(this);
    // 飞线焦点光圈组
    this.flyLineFocusGroup = new Group();
    this.flyLineFocusGroup.visible = true;
    this.flyLineFocusGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.flyLineFocusGroup);
    // 区域事件元素
    this.eventElement = [];
    // 鼠标移上移除的材质
    this.defaultMaterial = null; // 默认材质
    this.defaultLightMaterial = null; // 高亮材质

    // 柱状图数据
    const barGroup = new Group();
    this.barGroup = barGroup;
    this.scene.add(barGroup);
    this.allBar = [];
    this.allBarMaterial = [];
    this.allBarLabel = [];
    this.allGuangquan = [];
    // 飞线纹理
    this.flylineTexture = this.assets.instance.getResource("mapFlyline");
    // 创建底部背景
    this.createBottomBg();
    // 旋转圆环
    this.createRotateBorder();
    // 创建标签
    this.createLabel();
    // 创建地图
    this.createMap();
    // 创建面发光贴图
    this.createFaceGlow();
    // 创建扩散
    this.createDiffuse();
    // 创建飞线焦点
    this.createFocus();
    // 创建散点图
    this.createScatter();
    // 创建轮廓
    this.createStorke();
    // 创建上升粒子
    this.createPark();
    // 创建事件
    this.createEvent();
    // this.time.on("tick", () => {
    //   console.log(this.camera.instance.position);
    // });
    // 创建动画时间线
    let tl = gsap.timeline({
      onComplete: () => {},
    });
    tl.pause();
    this.animateTl = tl;
    tl.addLabel("focusMap", 1.5);
    tl.addLabel("focusMapOpacity", 2);
    tl.addLabel("bar", 3);
    tl.to(this.camera.instance.position, {
      duration: 2,
      x: 2.0398,
      y: 15.1629,
      z: 16.3394,
      ease: "circ.out",
      onComplete: () => {
        emitter.$emit("mapPlayComplete");
        this.limitCamera();
      },
    });
  }
  // 限制相机范围
  limitCamera() {
    this.camera.controls.enabled = true;
    this.camera.controls.maxPolarAngle = Math.PI / 2.2;
    this.camera.controls.minDistance = 1;
    this.camera.controls.maxDistance = 50;
  }
  initEnvironment() {
    let sun = new AmbientLight(0xffffff, 5);
    this.scene.add(sun);
    let directionalLight = new DirectionalLight(0xffffff, 5);
    directionalLight.position.set(-30, 6, -8);
    directionalLight.castShadow = true;
    directionalLight.shadow.radius = 20;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    this.scene.add(directionalLight);
  }
  // 创建地图
  createMap() {
    let mapGroup = new Group();
    let focusMapGroup = this.focusMapGroup;
    let { map, mapTop, mapLine, mapLineBlack } = this.createProvince();

    map.setParent(focusMapGroup);
    mapTop.setParent(focusMapGroup);
    mapLine.setParent(focusMapGroup);
    this.mapLine = mapLine;
    // console.log(getBoundBox(map.mapGroup));

    mapGroup.add(focusMapGroup);
    mapGroup.rotation.x = -Math.PI / 2;
    mapGroup.position.set(0, 0.05, 0);
    this.scene.add(mapGroup);
  }

  createProvince() {
    let mapStrokeData = this.assets.instance.getResource("mapStroke");
    let mapJsonData = this.assets.instance.getResource("mapJson");
    // 贴图的比例，必须跟地图的大小保持一致
    let faceTexture = this.assets.instance.getResource("face");
    faceTexture.colorSpace = SRGBColorSpace;
    faceTexture.wrapS = RepeatWrapping;
    faceTexture.wrapT = RepeatWrapping;
    let params = { scale: 1, x: 0, y: 0 };
    faceTexture.repeat.set(params.scale, params.scale);
    faceTexture.offset.set(params.x, params.y);
    if (this.debug.active) {
      const folder = this.debug.instance.addFolder("face");

      folder.add(params, "scale", 0, 1, 0.001).onChange((v) => {
        let val = Number(v);
        faceTexture.repeat.set(val, val);
      });
      folder.add(faceTexture.offset, "x", 0, 2, 0.001);
      folder.add(faceTexture.offset, "y", 0, 2, 0.001);
    }
    let [topMaterial, sideMaterial] = this.createProvinceMaterial();
    this.focusMapTopMaterial = topMaterial;
    this.focusMapSideMaterial = sideMaterial;
    let map = new ExtrudeMap(this, {
      geoProjectionCenter: this.geoProjectionCenter,
      geoProjectionScale: this.geoProjectionScale,
      position: new Vector3(0, 0, 0.11),
      data: mapStrokeData,
      depth: this.depth,
      merge:true,
      topFaceMaterial: topMaterial,
      sideMaterial: sideMaterial,
      renderOrder: 9,
    });
    let faceMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      map: faceTexture,
      transparent: true,
      opacity: 1,
      fog: false,
    });

    this.defaultMaterial = faceMaterial;
    this.defaultLightMaterial = this.defaultMaterial.clone();
    this.defaultLightMaterial.opacity = 0.8;

    let mapTop = new BaseMap(this, {
      geoProjectionCenter: this.geoProjectionCenter,
      geoProjectionScale: this.geoProjectionScale,
      position: new Vector3(0, 0, this.depth + 0.22),
      data: mapJsonData,
      material: faceMaterial,
      renderOrder: 2,
    });
    let { boxSize, box3 } = getBoundBox(mapTop.mapGroup);
    // console.log(getBoundBox(mapTop.mapGroup));

    mapTop.mapGroup.children.map((group) => {
      group.children.map((mesh) => {
        // 添加事件元素
        this.eventElement.push(mesh);
        this.calcUv(
          mesh.geometry,
          boxSize.x,
          boxSize.y,
          box3.min.x,
          box3.min.y
        );
      });
    });
    this.mapLineMaterial = new LineBasicMaterial({
      color: 0x0695e7,
      opacity: 1,
      transparent: true,
      fog: false,
    });
    let mapLine = new Line(this, {
      geoProjectionCenter: this.geoProjectionCenter,
      geoProjectionScale: this.geoProjectionScale,
      data: mapJsonData,
      material: this.mapLineMaterial,
      type: "Line3",
      tubeRadius: 0.01,
      renderOrder: 3,
    });
    mapLine.lineGroup.position.z += this.depth + 0.23;

    
    return {
      map,
      mapTop,
      mapLine,
    };
  }
  /**
   * 重新计算每块的UV
   */
  calcUv(geometry, width, height, minX, minY) {
    const positionAttribute = geometry.attributes.position;
    const uvAttribute = geometry.attributes.uv;

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);

      const u = (x - minX) / width;
      const v = (y - minY) / height;

      uvAttribute.setXY(i, u, v);
    }
    uvAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  }
  createProvinceMaterial() {
    let topMaterial = new MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      fog: false,
      side: DoubleSide,
    });

    let sideMap = this.assets.instance.getResource("side");
    sideMap.flipY = false;
    sideMap.colorSpace = SRGBColorSpace;
    sideMap.wrapS = RepeatWrapping;
    sideMap.wrapT = RepeatWrapping;
    sideMap.repeat.set(1, 1.8);
    let sideMaterial = new MeshBasicMaterial({
      // color: 0x3ce0ff,
      map: sideMap,
      fog: false,
      opacity: 1,
      side: DoubleSide,
    });

    return [topMaterial, sideMaterial];
  }

  createFaceGlow() {
    let faceGlow = this.assets.instance.getResource("faceGlow");
    faceGlow.colorSpace = SRGBColorSpace;
    faceGlow.wrapS = faceGlow.wrapT = RepeatWrapping;
    let geometry = new PlaneGeometry(15.78, 12.06);
    let material = new MeshBasicMaterial({
      map: faceGlow,
      transparent: true,
      // side: DoubleSide,
      depthWrite: false,
      depthTest: false,
      fog: false,
    });
    let mesh = new Mesh(geometry, material);
    mesh.renderOrder = 30;
    this.focusMapGroup.add(mesh);

    let params = {
      x: 0.3,
      y: -0.58,
      z: 0.53,
      scale: 1.145,
    };
    mesh.position.set(params.x, params.y, params.z);
    mesh.scale.setScalar(params.scale);
    if (this.debug.active) {
      const folder = this.debug.instance.addFolder("faceGlow");

      folder.add(params, "x", -100, 100, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.x = val;
      });
      folder.add(params, "y", -100, 100, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.y = val;
      });
      folder.add(params, "z", -100, 100, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.z = val;
      });
      folder.add(params, "scale", 0, 1.5, 0.001).onChange((v) => {
        let val = Number(v);
        mesh.scale.setScalar(val);
      });
    }
  }

  /**
   * 创建柱状图
   * @param {*} _data 传入的数据
   */
  createBar(_data) {
    let self = this;
    let data = sortByValue(barData);
    if (_data) {
      data = sortByValue(_data);
    }
    const barGroup = this.barGroup;
    const factor = 0.7;
    const height = 3.0 * factor;
    const max = data[0].value;

    data.map((item, index) => {
      let geoHeight = height * (item.value / max);
      let material = new MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        depthTest: false,
        fog: false,
      });
      new GradientShader(material, {
        uColor1: index > 0 ? 0x50bbfe : 0xfbdf88,
        uColor2: 0xfffef4,
        size: geoHeight,
        dir: "z",
      });
      let radius = 0.08 * factor;

      const geo = new CylinderGeometry(radius, radius, geoHeight);
      geo.translate(0, geoHeight / 2, 0);
      const mesh = new Mesh(geo, material);
      mesh.castShadow = true;
      mesh.rotation.x = Math.PI / 2;
      mesh.renderOrder = 5;
      mesh.name = item.name + "-bar";
      let areaBar = mesh;
      let [x, y] = this.geoProjection(item.centroid);
      areaBar.position.set(x, -y, this.depth + 0.45);
      areaBar.scale.set(1, 0, 1);
      // 创建圈
      let guangquan = new RippleShader(this, {
        size: 1.5,
        color: index > 0 ? 0x50bbfe : 0xfbdf88,
      });
      guangquan.renderOrder = 50;
      guangquan.position.set(x, -y, this.depth + 0.45);
      guangquan.traverse((obj) => {
        obj.renderOrder = 51;
        obj.rotation.x = Math.PI / 2;
      });
      this.barGroup.add(guangquan);
      barGroup.add(areaBar);
      barGroup.rotation.x = -Math.PI / 2;
      let barLabel = labelStyle04(
        item,
        index,
        new Vector3(x, -y, this.depth + 0.8 + geoHeight)
      );
      this.allBar.push(areaBar);
      this.allBarMaterial.push(material);
      this.allBarLabel.push(barLabel);
      this.allGuangquan.push(guangquan);
    });

    function labelStyle04(data, index, position) {
      let label = self.label2d.create("", "bar-label", false);
      label.name = data.name + "-barLabel";
      label.init(
        `<div class="bar-label-wrap ${index === 0 ? "cyan" : ""}" >
        <div class="bar-label-icon"><img src="${pointIcon}"></div>
          <div class="bar-label-number">
            ${data.value}<span class="unit">次</span>
          </div>
        </div>`,
        position
      );
      label.setParent(self.labelGroup);

      return label;
    }

    this.barAnimate();
  }
  // 删除柱状图数据
  clearBar() {
    this.allBarLabel.map((label) => {
      label.parent.remove(label);
    });
    emptyObject(this.barGroup);
    this.allBar = [];
    this.allBarMaterial = [];
    this.allBarLabel = [];
  }
  async barAnimate() {
    await sleep(500);
    this.allBar.map((item, index) => {
      gsap.to(item.scale, {
        duration: 1,
        delay: 0.1 * index,
        x: 1,
        y: 1,
        z: 1,
        ease: "circ.out",
      });
    });
    this.allBarMaterial.map((item, index) => {
      gsap.to(item, {
        duration: 1,
        delay: 0.1 * index,
        opacity: 1,
        ease: "circ.out",
      });
    });

    this.allBarLabel.map((item, index) => {
      let element = item.element.querySelector(".bar-label-wrap");

      gsap.to(element, {
        duration: 1,
        delay: 0.2 * index,
        translateY: 0,
        opacity: 1,
        ease: "circ.out",
      });
    });
  }
  createEvent() {
    let objectsHover = [];
    const reset = (mesh) => {
      mesh.traverse((obj) => {
        if (obj.isMesh) {
          obj.material = this.defaultMaterial;
        }
      });
    };
    const move = (mesh) => {
      mesh.traverse((obj) => {
        if (obj.isMesh) {
          obj.material = this.defaultLightMaterial;
        }
      });
    };
    this.eventElement.map((mesh) => {
      this.interactionManager.add(mesh);
      mesh.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log(event.target.userData.name);
      });
      mesh.addEventListener("mouseover", (event) => {
        if (!objectsHover.includes(event.target.parent)) {
          objectsHover.push(event.target.parent);
        }
        document.body.style.cursor = "pointer";

        move(event.target.parent);
      });

      mesh.addEventListener("mouseout", (event) => {
        objectsHover = objectsHover.filter(
          (n) => n.userData.name !== event.target.parent.userData.name
        );
        if (objectsHover.length > 0) {
          const mesh = objectsHover[objectsHover.length - 1];
        }
        reset(event.target.parent);
        document.body.style.cursor = "default";
      });
    });
  }

  // 创建扩散
  createDiffuse() {
    let texture = this.assets.instance.getResource("diffuse");
    texture.colorSpace = SRGBColorSpace;
    texture.wrapS = texture.wrapT = RepeatWrapping;

    let geometry = new PlaneGeometry(15, 15);
    let material = new MeshBasicMaterial({
      color: 0x002d40,
      map: texture,
      transparent: true,
      opacity: 1,
      fog: true,
      blending: AdditiveBlending,
    });

    let mesh = new Mesh(geometry, material);
    mesh.renderOrder = 3;
    mesh.rotation.x = -Math.PI / 2;
    mesh.scale.set(0, 0, 0);
    mesh.position.set(0, 0.21, 0);
    this.scene.add(mesh);
    let params = { scale: 0 };
    mesh._s = 0;
    this.time.on("tick", (delta, elapsedTime) => {
      // 缩放值增加
      mesh._s += 0.01;
      mesh.scale.setScalar(mesh._s);
      // 缩放至大于1的时候，透明度逐渐变为0
      if (mesh._s >= 1) {
        mesh.material.opacity = 1 - (mesh._s - 1);
      } else {
        mesh.material.opacity = 1;
      }
      // 缩放至大于等于2的时候，缩放至归0
      if (mesh._s >= 5) {
        mesh._s = 0;
      }
    });
  }

  createBottomBg() {
    let geometry = new PlaneGeometry(16, 9.125);
    const texture = this.assets.instance.getResource("bg");
    texture.colorSpace = SRGBColorSpace;
    // texture.anisotropy = 8;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1, 1);
    let material = new MeshBasicMaterial({
      map: texture,
      opacity: 1,
      // fog: false,
    });
    let mesh = new Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    let params = { scale: 2.64, x: 0.43, y: -0.01, z: -0.41 };
    mesh.position.set(params.x, params.y, params.z);
    mesh.scale.setScalar(params.scale);
    this.scene.add(mesh);
    if (this.debug.active) {
      const folder = this.debug.instance.addFolder("bg");

      folder.add(params, "x", -10, 10, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.x = val;
      });
      folder.add(params, "y", -10, 10, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.y = val;
      });
      folder.add(params, "z", -10, 10, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.position.z = val;
      });
      folder.add(params, "scale", 1, 10, 0.01).onChange((v) => {
        let val = Number(v);
        mesh.scale.setScalar(val);
      });
    }
  }

  createLabel() {
    let self = this;
    let labelGroup = this.labelGroup;
    let label3d = this.label3d;
    cityData.map((province) => {
      let label = labelStyle01(province, label3d, labelGroup);
    });

    function labelStyle01(province, label3d, labelGroup) {
      let label = label3d.create("", "province-label", false);
      label.name = province.name + "-provinceLabel";
      const [x, y] = self.geoProjection(province.center);
      label.init(
        `<div class="name">${province.name}</div>`,
        new Vector3(x, -y, self.depth * 2 + 0.1)
      );
      label3d.setLabelStyle(label, 0.01, "x", MathUtils.degToRad(0));
      label.setParent(labelGroup);
      return label;
    }
  }
  createCircleQuan({
    width,
    speed,
    material,
    renderOrder,
    position = new Vector3(0, -0.005, 0),
  }) {
    let plane = new Plane(this, {
      width: width,
      needRotate: true,
      rotateSpeed: speed,
      material: material,
      position: position,
    });
    plane.instance.rotation.x = -Math.PI / 2;
    plane.instance.renderOrder = renderOrder;
    plane.instance.scale.set(1, 1, 1);
    plane.setParent(this.scene);
    return plane.instance;
  }
  createRotateBorder() {
    let quan1Texture = this.assets.instance.getResource("quan1");
    let quan2Texture = this.assets.instance.getResource("quan2");
    let quan3Texture = this.assets.instance.getResource("quan3");
    quan1Texture.colorSpace =
      quan2Texture.colorSpace =
      quan3Texture.colorSpace =
        SRGBColorSpace;
    let material1 = new MeshBasicMaterial({
      map: quan1Texture,
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      fog: false,
      blending: AdditiveBlending,
    });
    let material2 = new MeshBasicMaterial({
      map: quan2Texture,
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      fog: false,
      blending: AdditiveBlending,
    });
    let material3 = new MeshBasicMaterial({
      color: 0x00d4ff,
      map: quan3Texture,
      transparent: true,
      depthWrite: false,
      opacity: 0.1,
      fog: false,
      blending: AdditiveBlending,
    });

    let quan1 = this.createCircleQuan({
      width: 13,
      speed: -0.002,
      material: material1,
      renderOrder: 2,
    });
    let quan2 = this.createCircleQuan({
      width: 13,
      speed: 0.002,
      material: material2,
      renderOrder: 2,
    });
    let quan3 = this.createCircleQuan({
      width: 13,
      speed: 0.02,
      material: material3,
      renderOrder: 2,
    });

    this.rotateBorder1 = quan1;
    this.rotateBorder2 = quan2;
  }

  // 创建飞线
  createFlyLine(startData, endData) {
    this.flyLineGroup = new Group();
    this.scene.add(this.flyLineGroup);
    const texture = this.flylineTexture;
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.colorSpace = SRGBColorSpace;
    texture.repeat.set(0.5, 2);
    const tubeRadius = 0.02;
    const tubeSegments = 16;
    const tubeRadialSegments = 8;
    const closed = false;
    let [centerX, centerY] = this.geoProjection(startData.centroid);
    let centerPoint = new Vector3(centerX, -centerY, 0);
    const material = new MeshStandardMaterial({
      map: texture,
      transparent: true,
      fog: false,
      opacity: 1,
      depthTest: false,
      emissiveIntensity: 2,
      blending: AdditiveBlending,
    });
    const material2 = new MeshBasicMaterial({
      color: 0x00f7f5,
      transparent: true,
      fog: false,
      opacity: 0.05,
      depthTest: false,
      blending: AdditiveBlending,
    });

    endData.map((city, index) => {
      let [x, y] = this.geoProjection(city.centroid);
      let point = new Vector3(x, -y, 0);
      const center = new Vector3();
      center.addVectors(centerPoint, point).multiplyScalar(0.5);
      center.setZ(1.5);
      const curve = new QuadraticBezierCurve3(centerPoint, center, point);
      const tubeGeometry = new TubeGeometry(
        curve,
        tubeSegments,
        0.08,
        2,
        closed
      );
      const tubeGeometry2 = new TubeGeometry(
        curve,
        tubeSegments,
        tubeRadius,
        tubeRadialSegments,
        closed
      );
      const mesh = new Mesh(tubeGeometry, material);
      const mesh2 = new Mesh(tubeGeometry2, material2);
      mesh.name = "flylineMesh1-" + index;
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(0, this.depth + 0.44, 0);
      mesh.renderOrder = 21;
      if (index % 2 === 0) {
        mesh.material = mesh.material.clone();
        mesh.material.color = new Color(0xff0000);
      }
      mesh2.name = "flylineMesh2-" + index;
      mesh2.rotation.x = -Math.PI / 2;
      mesh2.position.set(0, this.depth + 0.44, 0);
      mesh2.renderOrder = 20;
      this.flyLineGroup.add(mesh, mesh2);
    });
  }
  // 清空飞线
  clearFlyLine() {
    emptyObject(this.flyLineGroup);
  }
  // 创建焦点
  createFocus() {
    let focusObj = new Focus(this, { color1: 0xbdfdfd, color2: 0xbdfdfd });
    let [x, y] = this.geoProjection(this.flyLineCenter);
    focusObj.position.set(x, -y, this.depth + 0.44);
    focusObj.scale.set(1, 1, 1);
    this.flyLineFocusGroup.add(focusObj);
  }
  // 销毁飞线 焦点
  destroyFlyFocus() {
    emptyObject(this.flyLineGroup);
    emptyObject(this.flyLineFocusGroup);
  }
  // 创建散点
  createScatter() {
    this.scatterGroup = new Group();
    this.scatterGroup.rotation.x = -Math.PI / 2;
    this.scene.add(this.scatterGroup);
    const texture = this.assets.instance.getResource("arrow");
    const material = new SpriteMaterial({
      map: texture,
      color: 0xfffef4,
      fog: false,
      transparent: true,
      depthTest: false,
    });
    let scatterAllData = sortByValue(scatterData);
    let max = scatterAllData[0].value;
    scatterAllData.map((data) => {
      const sprite = new Sprite(material);
      sprite.renderOrder = 23;
      let scale = 0.2 + (data.value / max) * 0.2;
      sprite.scale.set(scale, scale, scale);
      let [x, y] = this.geoProjection(data.centroid);
      sprite.position.set(x, -y, this.depth + 0.45);
      sprite.userData.position = [x, -y, this.depth + 0.45];
      this.scatterGroup.add(sprite);
    });
  }

  createStorke() {
    const mapStroke = this.assets.instance.getResource("mapStroke");
    const texture = this.assets.instance.getResource("pathLine3");
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(2, 1);

    let pathLine = new Line(this, {
      geoProjectionCenter: this.geoProjectionCenter,
      geoProjectionScale: this.geoProjectionScale,
      position: new Vector3(0, 0, this.depth + 0.24), //this.depth + 0.24
      data: mapStroke,
      material: new MeshBasicMaterial({
        color: 0x2bc4dc,
        // map: texture,
        // alphaMap: texture,
        fog: false,
        transparent: true,
        opacity: 1,
        blending: AdditiveBlending,
      }),
      type: "Line3",
      renderOrder: 22,
      tubeRadius: 0.03,
    });
    // 设置父级
    this.focusMapGroup.add(pathLine.lineGroup);
    // this.time.on("tick", () => {
    //   texture.offset.x += 0.005;
    // });
  }
  createPark() {
    let geometry = new PlaneGeometry(0.05, 3);
    const material = new ShaderMaterial({
      vertexShader: `

        varying vec2 vUv;

        void main(void) {
            vUv = uv;
            vec3 pos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }`,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 uColor1; 
        uniform vec3 uColor2; 
        void main(void) {
              
            vec3 color = mix(uColor2,uColor1,vUv.y*0.5);
            
            gl_FragColor = vec4(color,vUv.y);
        }`,
      side: DoubleSide,
      // wireframe:true,
      uniforms: {
        //随时间变化
        uTime: { value: 0.0 },
        //飞线颜色
        uColor1: { value: new Color("#00ffff") },
        uColor2: { value: new Color("#ffffff") },
      },
      //开启透明度
      transparent: true,
      depthTest: false,
      // blending:AdditiveBlending
    });
    let lines = [];
    for (let i = 0; i < 15; i++) {
      let x = MathUtils.randFloat(-15, 15);
      let y = MathUtils.randFloat(-10, 10);
      let z = MathUtils.randFloat(-15, 15);
      const line = new Mesh(geometry, material);
      line.renderOrder = 50;
      line.userData.y = y;
      line.position.set(x, y, z);
      this.scene.add(line);
      lines.push(line);
    }

    this.time.on("tick", (delta, elapsedTime) => {
      // material.uniforms.uTime.value = elapsedTime
      lines.forEach((line) => {
        line.position.y += 0.1;
        if (line.position.y > 20) {
          line.position.y = -Math.abs(line.userData.y);
        }
      });
    });
  }
  createPoint(data = []) {
    let pointGroup = this.pointGroup;
    const pointModel = this.assets.instance
      .getResource("pointModel")
      .scene.clone();
    const pointModelTexture2 =
      this.assets.instance.getResource("pointModelTexture2");
    pointModelTexture2.wrapS = pointModelTexture2.wrapT = RepeatWrapping;
    pointModelTexture2.colorSpace = SRGBColorSpace;
    pointModelTexture2.flipY = false;
    pointModel.traverse((obj) => {
      if (obj.isMesh) {
        if (obj.name.includes("平面")) {
          obj.material.depthTest = false;
          obj.material.color = new Color(0xfeaaf8);
          obj.material.blending = AdditiveBlending;
          obj.renderOrder = 70;
        }
        if (obj.name.includes("锥体")) {
          obj.material.transparent = true;
          obj.material.depthWrite = false;
          obj.renderOrder = 71;
          // 设置模型边线
          const edges = new EdgesGeometry(obj.geometry, 1);
          const edgesMaterial = new LineBasicMaterial({
            color: new Color(0xffffff),
            transparent: true,
            fog: false,
            blending: AdditiveBlending,
          });
          const line = new LineSegments(edges, edgesMaterial);
          obj.add(line);
        }
      }
    });
    data.map((item) => {
      const [x, y] = this.geoProjection(item.centroid);
      let point = pointModel.clone();
      point.rotation.x = Math.PI / 2;
      point.scale.set(0.26, 0.26, 0.26);
      point.position.set(x, -y, this.depth + 0.4);
      pointGroup.add(point);

      point.traverse((obj) => {
        if (obj.isMesh) {
          if (obj.name.includes("平面")) {
            gsap.to(obj.rotation, {
              y: -2 * Math.PI,
              duration: 5,
              repeat: -1,
              ease: "none",
            });
          }
          if (obj.name === "锥体") {
            if (item.level === "良好") {
              obj.material = obj.material.clone();
              obj.material.map = pointModelTexture2;
            }
            gsap.to(obj.rotation, {
              y: 2 * Math.PI,
              duration: 3,
              repeat: -1,
              ease: "none",
            });
            this.interactionManager.add(obj);
            obj.userData = item;
            // 添加事件
            obj.addEventListener("click", (event) => {
              event.stopPropagation();
              showToast(obj.userData.name);
            });
            obj.addEventListener("mouseover", (event) => {
              event.stopPropagation();
              document.body.style.cursor = "pointer";
            });

            obj.addEventListener("mouseout", (event) => {
              document.body.style.cursor = "default";
            });
          }
        }
      });
    });
  }

  //销毁点位
  destroyPoint() {
    // 移除事件
    this.pointGroup.traverse((obj) => {
      if (obj.isMesh && obj.name === "锥体") {
        this.interactionManager.remove(obj);
      }
    });
    emptyObject(this.pointGroup);
  }

  // 创建路径
  createPath(data) {
    // 路径
    const texture = this.assets.instance.getResource("pathLine").clone();
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(6, 1);
    // 组合路径数据
    const coordinates = JSON.stringify(data.coordinates);
    let pathData = `{
      "features": [
        {
            "properties": { "_draw_type": "line" },
            "geometry": {
              "type": "LineString",
              "coordinates": ${coordinates}
            }
        }
      ]
    }`;

    let pathLine = new Line(this, {
      geoProjectionCenter: this.geoProjectionCenter,
      geoProjectionScale: this.geoProjectionScale,
      position: new Vector3(0, 0, this.depth * 2 + 0.1),
      data: pathData,
      material: new MeshBasicMaterial({
        map: texture,
        fog: false,
        transparent: true,
        opacity: 1,
        depthTest: false,
        blending: AdditiveBlending,
      }),
      type: "Line3",
      renderOrder: 99,
      tubeRadius: 0.03,
    });
    pathLine.lineGroup.scale.set(1, 1, 1);
    // 左右两点
    // let start = this.geoProjection(data.startPoint.position);
    // let end = this.geoProjection(data.endPoint.position);

    this.trackGroup.add(pathLine.lineGroup);
    this.time.on("tick", () => {
      texture.offset.x -= 0.05;
    });

    this.createPathPointEvent(data.startPoint);
    this.createPathPointEvent(data.endPoint);
  }
  // 创建路径点的事件
  createPathPointEvent(pointInfo) {
    let [x, y] = this.geoProjection(pointInfo.position);
    let label = this.label2d.create("", "path-point-label");
    let typeClass =
      pointInfo.type === "start"
        ? "path-point-label-icon-start"
        : "path-point-label-icon-end";
    label.init(
      `
      <div class="path-point-label-wrap">
        <div class="path-point-label-icon ${typeClass}"></div>
        <div class="path-point-label-info">
          <div class="name">${pointInfo.name}</div>
          <div class="thumb">
          <img src="./assets/${pointInfo.thumb}.jpg" />
          </div>
          <div class="info">
            <div class="info-item">载重：${pointInfo.weight} 吨</div>
            <div class="info-item">车厢：${pointInfo.trainCarriageNum} 节</div>
            <div class="info-item">人员：${pointInfo.staffNum}人</div>
            <div class="info-item">货物：${pointInfo.goods}</div>
            <div class="info-item">承运：${pointInfo.carrierCompany}</div>
          </div>
        </div>
      </div>
      `,
      new Vector3(x, -y, this.depth * 2 + 0.2)
    );
    label.setParent(this.pathLabelGroup);
    label.element
      .querySelector(".path-point-label-icon")
      .addEventListener("click", () => {
        label.element
          .querySelector(".path-point-label-info")
          .classList.toggle("show");
        document.querySelectorAll(".path-point-label-info").forEach((item) => {
          if (item !== label.element.querySelector(".path-point-label-info")) {
            item.classList.remove("show");
          }
        });
      });
  }

  // 销毁路径
  destroyPath() {
    emptyObject(this.trackGroup);
    emptyObject(this.pathLabelGroup);
  }

  // 创建热力图
  createHeatmap() {
    // 获取热力点位数据
    const hotmapData = this.assets.instance.getResource("hotmapData");
    let pointData = JSON.parse(hotmapData);

    let { boxSize } = getBoundBox(this.focusMapGroup);
    let heatMapPlane = new HeatMap(this, {
      data: pointData,
      width: boxSize.x,
      height: boxSize.z,
      z: this.depth * 2,
    });
    this.hotmapGroup.add(heatMapPlane);
  }

  // 销毁热力图
  destroyHeatmap() {
    emptyObject(this.hotmapGroup);
  }
  geoProjection(args) {
    return geoMercator()
      .center(this.geoProjectionCenter)
      .scale(this.geoProjectionScale)
      .translate([0, 0])(args);
  }
  update(delta) {
    super.update(delta);
    this.interactionManager && this.interactionManager.update();
    if (this.allGuangquan.length) {
      this.allGuangquan.map((quan) => {
        quan.update(delta);
      });
    }
    if (this.flylineTexture) {
      this.flylineTexture.offset.x += 0.006;
    }
  }
  destroy() {
    super.destroy();
    this.label3d && this.label3d.destroy();
  }
}
