import type { IBaseTextStyle } from '../../../commons/types/base';
export interface IButtonOption {
    css: IBaseTextStyle & {
        active: IBaseTextStyle;
        hover: IBaseTextStyle;
    };
    version: string;
}
