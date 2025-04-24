import { defineComponent as p, watch as T, createElementBlock as w, openBlock as _, unref as l, normalizeStyle as E, toDisplayString as b, ref as c, onMounted as z, onBeforeUnmount as j } from "vue";
import { cloneDeep as C, isEqual as I } from "lodash";
import i from "dayjs";
import "dayjs/locale/zh-cn";
import { autoInstallFont as k, jsonToCssStyle as D } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as f } from "../../commons/plugins/event/index.mjs";
const O = ["ztitle"], R = p({ name: "zv-text-real-time" }), J = /* @__PURE__ */ p({
  ...R,
  props: {
    basicOption: {},
    datasource: {},
    useEvents: {}
  },
  emits: [
    "on-change"
  ],
  setup(s, { emit: d }) {
    const m = d, a = s, v = (o) => {
      const t = c(), n = c(i().locale("zh-cn").format(o.format)), g = (e) => {
        k(e.fontFamily);
        const r = {};
        e.color && e.color.includes("linear-gradient") && (r.backgroundImage = e.color, r["-webkit-background-clip"] = "text", r.color = "transparent");
        const S = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...D(e),
          ...r,
          ...S,
          ...e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, y = (e) => {
        t.value && clearInterval(t.value), t.value = setInterval(() => {
          n.value = i().locale("zh-cn").format(e), m("on-change", n.value), f.parseEvents(a.useEvents, "on-change", n.value);
        }, 1e3);
      };
      return z(() => {
        t.value = setInterval(() => {
          n.value = i().locale("zh-cn").format(o.format), m("on-change", n.value), f.parseEvents(a.useEvents, "on-change", n.value);
        }, 1e3);
      }), j(() => {
        t.value && clearInterval(t.value);
      }), { updateRealTime: y, realTime: n, rendererDomStyle: g };
    }, { updateRealTime: h, realTime: u, rendererDomStyle: x } = v(a.basicOption);
    return T(() => C(a.basicOption.format), (o, t) => {
      I(o, t) || h(o);
    }, {
      deep: !0
    }), (o, t) => (_(), w("div", {
      class: "real-time",
      style: E(l(x)(o.basicOption.css)),
      ztitle: l(u)
    }, b(l(u)), 13, O));
  }
});
export {
  J as default
};
