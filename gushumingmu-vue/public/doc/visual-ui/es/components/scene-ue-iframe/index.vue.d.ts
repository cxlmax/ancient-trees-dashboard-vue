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
}, {
    props: any;
    emit: (event: "ue-scoket-on-message", ...args: any[]) => void;
    useUeScene: (basicOption: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ue-scoket-on-message"[], "ue-scoket-on-message", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    "onUe-scoket-on-message"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
