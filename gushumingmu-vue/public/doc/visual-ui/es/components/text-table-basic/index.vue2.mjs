import { defineComponent as W, useCssVars as A, ref as S, computed as E, watch as z, onMounted as G, resolveComponent as K, createElementBlock as l, createCommentVNode as M, openBlock as u, createVNode as $, normalizeStyle as p, Fragment as V, renderList as I, createElementVNode as O, toDisplayString as D, unref as b, withCtx as L } from "vue";
import { debounce as f, cloneDeep as w, isEqual as R } from "lodash";
import { nanoid as k } from "nanoid";
import { RecycleScroller as Q } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { SHJDatasourceV2 as U } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as d } from "../../commons/plugins/event/index.mjs";
const X = ["onClick", "onMouseenter", "onMouseout"], Y = ["onClick"], Z = W({ name: "zv-text-table-basic" }), ie = /* @__PURE__ */ W({
  ...Z,
  props: {
    basicOption: {},
    useEvents: {},
    sources: {},
    uuid: {}
  },
  emits: ["on-click-item", "on-click-row", "on-mouseenter-row", "on-mouseout-row"],
  setup(B, { expose: N, emit: j }) {
    A((e) => ({
      b3073844: e.basicOption.css.table.borderWidth + "px",
      "8b05448c": e.basicOption.css.table.borderStyle,
      "8ccd2128": e.basicOption.css.table.borderColor,
      "6e2dd140": e.basicOption.css.table.paddingLeft + "px",
      "337db774": e.basicOption.css.table.alignItems,
      "175b4ad4": e.basicOption.css.table.justifyContent,
      "60eba224": e.basicOption.css.header.background,
      a5715660: e.basicOption.css.header.height + "px",
      "07adbea6": e.basicOption.css.header.color,
      cc841332: e.basicOption.css.header.fontSize + "px",
      f6e65ec6: e.basicOption.css.header.fontWeight,
      "8c7a9228": e.basicOption.css.header.fontStyle,
      "499661e5": e.basicOption.css.body.height + "px",
      "72b695a2": e.basicOption.css.body.background,
      "30ed12c2": e.basicOption.css.body.color,
      "5e7e123c": e.basicOption.css.body.fontSize + "px",
      "2b7438b0": e.basicOption.css.body.fontWeight,
      28659681: e.basicOption.css.body.fontStyle
    }));
    const m = j, v = S(k()), r = S([]), i = B, H = () => {
      if (!r.value.length) return;
      const e = Object.keys(r.value[0]), t = i.basicOption.columns || [], s = e.map((o, a) => {
        const n = t.find((C) => C.name === o) || {};
        return {
          name: n.name || o,
          // 如果用户没有提供 name，使用 key 作为 name
          label: n.label || o,
          // 如果用户没有提供 label，使用 key 作为 label
          visible: n.visible !== void 0 ? n.visible : !0,
          // 如果用户没有提供 visible，默认可见
          index: n.index !== void 0 ? n.index : a,
          // 如果用户没有提供 index，使用默认顺序
          width: n.width || { auto: !0, width: 100 },
          // 如果用户没有提供 width，使用默认宽度
          font: n.font || { auto: !0, color: "#ffffff", fontSize: 12, fontStyle: "normal" }
          // 如果用户没有提供 font，使用默认字体
        };
      });
      i.basicOption.columns = s.sort((o, a) => o.index - a.index);
    }, h = E(() => i.basicOption.columns || []), y = E(() => h.value.filter((e) => e.visible).map((e) => e.name)), c = () => {
      U.parse({
        tId: i.uuid,
        sources: i.sources,
        callback: (e) => {
          try {
            d.parseEvents(i.useEvents, "dataListener", r), v.value = k(), r.value = w(e.data[0].data).map((t, s) => ({
              id: t.id || s,
              // 使用索引作为 id
              ...t
            })), H();
          } catch {
            d.parseEvents(i.useEvents, "dataListener", null), v.value = k(), r.value = [];
          }
        }
      });
    }, g = (e) => {
      const t = h.value.find((s) => s.name === e);
      return t != null && t.width.auto ? null : `${t == null ? void 0 : t.width.width}px`;
    }, J = (e) => {
      const t = h.value.find((o) => o.name === e);
      if (!t) return {};
      const s = {
        whiteSpace: "nowrap",
        // 默认不换行
        textOverflow: "ellipsis",
        // 默认溢出省略号
        overflow: "hidden"
        // 默认隐藏溢出内容
      };
      return {
        color: t.font.color,
        fontSize: `${t.font.fontSize}px`,
        fontStyle: t.font.fontStyle,
        ...s,
        ...t.textStyle
        // 用户自定义样式
      };
    }, q = f((e, t) => {
      const s = { row: e, rowIndex: t };
      m("on-click-row", s), d.parseEvents(i.useEvents, "on-click-row", s);
    }, 100), F = f((e, t) => {
      const s = { row: e, rowIndex: t };
      m("on-mouseenter-row", s), d.parseEvents(i.useEvents, "on-mouseenter-row", s);
    }, 100), P = f((e, t) => {
      const s = { row: e, rowIndex: t };
      m("on-mouseout-row", s), d.parseEvents(i.useEvents, "on-mouseout-row", s);
    }, 100), T = f((e, t, s, o) => {
      const a = { row: e, item: t, rowIndex: s, columnIndex: o };
      m("on-click-item", a), d.parseEvents(i.useEvents, "on-click-item", a);
    }, 100);
    return z(() => w(i.sources), (e, t) => {
      R(e, t) || c();
    }, { deep: !0 }), z(() => w(i.basicOption), (e, t) => {
      R(e, t) || c();
    }, { deep: !0 }), G(() => c()), N({
      refresh: () => c(),
      refreshView: () => c(),
      refreshData: () => c()
    }), (e, t) => {
      const s = K("el-tooltip");
      return r.value.length > 0 ? (u(), l("div", {
        key: v.value,
        class: "table-scroll"
      }, [
        e.basicOption.css.header.show ? (u(), l("div", {
          key: 0,
          class: "table-header",
          style: p({
            "--header-background-image": `url(${e.basicOption.css.header.background})`
          })
        }, [
          (u(!0), l(V, null, I(y.value, (o) => (u(), l("div", {
            key: o,
            class: "th",
            style: p({ width: g(o) })
          }, [
            O("p", null, D(o), 1)
          ], 4))), 128))
        ], 4)) : M("", !0),
        $(b(Q), {
          id: "",
          class: "table-body",
          items: r.value,
          "item-size": e.basicOption.css.body.height,
          "key-field": "id"
        }, {
          default: L(({ item: o, index: a }) => [
            O("div", {
              class: "tr",
              style: p({
                "--row-hover": e.basicOption.css.hoverColor,
                "--odd-background": e.basicOption.css.oddBackground
              }),
              onClick: (n) => b(q)(o, a),
              onMouseenter: (n) => b(F)(o, a),
              onMouseout: (n) => b(P)(o, a)
            }, [
              (u(!0), l(V, null, I(y.value, (n) => (u(), l("div", {
                key: n,
                class: "td",
                style: p({ width: g(n) }),
                onClick: (C) => b(T)(o, o[n], a, y.value.indexOf(n))
              }, [
                $(s, {
                  content: o[n]
                }, {
                  default: L(() => [
                    O("p", {
                      style: p(J(n))
                    }, D(o[n]), 5)
                  ]),
                  _: 2
                }, 1032, ["content"])
              ], 12, Y))), 128))
            ], 44, X)
          ]),
          _: 1
        }, 8, ["items", "item-size"])
      ])) : M("", !0);
    };
  }
});
export {
  ie as default
};
