export declare const ZvCommonsThreeLoader3: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
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
    engine: import("@babylonjs/core").Engine;
    scene: import("@babylonjs/core").Scene;
    camera: import("@babylonjs/core").ArcRotateCamera;
    directionalLight: import("@babylonjs/core").DirectionalLight;
    directionalLightGizmo: import("@babylonjs/core").LightGizmo;
    shadowGenerator: import("@babylonjs/core").ShadowGenerator;
    hemisphericLight: import("@babylonjs/core").HemisphericLight;
    hemisphericLightGizmo: import("@babylonjs/core").LightGizmo;
    ground: import("@babylonjs/core").GroundMesh;
    skybox: import("@babylonjs/core").Mesh;
    meshes: import("@babylonjs/core").AbstractMesh[];
    defaultPipeline: import("@babylonjs/core").DefaultRenderingPipeline;
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
}, {}, {}>> & Record<string, any>;
export default ZvCommonsThreeLoader3;
