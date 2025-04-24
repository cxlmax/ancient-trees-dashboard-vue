import * as BABYLON from '@babylonjs/core';
declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    basicEvents: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    emit: (event: "on-load-success" | "on-play-animation", ...args: any[]) => void;
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;
    camera: BABYLON.ArcRotateCamera;
    directionalLight: BABYLON.DirectionalLight;
    directionalLightGizmo: BABYLON.LightGizmo;
    shadowGenerator: BABYLON.ShadowGenerator;
    hemisphericLight: BABYLON.HemisphericLight;
    hemisphericLightGizmo: BABYLON.LightGizmo;
    ground: BABYLON.GroundMesh;
    skybox: BABYLON.Mesh;
    meshes: BABYLON.AbstractMesh[];
    defaultPipeline: BABYLON.DefaultRenderingPipeline;
    setCamera: () => void;
    setScene: () => void;
    setDirectionalLight: () => void;
    setHemisphericLight: () => void;
    setGround: () => void;
    setSkybox: () => void;
    playAnimation: (name: string, option?: {
        loop: boolean;
        speedRatio: number;
    }) => void;
    setMeshes: () => Promise<void>;
    setPipeline: () => void;
    createScene: (engine: any) => void;
    canvasRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-load-success" | "on-play-animation")[], "on-load-success" | "on-play-animation", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    basicEvents: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-load-success"?: (...args: any[]) => any;
    "onOn-play-animation"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
