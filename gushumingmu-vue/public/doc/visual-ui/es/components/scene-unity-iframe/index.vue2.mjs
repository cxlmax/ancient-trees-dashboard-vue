import { defineComponent as a, createElementBlock as m, openBlock as u, ref as l, onMounted as d, onBeforeUnmount as p } from "vue";
import { SHJParseEvent as s } from "../../commons/plugins/event/index.mjs";
const y = ["src"], w = a({ name: "zv-scene-unity-iframe" }), v = /* @__PURE__ */ a({
  ...w,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {},
    isPreview: { type: Boolean },
    disableDrag: { type: Boolean }
  },
  emits: ["unity-scene-on-message"],
  setup(o, { emit: i }) {
    const n = o, r = i;
    s.parseEvents(n.useEvents, "on-page-loaded", null);
    const c = () => {
      const e = l();
      return d(() => {
        window.SHJSceneUnityIframeInstance || (window.SHJSceneUnityIframeInstance = {}), window.SHJSceneUnityIframeInstance.url = n.basicOption.iframeUrl, window.SHJSceneUnityIframeInstance.ref = e.value;
      }), p(() => {
        window.SHJSceneUnityIframeInstance = null;
      }), window.addEventListener("message", (t) => {
        r("unity-scene-on-message", t.data), s.parseEvents(n.useEvents, "unity-scene-on-message", t.data);
      }, !1), { unityIframeRef: e };
    }, { unityIframeRef: f } = c();
    return (e, t) => (u(), m("iframe", {
      ref_key: "unityIframeRef",
      ref: f,
      src: e.basicOption.iframeUrl,
      sandbox: "allow-scripts allow-same-origin",
      style: { width: "100%", height: "100%", border: "0" }
    }, null, 8, y));
  }
});
export {
  v as default
};
