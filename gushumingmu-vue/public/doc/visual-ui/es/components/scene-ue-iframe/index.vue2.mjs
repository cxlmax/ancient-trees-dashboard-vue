import { defineComponent as i, createElementBlock as w, openBlock as d, createElementVNode as f, onMounted as u, onBeforeUnmount as p } from "vue";
import { SHJParseEvent as a } from "../../commons/plugins/event/index.mjs";
const k = { class: "iframe-webscoket" }, b = ["src"], _ = i({ name: "zv-scene-ue-iframe" }), N = /* @__PURE__ */ i({
  ..._,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {},
    isPreview: { type: Boolean }
  },
  emits: ["ue-scoket-on-message"],
  setup(m, { emit: E }) {
    const n = m, S = E;
    return a.parseEvents(n.useEvents, "on-page-loaded", null), ((o) => {
      let t = 0, c;
      const r = () => {
        window.SHJSceneUEIframeWebscoket && (window.SHJSceneUEIframeWebscoket.onclose = null, window.SHJSceneUEIframeWebscoket.close()), window.SHJSceneUEIframeWebscoket = new WebSocket(o.webSocketUrl), window.SHJSceneUEIframeWebscoket.onmessage = (s) => {
          try {
            const e = JSON.parse(s.data);
            if (e.type === "ping") return;
            if (!e.data) throw new Error("数据格式异常");
            S("ue-scoket-on-message", e.data), a.parseEvents(n.useEvents, "ue-scoket-on-message", e.data);
          } catch {
          }
        }, window.SHJSceneUEIframeWebscoket.onopen = () => {
          t = 0, clearTimeout(c);
        }, window.SHJSceneUEIframeWebscoket.onerror = () => {
        }, window.SHJSceneUEIframeWebscoket.onclose = (s) => {
          const e = 3e3 * Math.pow(2, t);
          c = setTimeout(() => {
            t < 1 / 0 && (t++, r());
          }, e);
        };
      };
      u(() => {
        if (o.webSocketUrl)
          try {
            r();
          } catch {
          }
      }), p(() => {
        window.SHJSceneUEIframeWebscoket && window.SHJSceneUEIframeWebscoket.close();
      });
    })(n.basicOption), (o, l) => (d(), w("div", k, [
      f("iframe", {
        src: o.basicOption.iframeUrl,
        sandbox: "allow-scripts allow-same-origin",
        style: { width: "100%", height: "100%", border: "0" }
      }, null, 8, b)
    ]));
  }
});
export {
  N as default
};
