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
    emit: (event: "amap2d-scene-success" | "amap2d-scene-zoomstart" | "amap2d-scene-zoomend" | "amap2d-scene-mapclick" | "amap2d-scene-dragstart" | "amap2d-scene-dragging" | "amap2d-scene-dragend", ...args: any[]) => void;
    useAMap2d: () => {
        initAMap2d: (option: any) => void;
        updateAMapStyle: (option: any) => void;
        updateAMapConfig: (option: any) => void;
        updateAMapComponents: () => void;
        updateAMapZoom: (option: any) => void;
        updateAMapCenter: (option: any) => void;
        amap2d: import("vue").ShallowRef<any>;
        loading: import("vue").Ref<boolean>;
        AMapPrototype: import("vue").Ref<any>;
    };
    initAMap2d: (option: any) => void;
    updateAMapStyle: (option: any) => void;
    updateAMapConfig: (option: any) => void;
    updateAMapComponents: () => void;
    updateAMapZoom: (option: any) => void;
    updateAMapCenter: (option: any) => void;
    loading: import("vue").Ref<boolean>;
    AMapPrototype: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("amap2d-scene-success" | "amap2d-scene-zoomstart" | "amap2d-scene-zoomend" | "amap2d-scene-mapclick" | "amap2d-scene-dragstart" | "amap2d-scene-dragging" | "amap2d-scene-dragend")[], "amap2d-scene-success" | "amap2d-scene-zoomstart" | "amap2d-scene-zoomend" | "amap2d-scene-mapclick" | "amap2d-scene-dragstart" | "amap2d-scene-dragging" | "amap2d-scene-dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onAmap2d-scene-success"?: (...args: any[]) => any;
    "onAmap2d-scene-zoomstart"?: (...args: any[]) => any;
    "onAmap2d-scene-zoomend"?: (...args: any[]) => any;
    "onAmap2d-scene-mapclick"?: (...args: any[]) => any;
    "onAmap2d-scene-dragstart"?: (...args: any[]) => any;
    "onAmap2d-scene-dragging"?: (...args: any[]) => any;
    "onAmap2d-scene-dragend"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
