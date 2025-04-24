export declare class Utils {
    /**
     * 字体地址
     */
    private static fontUrl;
    /**
     * 将 JSON 转换为 CSS 样式对象
     * @param styleJson - 需要转换的 JSON 对象
     * @param prefix - 前缀
     * @returns 转换后的 CSS 样式对象
     */
    static json2cssObject(styleJson: any, prefix?: string): Record<string, string>;
    /**
     * 安装字体
     * @param fontFamily - 字体名称
     */
    static installFont(fontFamily: string): void;
}
