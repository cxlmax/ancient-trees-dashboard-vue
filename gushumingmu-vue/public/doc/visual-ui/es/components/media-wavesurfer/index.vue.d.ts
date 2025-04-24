declare const _sfc_main: import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
}, {
    props: any;
    useWavesurfer: (basicOption: any) => {
        wavesurRef: import("vue").Ref<any>;
        timeRef: import("vue").Ref<any>;
        durationRef: import("vue").Ref<any>;
        loadingStatus: import("vue").Ref<boolean>;
        initWavesurfer: (option: any) => void;
    };
    formatTime: (seconds: any) => string;
    wavesurRef: import("vue").Ref<any>;
    timeRef: import("vue").Ref<any>;
    durationRef: import("vue").Ref<any>;
    initWavesurfer: (option: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
