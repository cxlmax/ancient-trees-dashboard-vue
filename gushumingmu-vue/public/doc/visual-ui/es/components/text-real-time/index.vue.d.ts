declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    datasource: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    emit: (event: "on-change", ...args: any[]) => void;
    props: any;
    useRealTime: (option: any) => {
        updateRealTime: (format: string) => void;
        realTime: import("vue").Ref<string>;
        rendererDomStyle: (css: any) => any;
    };
    updateRealTime: (format: string) => void;
    realTime: import("vue").Ref<string>;
    rendererDomStyle: (css: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    datasource: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-change"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
