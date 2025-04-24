import * as echarts from 'echarts';
export interface IUseChart {
    basicOption: any;
    useEvents: any[];
    customRenderData: Function;
    emits: any;
}
export declare const useChart: ({ basicOption, useEvents, customRenderData, emits }: IUseChart) => {
    id: string;
    status: import("vue").Ref<boolean>;
    chart: import("vue").ShallowRef<echarts.ECharts>;
    setOption: (optionParams: any, type?: any) => void;
    renderChart: import("lodash").DebouncedFunc<(option: echarts.EChartsOption) => void>;
    renderData: Function;
};
