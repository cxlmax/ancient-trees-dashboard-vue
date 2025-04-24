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
    emits: (event: "on-change", ...args: any[]) => void;
    tabs: import("vue").Ref<any[]>;
    activeTab: import("vue").Ref<any>;
    initSourceData: () => void;
    handleClickItem: (item: any) => void;
    tabsContainer: import("vue").Ref<HTMLElement>;
    scrollStep: number;
    showNavButtons: import("vue").Ref<boolean>;
    checkScrollable: () => void;
    scrollLeft: () => void;
    scrollRight: () => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}, {}>;
export default _sfc_main;
