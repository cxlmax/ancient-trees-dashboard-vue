import { type Ref } from 'vue';
/**
 * 通用图表
 * @param props 选项
 * @param initData 初始化数据
 * @param initView 初始化视图
 * @param chart 图表实例
 */
export declare const useCommonChart: (props: {
    option: any;
    sources: any;
}, initData: Function, initView: Function, chart: Ref<any>) => void;
