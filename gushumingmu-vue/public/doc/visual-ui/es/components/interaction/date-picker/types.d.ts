import { RangeConfig } from '@vuepic/vue-datepicker';
export interface IDatePickerOption {
    css: {
        dp: {
            /**
             * 背景颜色
             */
            backgroundColor: string;
            /**
             * 输入框背景颜色
             */
            inputBackgroundColor: string;
            /**
             * 文本颜色
             */
            textColor: string;
            /**
             * 悬停颜色
             */
            hoverColor: string;
            /**
             * 悬停文本颜色
             */
            hoverTextColor: string;
            /**
             * 主色
             */
            primaryColor: string;
            /**
             * 主色禁用颜色
             */
            primaryDisabledColor: string;
            /**
             * 主色文本颜色
             */
            primaryTextColor: string;
            /**
             * 次要颜色
             */
            secondaryColor: string;
            /**
             * 边框颜色
             */
            borderColor: string;
            /**
             * 菜单边框颜色
             */
            menuBorderColor: string;
            /**
             * 悬停边框颜色
             */
            borderColorHover: string;
            /**
             * 聚焦边框颜色
             */
            borderColorFocus: string;
            /**
             * 禁用颜色
             */
            disabledColor: string;
            /**
             * 滚动条背景颜色
             */
            scrollBarBackground: string;
            /**
             * 滚动条颜色
             */
            scrollBarColor: string;
            /**
             * 成功颜色
             */
            successColor: string;
            /**
             * 成功颜色禁用
             */
            successColorDisabled: string;
            /**
             * 危险颜色
             */
            dangerColor: string;
            /**
             * 禁用颜色文本
             */
            disabledColorText: string;
            /**
             * 高亮颜色
             */
            highlightColor: string;
            /**
             * 加载器
             */
            loader: string;
            /**
             * 字体大小
             */
            fontSize: string;
            /**
             * 输入框高度
             */
            inputHeight: string;
        };
    };
    /**
     * 是否为范围选择
     */
    range: boolean | RangeConfig;
    /**
     * 是否为多选
     */
    multiCalendars: boolean;
    /**
     * 是否显示月份选择
     */
    monthPicker: boolean;
    /**
     * 是否显示时间选择
     */
    timePicker: boolean;
    /**
     * 是否显示年份选择
     */
    yearPicker: boolean;
    /**
     * 是否显示周选择
     */
    weekPicker: boolean;
    /**
     * 是否显示季度选择
     */
    quarterPicker: boolean;
    /**
     * 是否内联
     */
    inline: boolean;
    /**
     * 是否自动应用
     */
    autoApply: boolean;
    /**
     * 是否可清除
     */
    clearable: boolean;
    /**
     * 占位符
     */
    placeholder: string;
    /**
     * 是否禁用
     */
    disabled: boolean;
    /**
     * 是否只读
     */
    readonly: boolean;
    /**
     * 操作栏
     */
    actionRow: {
        /**
         * 是否显示现在
         */
        showNow: boolean;
        /**
         * 是否显示预览
         */
        showPreview: boolean;
        /**
         * 是否显示选择
         */
        showSelect: boolean;
        /**
         * 是否显示取消
         */
        showCancel: boolean;
    };
    /**
     * 是否禁用年份选择
     */
    disableYearSelect: boolean;
    /**
     * 是否启用时间选择
     */
    enableTimePicker: boolean;
    /**
     * 是否启用秒选择
     */
    enableSeconds: boolean;
    /**
     * 是否内联时间选择
     */
    timePickerInline: boolean;
    /**
     * 现在按钮文本
     */
    nowButtonLabel: string;
    /**
   * 取消文本
   */
    cancelText: string;
    /**
     * 选择文本
     */
    selectText: string;
    /**
     * 是否隐藏输入框图标
     */
    hideInputIcon: boolean;
}
