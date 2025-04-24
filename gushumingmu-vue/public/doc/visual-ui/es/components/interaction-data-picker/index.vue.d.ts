declare const _sfc_main: import("vue").DefineComponent<{}, {
    calendarOpen: import("vue").Ref<boolean>;
    useDatePicker: () => {
        getCurrentDate: () => number[];
        solarWeek: (y: number, m: number, d: number) => number;
        beforeDays: (date: number[], last: number) => any[];
        afterDays: (day: any[], date: number[]) => any[];
        dateArray: any[];
        selectYear: import("vue").Ref<number>;
        selectMonth: import("vue").Ref<number>;
    };
    dateArray: any[];
    selectYear: import("vue").Ref<number>;
    selectMonth: import("vue").Ref<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _sfc_main;
