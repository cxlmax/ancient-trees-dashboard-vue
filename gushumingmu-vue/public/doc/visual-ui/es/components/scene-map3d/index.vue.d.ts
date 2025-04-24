import { World } from './map3d/map';
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {
    props: any;
    emit: (event: "on-loaded" | "on-animated" | "on-drill-down" | "on-area-mouseover" | "on-area-mouseout" | "on-area-click" | "on-bar-click" | "on-scatter-click" | "on-flyline-click" | "on-return" | "on-data-change", ...args: any[]) => void;
    app: import("vue").Ref<any>;
    loading: import("vue").Ref<boolean>;
    loading2: import("vue").Ref<boolean>;
    canvasId: string;
    canvasWrapId: string;
    history: any;
    goBackShow: import("vue").Ref<boolean>;
    initData: (isAnimation?: boolean) => void;
    initDom: () => void;
    createWorld: (option: any) => World;
    goBack: () => void;
    cleanAndCreateWorld: () => void;
    setCameraPosition: (x: number, y: number, z: number) => void;
    fps: import("vue").Ref<number>;
    buttonRef: import("vue").Ref<any>;
    rendererDomStyle: (css: any) => {};
    widgetList: import("vue").Ref<any>;
    getRegionalLevelWidget: import("vue").ComputedRef<any>;
    toggleWdiget: (item: any) => void;
    toggleWdigetAll: () => void;
    rendererDomStyleWidgetControl: (css: any) => {
        'background-image': string;
        '--hover-background-image': string;
        '--active-background-image': string;
    };
    repUrl: (url: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-loaded" | "on-animated" | "on-drill-down" | "on-area-mouseover" | "on-area-mouseout" | "on-area-click" | "on-bar-click" | "on-scatter-click" | "on-flyline-click" | "on-return" | "on-data-change")[], "on-loaded" | "on-animated" | "on-drill-down" | "on-area-mouseover" | "on-area-mouseout" | "on-area-click" | "on-bar-click" | "on-scatter-click" | "on-flyline-click" | "on-return" | "on-data-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    "onOn-loaded"?: (...args: any[]) => any;
    "onOn-animated"?: (...args: any[]) => any;
    "onOn-drill-down"?: (...args: any[]) => any;
    "onOn-area-mouseover"?: (...args: any[]) => any;
    "onOn-area-mouseout"?: (...args: any[]) => any;
    "onOn-area-click"?: (...args: any[]) => any;
    "onOn-bar-click"?: (...args: any[]) => any;
    "onOn-scatter-click"?: (...args: any[]) => any;
    "onOn-flyline-click"?: (...args: any[]) => any;
    "onOn-return"?: (...args: any[]) => any;
    "onOn-data-change"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
