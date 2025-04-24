import * as THREE from 'three';
export declare class ObtControls {
    OrbitControls: any;
    Controls: any;
    camera: THREE.Camera;
    webGlRenderer: THREE.WebGLRenderer;
    constructor(camera: THREE.Camera, webGlRenderer: THREE.WebGLRenderer);
    init(): ObtControls;
}
