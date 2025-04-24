import { defineComponent as o, watch as m, createElementBlock as d, openBlock as l, normalizeStyle as f, unref as v, ref as b, onMounted as g, nextTick as k } from "vue";
import { cloneDeep as E, isEqual as _ } from "lodash";
import { SHJDatasourceV2 as h } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as n } from "../../commons/plugins/event/index.mjs";
const y = o({ name: "zv-media-image-dynamic" }), O = /* @__PURE__ */ o({
  ...y,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(c, { expose: i }) {
    const e = c, u = () => {
      const r = b(""), t = () => {
        h.parse({
          tId: e.uuid,
          sources: e.sources,
          callback: ({ data: a }) => {
            try {
              n.parseEvents(e.useEvents, "dataListener", a), r.value = a[0].data[0].src;
            } catch {
              n.parseEvents(e.useEvents, "dataListener", null);
            }
          }
        });
      };
      return g(() => k(() => t())), { init: t, src: r };
    }, { init: s, src: p } = u();
    return m(() => E(e.sources), (r, t) => {
      _(r, t) || s();
    }, { deep: !0 }), i({
      refresh: () => s(),
      refreshView: () => s(),
      refreshData: () => s()
    }), (r, t) => (l(), d("div", {
      class: "zerov-image",
      style: f({
        backgroundImage: `url('${v(p)}')`,
        ...e.basicOption.mode === "repeat" ? {
          backgroundRepeat: "repeat",
          backgroundSize: "auto"
        } : {
          backgroundSize: e.basicOption.mode,
          backgroundRepeat: "no-repeat"
        }
      })
    }, null, 4));
  }
});
export {
  O as default
};
