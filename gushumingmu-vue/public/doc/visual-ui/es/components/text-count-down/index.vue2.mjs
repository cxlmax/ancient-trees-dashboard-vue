import { defineComponent as H, ref as D, computed as z, watchEffect as E, createElementBlock as h, openBlock as w, Fragment as F, createCommentVNode as m, normalizeStyle as S, toDisplayString as O } from "vue";
import { SHJParseEvent as T } from "../../commons/plugins/event/index.mjs";
import { autoInstallFont as A, jsonToCssStyle as j } from "../../commons/utils/json2css.mjs";
const _ = ["ztitle"], $ = ["ztitle"], N = ["ztitle"], q = H({ name: "zv-text-count-down" }), J = /* @__PURE__ */ H({
  ...q,
  props: {
    basicOption: {},
    useEvents: {}
  },
  emits: [
    "on-end",
    "on-start"
  ],
  setup(C, { expose: Y, emit: k }) {
    const g = k, x = window.requestAnimationFrame, n = C, d = D(0), o = D(0), a = z(() => ({
      showMillisecond: n.basicOption.conf.format.includes("SSS"),
      showYear: n.basicOption.conf.format.includes("Y"),
      showMonth: n.basicOption.conf.format.includes("M"),
      showDay: n.basicOption.conf.format.includes("D"),
      showHour: n.basicOption.conf.format.includes("H"),
      showMinute: n.basicOption.conf.format.includes("m"),
      showSecond: n.basicOption.conf.format.includes("s")
    }));
    function l(e) {
      return e < 10 ? "0" + e : String(e);
    }
    function y(e) {
      if (e === null)
        return "--";
      let t = n.basicOption.conf.format, s = 0;
      a.value.showMillisecond && (s = e % 1e3, t = t.replace("SSS", "0".repeat(3 - String(s).length) + s)), e = Math.floor(e / 1e3);
      let r = 0;
      a.value.showYear ? (r = Math.floor(e / (60 * 60 * 24 * 30 * 12)), t = t.includes("YY") ? t.replace("YY", l(r)) : t.replace("Y", String(r))) : r = 0;
      let c = 0;
      a.value.showMonth ? (e = e - r * 60 * 60 * 24 * 30 * 12, c = Math.floor(e / (60 * 60 * 24 * 30)), t = t.includes("MM") ? t.replace("MM", l(c)) : t.replace("M", String(c))) : c = 0;
      let u = 0;
      a.value.showDay ? (e = e - c * 60 * 60 * 24 * 30, u = Math.floor(e / (60 * 60 * 24)), t = t.includes("DD") ? t.replace("DD", l(u)) : t.replace("D", String(u))) : u = 0;
      let f = 0;
      a.value.showHour ? (e = e - u * 60 * 60 * 24, f = Math.floor(e / (60 * 60)), t = t.includes("HH") ? t.replace("HH", l(f)) : t.replace("H", String(f))) : f = 0;
      let p = 0;
      a.value.showMinute ? (e = e - f * 60 * 60, p = Math.floor(e / 60), t = t.includes("mm") ? t.replace("mm", l(p)) : t.replace("m", String(p))) : p = 0;
      let b = 0;
      return a.value.showSecond && (b = e - p * 60, t = t.includes("ss") ? t.replace("ss", l(b)) : t.replace("s", String(b))), t;
    }
    function M() {
      o.value !== null && (d.value > Date.now() ? (o.value = d.value - Date.now(), x(M)) : (o.value = 0, g("on-end"), T.parseEvents(n.useEvents, "end-count-down", null)));
    }
    const i = () => {
      g("on-start"), T.parseEvents(n.useEvents, "on-start", null), o.value = 0, Number.isFinite(n.basicOption.conf.value) ? (n.basicOption.conf.future ? n.basicOption.conf.value >= Date.now() && (d.value = n.basicOption.conf.value) : n.basicOption.conf.value >= 0 && (d.value = n.basicOption.conf.value + Date.now()), x(M)) : o.value = null;
    };
    E(() => {
      n.basicOption.conf.autoStart ? i() : o.value = null;
    });
    const v = (e) => {
      A(e.fontFamily);
      const t = {};
      e.color && e.color.includes("linear-gradient") && (t.backgroundImage = e.color, t["-webkit-background-clip"] = "text", t.color = "transparent");
      const s = {};
      return e.textAlign === "left" && (e.justifyContent = "flex-start"), e.textAlign === "center" && (e.justifyContent = "center"), e.textAlign === "right" && (e.justifyContent = "flex-end"), {
        ...j(e),
        ...t,
        ...s,
        ...e.textShadow.show ? { "--text-shadow": `${e.textShadow.x}px ${e.textShadow.y}px ${e.textShadow.value}px ${e.textShadow.color}` } : {}
      };
    };
    return Y({
      // 开始倒计时
      start: () => i(),
      // 重新倒计时
      startAgain: () => i(),
      refresh: () => i(),
      refreshView: () => i(),
      refreshData: () => i()
    }), (e, t) => (w(), h(F, null, [
      e.basicOption.conf.finishedText && o.value === 0 && o.value !== null ? (w(), h("span", {
        key: 0,
        class: "count-down",
        style: S(v(e.basicOption.css)),
        ztitle: e.basicOption.conf.finishedText
      }, O(e.basicOption.conf.finishedText), 13, _)) : m("", !0),
      e.basicOption.conf.defaultText && o.value === null ? (w(), h("span", {
        key: 1,
        class: "count-down",
        style: S(v(e.basicOption.css)),
        ztitle: e.basicOption.conf.defaultText
      }, O(e.basicOption.conf.defaultText), 13, $)) : m("", !0),
      Number.isFinite(o.value) && o.value > 0 ? (w(), h("span", {
        key: 2,
        class: "count-down",
        style: S(v(e.basicOption.css)),
        ztitle: y(o.value)
      }, O(y(o.value)), 13, N)) : m("", !0)
    ], 64));
  }
});
export {
  J as default
};
