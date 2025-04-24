import { defineComponent as r, createElementBlock as p, openBlock as d, onMounted as v } from "vue";
import { SHJParseEvent as o } from "../../commons/plugins/event/index.mjs";
const h = { class: "shj-for-ue" }, f = r({ name: "zv-scene-ue-shj" }), _ = /* @__PURE__ */ r({
  ...f,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["ue-scene-on-message"],
  setup(c, { emit: a }) {
    const s = c, i = a;
    return o.parseEvents(s.useEvents, "on-page-loaded", null), (() => {
      v(() => {
        s.useEvents.length > 0 && s.useEvents.forEach((e) => {
          e && e.receivingMethod && (window.ue.interface[e.receivingMethod] = (n) => {
            try {
              if (!JSON.parse(n).data)
                throw new Error("");
              const t = s.useEvents.filter((u) => u.receivingMethod === e.receivingMethod);
              i("ue-scene-on-message", JSON.parse(n).data), o.parseEvents(t, "ue-scene-on-message", JSON.parse(n).data);
            } catch {
            }
          });
        });
      });
    })(), (e, n) => (d(), p("div", h));
  }
});
export {
  _ as default
};
