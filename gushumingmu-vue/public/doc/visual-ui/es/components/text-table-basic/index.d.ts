export declare const ZvTextTableBasic: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
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
    patchColumns: () => void;
    columns: import("vue").ComputedRef<any>;
    visibleColumns: import("vue").ComputedRef<any>;
    init: () => void;
    getColumnWidth: (name: string) => string;
    getColumnFontStyle: (name: string) => {
        color: any;
        fontSize: string;
        fontStyle: any;
    };
    getTextStyle: (col: string) => any;
    handleClickRow: import("lodash").DebouncedFunc<(row: any, rowIndex: any) => void>;
    handleMouseenterRow: import("lodash").DebouncedFunc<(row: any, rowIndex: any) => void>;
    handleMouseOutRow: import("lodash").DebouncedFunc<(row: any, rowIndex: any) => void>;
    handleClickItem: import("lodash").DebouncedFunc<(trData: any, tdData: any, trIndex: number, tdIndex: number) => void>;
    readonly RecycleScroller: any;
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
export default ZvTextTableBasic;
