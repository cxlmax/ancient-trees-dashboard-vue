import * as THREE from 'three';
import { EarthInterface } from './interface';
import { ComposerParameter, EarthParameter, ApertureParameter, CloudCoverParameter, StarrySkyParameter, FlightLinesItem, FlightLinesParameter, LightBeamScatterItem, LightBeamScatterParameter, FlyLinesParameter } from './types';
import { BorderParameter, GridHelperParameter, AxesHelperParameter, AmbientLightParameter, DirectionalLightParameter } from './utils/interface';
import { Scene } from './utils/scene';
export declare class Earth extends Scene implements EarthInterface {
    group: THREE.Group;
    name: string;
    mesh: THREE.Mesh;
    earth: THREE.Group;
    geometry: THREE.SphereGeometry;
    material: THREE.MeshStandardMaterial;
    apertureName: string;
    apertureSprite: THREE.Sprite;
    apertureMaterial: THREE.SpriteMaterial;
    cloudCoverName: string;
    cloudCoverGeometry: THREE.SphereGeometry;
    cloudCoverMaterial: THREE.MeshStandardMaterial;
    cloudCoverMesh: THREE.Mesh;
    starrySkyName: string;
    starrySkyGeometry: THREE.BufferGeometry;
    starrySkyPoints: THREE.Points;
    starrySkyMaterial: THREE.PointsMaterial;
    flightLinesName?: string;
    flightLinesGroup: THREE.Group;
    lightBeamScatterName: string;
    lightBeamScatterGroup: THREE.Group;
    scatterPoints: Array<THREE.Mesh>;
    rotationPoints: Array<THREE.Mesh>;
    lineCurve: Array<THREE.CubicBezierCurve3>;
    earthParameter?: EarthParameter;
    apertureParameter?: ApertureParameter;
    cloudCoverParameter: CloudCoverParameter;
    starrySkyParameter: StarrySkyParameter;
    composerParameter?: ComposerParameter;
    gridHelperParameter: GridHelperParameter;
    axesHelperParameter: AxesHelperParameter;
    ambientLightParameter: AmbientLightParameter;
    directionalLightParameter: DirectionalLightParameter;
    animationGradientSegmentLine: Array<any>;
    flyLineAnimation: {
        time: {
            value: number;
        };
    };
    starrySky: any;
    /**
   * Test Data
   * progress | velocity
   */
    progress: number;
    velocity: number;
    composer: any;
    constructor(element: HTMLElement, parameter: any);
    /** ********************************* 创建地球 START ******************************************** */
    createEarth(earthParameter: EarthParameter): Promise<THREE.Group>;
    /** ********************************* 创建地图描边 START ******************************************** */
    createMapBorder(geojson: any, borderParameter: BorderParameter): Promise<THREE.Group>;
    /** ********************************* 创建光晕 START ******************************************** */
    createAperture(apertureParameter: ApertureParameter, earthParameter: EarthParameter): Promise<any>;
    /** ********************************* 创建云层 START ******************************************** */
    createCloudCover(cloudCoverParameter: CloudCoverParameter, earthParameter: EarthParameter): Promise<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>;
    /** ********************************* 创建星空 START ******************************************** */
    createStarrySky(starrySkyParameter: StarrySkyParameter): Promise<THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>;
    /** ********************************* 创建航线 START ******************************************** */
    createFlightLines(data: Array<FlightLinesItem>, flightLinesParameter: FlightLinesParameter): THREE.Group;
    private createFlightLineBezierCurve;
    /** ********************************* 创建飞线 START ******************************************** */
    createFlyLines(data: Array<FlightLinesItem>, flightLinesParameter: FlyLinesParameter): Promise<THREE.Group>;
    createFlyLineMaterial(lineParameter: any): THREE.ShaderMaterial;
    private createFlyLineBezierCurve;
    private createFlyLine2DLabel;
    /** ********************************* 创建散点 START ******************************************** */
    private createScatterPoint;
    private createScatterPointMesh;
    /** ********************************* 创建旋转点 START ******************************************** */
    private createRotationPoint;
    private createRotationPointMesh;
    /** ********************************* 创建光柱 START ******************************************** */
    createLightBeamScatter(data: Array<LightBeamScatterItem>, lightBeamScatterParameter: LightBeamScatterParameter): Promise<THREE.Group>;
    private createLightBeam;
    private moveOnCurve;
    /** ********************************* 场景渲染 START ******************************************** */
    render(): void;
    start(): Promise<Earth>;
    /**
     * 进入
     */
    accessAnimation(): Promise<Boolean>;
    /** ********************************* 场景工具 START ******************************************** */
    add(...object: THREE.Object3D[] | undefined): void;
    coordinateTransform(lng: number, lat: number): THREE.Vector3;
    getBezierCurveVCoords(v0: THREE.Vector3, v3: THREE.Vector3): THREE.Vector3[];
}
