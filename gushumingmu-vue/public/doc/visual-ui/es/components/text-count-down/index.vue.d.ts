declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    emit: (event: "on-end" | "on-start", ...args: any[]) => void;
    requestAnimationFrame: ((callback: FrameRequestCallback) => number) & typeof requestAnimationFrame;
    props: any;
    futureTime: import("vue").Ref<number>;
    restTime: import("vue").Ref<number>;
    showType: import("vue").ComputedRef<{
        showMillisecond: any;
        showYear: any;
        showMonth: any;
        showDay: any;
        showHour: any;
        showMinute: any;
        showSecond: any;
    }>;
    fixedTwo: (value: number) => string;
    timeFormat: (time: number | null) => string;
    CountDown: () => void;
    startCountDown: () => void;
    rendererDomStyle: (css: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-end" | "on-start")[], "on-end" | "on-start", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-end"?: (...args: any[]) => any;
    "onOn-start"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
