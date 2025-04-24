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
    emit: (event: "unity-scene-on-message", ...args: any[]) => void;
    useUnityScene: () => {
        unityIframeRef: import("vue").Ref<any>;
    };
    unityIframeRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "unity-scene-on-message"[], "unity-scene-on-message", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onUnity-scene-on-message"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
