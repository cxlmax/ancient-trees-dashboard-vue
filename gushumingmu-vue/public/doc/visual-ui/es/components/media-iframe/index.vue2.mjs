import { defineComponent as a, ref as l, createElementBlock as f, openBlock as c } from "vue";
import { isArray as p } from "lodash";
import { SHJParseEvent as d } from "../../commons/plugins/event/index.mjs";
const u = ["src"], v = a({ name: "zv-media-iframe" }), b = /* @__PURE__ */ a({
  ...v,
  props: {
    basicOption: {},
    sceneOption: {},
    useEvents: {}
  },
  emits: ["on-iframe-event-listener"],
  setup(o, { expose: r, emit: i }) {
    const t = l(), s = o, m = i;
    return window.addEventListener("message", (e) => {
      m("on-iframe-event-listener", e.data), s.useEvents && p(s.useEvents) && d.parseEvents(s.useEvents, "on-iframe-event-listener", e.data);
    }, !1), r({
      sendChildrenMessages: (e, n) => {
        e[0].dataType === "params" ? t.value.contentWindow.postMessage(n, s.basicOption.url) : t.value.contentWindow.postMessage(e[0].data, s.basicOption.url);
      }
    }), (e, n) => (c(), f("iframe", {
      ref_key: "iframeRef",
      ref: t,
      src: e.basicOption.url,
      class: "iframe",
      sandbox: "allow-scripts allow-same-origin allow-forms"
    }, null, 8, u));
  }
});
export {
  b as default
};
