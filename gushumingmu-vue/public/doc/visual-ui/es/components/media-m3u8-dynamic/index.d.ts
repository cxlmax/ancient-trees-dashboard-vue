export declare const ZvMediaM3u8Dynamic: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
}, {
    props: any;
    useM3u8Video: () => {
        key: import("vue").Ref<string>;
        videoRef: import("vue").Ref<any>;
        initM3u8Video: () => void;
    };
    key: import("vue").Ref<string>;
    videoRef: import("vue").Ref<any>;
    initM3u8Video: () => void;
    emit: (event: "on-video-progress" | "on-video-play" | "on-video-pause" | "on-video-ended" | "on-video-playing" | "on-video-timeupdate" | "on-video-error" | "on-video-volumechange", ...args: any[]) => void;
    onVideoProgress: () => void;
    onVideoPlay: () => void;
    onVideoPause: () => void;
    onVideoPlayEnded: () => void;
    onVideoPlaying: () => void;
    onVideoTimeupdate: () => void;
    onVideoError: () => void;
    onVideoVolumechange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-video-progress" | "on-video-play" | "on-video-pause" | "on-video-ended" | "on-video-playing" | "on-video-timeupdate" | "on-video-error" | "on-video-volumechange")[], "on-video-progress" | "on-video-play" | "on-video-pause" | "on-video-ended" | "on-video-playing" | "on-video-timeupdate" | "on-video-error" | "on-video-volumechange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    sources: {
        type: ArrayConstructor;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onOn-video-progress"?: (...args: any[]) => any;
    "onOn-video-play"?: (...args: any[]) => any;
    "onOn-video-pause"?: (...args: any[]) => any;
    "onOn-video-ended"?: (...args: any[]) => any;
    "onOn-video-playing"?: (...args: any[]) => any;
    "onOn-video-timeupdate"?: (...args: any[]) => any;
    "onOn-video-error"?: (...args: any[]) => any;
    "onOn-video-volumechange"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvMediaM3u8Dynamic;
