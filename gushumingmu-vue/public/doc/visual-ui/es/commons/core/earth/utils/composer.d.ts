import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
export interface IUnrealBloomPass {
    enable?: boolean;
    strength?: number;
    radius?: number;
    threshold?: number;
}
export interface IGlitchPass {
    enable?: boolean;
    dtSize?: number;
}
export interface IDotScreenPass {
    enable?: boolean;
    angle?: number;
    scale?: number;
}
export interface IFilmPass {
    enable?: boolean;
    noiseIntensity?: number;
    scanlinesIntensity?: number;
    scanlinesCount?: number;
    grayscale?: number;
}
export interface IComposer {
    unrealBloomPass?: IUnrealBloomPass;
    glitchPass?: IGlitchPass;
    dotScreenPass?: IDotScreenPass;
    filmPass?: IFilmPass;
}
/**
 * 创建后期效果通道
 * @param renderer
 * @param scene
 * @param camera
 * @returns
 */
export declare const createComposer: (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, composer?: IComposer) => EffectComposer;
