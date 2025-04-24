interface StyleObject {
    [key: string]: string | number | StyleObject;
}
/**
 * 将 JSON 转换为 CSS 样式
 * @param styleJson - 需要转换的 JSON 对象
 * @param pd - 前缀
 * @returns 转换后的 CSS 样式对象
 */
export declare function jsonToCssStyle(styleJson: StyleObject, pd?: string): Record<string, string>;
export declare const autoInstallFont: (fontFamily: string) => void;
export {};
