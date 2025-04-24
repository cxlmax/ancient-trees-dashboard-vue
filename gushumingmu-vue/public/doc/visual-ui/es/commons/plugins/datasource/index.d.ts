export declare class SHJDatasourceV2 {
    private static wsInstances;
    static datasourceTimer: {
        id: string;
        timer: any;
    }[];
    private static parsers;
    static addParser(type: string, parser: Function): void;
    static getParser(type: string): Function | undefined;
    /**
     * 解析数据源
     * @param sources 数据源
     * @param callback 回调函数
     * @param tId 组件id
     * @param isStore 是否存储
     * @param noUseMapping 是否不使用映射
     * @param isInterval 是否开启定时任务
     * @returns
     */
    static parse({ sources, callback, tId, isStore, noUseMapping, isInterval }: {
        sources: any;
        callback: any;
        tId: any;
        isStore?: boolean;
        noUseMapping?: boolean;
        isInterval?: boolean;
    }): Promise<unknown>;
    /**
     * 执行数据源任务
     * @param sources 数据源
     * @param isStore 是否存储
     * @param noUseMapping 是否不使用映射
     * @param tId 组件id
     * @param callback 回调函数
     * @returns
     */
    static task(sources: any, isStore: boolean, noUseMapping: boolean, tId: string, callback?: Function): Promise<unknown> | undefined;
    /**
     * 过滤数据
     * @param filter 过滤器
     * @param data 数据
     * @returns
     */
    static filterData(filter: any, data: any): Promise<unknown>;
    /**
     * 处理数据
     * @param filter 过滤器
     * @param data 数据
     * @param mappings 映射
     * @param id 组件id
     * @param dynamicMapping 是否动态映射
     * @param noUseMapping 是否不使用映射
     * @returns
     */
    static processData(filter: any, data: any, mappings: any[], id: string, dynamicMapping?: boolean, noUseMapping?: boolean): Promise<unknown>;
    /**
     * 解析数据为Key、Data格式
     * @param data 数据
     * @param mappings 映射
     * @param id 组件id
     * @returns
     */
    static parseMappedData(data: any[], mappings: any[], id: string): {
        key: string;
        data: any[];
    }[];
    /**
     * 处理数据存储
     * @param sources 数据源
     * @returns
     */
    static taskStorage(sources: any, data: any): void;
}
