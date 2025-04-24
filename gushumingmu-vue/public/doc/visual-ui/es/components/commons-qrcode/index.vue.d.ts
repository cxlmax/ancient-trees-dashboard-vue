declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
}, {
    QrcodeVue: import("vue").DefineComponent<{
        renderAs: {
            type: import("vue").PropType<import("qrcode.vue").RenderAs>;
            required: boolean;
            default: string;
            validator: (as: any) => boolean;
        };
        value: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        level: {
            type: import("vue").PropType<import("qrcode.vue").Level>;
            default: string;
            validator: (l: any) => boolean;
        };
        background: {
            type: StringConstructor;
            default: string;
        };
        foreground: {
            type: StringConstructor;
            default: string;
        };
        margin: {
            type: NumberConstructor;
            required: boolean;
            default: number;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        renderAs: {
            type: import("vue").PropType<import("qrcode.vue").RenderAs>;
            required: boolean;
            default: string;
            validator: (as: any) => boolean;
        };
        value: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        level: {
            type: import("vue").PropType<import("qrcode.vue").Level>;
            default: string;
            validator: (l: any) => boolean;
        };
        background: {
            type: StringConstructor;
            default: string;
        };
        foreground: {
            type: StringConstructor;
            default: string;
        };
        margin: {
            type: NumberConstructor;
            required: boolean;
            default: number;
        };
    }>>, {
        value: string;
        size: number;
        level: import("qrcode.vue").Level;
        background: string;
        foreground: string;
        margin: number;
        renderAs: import("qrcode.vue").RenderAs;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
