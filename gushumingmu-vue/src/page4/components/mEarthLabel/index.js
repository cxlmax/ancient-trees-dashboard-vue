import {
  Group,
  Vector3,
  DoubleSide,
  FileLoader,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  SpriteMaterial,
  Sprite,
  SRGBColorSpace,
  Raycaster,
  PlaneGeometry,
  AdditiveBlending,
  Fog,
  Color,
  BufferGeometry,
  BufferAttribute,
  Points,
  PointsMaterial
} from "three";
import * as THREE from "three";

import { Mini3d, Label3d } from "@/page4/mini3d";
import { Particles } from '../mini3d/components/Particles.js';
import { geoSphereCoord, generateGrid } from "./utils";

import pointIconBg from "./icon-bg.png";
import { Assets } from "./assets";


export class App extends Mini3d {
  constructor(canvas, config) {
    super(canvas, config);
    this.sizes.pixelRatio = 1
    this.onComplete = config.onComplete || function(){}
    this.renderer.resize()
    // 自动旋转
    this.camera.controls.autoRotate = true;
    this.camera.controls.autoRotateSpeed = 2;
    this.camera.controls.enableZoom = false;
    this.camera.controls.enablePan = false;
    this.camera.controls.enableRotate = false;
    this.guiParams = {
      dyColor: 0x155dbc, //动态光颜色
      fogColor: 0x05234e, //雾背景颜色
      earthColor: 0x00ebc4, //0x9facc1,//地球颜色
      earthPointColor: 0x1c3b6d, //外层地球点颜色
    };
    this.camera.instance.position.set(
      -37.761130667160806,
      225.31600026791556,
      -389.90872591076163
    );

    this.scene.fog = new Fog(new Color(this.guiParams.fogColor), 1, 1500);
    this.renderer.instance.setClearColor(0x000000, 0);
    // 射线拾取
    this.raycaster = new Raycaster();
    this.initScene();
  }

  async initScene() {
    this.initAssets(async () => {
      // 创建组
      this.sceneGroup = new Group();
      this.scene.add(this.sceneGroup);
      // 标签组
      this.labelGroup = new Group();
      this.sceneGroup.add(this.labelGroup);

      this.initEarth();
      // await this.initEarthPoint();
      this.initRing();
      // this.initGoguang();
      // this.initGoguang2();
      // this.initLabel();
      // 创建粒子系统
      this.createParticleSystem();
      // 射线检测
      this.checkIntersect();
      if(this.onComplete){
        this.onComplete()
      }
    });
  }

  // 创建粒子系统
  createParticleSystem() {
    // 创建自定义粒子系统
    this.createCustomParticles();
  }

  // 创建自定义无规则运动的粒子
  createCustomParticles() {
    console.log("创建粒子系统");
    
    // 粒子数量
    const particleCount = 200; // 增加粒子数量
    // 粒子范围
    const range = 400; // 减小范围，使粒子更集中
    
    // 创建几何体
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // 初始化粒子位置、速度和颜色
    for (let i = 0; i < particleCount; i++) {
      // 位置：在球体范围内随机分布
      const radius = range * 0.8 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // 速度：随机方向和大小
      velocities[i * 3] = (Math.random() - 0.5) * 0.1; // 增加速度
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
      
      // 颜色：从青色到蓝色的渐变，增加亮度
      const hue = 0.5 + Math.random() * 0.1; // 青色到蓝色范围
      const saturation = 0.8 + Math.random() * 0.2;
      const lightness = 0.7 + Math.random() * 0.3; // 增加亮度
      
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    // 设置几何体属性
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // 创建材质
    const material = new THREE.PointsMaterial({
      size: 15, // 增加粒子大小
      vertexColors: true,
      transparent: true,
      opacity: 0.8, // 增加不透明度
      blending: THREE.AdditiveBlending,
      depthTest: false,
      map: Particles.createTexture()
    });
    
    // 创建粒子系统
    this.particleSystem = new THREE.Points(geometry, material);
    
    // 将粒子系统放在地球附近
    this.particleSystem.position.set(0, 0, 0);
    
    // 添加到场景
    this.sceneGroup.add(this.particleSystem);
    
    console.log("粒子系统已添加到场景", this.particleSystem);
    
    // 添加更新函数
    this.time.on("tick", (delta, elapsedTime) => {
      this.updateParticles(delta, elapsedTime);
    });
  }
  
  // 更新粒子位置
  updateParticles(delta, elapsedTime) {
    if (!this.particleSystem) {
      console.log("粒子系统不存在");
      return;
    }
    
    try {
      const positions = this.particleSystem.geometry.attributes.position;
      const velocities = this.particleSystem.geometry.attributes.velocity;
      const count = positions.count;
      const range = 200; // 与创建时保持一致
      
      for (let i = 0; i < count; i++) {
        // 获取当前位置和速度
        let x = positions.getX(i);
        let y = positions.getY(i);
        let z = positions.getZ(i);
        
        let vx = velocities.getX(i);
        let vy = velocities.getY(i);
        let vz = velocities.getZ(i);
        
        // 添加随机扰动 - 增加扰动强度
        vx += (Math.random() - 0.5) * 0.01;
        vy += (Math.random() - 0.5) * 0.01;
        vz += (Math.random() - 0.5) * 0.01;
        
        // 限制速度
        const maxSpeed = 0.2; // 增加最大速度
        const speed = Math.sqrt(vx * vx + vy * vy + vz * vz);
        if (speed > maxSpeed) {
          vx = (vx / speed) * maxSpeed;
          vy = (vy / speed) * maxSpeed;
          vz = (vz / speed) * maxSpeed;
        }
        
        // 更新位置
        x += vx * delta * 60;
        y += vy * delta * 60;
        z += vz * delta * 60;
        
        // 边界检查：如果粒子超出范围，将其反弹或重置
        const distance = Math.sqrt(x * x + y * y + z * z);
        if (distance > range) {
          // 向中心方向施加力
          const factor = 0.9;
          x *= factor;
          y *= factor;
          z *= factor;
          
          // 反转速度方向
          vx *= -0.7;
          vy *= -0.7;
          vz *= -0.7;
        }
        
        // 更新位置和速度
        positions.setXYZ(i, x, y, z);
        velocities.setXYZ(i, vx, vy, vz);
      }
      
      // 标记需要更新
      positions.needsUpdate = true;
      velocities.needsUpdate = true;
      
      // 旋转整个粒子系统
      this.particleSystem.rotation.y += 0.003 * delta * 60; // 增加旋转速度
      
      // 缩放粒子系统大小，使其呼吸效果
      const scale = 1 + 0.05 * Math.sin(elapsedTime * 0.5);
      this.particleSystem.scale.set(scale, scale, scale);
      
    } catch (error) {
      console.error("更新粒子系统时出错:", error);
    }
  }
  initEarth() {

    let geometry = new SphereGeometry(50, 32, 32);
    let map = this.assets.getResource("earthBlue");
    map.colorSpace = SRGBColorSpace;
    let material = new MeshBasicMaterial({
      color: this.guiParams.earthColor,
      map: map,
      fog: false,
      transparent: true,
    });
    this.earthMaterial = material;
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
            varying vec3 vPosition;
            void main() {
            vPosition = position;
            `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
            varying vec3 vPosition;
            void main() {
            `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <opaque_fragment>",
        /* glsl */ `
              // 几何体的高度
              float geometryHeight = 200.0; 
              // 一半的位置
              float middleY = geometryHeight / 2.0;
              diffuseColor.a = 1.0;
              // 计算透明度
              // if (vPosition.y < middleY) {
              //     // 计算从中间到底部的透明度变化
              //     diffuseColor.a = mix(1.0, 0.0, (middleY - vPosition.y) / middleY);
              // }
              // diffuseColor.a = mix(1.0, 0.0, 1.0-vPosition.y/ 100.0);
              diffuseColor.a = 0.0; // 设置为完全透明
              gl_FragColor = vec4( outgoingLight,diffuseColor.a  );
              `
      );
    };
    let mesh = new Mesh(geometry, material);
    mesh.name = "earth";
    this.sceneGroup.add(mesh);
    this.time.on("tick", (delta, elapsedTime) => {
      mesh.rotation.y += delta * 0.05;
    });
  }
  initGoguang() {
    const highLight = this.assets.getResource("gaoguang");
    highLight.colorSpace = SRGBColorSpace;
    let material = new SpriteMaterial({
      color: 0x396ee0,
      map: highLight,
      transparent: true,
      fog: false,
      alphaMap: highLight,
      depthTest: false,
      blending: AdditiveBlending,
      opacity: 1,
    });

    let gaoguang = new Sprite(material);
    gaoguang.position.set(0, 0, 0);
    gaoguang.scale.set(100 * 2.5, 100 * 2.5, 0);
    gaoguang.renderOrder = 2;
    this.sceneGroup.add(gaoguang);
  }
  initGoguang2() {
    let material = new SpriteMaterial({
      color: 0x396ee0,
      transparent: true,
      fog: false,
      depthTest: false,
      blending: AdditiveBlending,
      opacity: 1,
    });
    // 通过shader调整透明度

    material.onBeforeCompile = (shader) => {
      material.__shader = shader;
      shader.uniforms = {
        ...shader.uniforms,
        uTime: {
          value: 0,
        },
        uColor: {
          value: new Color(this.guiParams.dyColor),
        },
      };
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
                varying vec2 vUv;
                void main() {
                   vUv = uv;
              `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
                #define TAU 6.2831852
                #define MOD3 vec3(.1031,.11369,.13787)

                uniform float uTime;
                uniform vec3 uColor;
                varying vec2 vUv;

                vec3 hash33(vec3 p3)
                {
                    p3 = fract(p3 * MOD3);
                    p3 += dot(p3, p3.yxz+19.19);
                    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
                }

                float simplex_noise(vec3 p)
                {
                    const float K1 = 0.333333333;
                    const float K2 = 0.166666667;
                    
                    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
                    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
                        
                    vec3 e = step(vec3(0.0), d0 - d0.yzx);
                    vec3 i1 = e * (1.0 - e.zxy);
                    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
                    
                    vec3 d1 = d0 - (i1 - 1.0 * K2);
                    vec3 d2 = d0 - (i2 - 2.0 * K2);
                    vec3 d3 = d0 - (1.0 - 3.0 * K2);
                    
                    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
                    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));
                    
                    return dot(vec4(31.316), n);
                }
                void main() {
              `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <opaque_fragment>",
        /* glsl */ `
              // 将 UV 坐标从 [0, 1] 范围转换到 [-1, 1] 范围，并根据平面的宽高比进行调整，以避免图形变形
              vec2 uv = vUv * 2.0 - vec2(1.0); 
              
              // 定义圆形的中心，位于平面中心
              vec2 center = vec2(0.0);

              // 计算当前点到圆形中心的距离
              float distToCenter = distance(uv, center);

              // 定义圆形的半径和边缘宽度
              float radius = 0.3;
              float edgeWidth = 0.3;

              // 判断是否在圆环范围内
              if (abs(distToCenter - radius) > edgeWidth) {
                  // 如果不在圆环范围内，设置颜色为透明
                  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
              } else {
                  // 计算当前点相对于圆心的角度
                  float angle = atan(uv.y - center.y, uv.x - center.x);

                  // 定义一个阈值，用于划分圆环的一半
                  float angleThreshold = 0.0;

                  // 判断是否在指定的半圆范围内
                  if (angle < angleThreshold) {
                      // 如果不在指定的半圆范围内，设置颜色为透明
                      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                  } else {
                      float a = sin(atan(uv.y, uv.x));
                      float am = abs(a - 0.5) / 4.0;
                      float l = length(uv);

                      float m1 = clamp(0.1 / smoothstep(0.0, 1.75, l), 0.0, 1.0);
                      float m2 = clamp(0.1 / smoothstep(0.42, 0.0, l), 0.0, 1.0);
                      float s1 = (simplex_noise(vec3(uv * 2.0, 1.0 + uTime * 0.525)) * (max(1.0 - l * 1.75, 0.0)) + 0.9);
                      float s2 = (simplex_noise(vec3(uv * 1.0, 15.0 + uTime * 0.525)) * (max(0.0 + l * 1.0, 0.025)) + 1.25);
                      float s3 = (simplex_noise(vec3(vec2(am, am * 100.0 + uTime * 1.0) * 0.15, 30.0 + uTime * 0.525)) * (max(0.0 + l * 1.0, 0.025)) + 1.25);
                      s3 *= smoothstep(0.0, 0.3345, l);

                      float sh = smoothstep(0.15, 0.35, l);
                      float sh2 = smoothstep(0.75, 0.3, l);

                      float m = m1 * m2 * ((s1 * s2 * s3) * (1.0 - l)) * sh * sh2;
                      m = m * m;
                      vec3 color = vec3(m);
                      color = color * uColor;

                      // 计算透明度因子，从中间到底部透明度逐渐变为 0
                      float alphaFactor = smoothstep(0.5, 1.0, vUv.y)*3.0;

                      // 设置最终的片段颜色，包含透明度
                      gl_FragColor = vec4(color, m * alphaFactor);
                  }
              }
              `
      );
    };

    this.time.on("tick", (delta, elapsedTime) => {
      if (material.__shader.uniforms.uTime) {
        material.__shader.uniforms.uTime.value = elapsedTime;
      }
    });
    let gaoguang = new Sprite(material);
    gaoguang.position.set(0, 0, 0);
    gaoguang.scale.set(100 * 6, 100 * 6, 0);
    gaoguang.renderOrder = 2;
    this.sceneGroup.add(gaoguang);
  }
  initRing() {
    this.ringGroup = new Group();
    this.sceneGroup.add(this.ringGroup);

    //圆环半径
    let geometry = new PlaneGeometry(400, 400);
    // 圆环1
    let ring01 = this.assets.getResource("ring01");
    let ring01Material = new MeshBasicMaterial({
      color: 0x1DAB7E,
      side: DoubleSide,
      map: ring01,
      fog: true,
      transparent: true,
      opacity: 0.5,
    });
    let ring01Mesh = new Mesh(geometry, ring01Material);
    ring01Mesh.rotation.x = -Math.PI / 2;
    this.ringGroup.add(ring01Mesh);

    // 圆环2
    let ring02 = this.assets.getResource("ring02");
    let ring02Material = new MeshBasicMaterial({
      color: 0x1DAB7E,
      side: DoubleSide,
      map: ring02,
      fog: true,
      transparent: true,
      depthWrite: false,
      opacity: 0.3,
    });
    let ring02Mesh = new Mesh(geometry, ring02Material);
    ring02Mesh.position.y += 0.1;
    ring02Mesh.rotation.x = -Math.PI / 2;
    this.ringGroup.add(ring02Mesh);

    // 圆环3
    let ring03 = this.assets.getResource("ring03");
    let ring03Material = new MeshBasicMaterial({
      color: 0x1DAB7E,
      side: DoubleSide,
      map: ring03,
      fog: true,
      transparent: true,
      depthWrite: false,
      opacity: 1,
    });
    let ring03Mesh = new Mesh(geometry, ring03Material);
    ring03Mesh.position.y += 0.2;
    ring03Mesh.rotation.x = -Math.PI / 2;
    this.ringGroup.add(ring03Mesh);

    // 圆环4
    let ring04 = this.assets.getResource("ring04");
    let ring04Material = new MeshBasicMaterial({
      map: ring04,
      fog: true,
      transparent: true,
      depthWrite: false,
      opacity: 1,
    });
    let ring04Mesh = new Mesh(geometry, ring04Material);
    ring04Mesh.position.y += 0.2;
    ring04Mesh.scale.set(1.15,1.15,1.15)
    ring04Mesh.rotation.x = -Math.PI / 2;
    this.ringGroup.add(ring04Mesh);
    

    this.time.on("tick", (delta, elapsedTime) => {
      ring01Mesh.rotation.z += delta * 0.05; // 降低速度从0.1到0.05
      ring03Mesh.rotation.z -= delta * 0.1; // 降低速度从1到0.3
      ring04Mesh.rotation.z += delta * 0.8; // 降低速度从1到0.3
    });
  }

  //5个环绕的圈圈

  initLabel(labelArr=[]) {
    const radius = 180; // 半径200
    
    const count = labelArr.length; // 统计数量
    this.label3d = new Label3d(this);
    labelArr.forEach((data, i) => {
      // 计算每个立方体的角度
      const angle = (i / count) * 2 * Math.PI;
      // 计算 x 和 z 坐标
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      let label = this.label3d.create("", "earth-point", true);
      label.init(
        `
      
          <div class="earth-point-wrap">
            <div class="earth-point-text">
              <span class="label">${data.name}</span>
              <span class="value">${data.value}</span>
              <span class="unit">${data.unit}</span>
            </div>
            <img class="earth-point-icon" src="${data.icon}" />
            <img class="earth-point-icon-bg" src="${pointIconBg}" />
          </div>
      
        `,
        new Vector3(x, -10, z)
      );
      label.setParent(this.labelGroup);
    });
  }
  // 射线检测
  
  checkIntersect() {
    this.time.on("tick", (delta) => {
      // this.labelGroup.rotation.y += delta;
      if (!this.labelGroup.children.length) return false;
      this.labelGroup.children.forEach((point) => {
        // 获取点坐标
        const screenPoint = point.position.clone();
        // 将此向量(坐标)从世界空间投影到相机的标准化设备坐标 (NDC) 空间
        screenPoint.project(this.camera.instance);

        // 射线拾取，判断相交隐藏显示点位
        this.raycaster.setFromCamera(screenPoint, this.camera.instance);
        // 跟this.collisionGroup进行碰撞比较
        let checkObj = this.sceneGroup.getObjectByName("earth");
        const intersects = this.raycaster.intersectObject(checkObj);

        if (intersects.length === 0) {
          point.element
            .querySelector(".earth-point-wrap")
            .classList.add("visible");
        } else {
          // 相交距离
          const intersectDistance = intersects[0].distance;
          // 点到相机的距离
          const distance = point.position.distanceTo(
            this.camera.instance.position
          );
          // 如果相交的距离小于点到相机的距离   就隐藏
          if (intersectDistance < distance) {
            point.element
              .querySelector(".earth-point-wrap")
              .classList.remove("visible");
          } else {
            point.element
              .querySelector(".earth-point-wrap")
              .classList.add("visible");
          }
        }
      });
    });
  }
  async initEarthPoint() {
    try {
      // 获取json文件
      let geoJson = await this.requestData(import.meta.env.BASE_URL+"/assets/json/world.json");
      
      // 检查是否成功获取数据
      if (!geoJson) {
        console.error('无法加载 GeoJSON 数据');
        return;
      }
      
      // 转换数据
      let worldData = this.transfromGeoJSON(geoJson);
      
      // 生成地球点
      let points = this.earthPoints(worldData);
      this.sceneGroup.add(points);
      this.time.on("tick", (delta, elapsedTime) => {
        points.rotation.y += delta * 0.05;
      });
    } catch (error) {
      console.error('初始化地球点时出错:', error);
    }
  }
  // 请求文件
  async requestData(url) {
    try {
      if (!url) {
        console.error('请求URL不能为空');
        return null;
      }
      
      // 文件加载器
      const loader = new FileLoader();
      // 请求数据
      let data = await loader.loadAsync(url, (event) => {
        let { loaded, total } = event;
        let progress = ((loaded / total) * 100).toFixed(0);
        // console.log("file progress", progress);
      });
      
      // 检查数据是否为空
      if (!data) {
        console.error('从 URL 获取的数据为空:', url);
        return null;
      }
      
      try {
        // 数据转换-字符转为json
        data = JSON.parse(data);
        return data;
      } catch (parseError) {
        console.error('无法解析JSON数据:', parseError);
        return null;
      }
    } catch (error) {
      console.error('请求数据时出错:', error);
      return null;
    }
  }
  // 转换数据
  transfromGeoJSON(worldData) {
    if (!worldData || !worldData.features) {
      console.error('无效的 GeoJSON 数据:', worldData);
      return { features: [] }; // 返回一个包含空 features 数组的对象
    }
    
    let features = worldData.features;
    for (let i = 0; i < features.length; i++) {
      const element = features[i];
      // 检查 element 和 geometry 是否存在
      if (element && element.geometry && element.geometry.type) {
        // 将Polygon处理跟MultiPolygon一样的数据结构
        if (element.geometry.type === "Polygon") {
          element.geometry.coordinates = [element.geometry.coordinates];
        }
      }
    }
    return worldData;
  }
  // 网格点
  earthPoints(worldData) {
    let features = worldData.features;
    let allPoints = [];
    let pointsArr = [];
    for (let i = 0; i < features.length; i++) {
      // 坐标
      let coordinates = features[i].geometry.coordinates;
      coordinates.forEach((item) => {
        // 获取集合体的索引和坐标
        let countryCoords = [];
        let coordinates = item[0];
        for (let i = 0; i < coordinates.length; i++) {
          countryCoords.push(
            new THREE.Vector3(coordinates[i][0], coordinates[i][1], 0)
          );
        }
        // 生成内部的网格点
        let { scopeInsidePoint } = generateGrid(countryCoords, 1);
        allPoints.push(...scopeInsidePoint);
      });
    }

    allPoints.forEach((item) => {
      let { x, y, z } = geoSphereCoord(130, item.x, item.y);
      pointsArr.push(new THREE.Vector3(x, y, z));
    });
    let geo = new THREE.BufferGeometry().setFromPoints(pointsArr);
    // 点大小和颜色
    let material = new THREE.PointsMaterial({
      size: 1,
      color: 0x1c3b6d,
      fog: false,
      transparent: true,
    });
    this.earthPointsMaterial = material;
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
            varying vec3 vPosition;
            void main() {
            vPosition = position;
            `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
            varying vec3 vPosition;
            void main() {
            `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <opaque_fragment>",
        /* glsl */ `
              
              diffuseColor.a = 1.0;
              // 计算透明度
             
              // diffuseColor.a = mix(1.0, 0.0, 1.0-vPosition.y/ 130.0);
              diffuseColor.a = 0.0;
              gl_FragColor = vec4( outgoingLight,diffuseColor.a  );
              `
      );
    };
    let point = new THREE.Points(geo, material);
    return point;
  }
  // 资源
  initAssets(onLoadCallback) {
    this.assets = new Assets(onLoadCallback).instance;
  }

  update(delta, elapsedTime) {
    super.update(delta, elapsedTime);
    // console.log(this.camera.instance.position);
  }
}
