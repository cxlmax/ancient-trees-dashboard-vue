import { defineComponent as f, watch as s, createElementBlock as S, openBlock as g, unref as i, normalizeStyle as w, toDisplayString as _, ref as D, onMounted as E, nextTick as b } from "vue";
import { cloneDeep as c, isEqual as p } from "lodash";
import { SHJDatasourceV2 as k } from "../../commons/plugins/datasource/index.mjs";
import { autoInstallFont as C, jsonToCssStyle as j } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as d } from "../../commons/plugins/event/index.mjs";
const z = ["ztitle"], T = f({ name: "zv-text-text-dynamic" }), F = /* @__PURE__ */ f({
  ...T,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(x, { expose: m }) {
    const o = x, y = () => {
      const t = D(""), n = (e) => {
        C(e.fontFamily);
        const a = {};
        e.color && e.color.includes("linear-gradient") && (a.backgroundImage = e.color, a["-webkit-background-clip"] = "text", a.color = "transparent");
        const v = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...j(e),
          ...a,
          ...v,
          ...e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, u = () => {
        k.parse({
          tId: o.uuid,
          sources: o.sources,
          callback: ({ data: e }) => {
            try {
              d.parseEvents(o.useEvents, "dataListener", e), t.value = e[0].data[0].value;
            } catch {
              d.parseEvents(o.useEvents, "dataListener", null);
            }
          }
        });
      };
      return E(() => b(() => u())), { rendererDomStyle: n, init: u, value: t };
    }, { rendererDomStyle: h, init: r, value: l } = y();
    return s(() => c(o.basicOption), (t, n) => {
      p(t, n) || r();
    }, { deep: !0 }), s(() => c(o.sources), (t, n) => {
      p(t, n) || r();
    }, { deep: !0 }), m({
      refresh: () => r(),
      refreshView: () => r(),
      refreshData: () => r()
    }), (t, n) => (g(), S("p", {
      class: "zerov-widget-text",
      style: w(i(h)(t.basicOption.css)),
      ztitle: i(l)
    }, _(i(l)), 13, z));
  }
});
export {
  F as default
};
