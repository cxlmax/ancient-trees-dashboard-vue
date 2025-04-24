export interface IFlex {
    flexDirection: 'row' | 'column';
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-stretch';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    gap: number;
    borderRadius: number;
}
