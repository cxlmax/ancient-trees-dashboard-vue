export declare const ZvTextTableScroll: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
}, {
    emit: (event: "on-click-item" | "on-click-row" | "on-mouseenter-row" | "on-mouseout-row", ...args: any[]) => void;
    key: import("vue").Ref<string>;
    data: import("vue").Ref<any[]>;
    props: any;
    scroll: import("vue").Ref<boolean>;
    init: () => void;
    getTds: (item: any) => any[];
    getCurrentColumnFontAuto: (index: any) => any;
    getCurrentColumnFont: (index: any) => any;
    getCurrentColumnWidthAuto: (index: any) => any;
    getCurrentColumnWidth: (index: any) => any;
    handleClickRow: (row: any, rowIndex: any) => void;
    handleMouseenterRow: (row: any, rowIndex: any) => void;
    handleMouseOutRow: (row: any, rowIndex: any) => void;
    handleClickItem: (trData: any, tdData: any, trIndex: number, tdIndex: number) => void;
    readonly Vue3SeamlessScroll: import("vue").DefineComponent<OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, OptionsType, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click-item" | "on-click-row" | "on-mouseenter-row" | "on-mouseout-row")[], "on-click-item" | "on-click-row" | "on-mouseenter-row" | "on-mouseout-row", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onOn-click-item"?: (...args: any[]) => any;
    "onOn-click-row"?: (...args: any[]) => any;
    "onOn-mouseenter-row"?: (...args: any[]) => any;
    "onOn-mouseout-row"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvTextTableScroll;
