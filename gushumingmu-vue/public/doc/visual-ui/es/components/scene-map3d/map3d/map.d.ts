import { Group, MeshBasicMaterial, LineBasicMaterial, MeshStandardMaterial, PlaneGeometry, Mesh, Scene, PerspectiveCamera, Vector2, Raycaster, AxesHelper } from "three";
import { Mini3d, Particles, Label3d, ToastLoading } from "./mini3d/index.js";
import { Assets } from "./map/assets";
import { ExtrudeMap } from "./map/extrudeMap";
import { DiffuseShader } from "./map/DiffuseShader";
import { Reflector } from "./map/Reflector";
/**
 * 场景导出后资源下载的问题
 */
declare class Mini3d {
    [x: string]: any;
    constructor(canvas: any, config: any, option: any);
    scene: Scene;
    camera: {
        instance: PerspectiveCamera;
        controls: any;
    };
    renderer: any;
    time: any;
    sizes: any;
    canvas: any;
    setCss3dVisible: Function;
    geoProjection: Function;
}
interface IOnCallBack {
    onAreaMouseover?: Function;
    onAreaMouseout?: Function;
    onLoadChild?: Function;
    onMapSuccess?: Function;
    onMapAnimationSuccess?: Function;
    onClickBar?: Function;
    onClickScatter?: Function;
    onClickFlyline?: Function;
}
export declare class World extends Mini3d {
    private option;
    private onCallBack;
    pointCenter: number[];
    depth: number;
    toastLoading: ToastLoading;
    sceneGroup: Group;
    assets: Assets;
    mainSceneGroup: Group;
    childSceneGroup: Group;
    allAreaLabel: any[];
    areaLabelGroup: Group;
    label3d: Label3d;
    rotateBorder1: any;
    rotateBorder2: any;
    mapBoxHelper: any;
    quan: any;
    areaMapGroup: Group;
    provinceMesh: ExtrudeMap;
    provinceLineMaterial: LineBasicMaterial;
    areaMapTopMaterial: MeshStandardMaterial;
    areaMapSideMaterial: MeshStandardMaterial;
    childMap: any;
    groundMirror: Reflector;
    particles: Particles;
    barGroup: Group;
    barGuangQuanGroup: Group;
    allBar: any[];
    allBarMaterial: any[];
    allBarGuangquan: any[];
    allBarLabel: any[];
    allScatterLabel: any[];
    barLabelGroup: Group;
    scatterLabelGroup: Group;
    pathLine: any;
    pathLineTexture: any;
    gaoguangMesh: Mesh<PlaneGeometry, MeshBasicMaterial>;
    gridRippleGroup: Group;
    diffuseShader: DiffuseShader;
    scale: number;
    datasource: any;
    flyLineGroup: Group;
    allFlyLine: any[];
    hoverAreaMap: any;
    raycasterMousemove: Raycaster;
    clientRect: any;
    mouse: Vector2;
    isMousedown: boolean;
    isMapAnimationSuccess: boolean;
    mapBackgroundImgMesh: Mesh;
    mapBackgroundImgMaterial: MeshBasicMaterial;
    mapJsonData: string;
    allRegionalLevel: any[];
    axesHelper: AxesHelper;
    constructor(canvas: any, config: any, option: any, onCallBack: IOnCallBack);
    createMapBackgroundImg(init?: boolean): void;
    /** 模型区域地图渲染 */
    createAreaMapModel(callback: any): void;
    /** 创建区域 */
    createArea(callback: any): void;
    /** 创建轮廓 */
    createAreaMapStorke(storke: any, init?: boolean): Promise<boolean>;
    /** 创建地图区域标签 */
    createAreaLabel(labelData: any, parentGroup: any): void;
    /** 创建地图标题标签 */
    createMapTitleLabel(parentGroup: any): void;
    /**设置地图标题标签样式 */
    setMapTitleLabelStyle(mapTitleLabelStyle: any): void;
    /** 设置地图区域标签缩放 */
    setAreaLabelScale(): void;
    /** 设置地图区域标签的样式 */
    setAreaLabelStyle(arealabelStyle: any): void;
    /** 设置地图区域标签移动 */
    setAreaLabelMove(adcode: any, type?: string): void;
    /** 创建省份材质 */
    createProvinceMaterial(top: any, side: any): MeshStandardMaterial[];
    /** 创建柱状图 */
    createBar(option: any, data: any[], create?: boolean, isAnimation?: boolean): void;
    cleanAllBar(): void;
    createBarTimeLine(): void;
    setBarLabelStyle(barlabelStyle: any, id: any): void;
    /** 柱状图缩放 */
    setBarScale(): void;
    /** 创建柱状图辉光效果 */
    createBarHUIGUANG(h: any, option: any): Mesh<PlaneGeometry, MeshBasicMaterial>[];
    /** 创建柱状图底部光圈 */
    createBarGuangQuan(option: any, init: boolean): Group;
    /** 设置柱状图移动 */
    setBarMove(adcode: any, type?: string): void;
    /** 设置柱状图光圈移动 */
    setBarGuangQuanMove(adcode: any, type?: string): void;
    /** 设置柱状图标签移动 */
    setBarLabelMove(adcode: any, type?: string): void;
    /** 创建散点图 */
    createScatter(option: any, data?: any[], create?: boolean, isAnimation?: boolean): void;
    setScatterLabelStyle(scatterlabelStyle: any, id: any): void;
    setScatterScale(): void;
    createScatterTimeLine(): void;
    cleanAllScatter(): void;
    /** 设置柱状图标签移动 */
    setScatterLabelMove(adcode: any, type?: string): void;
    createFlyLine(option: any, data: any[], create?: boolean, isAnimation?: boolean): void;
    setFlylineLabelStyle(flylineLabelStyle: any, id: any): void;
    setFlylineScale(): void;
    cleanAllFlyLine(): void;
    createFlyLineTimeLine(): void;
    createRegionalLevel(option: any, data: any[], create?: boolean, isAnimation?: boolean): void;
    createAllRegionalLevel(): void;
    createRegionalLevelTimeLine(): void;
    handleMapMousedown(event: any): void;
    handleMapMouseup(event: any): void;
    handleHoverAreaMap(event: any): void;
    move(mesh: any, obj: any): void;
    reset(mesh: any): void;
    update(): void;
    destroy(): void;
}
export {};
