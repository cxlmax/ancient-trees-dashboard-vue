import type { IFlex } from '../../../commons/types/flex';
import type { IBaseSize, IBaseSizeTextStyle } from '../../../commons/types/base';
import type { IScroll } from '../../../commons/types/scroll';
export interface IListOption {
    css: {
        item: IFlex & IBaseSize & {
            thumbnail: IBaseSize;
            container: IFlex & IBaseSize & {
                title: IBaseSizeTextStyle;
                description: IBaseSizeTextStyle;
            };
        };
    };
    scroll: IScroll;
}
