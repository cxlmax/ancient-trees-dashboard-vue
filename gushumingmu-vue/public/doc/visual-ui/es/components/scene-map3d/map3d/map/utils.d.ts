export declare function calculateScale(parentBoxSize: any, boxSize: any): number;
export declare function setScaleArea(_this: any, map: any): any;
export declare function getMapDataByUrl(url: string, callback: any): void;
export declare function getMapDataByAdcode(adcode: number, callback: any): void;
export declare function getMapDataByAdcode2(adcode: number, callback: any): void;
/** Uv贴图调整 */
export declare function calcUv2(geometry: any, width: any, height: any, minX: any, minY: any): void;
/**
 * 获取贴图资源
 * @param name
 * @param path
 * @param key
 * @returns
 */
export declare function getTextureResource(_this: any, name: string, path: string, key: string): {
    [x: string]: any;
};
