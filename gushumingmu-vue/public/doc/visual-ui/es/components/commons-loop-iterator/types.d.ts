export interface IBorder {
    width: number;
    color: string;
    style: string;
}
export interface IShadow {
    x: number;
    y: number;
    blur: number;
    diffus: number;
    color: string;
}
export interface ItemCommonsStyle {
    width: number;
    height: number;
    border: IBorder;
    shadow: IShadow;
    objectFit: string;
}
export interface ItemTextStyle {
    font: string;
    size: number;
    color: string;
    weight: string;
    style: string;
    decoration: string;
    align: string;
    lineHeight: number;
    letterSpacing: number;
    shadow: IShadow;
    padding: number[];
}
export interface ItemContent {
    id: string;
    field: string;
    type: string;
    style: ItemCommonsStyle & ItemTextStyle;
}
export interface IItemStyle {
    columns: number;
    border: IBorder;
    alignItems: string;
    rowGap: number;
    columnGap: number;
    background: {
        type: string;
        color: string;
        image: string;
    };
    shadow: IShadow;
    align: string;
}
export interface IBasicOption {
    overflow: string;
    columns: number;
    rowGap: number;
    columnGap: number;
    itemStyle: IItemStyle;
    itemContent: ItemContent[];
}
