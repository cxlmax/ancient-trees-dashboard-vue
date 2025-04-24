export declare const ZvChartOtherForce: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
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
    emit: (event: "chart-click" | "chart-dblclick" | "chart-mousedown" | "chart-mouseover" | "chart-mouseout" | "chart-contextmenu", ...args: any[]) => void;
    id: string;
    setOption: (optionParams: any, type?: any) => void;
    chart: import("vue").ShallowRef<import("echarts/types/dist/echarts").ECharts>;
    renderChart: import("lodash").DebouncedFunc<(option: import("echarts/types/dist/echarts").EChartsOption) => void>;
    renderData: Function;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("chart-click" | "chart-dblclick" | "chart-mousedown" | "chart-mouseover" | "chart-mouseout" | "chart-contextmenu")[], "chart-click" | "chart-dblclick" | "chart-mousedown" | "chart-mouseover" | "chart-mouseout" | "chart-contextmenu", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onChart-click"?: (...args: any[]) => any;
    "onChart-dblclick"?: (...args: any[]) => any;
    "onChart-mousedown"?: (...args: any[]) => any;
    "onChart-mouseover"?: (...args: any[]) => any;
    "onChart-mouseout"?: (...args: any[]) => any;
    "onChart-contextmenu"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvChartOtherForce;
