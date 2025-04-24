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
    emits: (event: "on-click-item", ...args: any[]) => void;
    scroll: import("vue").Ref<boolean>;
    listData: import("vue").Ref<any[]>;
    initSourceData: () => void;
    readonly Vue3SeamlessScroll: import("vue").DefineComponent<OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, {}>;
    readonly Utils: typeof Utils;
    CommonsText: import("vue").DefineComponent<{
        textStyle: {
            type: any;
            required: true;
        };
        text: {
            type: StringConstructor;
            required: true;
        };
    }, {
        props: any;
        readonly Utils: typeof Utils;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        textStyle: {
            type: any;
            required: true;
        };
        text: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click-item"[], "on-click-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onOn-click-item"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
