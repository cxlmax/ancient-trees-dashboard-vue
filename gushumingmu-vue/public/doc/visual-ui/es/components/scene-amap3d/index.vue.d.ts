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
    emit: (event: "amap3d-scene-success" | "amap3d-scene-zoomstart" | "amap3d-scene-zoomend" | "amap3d-scene-mapclick" | "amap3d-scene-dragstart" | "amap3d-scene-dragging" | "amap3d-scene-dragend" | "amap3d-scene-pulseLinkLayer", ...args: any[]) => void;
    useAMap3d: () => {
        initAMap3d: (option: any) => void;
        updateAMapStyle: (option: any) => void;
        updateAMapConfig: (option: any) => void;
        updateAMapComponents: () => void;
        updateAMapZoom: (option: any) => void;
        updateAMapCenter: (option: any) => void;
        amap3d: import("vue").ShallowRef<any>;
        loading: import("vue").Ref<boolean>;
        AMapPrototype: import("vue").Ref<any>;
    };
    initAMap3d: (option: any) => void;
    updateAMapStyle: (option: any) => void;
    updateAMapConfig: (option: any) => void;
    updateAMapComponents: () => void;
    updateAMapZoom: (option: any) => void;
    updateAMapCenter: (option: any) => void;
    loading: import("vue").Ref<boolean>;
    AMapPrototype: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("amap3d-scene-success" | "amap3d-scene-zoomstart" | "amap3d-scene-zoomend" | "amap3d-scene-mapclick" | "amap3d-scene-dragstart" | "amap3d-scene-dragging" | "amap3d-scene-dragend" | "amap3d-scene-pulseLinkLayer")[], "amap3d-scene-success" | "amap3d-scene-zoomstart" | "amap3d-scene-zoomend" | "amap3d-scene-mapclick" | "amap3d-scene-dragstart" | "amap3d-scene-dragging" | "amap3d-scene-dragend" | "amap3d-scene-pulseLinkLayer", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onAmap3d-scene-success"?: (...args: any[]) => any;
    "onAmap3d-scene-zoomstart"?: (...args: any[]) => any;
    "onAmap3d-scene-zoomend"?: (...args: any[]) => any;
    "onAmap3d-scene-mapclick"?: (...args: any[]) => any;
    "onAmap3d-scene-dragstart"?: (...args: any[]) => any;
    "onAmap3d-scene-dragging"?: (...args: any[]) => any;
    "onAmap3d-scene-dragend"?: (...args: any[]) => any;
    "onAmap3d-scene-pulseLinkLayer"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
