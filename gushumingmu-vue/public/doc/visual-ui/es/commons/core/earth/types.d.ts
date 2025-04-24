import { BorderParameter } from './utils/interface';
import { IComposer } from './utils/composer';
export interface ComposerParameter {
    isComposer: boolean;
    composer: IComposer;
}
export interface EarthParameter {
    radius: number;
    subdivision: number;
    animation?: boolean;
    animationSpeed: number;
    texture?: string | undefined | boolean;
    color?: string | undefined;
    opacity?: number;
    transparent?: boolean | undefined;
    wireframe?: boolean | undefined;
    label: {
        show: boolean;
        color: string;
        fontSize: number;
    };
    particle?: boolean;
    particleColor?: string;
    particleSize?: number;
}
export interface ApertureParameter {
    show: boolean;
    color?: string | undefined;
    opacity?: number;
    transparent?: boolean | undefined;
    depthWrite?: boolean | undefined;
}
export interface CloudCoverParameter {
    show: boolean;
    color?: string | undefined;
    opacity?: number;
    transparent?: boolean | undefined;
    animation?: boolean;
    animationSpeed: number;
}
export interface StarrySkyParameter {
    show: boolean | undefined;
    texture?: string | undefined;
    color?: string;
    number?: number;
    size?: number;
    opacity?: number;
    animation?: boolean;
    animationSpeed?: number;
}
export interface FlightLinesItem {
    fromName: string;
    toName: string;
    coords: Array<Array<number>>;
}
export interface LightBeamScatterItem {
    name: string;
    value: Array<number>;
}
export interface ScatterParameter {
    color: string;
    opacity: number;
    size: number;
}
export interface LightBeamParameter {
    type: number;
    baseHeight: number;
    radius: number;
    color: string;
    opacity: number;
}
export interface FlightLinesParameter {
    labelParameter: {
        show: boolean;
        color: string;
        fontSize: number;
    };
    lineParameter: BorderParameter;
    startScatterParameter: ScatterParameter;
    endScatterParameter: ScatterParameter;
}
export interface LightBeamScatterParameter {
    lightBeamParameter: LightBeamParameter;
    scatterParameter: ScatterParameter;
}
export interface FlyLinesParameter {
    labelParameter: {
        show: boolean;
        color: string;
        fontSize: number;
    };
    lineParameter: {
        color: string;
        number: number;
        speed: number;
        length: number;
        size: number;
    };
    bgLineParameter: {
        show: boolean;
        opacity: number;
        color: string;
        segments: number;
        radius: number;
    };
    startScatterParameter: ScatterParameter;
    endScatterParameter: ScatterParameter;
}
