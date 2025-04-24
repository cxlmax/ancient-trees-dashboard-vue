import { type Ref } from 'vue';
import type { ITabsOption } from '../types';
/**
 * 监听选项
 * @param props 选项
 * @param tabs 选项列表
 */
export declare const useTabsWatch: (props: {
    option: ITabsOption;
    sources: any;
}, initData: Function, activeTab: Ref<string>, tabs: Ref<any[]>) => void;
