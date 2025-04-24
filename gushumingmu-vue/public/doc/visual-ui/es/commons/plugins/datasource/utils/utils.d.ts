/**
 * 数据源工具类
 */
export declare class DataSourceUtils {
    /**
     * 解析URL中是否包含全局变量
     * @param url URL
     * @param variableData 变量数据
     * @returns 解析后的URL
     */
    static replaceURLVariables(url: string, variableData: any[]): string;
    /**
     * 解析对象中是否包含全局变量
     * @param obj 对象
     * @param variableData 变量数据
     * @returns 解析后的对象
     */
    static replaceObjectVariables(obj: any, variableData: any[]): any;
    /**
     * 解析字符串中是否包含全局变量
     * @param str 字符串
     * @param variableData 变量数据
     * @returns 解析后的字符串
     */
    static replaceStringVariables(str: string, variableData: any[]): string;
    /**
     * 解析环境变量
     * @param url URL
     * @param environments 环境变量
     * @returns 解析后的环境变量
     */
    static replaceEnvVariables(url: string, environments: any[]): string;
    /**
     * 返回空数据
     * @param id 数据源 ID
     * @returns 空数据
     */
    static noneData(id: string): {
        id: string;
        finalKeyData: any[];
        finalUserData: {
            id: string;
            data: any[];
        };
        filteredData: any[];
        rawData: any[];
        noMappingData: any[];
    };
    /**
     * 获取环境变量
     * @returns 环境变量
     */
    static getEnvironments(): any;
    /**
     * 设置环境变量
     * @param environments 环境变量
     */
    static setEnvironments(environments: any): void;
    /**
     * 获取变量数据
     * @returns 变量数据
     */
    static getVariableData(): any;
    /**
     * 设置变量数据
     * @param variableData 变量数据
     */
    static setVariableData(variableData: any): void;
    /**
     * 检查 WebSocket 是否已存在且有效
     * @param wsInstances WebSocket 实例
     * @param tId WebSocket 实例的 ID
     * @param sourceId WebSocket 实例的源 ID
     * @returns 是否有效
     */
    static hasValidWebSocket(wsInstances: any, tId: string, sourceId: string): boolean;
    /**
     * 只在必要时清理 WebSocket 连接
     * @param wsInstances WebSocket 实例
     * @param sourceIds 源 ID
     * @param tId WebSocket 实例的 ID
     */
    static cleanupPreviousWebSockets(wsInstances: any, sourceIds: string[], tId: string): void;
    /**
     * 使用 Function 构造函数获取对象中的嵌套值（更简洁但安全性较低）
     * @param obj 源对象
     * @param path 路径字符串，例如 ".a[0].value"
     * @returns 获取到的值，如果路径不存在则返回 undefined
     */
    static getNestedValue(obj: any, path: string): any;
    /**
     * 从路径字符串中提取变量名
     * @param path 路径字符串，例如 "测试.test" 或 "333[0].aa"
     * @returns 提取出的变量名
     */
    static extractVariableName(path: string): string;
}
