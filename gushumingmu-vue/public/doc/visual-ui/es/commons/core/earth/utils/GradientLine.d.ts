import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2';
/**
 * 在指定线段上创建分段渐变线
 * @param curve
 * @param number
 * @returns
 */
export declare const createGradientLine: (curve: THREE.CatmullRomCurve3, number: number) => any;
export declare const startAnimationGradientLine: (animations: Array<any>) => void;
export declare const createMovingLine: (curve: any, index?: number, color?: string[], pointNum?: number, verticNum?: number) => {
    index: number;
    verticNum: number;
    mesh: Line2;
    linePointsV3: any;
};
export declare const gradientColors: (start: any, end: any, steps: any, gamma: any) => any[];
