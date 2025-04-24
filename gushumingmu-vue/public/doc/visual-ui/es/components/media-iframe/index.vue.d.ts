declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    iframeRef: import("vue").Ref<any>;
    props: any;
    emit: (event: "on-iframe-event-listener", ...args: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-iframe-event-listener"[], "on-iframe-event-listener", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-iframe-event-listener"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
