<script lang="ts" setup>
/** 3D行政边界（省、市、县） **/
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
import { usePageStore } from '@/commons/stores/pageStore'

const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)

/** 配置参数 */
const sceneOption = {"backButtonLeft":70,"backButtonBottom":5,"debugger":false,"orbitControls":{"panSpeed":1,"minPolarAngle":0,"maxPolarAngle":75,"enablePan":true,"minDistance":50,"maxDistance":300,"enableDamping":true,"enableZoom":true,"zoomSpeed":1},"widgets":[{"defaultColor":"#212121","name":"古树数量","labelStyle":{"fontFamily":"SHJ-SourceHanSansSC-Regular-otf","top":50,"color":"#FFFFFF","left":75,"gap":16,"colorStyle":{"borderRadius":0,"width":14,"height":6},"fontSize":12,"fontStyle":"normal","direction":"column"},"_sourceId":"6acha","rules":[{"min":0,"color":"#7FF08C","max":100,"label":"0-10万"},{"min":101,"color":"#5FD96E","max":201,"label":"10-50万"},{"min":202,"color":"#3EB049","max":302,"label":"50-100万"},{"min":303,"color":"#289E35","max":600,"label":"100万+"}],"id":"ieibd","type":"regionalLevel","opacity":0.5,"isHide":false},{"color":"#FFFFFF","bottom":{"color":"#FFFFFF","width":3,"opacity":1,"height":3},"format":"{value}","_sourceId":"bgicc","label":{"unit":"台","fontFamily":"SHJ-HarmonyOS_Sans_TC-Bold-ttf","color":"#FFFFFF","bg":{"paddingH":6,"paddingW":2,"borderColor":"#0D91D49E","color":"#FFFFFF00","borderRadius":6,"borderWidth":0,"borderStyle":"solid"},"bottom":2,"show":true,"fontSize":14,"unitStyle":{"fontFamily":"SHJ-Alibaba-PuHuiTi-Regular-woff","color":"#A6A6A6","show":true,"fontSize":14}},"type":"bar","isHide":false,"huiguang":{"size":1.5,"color":"#2A82E4","show":true,"opacity":0.6},"name":"物联设备数量","width":10,"id":"jk2k2","opacity":1,"height":20}],"scene":{"geojson":"","translateZ":0,"isDrilling":true,"defaultMapAdcode":100000,"background":"#020A07","translateY":0,"translateX":0,"defaultMap":"china","x":5,"y":0,"z":0,"isBackground":true},"light":{"pointLight2":{"intensity":60,"color":"#ffffff","distance":30,"show":true,"x":-4,"y":8,"z":43},"ambientLight":{"intensity":1,"color":"#FFFFFF","show":true},"directionalLight":{"intensity":2,"color":"#ffffff","show":true,"position":{"x":-22,"y":128,"z":-20},"target":{"position":{"x":0,"y":0,"z":0}}},"pointLight1":{"intensity":60,"color":"#ffffff","distance":24,"show":true,"x":1,"y":19,"z":7}},"backButtonCss":{"backgroundColor":"#35743F","borderColor":"#289E35","fontFamily":"SHJ-SourceHanSansSC-Regular-otf","color":"#FFFFFF","borderRadius":4,"backgroundImage":"","borderWidth":1,"backgroundSize":"cover","fontSize":12,"fontStyle":"normal","borderStyle":"solid","fontWeight":600},"backButton":true,"particle":{"material":{"size":10,"color":"#FFFFFF","opacity":0.3},"num":20,"show":true,"range":200,"dir":"up","speed":0.1},"floor":{"quan":{"color":"#007BFF","show":true},"gaoguang":{"color":"#394D41","show":true},"gridRipple":{"diffuseWidth":20,"color":"#566A78","diffuseOpacity":0.7,"alphaMap":"map3d/gridRippleAlphaMap.png","repeat":100,"show":true,"diffuseSpeed":20,"diffuseColor":"#566A78","opacity":0.2,"map":"map3d/gridRippleMap.png"},"rotateBorder":{"rotateBorder1":{"size":1.18,"color":"#445057","texture":"map3d/rotateBorder1Map.png","show":true,"rotateSpeed":1.5,"opacity":0.5},"rotateBorder2":{"size":1.12,"color":"#445057","texture":"map3d/rotateBorder2Map.png","show":true,"rotateSpeed":-4,"opacity":0.6}}},"camera":{"position":{"x":0,"y":127,"z":105},"target":[0,0,0]},"widgetControlStyle":{"backgroundColor":"#00000000","borderColor":"#5B687559","color":"#D9D9D9","backgroundImage":"","show":true,"active":{"backgroundColor":"#00000000","borderColor":"#76C287","color":"#E8E8E8","backgroundImage":"","borderWidth":1,"fontSize":12,"fontStyle":"normal","borderStyle":"solid","fontWeight":600},"fontStyle":"normal","hover":{"backgroundColor":"#00000000","borderColor":"#76C287","color":"#E8E8E8","backgroundImage":"","borderWidth":1,"fontSize":12,"fontStyle":"normal","borderStyle":"solid","fontWeight":600},"fontFamily":"SHJ-DreamHanSansCN-W1-ttf","top":85,"borderRadius":4,"left":27,"borderWidth":1,"gap":12,"width":100,"backgroundSize":"cover","fontSize":12,"borderStyle":"solid","fontWeight":600,"direction":"column","height":26},"map":{"hoverLineColor":"#CCCCCC","depth":4,"titleLabel":{"offsetX":0,"fontFamily":"SHJ-SourceHanSansSC-Bold-otf","offsetY":3,"color":"#FFFFFF","bottom":2,"show":true,"fontSize":46,"gaodeAPI":"f7d75cd912376e5ade47187998ebbd31"},"backgroundImg":{"color":"#FFFFFF","src":"https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/004_bg.jpg","alphaMap":"https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/004_bg.jpg","rotation":[90,-180,180],"show":true,"scale":[0.42000000000000004,0.42000000000000004,0.42000000000000004],"position":[-8.7,0.10000000000000003,11.7],"opacity":0.8},"mirrorShow":false,"sideMaterial":{"color":"#548A5E","opacity":0.8,"map":"map3d/sideMap.png"},"arealabel":{"fontFamily":"SHJ-AlimamaShuHeiTi-Bold-woff","color":"#FFFFFF","bottom":2,"show":true,"fontSize":22},"lineColor":"#CCCCCC","topMaterial":{"emissive":"#000000","color":"#C9FFEA","hoverOpacity":1,"normalMap":"map3d/topNormal.jpg","opacity":1,"map":"map3d/004_map.jpg"},"storkeAnimation":{"color":"#FFFFFF","top":0,"texture":"map3d/pathLine.png","radius":0.2,"speed":0.3,"segments":1000},"hoverDepth":1.5}}

/** 数据源 */
const sceneSources = ref([{"name":"地域等级分布","id":"6acha","source":{"mapping":[{"mapping":"province_name","name":"name","label":"地域名称","type":"string","status":false},{"mapping":"value","name":"value","label":"值","type":"number","status":false}],"static":[{"name":"河南省","value":450},{"name":"新疆维吾尔自治区","value":50},{"name":"西藏自治区","value":150},{"name":"青海省","value":150},{"name":"云南省","value":350},{"name":"四川省","value":150},{"name":"甘肃省","value":150},{"name":"宁夏回族自治区","value":150},{"name":"陕西省","value":150},{"name":"重庆市","value":350},{"name":"贵州省","value":350},{"name":"广西壮族自治区","value":250},{"name":"广东省","value":250},{"name":"海南省","value":50},{"name":"香港特别行政区","value":50},{"name":"澳门特别行政区","value":50},{"name":"湖南省","value":450},{"name":"湖北省","value":450},{"name":"山西省","value":150},{"name":"内蒙古自治区","value":150},{"name":"河北省","value":150},{"name":"山东省","value":150},{"name":"安徽省","value":450},{"name":"江西省","value":450},{"name":"福建省","value":250},{"name":"台湾省","value":250},{"name":"浙江省","value":250},{"name":"江苏省","value":250},{"name":"上海市","value":150},{"name":"山东省","value":150},{"name":"北京市","value":150},{"name":"天津市","value":150},{"name":"辽宁省","value":150},{"name":"吉林省","value":150},{"name":"黑龙江省","value":150},{"name":"长沙市","value":"300"}],"isAutoUpdate":false,"autoUpdateTime":60,"storage":{"setField":"","getType":0,"getField":"","setType":0},"type":"api","api":{"headers":{"token":""},"proxy":false,"isHeaders":false,"cookie":false,"type":"GET","url":"http://183.134.89.178:8090/api/dlevFh"}}},{"name":"柱体数据","id":"bgicc","source":{"mapping":[{"mapping":"name","name":"name","label":"名称","type":"string","status":true},{"mapping":"adcode","name":"adcode","label":"行政区划代码","type":"number","status":true},{"mapping":"coords","name":"coords","label":"经纬度","type":"array","status":true},{"mapping":"value","name":"value","label":"值","type":"number","status":true}],"static":[{"adcode":110000,"name":"北京市","value":50,"coords":[116.405285,39.904989]},{"adcode":120000,"name":"天津市","value":112,"coords":[117.190182,39.125596]},{"adcode":130000,"name":"河北省","value":31,"coords":[114.502461,38.045474]},{"adcode":140000,"name":"山西省","value":42,"coords":[112.549248,37.857014]},{"adcode":150000,"name":"内蒙古自治区","value":87,"coords":[111.670801,40.818311]},{"adcode":210000,"name":"辽宁省","value":45,"coords":[123.429096,41.796767]},{"adcode":220000,"name":"吉林省","value":56,"coords":[125.3245,43.886841]},{"adcode":230000,"name":"黑龙江省","value":21,"coords":[126.642464,45.756967]},{"adcode":310000,"name":"上海市","value":86,"coords":[121.472644,31.231706]},{"adcode":320000,"name":"江苏省","value":61,"coords":[118.767413,32.041544]},{"adcode":330000,"name":"浙江省","value":85,"coords":[120.153576,30.287459]},{"adcode":340000,"name":"安徽省","value":68,"coords":[117.283042,31.86119]},{"adcode":350000,"name":"福建省","value":152,"coords":[119.306239,26.075302]},{"adcode":360000,"name":"江西省","value":64,"coords":[115.892151,28.676493]},{"adcode":370000,"name":"山东省","value":12,"coords":[117.000923,36.675807]},{"adcode":410000,"name":"河南省","value":86,"coords":[113.665412,34.757975]},{"adcode":420000,"name":"湖北省","value":53,"coords":[114.298572,30.584355]},{"adcode":430000,"name":"湖南省","value":57,"coords":[112.982279,28.19409]},{"adcode":440000,"name":"广东省","value":86,"coords":[113.280637,23.125178]},{"adcode":450000,"name":"广西壮族自治区","value":86,"coords":[108.320004,22.82402]},{"adcode":460000,"name":"海南省","value":46,"coords":[110.33119,20.031971]},{"adcode":500000,"name":"重庆市","value":67,"coords":[106.504962,29.533155]},{"adcode":510000,"name":"四川省","value":210,"coords":[104.065735,30.659462]},{"adcode":520000,"name":"贵州省","value":160,"coords":[106.713478,26.578343]},{"adcode":530000,"name":"云南省","value":4,"coords":[102.712251,25.040609]},{"adcode":540000,"name":"西藏自治区","value":140,"coords":[91.132212,29.660361]},{"adcode":610000,"name":"陕西省","value":167,"coords":[108.948024,34.263161]},{"adcode":620000,"name":"甘肃省","value":247,"coords":[103.823557,36.058039]},{"adcode":630000,"name":"青海省","value":64,"coords":[101.778916,36.623178]},{"adcode":640000,"name":"宁夏回族自治区","value":50,"coords":[106.278179,38.46637]},{"adcode":650000,"name":"新疆维吾尔自治区","value":74,"coords":[87.617733,43.792818]},{"adcode":710000,"name":"台湾省","value":84,"coords":[121.509062,25.044332]},{"adcode":810000,"name":"香港特别行政区","value":13,"coords":[114.173355,22.320048]},{"adcode":820000,"name":"澳门特别行政区","value":83,"coords":[113.54909,22.198951]}],"isAutoUpdate":false,"autoUpdateTime":60,"storage":{"setField":"","getType":0,"getField":"","setType":0},"type":"static"}}])

/** 全局事件 */
// 确保即使 currentPage.value.globalEvent 不存在，也有一个默认的数组
// 这样下钻和返回事件才能正常触发
const globalEvent = currentPage.value.globalEvent || ['mapEvent']

// 保存原始背景图片URL，以便在返回国家级别时恢复
const originalBackgroundImg = {
  src: "https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/004_bg.jpg",
  alphaMap: "https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/map3d/004_bg.jpg"
};

// 市级及以下级别的背景图片URL
const cityLevelBackgroundImg = {
  src: "http://qiniu.zhouchuanbaofu.cn/black.png",
  alphaMap: "http://qiniu.zhouchuanbaofu.cn/black.png"
};

// 保存原始的边框动画设置
const originalFloorSettings = {
  quan: {
    color: "#007BFF",
    show: true
  },
  gaoguang: {
    color: "#394D41",
    show: true
  },
  gridRipple: {
    diffuseWidth: 20,
    color: "#566A78",
    diffuseOpacity: 0.7,
    alphaMap: "map3d/gridRippleAlphaMap.png",
    repeat: 100,
    show: true,
    diffuseSpeed: 20,
    diffuseColor: "#566A78",
    opacity: 0.2,
    map: "map3d/gridRippleMap.png"
  },
  rotateBorder: {
    rotateBorder1: {
      size: 1.18,
      color: "#445057",
      texture: "map3d/rotateBorder1Map.png",
      show: true,
      rotateSpeed: 1.5,
      opacity: 0.5
    },
    rotateBorder2: {
      size: 1.12,
      color: "#445057",
      texture: "map3d/rotateBorder2Map.png",
      show: true,
      rotateSpeed: -4,
      opacity: 0.6
    }
  }
};

// 下钻后的增强动画设置
const enhancedFloorSettings = {
  quan: {
    color: "#007BFF", // 保持原来的颜色
    show: true
  },
  gaoguang: {
    color: "#394D41", // 保持原来的颜色
    show: true
  },
  gridRipple: {
    diffuseWidth: 30, // 增大扩散宽度
    color: "#566A78", // 保持原来的颜色
    diffuseOpacity: 0.9, // 增强透明度
    alphaMap: "map3d/gridRippleAlphaMap.png",
    repeat: 120, // 增大重复次数
    show: true,
    diffuseSpeed: 30, // 增快扩散速度
    diffuseColor: "#566A78", // 保持原来的颜色
    opacity: 0.4, // 增强透明度
    map: "map3d/gridRippleMap.png"
  },
  rotateBorder: {
    rotateBorder1: {
      size: 1.25, // 增大尺寸
      color: "#445057", // 保持原来的颜色
      texture: "map3d/rotateBorder1Map.png",
      show: true,
      rotateSpeed: 2.5, // 增快旋转速度
      opacity: 0.7 // 增强透明度
    },
    rotateBorder2: {
      size: 1.2, // 增大尺寸
      color: "#445057", // 保持原来的颜色
      texture: "map3d/rotateBorder2Map.png",
      show: true,
      rotateSpeed: -5, // 增快旋转速度
      opacity: 0.8 // 增强透明度
    }
  }
};

// 保存原始的粒子动画设置
const originalParticleSettings = {
  material: {
    size: 10,
    color: "#FFFFFF",
    opacity: 0.3
  },
  num: 20,
  show: true,
  range: 200,
  dir: "up",
  speed: 0.1
};

// 下钻后的增强粒子动画设置
const enhancedParticleSettings = {
  material: {
    size: 12, // 增大粒子尺寸
    color: "#FFFFFF", // 保持原来的颜色
    opacity: 0.5 // 增强透明度
  },
  num: 40, // 增加粒子数量
  show: true,
  range: 250, // 增大粒子范围
  dir: "up",
  speed: 0.15 // 增快粒子速度
};

// 省级下钻后的市级数据
const cityData = {
'430000': [ // 湖南省
    {"adcode":430100,"name":"长沙市","value":120,"coords":[112.938882,28.228209]},
    {"adcode":430200,"name":"株洲市","value":85,"coords":[113.133853,27.827986]},    
    {"adcode":430300,"name":"湘潭市","value":76,"coords":[112.923916,27.829895]}, 
    {"adcode":430400,"name":"衡阳市","value":92,"coords":[112.571996,26.893924]},       
    {"adcode":430500,"name":"邵阳市","value":63,"coords":[111.467687,27.238892]},      
    {"adcode":430600,"name":"岳阳市","value":105,"coords":[113.128958,29.357104]},    
    {"adcode":430700,"name":"常德市","value":88,"coords":[111.698497,29.031673]},      
    {"adcode":430800,"name":"张家界市","value":130,"coords":[110.479191,29.117096]},   
    {"adcode":430900,"name":"益阳市","value":72,"coords":[112.355268,28.553860]},     
    {"adcode":431000,"name":"郴州市","value":67,"coords":[113.014717,25.770509]},     
    {"adcode":431100,"name":"永州市","value":58,"coords":[111.612245,26.420394]},     
    {"adcode":431200,"name":"怀化市","value":83,"coords":[109.998488,27.554978]},      
    {"adcode":431300,"name":"娄底市","value":79,"coords":[112.006593,27.729758]},      
    {"adcode":433100,"name":"湘西土家族苗族自治州","value":95,"coords":[109.739172,28.311947]} 
  ],
  '440000': [ // 广东省
    {"adcode":440100,"name":"广州市","value":150,"coords":[113.280637,23.125178]},
    {"adcode":440200,"name":"韶关市","value":65,"coords":[113.591544,24.801322]},
    {"adcode":440300,"name":"深圳市","value":180,"coords":[114.085947,22.547]},
    {"adcode":440400,"name":"珠海市","value":95,"coords":[113.553986,22.224979]},
    {"adcode":440500,"name":"汕头市","value":78,"coords":[116.708463,23.37102]}
  ],
  // 可以继续添加其他省份的市级数据
};

// 市级下钻后的县级数据
const countyData = {
  '430100': [ // 长沙市
    {"adcode":430102,"name":"芙蓉区","value":45,"coords":[113.03176,28.185956]},
    {"adcode":430103,"name":"天心区","value":38,"coords":[112.98983,28.114526]},
    {"adcode":430104,"name":"岳麓区","value":52,"coords":[112.93133,28.235895]},
    {"adcode":430105,"name":"开福区","value":43,"coords":[112.985525,28.257269]},
    {"adcode":430111,"name":"雨花区","value":36,"coords":[113.038017,28.137909]},
    {"adcode":430112,"name":"望城区","value":28,"coords":[112.819549,28.347458]},
    {"adcode":430121,"name":"长沙县","value":32,"coords":[113.080098,28.246918]},
    {"adcode":430181,"name":"浏阳市","value":25,"coords":[113.643076,28.162833]},
    {"adcode":430182,"name":"宁乡市","value":30,"coords":[112.553182,28.253533]}
  ]
  // 可以继续添加其他市的县级数据
};

// 处理地图下钻事件
const handleMapDrilling = (e) => {
  // 输出完整的事件对象结构，以便调试
  console.log('地图下钻事件对象:', e);
  
  // 触发自定义事件，通知其他组件地图已下钻
  if (globalEvent && Array.isArray(globalEvent)) {
    console.log('准备触发下钻事件，globalEvent:', globalEvent);
    console.log('window对象是否存在:', typeof window !== 'undefined');
    console.log('CustomEvent是否可用:', typeof CustomEvent !== 'undefined');
    
    try {
      // 创建一个自定义事件，包含下钻信息
      const drillDownEvent = {
        type: 'mapDrillDown',
        targetId: 'N5FGUZupKVoIAYY1b8iA', // 第一个目标元素ID
        data: { ...e, action: 'drillDown' }
      };
      
      // 第二个自定义事件，用于第二个元素
      const drillDownEvent2 = {
        type: 'mapDrillDown',
        targetId: 'EgwsIbwLLbngkeGAS67R', // 第二个目标元素ID
        data: { ...e, action: 'drillDown' }
      };
      
      // 触发全局事件
      console.log('触发前的事件对象:', drillDownEvent);
      window.dispatchEvent(new CustomEvent('mapEvent', { detail: drillDownEvent }));
      console.log('已触发地图下钻全局事件，事件详情:', drillDownEvent);
      
      // 稍后触发第二个元素的事件
      setTimeout(() => {
        console.log('触发第二个元素的事件:', drillDownEvent2);
        window.dispatchEvent(new CustomEvent('mapEvent', { detail: drillDownEvent2 }));
        console.log('已触发第二个元素的地图下钻全局事件');
      }, 100);
    } catch (error) {
      console.error('触发地图下钻事件时出错:', error);
    }
  } else {
    console.warn('无法触发下钻事件，globalEvent不可用:', globalEvent);
  }
  
  // 根据实际事件对象结构获取adcode和level
  let adcode, level;
  
  // 实际的事件对象结构是：
  // {
  //   "depth": 4,
  //   "name": "湖南省",
  //   "adcode": 430000,
  //   "parent": {
  //     "adcode": 100000
  //   },
  //   "materialEmissiveHex": 0
  // }
  
  if (e && e.adcode !== undefined) {
    adcode = e.adcode;
    
    // 根据正确的行政区划编码规则判断级别
    if (adcode === 100000) {
      // 100000 是全国编码
      level = 'country';
    } else if (adcode.toString().substr(-4) === '0000') {
      // 后四位为0的是省级编码，如 110000（北京），430000（湖南省）
      level = 'province';
    } else if (adcode.toString().substr(-2) === '00') {
      // 后两位为0的是市级编码，如 430100（长沙市）
      level = 'city';
    } else {
      // 后两位不为0的是县级编码，如 430102（芙蓉区）
      level = 'county';
    }
  } else {
    // 无法获取必要信息，记录错误并返回
    console.error('无法从事件对象中获取adcode:', e);
    return;
  }
  
  console.log('地图下钻事件触发:', adcode, level);
  
  // 当进入省级或以下级别时，更换背景图片和动画效果
  if (level === 'province' || level === 'city' || level === 'county') {
    // 创建新的sceneOption对象，更新背景图片和动画效果
    const newSceneOption = JSON.parse(JSON.stringify(sceneOption));
    
    // 更新背景图片
    newSceneOption.map.backgroundImg.src = cityLevelBackgroundImg.src;
    newSceneOption.map.backgroundImg.alphaMap = cityLevelBackgroundImg.alphaMap;
    
    // 增强边框动画效果
    newSceneOption.floor = enhancedFloorSettings;
    
    // 增强粒子动画效果
    newSceneOption.particle = enhancedParticleSettings;
    
    // 更新sceneOption引用
    Object.assign(sceneOption, newSceneOption);
    console.log('已更换为下钻后的增强动画效果');
  }
  
  // 根据下钻的行政区划代码和级别更新柱体数据
  if (level === 'province') {
    // 省级下钻到市级
    if (cityData[adcode]) {
      // 更新柱体数据源
      const newSources = [...sceneSources.value];
      const barSourceIndex = newSources.findIndex(item => item.id === 'bgicc');
      if (barSourceIndex !== -1) {
        newSources[barSourceIndex].source.static = cityData[adcode];
        sceneSources.value = newSources;
      }
    } else {
      console.log(`未找到省份adcode=${adcode}的市级数据`);
    }
  } else if (level === 'city') {
    // 市级下钻到县级
    if (countyData[adcode]) {
      // 更新柱体数据源
      const newSources = [...sceneSources.value];
      const barSourceIndex = newSources.findIndex(item => item.id === 'bgicc');
      if (barSourceIndex !== -1) {
        newSources[barSourceIndex].source.static = countyData[adcode];
        sceneSources.value = newSources;
      }
    } else {
      console.log(`未找到城市adcode=${adcode}的县级数据`);
    }
  }
}

// 处理地图返回事件
const handleMapBack = (e) => {
  // 输出完整的事件对象结构，以便调试
  console.log('地图返回事件对象:', e);
  
  // 触发自定义事件，通知其他组件地图已返回
  if (globalEvent && Array.isArray(globalEvent)) {
    console.log('准备触发返回事件，globalEvent:', globalEvent);
    
    try {
      // 创建一个自定义事件，包含返回信息
      const mapBackEvent = {
        type: 'mapBack',
        targetId: 'N5FGUZupKVoIAYY1b8iA', // 第一个目标元素ID
        data: { ...e, action: 'back' }
      };
      
      // 第二个自定义事件，用于第二个元素
      const mapBackEvent2 = {
        type: 'mapBack',
        targetId: 'EgwsIbwLLbngkeGAS67R', // 第二个目标元素ID
        data: { ...e, action: 'back' }
      };
      
      // 触发全局事件
      console.log('触发前的返回事件对象:', mapBackEvent);
      window.dispatchEvent(new CustomEvent('mapEvent', { detail: mapBackEvent }));
      console.log('已触发地图返回全局事件，事件详情:', mapBackEvent);
      
      // 稍后触发第二个元素的返回事件
      setTimeout(() => {
        console.log('触发第二个元素的返回事件:', mapBackEvent2);
        window.dispatchEvent(new CustomEvent('mapEvent', { detail: mapBackEvent2 }));
        console.log('已触发第二个元素的地图返回全局事件');
      }, 100);
    } catch (error) {
      console.error('触发地图返回事件时出错:', error);
    }
  } else {
    console.warn('无法触发返回事件，globalEvent不可用:', globalEvent);
  }
  
  // 根据实际事件对象结构获取adcode和level
  let adcode, level;
  
  // 实际的事件对象结构应与下钻事件类似
  if (e && e.adcode !== undefined) {
    adcode = e.adcode;
    
    // 返回事件通常是返回到上一级
    // 根据 parent.adcode 判断返回后的级别
    if (e.parent && e.parent.adcode) {
      // 使用父级的adcode
      adcode = e.parent.adcode;
      
      // 根据正确的行政区划编码规则判断级别
      if (adcode === 100000) {
        // 100000 是全国编码
        level = 'country';
      } else if (adcode.toString().substr(-4) === '0000') {
        // 后四位为0的是省级编码，如 110000（北京），430000（湖南省）
        level = 'province';
      } else if (adcode.toString().substr(-2) === '00') {
        // 后两位为0的是市级编码，如 430100（长沙市）
        level = 'city';
      } else {
        // 后两位不为0的是县级编码，如 430102（芙蓉区）
        level = 'county';
      }
    } else {
      // 如果没有parent信息，则假设返回到全国级别
      level = 'country';
      adcode = 100000;
    }
  } else {
    // 无法获取必要信息，假设返回到全国级别
    console.error('无法从返回事件对象中获取adcode，假设返回到全国级别:', e);
    adcode = 100000; // 全国代码
    level = 'country';
  }
  
  console.log('地图返回事件触发:', adcode, level);
  
  // 当返回到国家级别时，恢复原始背景图片和动画效果
  if (level === 'country') {
    // 创建新的sceneOption对象，恢复原始背景图片和动画效果
    const newSceneOption = JSON.parse(JSON.stringify(sceneOption));
    
    // 恢复原始背景图片
    newSceneOption.map.backgroundImg.src = originalBackgroundImg.src;
    newSceneOption.map.backgroundImg.alphaMap = originalBackgroundImg.alphaMap;
    
    // 恢复原始边框动画效果
    newSceneOption.floor = originalFloorSettings;
    
    // 恢复原始粒子动画效果
    newSceneOption.particle = originalParticleSettings;
    
    // 更新sceneOption引用
    Object.assign(sceneOption, newSceneOption);
    console.log('已恢复国家级别背景图片和动画效果');
  }
  
  // 根据返回后的级别更新柱体数据
  if (level === 'country') {
    // 返回到全国级别，恢复原始省级数据
    const newSources = [...sceneSources.value];
    const barSourceIndex = newSources.findIndex(item => item.id === 'bgicc');
    if (barSourceIndex !== -1) {
      // 恢复到原始的省级数据
      newSources[barSourceIndex].source.static = [
        {"adcode":110000,"name":"北京市","value":50,"coords":[116.405285,39.904989]},
        {"adcode":120000,"name":"天津市","value":112,"coords":[117.190182,39.125596]},
        {"adcode":130000,"name":"河北省","value":31,"coords":[114.502461,38.045474]},
        {"adcode":140000,"name":"山西省","value":42,"coords":[112.549248,37.857014]},
        {"adcode":150000,"name":"内蒙古自治区","value":87,"coords":[111.670801,40.818311]},
        {"adcode":210000,"name":"辽宁省","value":45,"coords":[123.429096,41.796767]},
        {"adcode":220000,"name":"吉林省","value":56,"coords":[125.3245,43.886841]},
        {"adcode":230000,"name":"黑龙江省","value":21,"coords":[126.642464,45.756967]},
        {"adcode":310000,"name":"上海市","value":86,"coords":[121.472644,31.231706]},
        {"adcode":320000,"name":"江苏省","value":61,"coords":[118.767413,32.041544]},
        {"adcode":330000,"name":"浙江省","value":85,"coords":[120.153576,30.287459]},
        {"adcode":340000,"name":"安徽省","value":68,"coords":[117.283042,31.86119]},
        {"adcode":350000,"name":"福建省","value":152,"coords":[119.306239,26.075302]},
        {"adcode":360000,"name":"江西省","value":64,"coords":[115.892151,28.676493]},
        {"adcode":370000,"name":"山东省","value":12,"coords":[117.000923,36.675807]},
        {"adcode":410000,"name":"河南省","value":86,"coords":[113.665412,34.757975]},
        {"adcode":420000,"name":"湖北省","value":53,"coords":[114.298572,30.584355]},
        {"adcode":430000,"name":"湖南省","value":57,"coords":[112.982279,28.19409]},
        {"adcode":440000,"name":"广东省","value":86,"coords":[113.280637,23.125178]},
        {"adcode":450000,"name":"广西壮族自治区","value":86,"coords":[108.320004,22.82402]},
        {"adcode":460000,"name":"海南省","value":46,"coords":[110.33119,20.031971]},
        {"adcode":500000,"name":"重庆市","value":67,"coords":[106.504962,29.533155]},
        {"adcode":510000,"name":"四川省","value":210,"coords":[104.065735,30.659462]},
        {"adcode":520000,"name":"贵州省","value":160,"coords":[106.713478,26.578343]},
        {"adcode":530000,"name":"云南省","value":4,"coords":[102.712251,25.040609]},
        {"adcode":540000,"name":"西藏自治区","value":140,"coords":[91.132212,29.660361]},
        {"adcode":610000,"name":"陕西省","value":167,"coords":[108.948024,34.263161]},
        {"adcode":620000,"name":"甘肃省","value":247,"coords":[103.823557,36.058039]},
        {"adcode":630000,"name":"青海省","value":64,"coords":[101.778916,36.623178]},
        {"adcode":640000,"name":"宁夏回族自治区","value":50,"coords":[106.278179,38.46637]},
        {"adcode":650000,"name":"新疆维吾尔自治区","value":74,"coords":[87.617733,43.792818]},
        {"adcode":710000,"name":"台湾省","value":84,"coords":[121.509062,25.044332]},
        {"adcode":810000,"name":"香港特别行政区","value":13,"coords":[114.173355,22.320048]},
        {"adcode":820000,"name":"澳门特别行政区","value":83,"coords":[113.54909,22.198951]}
      ];
      sceneSources.value = newSources;
    }
  } else if (level === 'province') {
    // 从县级返回到市级
    const provinceCode = adcode.toString().substring(0, 2) + '0000';
    if (cityData[provinceCode]) {
      const newSources = [...sceneSources.value];
      const barSourceIndex = newSources.findIndex(item => item.id === 'bgicc');
      if (barSourceIndex !== -1) {
        newSources[barSourceIndex].source.static = cityData[provinceCode];
        sceneSources.value = newSources;
      }
    }
  }
}

</script>
<template>
    <div class="shj-scene">
        <!-- 使用@shjjs/visual-ui全局组件，basic-option暴漏所有参数可修改，sources为指定数据源 -->
        <zv-scene-map3d
            :ref="ComponentRefs.registerRef('scene-map3d-7')"
            :basic-option="sceneOption"
            :sources="sceneSources"
            :use-events="globalEvent"
            @on-drill-down="handleMapDrilling"
            @on-return="handleMapBack"
        ></zv-scene-map3d>
    </div>
</template>
<style lang="scss" scoped>
.shj-scene {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
</style>