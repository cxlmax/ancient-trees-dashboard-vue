import { defineComponent as M, useCssVars as A, ref as v, onMounted as H, watch as S, createElementBlock as i, createCommentVNode as V, openBlock as r, createVNode as J, normalizeStyle as p, Fragment as O, renderList as y, normalizeClass as W, createElementVNode as T, toDisplayString as g, unref as q, withCtx as P } from "vue";
import { cloneDeep as k, isEqual as z } from "lodash";
import { Vue3SeamlessScroll as U } from "vue3-seamless-scroll";
import { nanoid as w } from "nanoid";
import { SHJDatasourceV2 as G } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as d } from "../../commons/plugins/event/index.mjs";
const K = ["onClick", "onMouseenter", "onMouseout"], Q = ["onClick"], X = { key: 1 }, Y = M({ name: "zv-text-row-scroll" }), ne = /* @__PURE__ */ M({
  ...Y,
  props: {
    basicOption: {},
    useEvents: {},
    sources: {},
    uuid: {}
  },
  emits: ["on-click-item", "on-click-row", "on-mouseenter-row", "on-mouseout-row"],
  setup($, { expose: D, emit: F }) {
    A((e) => ({
      "1ecf4d84": e.basicOption.css.table.borderWidth + "px",
      d92d3a58: e.basicOption.css.table.borderStyle,
      daf516f4: e.basicOption.css.table.borderColor,
      "413c0106": e.basicOption.css.table.paddingLeft + "px",
      "379313ec": e.basicOption.css.table.alignItems,
      ed7e110c: e.basicOption.css.table.justifyContent,
      "39d7a73e": e.basicOption.css.header.background,
      "1f2d0176": e.basicOption.css.header.height + "px",
      "08fe595a": e.basicOption.css.header.color,
      "28eb118d": e.basicOption.css.header.fontSize + "px",
      "5d78d5b7": e.basicOption.css.header.fontWeight,
      "0b14a692": e.basicOption.css.header.fontStyle,
      e3a9ffea: e.basicOption.css.body.height + "px",
      "452338c9": e.basicOption.css.body.background,
      "7a020f4c": e.basicOption.css.oddBackground,
      b8859230: e.basicOption.css.body.color,
      "5f38823c": e.basicOption.css.body.fontSize + "px",
      "68c46742": e.basicOption.css.body.fontWeight,
      "9ec990b2": e.basicOption.css.body.fontStyle
    }));
    const b = F, f = v(w()), c = v([]), s = $, m = v(s.basicOption.scroll.start), u = () => {
      G.parse({
        tId: s.uuid,
        sources: s.sources,
        callback: (e) => {
          try {
            d.parseEvents(s.useEvents, "dataListener", c), c.value = k(e.data[0].data) || [], f.value = w(), m.value = s.basicOption.scroll.start;
          } catch {
            d.parseEvents(s.useEvents, "dataListener", null), c.value = [], f.value = w(), m.value = s.basicOption.scroll.start;
          }
        }
      });
    }, L = (e) => {
      const o = [];
      for (const t in e)
        o.push(e[t]);
      return o;
    };
    H(() => u()), S(() => k(s.basicOption), (e, o) => {
      z(e, o) || u();
    }, {
      deep: !0
    }), S(() => k(s.sources), (e, o) => {
      z(e, o) || u();
    }, {
      deep: !0
    }), D({
      refresh: () => u(),
      refreshView: () => u(),
      refreshData: () => u()
    });
    const N = (e) => {
      if (!s.basicOption.columns)
        return !0;
      const o = s.basicOption.columns.find((t) => t.index === e);
      return o ? o.font.auto : !0;
    }, h = (e) => {
      if (!s.basicOption.columns)
        return null;
      const o = s.basicOption.columns.find((t) => t.index === e);
      return o && o.font.auto === !1 ? o.font : null;
    }, C = (e) => {
      if (!s.basicOption.columns)
        return !0;
      const o = s.basicOption.columns.find((t) => t.index === e);
      return o ? o.width.auto : !0;
    }, E = (e) => {
      if (!s.basicOption.columns)
        return null;
      const o = s.basicOption.columns.find((t) => t.index === e);
      return o && o.width.auto === !1 ? o.width.width : null;
    }, B = (e, o) => {
      const t = { row: e, rowIndex: o };
      b("on-click-row", t), d.parseEvents(s.useEvents, "on-click-row", t);
    }, I = (e, o) => {
      const t = { row: e, rowIndex: o };
      b("on-mouseenter-row", t), d.parseEvents(s.useEvents, "on-mouseenter-row", t);
    }, R = (e, o) => {
      const t = { row: e, rowIndex: o };
      b("on-mouseout-row", t), d.parseEvents(s.useEvents, "on-mouseout-row", t);
    }, j = (e, o, t, a) => {
      const n = { row: e, item: o, rowIndex: t, columnIndex: a };
      b("on-click-item", n), d.parseEvents(s.useEvents, "on-click-item", n);
    };
    return (e, o) => c.value.length > 0 ? (r(), i("div", {
      key: f.value,
      class: "table-scroll"
    }, [
      e.basicOption.css.header.show ? (r(), i("div", {
        key: 0,
        class: "table-header",
        style: p({
          "--header-background-image": `url(${e.basicOption.css.header.backgroundImage})`
        })
      }, [
        (r(!0), i(O, null, y(Object.keys(c.value[0]), (t, a) => (r(), i("div", {
          key: t,
          class: W(["th", { customWidth: !C(a + 1) }]),
          style: p({ "--width": E(a + 1) + "px" })
        }, [
          T("p", null, g(t), 1)
        ], 6))), 128))
      ], 4)) : V("", !0),
      J(q(U), {
        modelValue: m.value,
        "onUpdate:modelValue": o[0] || (o[0] = (t) => m.value = t),
        direction: e.basicOption.scroll.direction,
        list: c.value,
        "is-watch": "",
        hover: e.basicOption.scroll.hover,
        "limit-scroll-num": e.basicOption.scroll.limitScrollNum,
        "single-height": e.basicOption.scroll.isSingle ? e.basicOption.css.body.height : 0,
        "single-wait-time": e.basicOption.scroll.singleWaitTime,
        class: "table-body"
      }, {
        default: P(() => [
          (r(!0), i(O, null, y(c.value, (t, a) => (r(), i("div", {
            key: t,
            class: "tr",
            style: p({
              "--row-hover": e.basicOption.css.hoverColor
            }),
            onClick: (n) => B(t, a),
            onMouseenter: (n) => I(t, a),
            onMouseout: (n) => R(t, a)
          }, [
            (r(!0), i(O, null, y(L(t), (n, l) => (r(), i("div", {
              key: n,
              class: W(["td", { customWidth: !C(l + 1) }]),
              style: p({ "--width": E(l + 1) + "px" }),
              onClick: (Z) => j(t, n, a, l)
            }, [
              N(l + 1) ? (r(), i("p", X, g(n), 1)) : (r(), i("p", {
                key: 0,
                class: "customFont",
                style: p({
                  "--text-color": h(l + 1).color,
                  "--text-font-size": h(l + 1).fontSize + "px",
                  "--text-font-style": h(l + 1).fontStyle
                })
              }, g(n), 5))
            ], 14, Q))), 128))
          ], 44, K))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "direction", "list", "hover", "limit-scroll-num", "single-height", "single-wait-time"])
    ])) : V("", !0);
  }
});
export {
  ne as default
};
