import { Mesh, PerspectiveCamera, WebGLRenderTarget } from 'three';
declare class Reflector extends Mesh {
    isReflector: boolean;
    camera: PerspectiveCamera;
    static ReflectorShader: any;
    getRenderTarget: () => WebGLRenderTarget;
    dispose(): void;
    constructor(geometry: any, options?: any);
}
export { Reflector };
