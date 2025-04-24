declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare interface Window {
    SHJSceneUeStream: any;
    // UE场景
    SHJSceneUEIframeWebscoket: any;
    // Vr场景
    SHJSceneVrViewer: any;
    // Unity场景
    SHJSceneUnityIframeInstance: {
        url: string
        ref: any
    };
    // 3D场景实例
    SHJWeb3DEditorInstance: Editor | null;
    // 高德地图Loca对象
    Loca: any;


    // 客户端 Electron对象
    electron: any;
    // 客户端 Electron对象
    electronAPI: any;
    // 外部插件 pannellum
    pannellum: any;
    // 外部插件 videojs
    videojs: any;
    // 外部插件 ue
    ue: any;
    // 外部插件 ue5
    ue5: Function;
    // 高德密钥
    _AMapSecurityConfig: any
}

declare module '@shjjs/node-editor'
declare module 'html2canvas'
declare module 'jexcel'
declare module 'videojs'
declare module '@swiftcarrot/color-fns'
declare module '*.png'
declare module '*.jpg'