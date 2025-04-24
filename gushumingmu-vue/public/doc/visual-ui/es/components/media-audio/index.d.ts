export declare const ZvMediaAudio: import("../../commons/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    basicOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    key: import("vue").Ref<string>;
    isAudioPlay: import("vue").Ref<boolean>;
    audioRef: import("vue").Ref<any>;
    emit: (event: "on-audio-progress" | "on-audio-play" | "on-audio-pause" | "on-audio-ended" | "on-audio-playing" | "on-audio-timeupdate" | "on-audio-error" | "on-audio-volumechange", ...args: any[]) => void;
    onAudioProgress: () => void;
    onAudioPlay: () => void;
    onAudioPause: () => void;
    onAudioPlayEnded: () => void;
    onAudioPlaying: () => void;
    onAudioTimeupdate: () => void;
    onAudioError: () => void;
    onAudioVolumechange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-audio-progress" | "on-audio-play" | "on-audio-pause" | "on-audio-ended" | "on-audio-playing" | "on-audio-timeupdate" | "on-audio-error" | "on-audio-volumechange")[], "on-audio-progress" | "on-audio-play" | "on-audio-pause" | "on-audio-ended" | "on-audio-playing" | "on-audio-timeupdate" | "on-audio-error" | "on-audio-volumechange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    basicOption: {
        type: any;
        required: true;
    };
    useEvents: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onOn-audio-progress"?: (...args: any[]) => any;
    "onOn-audio-play"?: (...args: any[]) => any;
    "onOn-audio-pause"?: (...args: any[]) => any;
    "onOn-audio-ended"?: (...args: any[]) => any;
    "onOn-audio-playing"?: (...args: any[]) => any;
    "onOn-audio-timeupdate"?: (...args: any[]) => any;
    "onOn-audio-error"?: (...args: any[]) => any;
    "onOn-audio-volumechange"?: (...args: any[]) => any;
}, {}, {}>> & Record<string, any>;
export default ZvMediaAudio;
