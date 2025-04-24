import { defineComponent as a, createElementBlock as m, openBlock as f, ref as l, onMounted as d, onBeforeUnmount as p } from "vue";
import { SHJParseEvent as s } from "../../commons/plugins/event/index.mjs";
const y = ["src"], w = a({ name: "zv-scene-unity-webgl" }), v = /* @__PURE__ */ a({
  ...w,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {},
    isPreview: { type: Boolean },
    disableDrag: { type: Boolean }
  },
  emits: [
    "unity-scene-on-message"
  ],
  setup(o, { emit: r }) {
    const n = o, i = r;
    s.parseEvents(n.useEvents, "on-page-loaded", null);
    const c = () => {
      const e = l();
      return d(() => {
        window.SHJSceneUnityIframeInstance || (window.SHJSceneUnityIframeInstance = {}), window.SHJSceneUnityIframeInstance.url = n.basicOption.url + "/index.html", window.SHJSceneUnityIframeInstance.ref = e.value;
      }), p(() => {
        window.SHJSceneUnityIframeInstance = null;
      }), window.addEventListener("message", (t) => {
        i("unity-scene-on-message", t.data), s.parseEvents(n.useEvents, "unity-scene-on-message", t.data);
      }, !1), { unityIframeRef: e };
    }, { unityIframeRef: u } = c();
    return (e, t) => (f(), m("iframe", {
      ref_key: "unityIframeRef",
      ref: u,
      class: "unity-wrap",
      src: `${e.basicOption.url}/index.html`,
      frameborder: "0"
    }, null, 8, y));
  }
});
export {
  v as default
};
