/**
 * 组件Ref
 */
export declare class ComponentRefs {
    static componentRefs: {
        id: string;
        ref: any;
    }[];
    /**
     * 注册组件Ref
     * @param id
     * @returns
     */
    static registerRef(id: string): (el: any) => void;
    /**
     * 获取组件Ref
     * @param id
     * @returns
     */
    static getComponentRef(id: string): {
        id: string;
        ref: any;
    };
    /**
     * 清除组件Ref
     */
    static clearComponentRefs(): void;
}
