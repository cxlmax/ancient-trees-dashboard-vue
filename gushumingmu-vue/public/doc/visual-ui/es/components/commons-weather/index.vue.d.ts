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
    props: any;
    emit: (event: "on-success" | "on-error", ...args: any[]) => void;
    useCommonsWeather: () => {
        initWeatherMessage: (option: any) => void;
        rendererDomStyle: (css: any) => {
            lineHeight: string;
            transform: string;
        };
        handleAutoUpdate: (option: any) => void;
        rendererWeatherTypeStyle: (css: any, icons: {
            id: number;
            name: string;
            url: string;
        }[]) => {
            mask: string;
            width: string;
            height: string;
            background: string;
            backgroundBlendMode: string;
            marginRight: string;
        } | {
            mask?: undefined;
            width?: undefined;
            height?: undefined;
            background?: undefined;
            backgroundBlendMode?: undefined;
            marginRight?: undefined;
        };
        weatherRef: import("vue").Ref<any>;
        weather: import("vue").Ref<{
            city: string;
            date: string;
            week: string;
            dayweather: string;
            nightweather: string;
            daytemp: string;
            nighttemp: string;
            daywind: string;
            nightwind: string;
            daypower: string;
            nightpower: string;
            daytemp_float: string;
            nighttemp_float: string;
        }>;
    };
    handleAutoUpdate: (option: any) => void;
    rendererDomStyle: (css: any) => {
        lineHeight: string;
        transform: string;
    };
    rendererWeatherTypeStyle: (css: any, icons: {
        id: number;
        name: string;
        url: string;
    }[]) => {
        mask: string;
        width: string;
        height: string;
        background: string;
        backgroundBlendMode: string;
        marginRight: string;
    } | {
        mask?: undefined;
        width?: undefined;
        height?: undefined;
        background?: undefined;
        backgroundBlendMode?: undefined;
        marginRight?: undefined;
    };
    weatherRef: import("vue").Ref<any>;
    weather: import("vue").Ref<{
        city: string;
        date: string;
        week: string;
        dayweather: string;
        nightweather: string;
        daytemp: string;
        nighttemp: string;
        daywind: string;
        nightwind: string;
        daypower: string;
        nightpower: string;
        daytemp_float: string;
        nighttemp_float: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-success" | "on-error")[], "on-success" | "on-error", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-success"?: (...args: any[]) => any;
    "onOn-error"?: (...args: any[]) => any;
}, {}, {}>;
export default _sfc_main;
