export declare const ShjInteractionDatePicker: import("../../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    option: {
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
    emits: (event: "on-change", ...args: any[]) => void;
    dateValue: import("vue").Ref<any>;
    refreshKey: import("vue").Ref<string>;
    initView: () => string;
    initSourceData: () => void;
    handleDate: (modelData: any) => void;
    handleSetDate: (type: "today" | "yesterday" | "before-yesterday") => void;
    handleSetRangeDate: (type: "last-7" | "last-15" | "last-30" | "last-365") => void;
    readonly VueDatePicker: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<string[]> | import("vue").ExtractPropTypes<import("vue").ComponentObjectPropsOptions<import("@vuepic/vue-datepicker").VueDatePickerProps>>> & {
            onBlur?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
            "onUpdate:model-value"?: (...args: any[]) => any;
            "onUpdate:model-timezone-value"?: (...args: any[]) => any;
            "onText-submit"?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            onCleared?: (...args: any[]) => any;
            "onInternal-model-change"?: (...args: any[]) => any;
            "onRecalculate-position"?: (...args: any[]) => any;
            "onFlow-step"?: (...args: any[]) => any;
            "onUpdate-month-year"?: (...args: any[]) => any;
            "onInvalid-select"?: (...args: any[]) => any;
            "onTooltip-open"?: (...args: any[]) => any;
            "onTooltip-close"?: (...args: any[]) => any;
            "onInvalid-fixed-range"?: (...args: any[]) => any;
            "onTime-picker-open"?: (...args: any[]) => any;
            "onTime-picker-close"?: (...args: any[]) => any;
            "onAm-pm-change"?: (...args: any[]) => any;
            "onRange-start"?: (...args: any[]) => any;
            "onRange-end"?: (...args: any[]) => any;
            "onDate-update"?: (...args: any[]) => any;
            "onInvalid-date"?: (...args: any[]) => any;
            "onOverlay-toggle"?: (...args: any[]) => any;
            "onText-input"?: (...args: any[]) => any;
        }, {}, {}, import("vue").ComputedOptions, import("@vuepic/vue-datepicker").PublicMethods, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("@vuepic/vue-datepicker").EmitEvents[], import("@vuepic/vue-datepicker").VueDatePickerProps & (Readonly<import("vue").ExtractPropTypes<string[]> | import("vue").ExtractPropTypes<import("vue").ComponentObjectPropsOptions<import("@vuepic/vue-datepicker").VueDatePickerProps>>> & {
            onBlur?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
            "onUpdate:model-value"?: (...args: any[]) => any;
            "onUpdate:model-timezone-value"?: (...args: any[]) => any;
            "onText-submit"?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            onCleared?: (...args: any[]) => any;
            "onInternal-model-change"?: (...args: any[]) => any;
            "onRecalculate-position"?: (...args: any[]) => any;
            "onFlow-step"?: (...args: any[]) => any;
            "onUpdate-month-year"?: (...args: any[]) => any;
            "onInvalid-select"?: (...args: any[]) => any;
            "onTooltip-open"?: (...args: any[]) => any;
            "onTooltip-close"?: (...args: any[]) => any;
            "onInvalid-fixed-range"?: (...args: any[]) => any;
            "onTime-picker-open"?: (...args: any[]) => any;
            "onTime-picker-close"?: (...args: any[]) => any;
            "onAm-pm-change"?: (...args: any[]) => any;
            "onRange-start"?: (...args: any[]) => any;
            "onRange-end"?: (...args: any[]) => any;
            "onDate-update"?: (...args: any[]) => any;
            "onInvalid-date"?: (...args: any[]) => any;
            "onOverlay-toggle"?: (...args: any[]) => any;
            "onText-input"?: (...args: any[]) => any;
        }), {
            [x: number]: string;
        } | {}, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {} & (Readonly<import("vue").ExtractPropTypes<string[]> | import("vue").ExtractPropTypes<import("vue").ComponentObjectPropsOptions<import("@vuepic/vue-datepicker").VueDatePickerProps>>> & {
            onBlur?: (...args: any[]) => any;
            onFocus?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
            "onUpdate:model-value"?: (...args: any[]) => any;
            "onUpdate:model-timezone-value"?: (...args: any[]) => any;
            "onText-submit"?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            onCleared?: (...args: any[]) => any;
            "onInternal-model-change"?: (...args: any[]) => any;
            "onRecalculate-position"?: (...args: any[]) => any;
            "onFlow-step"?: (...args: any[]) => any;
            "onUpdate-month-year"?: (...args: any[]) => any;
            "onInvalid-select"?: (...args: any[]) => any;
            "onTooltip-open"?: (...args: any[]) => any;
            "onTooltip-close"?: (...args: any[]) => any;
            "onInvalid-fixed-range"?: (...args: any[]) => any;
            "onTime-picker-open"?: (...args: any[]) => any;
            "onTime-picker-close"?: (...args: any[]) => any;
            "onAm-pm-change"?: (...args: any[]) => any;
            "onRange-start"?: (...args: any[]) => any;
            "onRange-end"?: (...args: any[]) => any;
            "onDate-update"?: (...args: any[]) => any;
            "onInvalid-date"?: (...args: any[]) => any;
            "onOverlay-toggle"?: (...args: any[]) => any;
            "onText-input"?: (...args: any[]) => any;
        }), {}, {}, import("vue").ComputedOptions, import("@vuepic/vue-datepicker").PublicMethods, {
            [x: number]: string;
        } | {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<string[]> | import("vue").ExtractPropTypes<import("vue").ComponentObjectPropsOptions<import("@vuepic/vue-datepicker").VueDatePickerProps>>> & {
        onBlur?: (...args: any[]) => any;
        onFocus?: (...args: any[]) => any;
        onOpen?: (...args: any[]) => any;
        "onUpdate:model-value"?: (...args: any[]) => any;
        "onUpdate:model-timezone-value"?: (...args: any[]) => any;
        "onText-submit"?: (...args: any[]) => any;
        onClosed?: (...args: any[]) => any;
        onCleared?: (...args: any[]) => any;
        "onInternal-model-change"?: (...args: any[]) => any;
        "onRecalculate-position"?: (...args: any[]) => any;
        "onFlow-step"?: (...args: any[]) => any;
        "onUpdate-month-year"?: (...args: any[]) => any;
        "onInvalid-select"?: (...args: any[]) => any;
        "onTooltip-open"?: (...args: any[]) => any;
        "onTooltip-close"?: (...args: any[]) => any;
        "onInvalid-fixed-range"?: (...args: any[]) => any;
        "onTime-picker-open"?: (...args: any[]) => any;
        "onTime-picker-close"?: (...args: any[]) => any;
        "onAm-pm-change"?: (...args: any[]) => any;
        "onRange-start"?: (...args: any[]) => any;
        "onRange-end"?: (...args: any[]) => any;
        "onDate-update"?: (...args: any[]) => any;
        "onInvalid-date"?: (...args: any[]) => any;
        "onOverlay-toggle"?: (...args: any[]) => any;
        "onText-input"?: (...args: any[]) => any;
    }, {}, {}, import("vue").ComputedOptions, import("@vuepic/vue-datepicker").PublicMethods, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("@vuepic/vue-datepicker").EmitEvents[], import("@vuepic/vue-datepicker").EmitEvents, {
        [x: number]: string;
    } | {}, {}, string, {}> & import("@vuepic/vue-datepicker").VueDatePickerProps & (new () => {
        $slots: Readonly<import("@vuepic/vue-datepicker").Slots> & import("@vuepic/vue-datepicker").Slots;
    });
    readonly Utils: typeof import("../../../commons/utils/utils").Utils;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
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
}, {}, {}>> & Record<string, any>;
export default ShjInteractionDatePicker;
