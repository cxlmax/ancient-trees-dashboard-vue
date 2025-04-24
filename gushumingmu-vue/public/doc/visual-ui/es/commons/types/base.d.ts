import { ITextStyle } from './text-style';
export interface IBase {
    backgroundColor: string;
    borderRadius: number;
    borderWidth: number;
    borderStyle: string;
    borderColor: string;
    backgroundImage: string;
    backgroundSize: 'cover' | 'contain' | 'auto';
    backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
    backgroundPositionX: string;
    backgroundPositionY: string;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
}
export interface IBaseSize extends IBase {
    width: number;
    height: number;
}
export interface IBaseTextStyle extends IBase {
    textStyle: ITextStyle;
}
export interface IBaseSizeTextStyle extends IBaseSize {
    textStyle: ITextStyle;
}
