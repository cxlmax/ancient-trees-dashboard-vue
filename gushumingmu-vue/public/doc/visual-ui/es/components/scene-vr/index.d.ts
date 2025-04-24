export declare const ZvSceneVr: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
    isPreview: {
        type: BooleanConstructor;
        required: true;
    };
    disableDrag: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    props: any;
    emit: (event: "on-scene-loaded" | "on-scene-scenechange" | "on-scene-zooming" | "on-scene-hotClick", ...args: any[]) => void;
    audioRef: import("vue").Ref<HTMLAudioElement>;
    audio: import("vue").Ref<{
        src: string;
        autoplay: boolean;
        loop: boolean;
        volume: number;
    }>;
    videojsObj: import("vue").Ref<any>;
    defaultScene: import("vue").Ref<string>;
    currentScene: import("vue").Ref<string>;
    currentSceneOption: import("vue").ComputedRef<any>;
    strings: {
        bylineLabel: string;
        noPanoramaError: string;
        fileAccessError: string;
        malformedURLError: string;
        iOS8WebGLError: string;
        genericWebGLError: string;
        textureSizeError: string;
        unknownError: string;
    };
    initVrImageScene: () => void;
    initVrVideoScene: () => void;
    initVrViewer: () => void;
    activeScene: import("vue").Ref<string>;
    sceneList: import("vue").ComputedRef<any[]>;
    handleSelectScene: (key: any) => void;
    sceneMenuRef: import("vue").Ref<any>;
    sceneMenuDialog: import("vue").Ref<boolean>;
    handleOpenSceneSelect: () => void;
    controlUp: () => void;
    controlDown: () => void;
    controlLeft: () => void;
    controlRight: () => void;
    controlZoomIn: () => void;
    controlZoomOut: () => void;
    audioPlayStatus: import("vue").Ref<boolean>;
    playBackgroundMusic: (type: string) => void;
    controlStartAutoRotate: () => void;
    mouseTipShowTimer: NodeJS.Timeout;
    mouseTipShow: import("vue").Ref<boolean>;
    startMouseTip: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-scene-loaded" | "on-scene-scenechange" | "on-scene-zooming" | "on-scene-hotClick")[], "on-scene-loaded" | "on-scene-scenechange" | "on-scene-zooming" | "on-scene-hotClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
    isPreview: {
        type: BooleanConstructor;
        required: true;
    };
    disableDrag: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onOn-scene-loaded"?: (...args: any[]) => any;
    "onOn-scene-scenechange"?: (...args: any[]) => any;
    "onOn-scene-zooming"?: (...args: any[]) => any;
    "onOn-scene-hotClick"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvSceneVr;
