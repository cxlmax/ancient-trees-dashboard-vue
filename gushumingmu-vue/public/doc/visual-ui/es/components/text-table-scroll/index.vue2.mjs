import { defineComponent as M, useCssVars as j, ref as O, onMounted as A, watch as S, createElementBlock as i, createCommentVNode as V, openBlock as r, normalizeStyle as u, createVNode as J, Fragment as v, renderList as y, normalizeClass as W, createElementVNode as T, toDisplayString as g, unref as q, withCtx as P } from "vue";
import { cloneDeep as k, isEqual as z } from "lodash";
import { Vue3SeamlessScroll as U } from "vue3-seamless-scroll";
import { nanoid as w } from "nanoid";
import { SHJDatasourceV2 as G } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as p } from "../../commons/plugins/event/index.mjs";
const K = ["onClick", "onMouseenter", "onMouseout"], Q = ["onClick"], X = { key: 1 }, Y = M({ name: "zv-text-table-scroll" }), ne = /* @__PURE__ */ M({
  ...Y,
  props: {
    basicOption: {},
    useEvents: {},
    sources: {},
    uuid: {}
  },
  emits: ["on-click-item", "on-click-row", "on-mouseenter-row", "on-mouseout-row"],
  setup($, { expose: D, emit: F }) {
    j((e) => ({
      "0811a92e": e.basicOption.css.table.borderWidth + "px",
      "71192c8f": e.basicOption.css.table.borderStyle,
      "70353e41": e.basicOption.css.table.borderColor,
      "1e63deeb": e.basicOption.css.table.paddingLeft + "px",
      "2e35a6d1": e.basicOption.css.table.alignItems,
      "74e58fdf": e.basicOption.css.table.justifyContent,
      "178770f9": e.basicOption.css.header.background,
      "0ad199db": e.basicOption.css.header.height + "px",
      "277abe90": e.basicOption.css.header.color,
      "8469b69c": e.basicOption.css.header.fontSize + "px",
      "3b289f72": e.basicOption.css.header.fontWeight,
      "01b73977": e.basicOption.css.header.fontStyle,
      "6e203544": e.basicOption.css.body.background,
      bd0c22f2: e.basicOption.css.oddBackground,
      "20ed198d": e.basicOption.css.body.color,
      "87ef5172": e.basicOption.css.body.fontSize + "px",
      dc7d3886: e.basicOption.css.body.fontWeight,
      "781f3fcc": e.basicOption.css.body.fontStyle
    }));
    const b = F, h = O(w()), a = O([]), s = $, m = O(s.basicOption.scroll.start), d = () => {
      G.parse({
        tId: s.uuid,
        sources: s.sources,
        callback: (e) => {
          try {
            p.parseEvents(s.useEvents, "dataListener", a), a.value = k(e.data[0].data) || [], h.value = w(), m.value = s.basicOption.scroll.start;
          } catch {
            p.parseEvents(s.useEvents, "dataListener", null), h.value = w(), a.value = [], m.value = s.basicOption.scroll.start;
          }
        }
      });
    }, L = (e) => {
      const t = [];
      for (const o in e)
        t.push(e[o]);
      return t;
    };
    A(() => d()), S(() => k(s.basicOption), (e, t) => {
      z(e, t) || d();
    }, {
      deep: !0
    }), S(() => k(s.sources), (e, t) => {
      z(e, t) || d();
    }, {
      deep: !0
    }), D({
      refresh: () => d(),
      refreshView: () => d(),
      refreshData: () => d()
    });
    const N = (e) => {
      if (!s.basicOption.columns)
        return !0;
      const t = s.basicOption.columns.find((o) => o.index === e);
      return t ? t.font.auto : !0;
    }, f = (e) => {
      if (!s.basicOption.columns)
        return null;
      const t = s.basicOption.columns.find((o) => o.index === e);
      return t && t.font.auto === !1 ? t.font : null;
    }, C = (e) => {
      if (!s.basicOption.columns)
        return !0;
      const t = s.basicOption.columns.find((o) => o.index === e);
      return t ? t.width.auto : !0;
    }, E = (e) => {
      if (!s.basicOption.columns)
        return null;
      const t = s.basicOption.columns.find((o) => o.index === e);
      return t && t.width.auto === !1 ? t.width.width : null;
    }, B = (e, t) => {
      const o = { row: e, rowIndex: t };
      b("on-click-row", o), p.parseEvents(s.useEvents, "on-click-row", o);
    }, H = (e, t) => {
      const o = { row: e, rowIndex: t };
      b("on-mouseenter-row", o), p.parseEvents(s.useEvents, "on-mouseenter-row", o);
    }, I = (e, t) => {
      const o = { row: e, rowIndex: t };
      b("on-mouseout-row", o), p.parseEvents(s.useEvents, "on-mouseout-row", o);
    }, R = (e, t, o, l) => {
      const n = { row: e, item: t, rowIndex: o, columnIndex: l };
      b("on-click-item", n), p.parseEvents(s.useEvents, "on-click-item", n);
    };
    return (e, t) => a.value.length > 0 ? (r(), i("div", {
      key: h.value,
      class: "table-scroll",
      style: u({ lineHeight: e.basicOption.css.body.height + "px" })
    }, [
      e.basicOption.css.header.show ? (r(), i("div", {
        key: 0,
        class: "table-header",
        style: u({
          "--header-background-image": `url(${e.basicOption.css.header.backgroundImage})`
        })
      }, [
        (r(!0), i(v, null, y(Object.keys(a.value[0]), (o, l) => (r(), i("div", {
          key: o,
          class: W(["th", { customWidth: !C(l + 1) }]),
          style: u({ "--width": E(l + 1) + "px" })
        }, [
          T("p", null, g(o), 1)
        ], 6))), 128))
      ], 4)) : V("", !0),
      J(q(U), {
        modelValue: m.value,
        "onUpdate:modelValue": t[0] || (t[0] = (o) => m.value = o),
        direction: e.basicOption.scroll.direction,
        list: a.value,
        "is-watch": "",
        step: e.basicOption.scroll.step,
        hover: e.basicOption.scroll.hover,
        "limit-scroll-num": e.basicOption.scroll.limitScrollNum,
        "single-height": e.basicOption.scroll.isSingle ? e.basicOption.css.body.height : 0,
        "single-wait-time": e.basicOption.scroll.singleWaitTime,
        class: "table-body",
        style: u([{ color: "red" }, {
          "line-height": "36px"
        }])
      }, {
        default: P(() => [
          (r(!0), i(v, null, y(a.value, (o, l) => (r(), i("div", {
            key: o,
            class: "tr",
            style: u({
              "--row-hover": e.basicOption.css.hoverColor
            }),
            onClick: (n) => B(o, l),
            onMouseenter: (n) => H(o, l),
            onMouseout: (n) => I(o, l)
          }, [
            (r(!0), i(v, null, y(L(o), (n, c) => (r(), i("div", {
              key: n,
              class: W(["td", { customWidth: !C(c + 1) }]),
              style: u({ "--width": E(c + 1) + "px" }),
              onClick: (Z) => R(o, n, l, c)
            }, [
              N(c + 1) ? (r(), i("p", X, g(n), 1)) : (r(), i("p", {
                key: 0,
                class: "customFont",
                style: u({
                  "--text-color": f(c + 1).color,
                  "--text-font-size": f(c + 1).fontSize + "px",
                  "--text-font-style": f(c + 1).fontStyle
                })
              }, g(n), 5))
            ], 14, Q))), 128))
          ], 44, K))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "direction", "list", "step", "hover", "limit-scroll-num", "single-height", "single-wait-time"])
    ], 4)) : V("", !0);
  }
});
export {
  ne as default
};
