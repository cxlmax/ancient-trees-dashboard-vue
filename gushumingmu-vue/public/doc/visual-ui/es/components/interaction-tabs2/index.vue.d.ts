declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
}, {
    emit: (event: "on-change" | "on-click-item", ...args: any[]) => void;
    props: any;
    useTabs: () => {
        rendererTabDomStyle: (tabCss: any) => {
            [x: string]: string;
        };
        rendererTabItemDomStyle: (itemCss: any) => {};
        tabsRef: import("vue").Ref<any>;
    };
    tabList: import("vue").Ref<any[]>;
    handleEvent: (item: any) => void;
    rendererTabDomStyle: (tabCss: any) => {
        [x: string]: string;
    };
    rendererTabItemDomStyle: (itemCss: any) => {};
    tabsRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "on-click-item")[], "on-change" | "on-click-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    sceneOption: {
        type: any;
        required: true;
    };
}>> & {
    "onOn-change"?: (...args: any[]) => any;
    "onOn-click-item"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
