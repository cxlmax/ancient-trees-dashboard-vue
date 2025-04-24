import { ItemCommonsStyle, ItemTextStyle, IItemStyle } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
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
    useLoopIterator: () => {
        init: () => void;
        key: import("vue").Ref<string>;
        loopData: import("vue").Ref<any[]>;
        renderItemStyle: (style: IItemStyle) => {
            gridTemplateColumns: string;
            alignItems: string;
            rowGap: string;
            columnGap: string;
            borderWidth: string;
            borderColor: string;
            borderStyle: string;
            background: string;
            boxShadow: string;
        };
        renderImageStyle: (style: ItemCommonsStyle & ItemTextStyle) => {
            width: string;
            height: string;
            objectFit: any;
            borderWidth: string;
            borderColor: string;
            borderStyle: string;
            boxShadow: string;
            padding: string;
        } | {
            width?: undefined;
            height?: undefined;
            objectFit?: undefined;
            borderWidth?: undefined;
            borderColor?: undefined;
            borderStyle?: undefined;
            boxShadow?: undefined;
            padding?: undefined;
        };
        renderTextStyle: (style: ItemCommonsStyle & ItemTextStyle) => {
            width: string;
            height: string;
            color: string;
            fontSize: string;
            fontFamily: string;
            fontStyle: string;
            boxShadow: string;
            padding: string;
        } | {
            width?: undefined;
            height?: undefined;
            color?: undefined;
            fontSize?: undefined;
            fontFamily?: undefined;
            fontStyle?: undefined;
            boxShadow?: undefined;
            padding?: undefined;
        };
        renderLoopWrapStyle: (style: any) => {
            overflow: any;
            gridTemplateColumns: string;
            rowGap: string;
            columnGap: string;
            borderWidth: string;
            borderColor: any;
            borderStyle: any;
            background: any;
            boxShadow: string;
        };
    };
    init: () => void;
    key: import("vue").Ref<string>;
    loopData: import("vue").Ref<any[]>;
    renderImageStyle: (style: ItemCommonsStyle & ItemTextStyle) => {
        width: string;
        height: string;
        objectFit: any;
        borderWidth: string;
        borderColor: string;
        borderStyle: string;
        boxShadow: string;
        padding: string;
    } | {
        width?: undefined;
        height?: undefined;
        objectFit?: undefined;
        borderWidth?: undefined;
        borderColor?: undefined;
        borderStyle?: undefined;
        boxShadow?: undefined;
        padding?: undefined;
    };
    renderTextStyle: (style: ItemCommonsStyle & ItemTextStyle) => {
        width: string;
        height: string;
        color: string;
        fontSize: string;
        fontFamily: string;
        fontStyle: string;
        boxShadow: string;
        padding: string;
    } | {
        width?: undefined;
        height?: undefined;
        color?: undefined;
        fontSize?: undefined;
        fontFamily?: undefined;
        fontStyle?: undefined;
        boxShadow?: undefined;
        padding?: undefined;
    };
    renderItemStyle: (style: IItemStyle) => {
        gridTemplateColumns: string;
        alignItems: string;
        rowGap: string;
        columnGap: string;
        borderWidth: string;
        borderColor: string;
        borderStyle: string;
        background: string;
        boxShadow: string;
    };
    renderLoopWrapStyle: (style: any) => {
        overflow: any;
        gridTemplateColumns: string;
        rowGap: string;
        columnGap: string;
        borderWidth: string;
        borderColor: any;
        borderStyle: any;
        background: any;
        boxShadow: string;
    };
    emit: (event: "on-change", ...args: any[]) => void;
    handleClickItem: (data: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
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
