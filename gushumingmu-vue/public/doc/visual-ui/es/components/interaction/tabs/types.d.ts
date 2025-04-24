import type { IFlex } from '../../../commons/types/flex';
import type { IBaseSize, IBaseSizeTextStyle } from '../../../commons/types/base';
export interface ITabsOption {
    css: {
        tab: IFlex;
        item: IBaseSizeTextStyle & {
            selected: IBaseSizeTextStyle;
        };
        nav: {
            left: IBaseSize;
            right: IBaseSize;
        };
    };
    value: string;
    version: string;
}
