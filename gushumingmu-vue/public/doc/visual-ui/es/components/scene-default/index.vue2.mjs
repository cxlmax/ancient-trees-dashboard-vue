import { defineComponent as r, createElementBlock as u, openBlock as l, normalizeStyle as p } from "vue";
import { SHJParseEvent as d } from "../../commons/plugins/event/index.mjs";
const i = r({ name: "zv-scene-default" }), k = /* @__PURE__ */ r({
  ...i,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(a) {
    const t = a;
    d.parseEvents(t.useEvents, "on-page-loaded", null);
    const c = () => {
      try {
        const e = t.basicOption, o = e.background.image, s = e.background.color, n = e.background.size;
        return {
          background: o ? `url('${o}')` : s,
          backgroundSize: n,
          backgroundPosition: n === "auto" ? "0px 0px" : "center",
          backgroundRepeat: n === "auto" ? "repeat" : "no-repeat"
        };
      } catch {
        return {};
      }
    };
    return (e, o) => (l(), u("div", {
      class: "shj-default",
      style: p(c())
    }, null, 4));
  }
});
export {
  k as default
};
