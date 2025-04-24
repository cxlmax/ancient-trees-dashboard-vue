export declare class HoverLoop {
    private myChart;
    private option;
    timer: any;
    currentIndex: number;
    currentSeriesIndex: number;
    constructor(myChart: any, option: any);
    switchTooltip(myChart: any, option: any): void;
    closeSwitchTooltip(): void;
}
