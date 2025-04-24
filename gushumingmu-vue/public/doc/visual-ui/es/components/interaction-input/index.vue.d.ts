declare const _sfc_main: import("vue").DefineComponent<{
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
    emit: (event: "on-change" | "on-blur" | "on-focus" | "on-input", ...args: any[]) => void;
    useInput: () => {
        key: import("vue").Ref<string>;
        init: () => void;
        rendererDomStyle: (css: any) => {
            [x: string]: string;
        };
        inputRef: import("vue").Ref<any>;
        inputValue: import("vue").Ref<string>;
    };
    key: import("vue").Ref<string>;
    init: () => void;
    rendererDomStyle: (css: any) => {
        [x: string]: string;
    };
    inputRef: import("vue").Ref<any>;
    inputValue: import("vue").Ref<string>;
    onInputBlur: (e: FocusEvent) => void;
    onInputFocus: (e: FocusEvent) => void;
    onInputInput: (e: Event) => void;
    onInputChange: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "on-blur" | "on-focus" | "on-input")[], "on-change" | "on-blur" | "on-focus" | "on-input", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onOn-change"?: (...args: any[]) => any;
    "onOn-blur"?: (...args: any[]) => any;
    "onOn-focus"?: (...args: any[]) => any;
    "onOn-input"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
