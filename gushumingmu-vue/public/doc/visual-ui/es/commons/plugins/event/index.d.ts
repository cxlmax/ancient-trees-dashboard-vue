export interface IEvent {
    id: string;
    type: 'layer' | 'widget';
    /** 事件类型 */
    eventType: string;
    /** 事件行为 */
    actions?: string;
    /** 点击某一项 */
    clickname?: string;
    /** 接收的方法 */
    receivingMethod?: string;
    /** 事件延迟 */
    delay: number;
    /** 页面行为 */
    pageAction: {
        target: string;
        pageId: string;
        parameter: string;
    };
    /** 跳转子页面行为 */
    switchViewAction: {
        viewId: string;
    };
    /** 链接行为 */
    linkAction: {
        target: string;
        url: string;
    };
    /** 发送API数据行为 */
    sendAPIAction: {
        useDataSource: any;
    };
    /** 切换状态行为 */
    stateAction: {
        speed: string;
        duration: number;
        delay: number;
        toggle: boolean;
        stateList: string[];
    };
    /** 移动行为 */
    moveAction: {
        layerIds: string[];
        x: number;
        y: number;
        speed: string;
        duration: number;
        delay: number;
    };
    /** 缩放行为 */
    scaleAction: {
        layerIds: string[];
        origin: string;
        x: number;
        y: number;
        speed: string;
        duration: number;
        delay: number;
    };
    /** 旋转行为 */
    rotateAction: {
        layerIds: string[];
        x: number;
        y: number;
        z: number;
        perspective: number;
        speed: string;
        duration: number;
        delay: number;
    };
    /** 组件显示隐藏行为 */
    visibledAction: {
        status: string;
        layerIds: string[];
    };
    /** 更新数据变量行为 */
    updateVariableAction: {
        name: string;
        dataType: 'params' | 'custom';
        useDataSource: any;
    };
    /** 全屏切换行为 */
    fullscreenAction: {
        status: string;
    };
    /** 调用方法行为 */
    invokeAction: {
        targetLayerId: string;
        functionName: string;
        functionArgs: any;
    };
    /** 虚幻蓝图方法行为 */
    ueShjExecMethodAction: {
        functionName: string;
        dataType: 'params' | 'custom';
        useDataSource: any;
        escape: boolean;
    };
    /** 虚幻WebSocket行为 */
    ueCommonsWebscoketAction: {
        socketUrl: string;
        dataType: 'params' | 'custom';
        useDataSource: any;
        escape: boolean;
    };
    /** UnityWebGl场景方法行为 */
    unityWebglExecMethodAction: {
        dataType: 'params' | 'custom';
        objectName: string;
        functionName: string;
        useDataSource: any;
    };
    /** UnityIframe场景方法行为 */
    unityIframeExecMethodAction: {
        dataType: 'params' | 'custom';
        objectName: string;
        functionName: string;
        useDataSource: any;
    };
    /** 更新组件行为 */
    updateWidget: {
        targetLayerId: string;
    };
    /** 切换全景场景行为 */
    vrSceneMethodAction: {
        type: string;
        sceneId: string;
        angle: {
            pitch: number;
            yaw: number;
            hfov: number;
        };
    };
    /** 切换全景视角行为 */
    vrSceneToggleAngleAction: {};
    /** 动画 */
    animations: {
        enter: {
            name: string;
            duration: number;
            delay: number;
            count: number;
        };
        exit: {
            name: string;
            duration: number;
            delay: number;
            count: number;
        };
    };
    /** 条件 */
    condition: {
        type: 'and' | 'or';
        list: {
            id: string;
            type: 'field' | 'custom';
            conditionName?: string;
            conditionExpression?: string;
            conditionValue?: string | number;
            customValue?: string;
        }[];
    };
    /** 事件过滤器 */
    filterCode: string;
}
export declare class SHJParseEvent {
    /** 事件动作 */
    private static actions;
    /**
     * 添加事件解析器
     * @param type 事件类型
     * @param parser 事件解析器
     */
    static addAction(type: string, parser: Function): void;
    /**
     * 获取事件解析器
     * @param type 事件类型
     * @returns 事件解析器
     */
    static getAction(type: string): Function | undefined;
    /**
     * 解析事件
     * @param events 事件
     * @param type 事件类型
     * @param params 参数
     */
    static parseEvents(events: IEvent[], type: string, params?: any): void;
    /**
     * 过滤事件返回值
     * @param event 事件
     * @param params 参数
     * @returns 过滤后的参数
     */
    static filterEvent(event: IEvent, params: any): any;
    /**
     * 条件逻辑判断
     * @param event 事件
     * @param params 参数
     * @returns 是否通过
     */
    static conditionLogic(event: IEvent, params: any): boolean;
}
