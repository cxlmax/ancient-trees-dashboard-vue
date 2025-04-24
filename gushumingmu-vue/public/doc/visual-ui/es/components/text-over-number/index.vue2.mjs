import { defineComponent as y, ref as s, watch as f, createBlock as M, openBlock as j, unref as u, normalizeStyle as _, onMounted as P, nextTick as T, onBeforeUnmount as $ } from "vue";
import { cloneDeep as m, isEqual as v } from "lodash";
import z from "vue-countup-v3";
import { Odometer as A } from "odometer_countup";
import { nanoid as h } from "nanoid";
import { SHJDatasourceV2 as B } from "../../commons/plugins/datasource/index.mjs";
import { autoInstallFont as N, jsonToCssStyle as H } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as x } from "../../commons/plugins/event/index.mjs";
const J = y({ name: "zv-text-over-number" }), X = /* @__PURE__ */ y({
  ...J,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  setup(U, { expose: S }) {
    const n = U, d = s(n.basicOption.countUp.startVal), g = (t) => {
      const r = s(h()), l = s(0), c = s(), a = s(), p = () => {
        B.parse({
          tId: n.uuid,
          sources: n.sources,
          callback: ({ data: e }) => {
            try {
              x.parseEvents(n.useEvents, "dataListener", e), r.value = h(), l.value = Number(e[0].data[0].value), c.value = {
                startVal: d.value,
                separator: t.countUp.separator,
                decimal: t.countUp.decimal,
                decimalPlaces: t.countUp.decimalPlaces,
                duration: t.countUp.duration,
                prefix: t.countUp.prefix,
                suffix: t.countUp.suffix
              }, t.countUp.isOdometer && (c.value.plugin = new A({
                duration: t.countUp.duration,
                lastDigitDelay: 0
              })), d.value = l.value, t.isImitate ? C() : a.value && clearInterval(a.value);
            } catch {
              x.parseEvents(n.useEvents, "dataListener", null);
            }
          }
        });
      }, I = (e) => {
        N(e.fontFamily);
        const o = {};
        e.color && e.color.includes("linear-gradient") && (o.backgroundImage = e.color, o["-webkit-background-clip"] = "text", o.color = "transparent");
        const E = {};
        return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
          ...H(e),
          ...o,
          ...E,
          ...e.textShadow.show ? { textShadow: `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
        };
      }, b = () => {
      }, C = () => {
        a.value && clearInterval(a.value);
        const e = t.countUp.isOdometer ? Math.floor(Math.random() * 6) + 5 : Math.floor(Math.random() * 4) + 3;
        a.value = setInterval(() => {
          d.value = l.value, c.value.startVal = d.value;
          const o = Number((Math.random() * 10).toFixed(t.countUp.decimalPlaces));
          o > 3 ? l.value += o : l.value -= o;
        }, e * 1e3);
      };
      return P(() => T(() => p())), $(() => {
        a.value && clearInterval(a.value);
      }), {
        key: r,
        init: p,
        options: c,
        endValue: l,
        onFinished: b,
        rendererDomStyle: I
      };
    }, {
      key: w,
      init: i,
      options: k,
      endValue: D,
      onFinished: V,
      rendererDomStyle: F
    } = g(n.basicOption);
    return f(() => m(n.basicOption), (t, r) => {
      v(t, r) || i();
    }, { deep: !0 }), f(() => m(n.sources), (t, r) => {
      v(t, r) || i();
    }, { deep: !0 }), S({
      refresh: () => i(),
      refreshView: () => i(),
      refreshData: () => i()
    }), (t, r) => (j(), M(u(z), {
      key: u(w),
      class: "zerov-widget-over-number",
      "end-val": u(D),
      options: u(k),
      loop: t.basicOption.countUp.loop,
      delay: t.basicOption.countUp.delay,
      style: _(u(F)(t.basicOption.css)),
      onFinished: u(V)
    }, null, 8, ["end-val", "options", "loop", "delay", "style", "onFinished"]));
  }
});
export {
  X as default
};
