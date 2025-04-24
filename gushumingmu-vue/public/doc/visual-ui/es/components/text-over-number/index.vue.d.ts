import type { CountUpOptions } from 'vue-countup-v3';
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
    beforeValue: import("vue").Ref<any>;
    useOverNumber: (basicOption: any) => {
        key: import("vue").Ref<string>;
        init: () => void;
        options: import("vue").Ref<CountUpOptions>;
        endValue: import("vue").Ref<number>;
        onFinished: () => void;
        rendererDomStyle: (css: any) => any;
    };
    key: import("vue").Ref<string>;
    init: () => void;
    options: import("vue").Ref<CountUpOptions>;
    endValue: import("vue").Ref<number>;
    onFinished: () => void;
    rendererDomStyle: (css: any) => any;
    readonly CountUp: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            delay: {
                type: import("vue").PropType<number>;
                default: number;
            };
            options: {
                type: import("vue").PropType<CountUpOptions>;
                default: undefined;
            };
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            autoplay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loop: {
                type: import("vue").PropType<number | boolean>;
                default: boolean;
            };
            endVal: {
                type: import("vue").PropType<string | number>;
                required: true;
            };
            startVal: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            decimalPlaces: {
                type: import("vue").PropType<number>;
                default: number;
            };
        }>> & {
            onInit?: (countup: import("countup.js").CountUp) => any;
            onFinished?: () => any;
        }, {
            init: () => void;
            restart: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            init: (countup: import("countup.js").CountUp) => void;
            finished: () => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            delay: {
                type: import("vue").PropType<number>;
                default: number;
            };
            options: {
                type: import("vue").PropType<CountUpOptions>;
                default: undefined;
            };
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            autoplay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loop: {
                type: import("vue").PropType<number | boolean>;
                default: boolean;
            };
            endVal: {
                type: import("vue").PropType<string | number>;
                required: true;
            };
            startVal: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            decimalPlaces: {
                type: import("vue").PropType<number>;
                default: number;
            };
        }>> & {
            onInit?: (countup: import("countup.js").CountUp) => any;
            onFinished?: () => any;
        }, {
            startVal: string | number;
            duration: string | number;
            decimalPlaces: number;
            autoplay: boolean;
            loop: number | boolean;
            delay: number;
            options: CountUpOptions;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            delay: {
                type: import("vue").PropType<number>;
                default: number;
            };
            options: {
                type: import("vue").PropType<CountUpOptions>;
                default: undefined;
            };
            duration: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            autoplay: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loop: {
                type: import("vue").PropType<number | boolean>;
                default: boolean;
            };
            endVal: {
                type: import("vue").PropType<string | number>;
                required: true;
            };
            startVal: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            decimalPlaces: {
                type: import("vue").PropType<number>;
                default: number;
            };
        }>> & {
            onInit?: (countup: import("countup.js").CountUp) => any;
            onFinished?: () => any;
        }, {
            init: () => void;
            restart: () => void;
        }, {}, {}, {}, {
            startVal: string | number;
            duration: string | number;
            decimalPlaces: number;
            autoplay: boolean;
            loop: number | boolean;
            delay: number;
            options: CountUpOptions;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        delay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        options: {
            type: import("vue").PropType<CountUpOptions>;
            default: undefined;
        };
        duration: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        autoplay: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loop: {
            type: import("vue").PropType<number | boolean>;
            default: boolean;
        };
        endVal: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        startVal: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        decimalPlaces: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>> & {
        onInit?: (countup: import("countup.js").CountUp) => any;
        onFinished?: () => any;
    }, {
        init: () => void;
        restart: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        init: (countup: import("countup.js").CountUp) => void;
        finished: () => void;
    }, string, {
        startVal: string | number;
        duration: string | number;
        decimalPlaces: number;
        autoplay: boolean;
        loop: number | boolean;
        delay: number;
        options: CountUpOptions;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            prefix?(_: {}): any;
            suffix?(_: {}): any;
        };
    });
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {}, {}>;
export default _sfc_main;
