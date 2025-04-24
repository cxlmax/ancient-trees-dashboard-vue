import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { SceneInterface, SceneParameter, AmbientLightParameter, GridHelperParameter, AxesHelperParameter, DirectionalLightParameter } from './interface';
export declare class Scene implements SceneInterface {
    stats: any;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    webGlRenderer: THREE.WebGLRenderer;
    labelRenderer: CSS2DRenderer;
    element: HTMLElement;
    animationFrameId: number;
    textures: any;
    constructor(element: HTMLElement, sceneParameter: SceneParameter);
    createScene(sceneParameter: SceneParameter): THREE.Scene;
    createCamera(element: HTMLElement): THREE.PerspectiveCamera;
    createWebGLRenderer(element: HTMLElement): THREE.WebGLRenderer;
    createAmbientLight(option: AmbientLightParameter): THREE.AmbientLight;
    createDirectionalLight(option: DirectionalLightParameter): THREE.DirectionalLight;
    createGridHelper(option: GridHelperParameter): THREE.GridHelper | undefined;
    createAxesHelper(option: AxesHelperParameter): THREE.AxesHelper | undefined;
    createStats(sceneParameter: SceneParameter): any;
    resize(): void;
    render(): void;
    add(...object: THREE.Object3D[] | undefined): void;
    dispose(): void;
    onWindowResize(element: HTMLElement): void;
    loadTextures(texturePaths: any, callback: any): void;
}
