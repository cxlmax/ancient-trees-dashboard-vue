/**
 * 事件工具类
 */
export declare class EventUtils {
    /**
     * 将URL参数转换为JSON对象
     * @param urlParam - 需要转换的URL参数
     * @returns 转换后的JSON对象
     */
    static urlParamToJson(urlParam: string): any;
    /**
     * 更新组件数据
     * @param variableData 变量数据
     */
    static updateWidgetVariableData(variableData: any): void;
    /**
     * 将JSON对象转换为字符串
     * @param json - 需要转换的JSON对象
     * @returns 转换后的字符串
     */
    static toStringify(json: any): string;
}
