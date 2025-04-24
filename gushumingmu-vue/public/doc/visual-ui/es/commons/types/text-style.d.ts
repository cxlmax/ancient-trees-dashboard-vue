import { IShadow } from './shadow';
export interface ITextStyle {
    fontStyle: string;
    fontFamily: string;
    color: string;
    fontSize: number;
    fontWeight: number;
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent: 'center' | 'left' | 'right';
    '-webkit-text-stroke-color': string;
    '-webkit-text-stroke-width': number;
    letterSpacing: number;
    lineHeight: number;
    textShadow: IShadow;
    textOverflow: {
        enable: boolean;
        displayLines: number;
    };
}
