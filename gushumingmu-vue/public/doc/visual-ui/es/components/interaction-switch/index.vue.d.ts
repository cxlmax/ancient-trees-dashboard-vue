declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
}, {
    emit: (event: "on-change" | "on-open" | "on-close", ...args: any[]) => void;
    props: any;
    switchValue: import("vue").Ref<any>;
    handleChange: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "on-open" | "on-close")[], "on-change" | "on-open" | "on-close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
}>> & {
    "onOn-change"?: (...args: any[]) => any;
    "onOn-open"?: (...args: any[]) => any;
    "onOn-close"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
