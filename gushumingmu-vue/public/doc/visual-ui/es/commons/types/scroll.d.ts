export interface IScroll {
    start: boolean;
    hover: boolean;
    limitScrollNum: number;
    isSingle: boolean;
    singleWaitTime: number;
    step: number;
    direction: 'up' | 'down' | 'left' | 'right';
}
