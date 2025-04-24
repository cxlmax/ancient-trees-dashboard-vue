import { Utils } from '../../../commons/utils/utils';
declare const _sfc_main: import("vue").DefineComponent<{
    option: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
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
    emits: (event: "on-change" | "on-click-item", ...args: any[]) => void;
    text: import("vue").Ref<string>;
    initSourceData: () => void;
    readonly Utils: typeof Utils;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "on-click-item")[], "on-change" | "on-click-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
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
    "onOn-change"?: (...args: any[]) => any;
    "onOn-click-item"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
