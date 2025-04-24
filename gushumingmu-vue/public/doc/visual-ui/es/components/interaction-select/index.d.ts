export declare const ZvInteractionSelect: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    basicOption: {
        type: ObjectConstructor;
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
    useSelect: () => {
        key: import("vue").Ref<string>;
        init: () => void;
        options: import("vue").Ref<{
            value: string | number;
            label: string;
            type: string;
        }[]>;
        selectRef: import("vue").Ref<any>;
        rendererSelectInput: (inputCss: any) => {};
        rendererSelectOption: (optionCss: any) => {
            padding: string;
        };
        rendererSelectDropdown: (dropdownCss: any) => {
            top: string;
            marginTop: string;
            boxShadow: string;
            padding: string;
        } | {
            bottom: string;
            marginBottom: string;
            boxShadow: string;
            padding: string;
        };
        rendererSelectSelected: (selectedCss: any) => {
            [x: string]: string;
        };
        rendererSelectPlaceholder: (placeholderCss: any) => {
            [x: string]: string;
        };
        rendererPrefixIcon: (type: string, prefixs: any[]) => any;
        rendererPrefixIconCss: (type: string, prefixs: any[]) => {
            [x: string]: string;
        };
    };
    modelValue: import("vue").Ref<string | number>;
    emit: (event: "on-change" | "update:modelValue", ...args: any[]) => void;
    isOpen: import("vue").Ref<boolean>;
    selectedLabel: import("vue").ComputedRef<string>;
    toggleDropdown: () => void;
    selectedType: import("vue").Ref<string>;
    selectOption: (option: import("./index.vue").ISelectOption) => void;
    closeDropdown: () => void;
    key: import("vue").Ref<string>;
    init: () => void;
    options: import("vue").Ref<{
        value: string | number;
        label: string;
        type: string;
    }[]>;
    selectRef: import("vue").Ref<any>;
    rendererSelectInput: (inputCss: any) => {};
    rendererSelectOption: (optionCss: any) => {
        padding: string;
    };
    rendererSelectDropdown: (dropdownCss: any) => {
        top: string;
        marginTop: string;
        boxShadow: string;
        padding: string;
    } | {
        bottom: string;
        marginBottom: string;
        boxShadow: string;
        padding: string;
    };
    rendererSelectSelected: (selectedCss: any) => {
        [x: string]: string;
    };
    rendererSelectPlaceholder: (placeholderCss: any) => {
        [x: string]: string;
    };
    rendererPrefixIcon: (type: string, prefixs: any[]) => any;
    rendererPrefixIconCss: (type: string, prefixs: any[]) => {
        [x: string]: string;
    };
    readonly vClickOutSide: {
        beforeMount(el: any, binding: any): void;
        unmounted(el: any): void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-change" | "update:modelValue")[], "on-change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: ObjectConstructor;
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
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvInteractionSelect;
