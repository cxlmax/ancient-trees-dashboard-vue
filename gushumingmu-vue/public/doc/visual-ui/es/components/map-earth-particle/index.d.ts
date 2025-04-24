export declare const ZvMapEarthParticle: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
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
    emit: (event: "on-success", ...args: any[]) => void;
    props: any;
    id: string;
    earthRef: import("vue").Ref<any>;
    status: import("vue").Ref<boolean>;
    option: import("vue").Ref<any>;
    init: import("lodash").DebouncedFunc<(s?: boolean) => void>;
    onSuccess: () => void;
    ThEarth: import("vue").DefineComponent<{
        isComposer: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        radius: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        subdivision: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        color: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        opacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        transparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        wireframe: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        label: {
            type: ObjectConstructor;
            required: false;
            default: () => {
                show: boolean;
                color: string;
                fontSize: number;
            };
        };
        texture: {
            type: (StringConstructor | BooleanConstructor)[];
            required: false;
            skipCheck: boolean;
            default: any;
        };
        animation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        animationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        background: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        isBackground: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fog: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fogColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        fogNear: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        fogFar: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        stats: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        statsType: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        aperture: {
            type: BooleanConstructor;
            required: false;
            skipCheck: boolean;
            default: boolean;
        };
        apertureColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        apertureOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        apertureTransparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        apertureDepthWrite: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCover: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        cloudCoverOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        cloudCoverTransparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverTexture: {
            type: any;
            required: false;
        };
        cloudCoverAnimation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverAnimationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySky: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        starrySkyTexture: {
            type: any;
            required: false;
            default: any;
        };
        starrySkyNumber: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkySize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkyColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        starrySkyOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkyAnimation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        starrySkyAnimationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelper: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        gridHelperWidth: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelperHeight: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelperColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        axesHelper: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        axesHelperSize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        ambientLightColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        ambientLightIntensity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightX: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightY: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightZ: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightIntensity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        composer: {
            type: any;
            required: false;
            default: {
                unrealBloomPass: {};
                glitchPass: {};
                dotScreenPass: {};
                filmPass: {};
            };
        };
        particle: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        particleColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        particleSize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        flylines: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
        lines: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
        lightBeam: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
    }, {
        uuid: string;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        props: any;
        sceneParameter: import("vue").ComputedRef<{
            background: any;
            isBackground: any;
            fog: any;
            fogColor: any;
            fogNear: any;
            fogFar: any;
            stats: any;
            statsType: any;
        }>;
        composerParameter: import("vue").ComputedRef<{
            isComposer: any;
            composer: any;
        }>;
        earthParameter: import("vue").ComputedRef<{
            radius: any;
            subdivision: any;
            animation: any;
            animationSpeed: number;
            texture: any;
            color: any;
            opacity: any;
            transparent: any;
            wireframe: any;
            particle: any;
            particleColor: any;
            particleSize: any;
            label: any;
        }>;
        apertureParameter: import("vue").ComputedRef<{
            show: any;
            color: any;
            opacity: any;
            transparent: any;
            depthWrite: any;
        }>;
        cloudCoverParameter: import("vue").ComputedRef<{
            show: any;
            color: any;
            opacity: any;
            transparent: any;
            animation: any;
            animationSpeed: number;
        }>;
        starrySkyParameter: import("vue").ComputedRef<{
            show: any;
            texture: any;
            number: any;
            size: any;
            color: any;
            opacity: any;
            animation: any;
            animationSpeed: number;
        }>;
        ambientLightParameter: import("vue").ComputedRef<{
            color: any;
            intensity: any;
        }>;
        directionalLightParameter: import("vue").ComputedRef<{
            x: any;
            y: any;
            z: any;
            intensity: any;
            color: any;
        }>;
        parameter: import("vue").ComputedRef<{
            sceneParameter: {
                background: any;
                isBackground: any;
                fog: any;
                fogColor: any;
                fogNear: any;
                fogFar: any;
                stats: any;
                statsType: any;
            };
            earthParameter: {
                radius: any;
                subdivision: any;
                animation: any;
                animationSpeed: number;
                texture: any;
                color: any;
                opacity: any;
                transparent: any;
                wireframe: any;
                particle: any;
                particleColor: any;
                particleSize: any;
                label: any;
            };
            apertureParameter: {
                show: any;
                color: any;
                opacity: any;
                transparent: any;
                depthWrite: any;
            };
            cloudCoverParameter: {
                show: any;
                color: any;
                opacity: any;
                transparent: any;
                animation: any;
                animationSpeed: number;
            };
            starrySkyParameter: {
                show: any;
                texture: any;
                number: any;
                size: any;
                color: any;
                opacity: any;
                animation: any;
                animationSpeed: number;
            };
            gridHelperParameter: {
                show: any;
                width: any;
                height: any;
                color: any;
            };
            axesHelperParameter: {
                show: any;
                size: any;
            };
            ambientLightParameter: {
                color: any;
                intensity: any;
            };
            directionalLightParameter: {
                x: any;
                y: any;
                z: any;
                intensity: any;
                color: any;
            };
            composerParameter: {
                isComposer: any;
                composer: any;
            };
        }>;
        emit: (event: "on-success", ...args: any[]) => void;
        weiTuEarth: import("../../commons/core/earth/main").Earth;
        createEarth: () => Promise<import("../../commons/core/earth/main").Earth>;
        createMapBorder: () => Promise<void>;
        createEarthFlightLine: () => void;
        createEarthFlyLine: () => Promise<void>;
        createEarthLightBeam: () => void;
        init: () => Promise<void>;
        getSlotsByName: (name: string) => any[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-success"[], "on-success", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        isComposer: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        radius: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        subdivision: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        color: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        opacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        transparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        wireframe: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        label: {
            type: ObjectConstructor;
            required: false;
            default: () => {
                show: boolean;
                color: string;
                fontSize: number;
            };
        };
        texture: {
            type: (StringConstructor | BooleanConstructor)[];
            required: false;
            skipCheck: boolean;
            default: any;
        };
        animation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        animationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        background: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        isBackground: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fog: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        fogColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        fogNear: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        fogFar: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        stats: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        statsType: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        aperture: {
            type: BooleanConstructor;
            required: false;
            skipCheck: boolean;
            default: boolean;
        };
        apertureColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        apertureOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        apertureTransparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        apertureDepthWrite: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCover: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        cloudCoverOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        cloudCoverTransparent: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverTexture: {
            type: any;
            required: false;
        };
        cloudCoverAnimation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        cloudCoverAnimationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySky: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        starrySkyTexture: {
            type: any;
            required: false;
            default: any;
        };
        starrySkyNumber: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkySize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkyColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        starrySkyOpacity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        starrySkyAnimation: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        starrySkyAnimationSpeed: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelper: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        gridHelperWidth: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelperHeight: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        gridHelperColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        axesHelper: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        axesHelperSize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        ambientLightColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        ambientLightIntensity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightX: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightY: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightZ: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightIntensity: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        directionalLightColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        composer: {
            type: any;
            required: false;
            default: {
                unrealBloomPass: {};
                glitchPass: {};
                dotScreenPass: {};
                filmPass: {};
            };
        };
        particle: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        particleColor: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        particleSize: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        flylines: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
        lines: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
        lightBeam: {
            type: ArrayConstructor;
            required: false;
            default: () => any[];
        };
    }>> & {
        "onOn-success"?: (...args: any[]) => any;
    }, {
        lines: unknown[];
        animation: boolean;
        color: string;
        radius: number;
        transparent: boolean;
        label: Record<string, any>;
        background: string;
        opacity: number;
        isComposer: boolean;
        subdivision: number;
        wireframe: boolean;
        texture: string | boolean;
        animationSpeed: number;
        isBackground: boolean;
        fog: boolean;
        fogColor: string;
        fogNear: number;
        fogFar: number;
        stats: boolean;
        statsType: number;
        aperture: boolean;
        apertureColor: string;
        apertureOpacity: number;
        apertureTransparent: boolean;
        apertureDepthWrite: boolean;
        cloudCover: boolean;
        cloudCoverColor: string;
        cloudCoverOpacity: number;
        cloudCoverTransparent: boolean;
        cloudCoverTexture: any;
        cloudCoverAnimation: boolean;
        cloudCoverAnimationSpeed: number;
        starrySky: boolean;
        starrySkyTexture: any;
        starrySkyNumber: number;
        starrySkySize: number;
        starrySkyColor: string;
        starrySkyOpacity: number;
        starrySkyAnimation: boolean;
        starrySkyAnimationSpeed: number;
        gridHelper: boolean;
        gridHelperWidth: number;
        gridHelperHeight: number;
        gridHelperColor: string;
        axesHelper: boolean;
        axesHelperSize: number;
        ambientLightColor: string;
        ambientLightIntensity: number;
        directionalLightX: number;
        directionalLightY: number;
        directionalLightZ: number;
        directionalLightIntensity: number;
        directionalLightColor: string;
        composer: any;
        particle: boolean;
        particleColor: string;
        particleSize: number;
        flylines: unknown[];
        lightBeam: unknown[];
    }, {}>;
    ThEarthBorder: import("vue").DefineComponent<{
        propsGeojson: {
            type: any;
            required: false;
            default: string;
        };
        color: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        width: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        opacity: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        wakeline: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        wakelineNumber: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        propsGeojson: {
            type: any;
            required: false;
            default: string;
        };
        color: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        width: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        opacity: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        wakeline: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        wakelineNumber: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
    }>>, {
        width: number;
        color: string;
        opacity: number;
        propsGeojson: any;
        wakelineNumber: number;
    }, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-success"[], "on-success", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onOn-success"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvMapEarthParticle;
