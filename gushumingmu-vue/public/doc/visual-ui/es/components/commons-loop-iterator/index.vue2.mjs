import { defineComponent as f, onMounted as F, watch as h, createElementBlock as n, openBlock as t, normalizeStyle as u, unref as p, Fragment as s, renderList as m, withModifiers as O, createElementVNode as $, toDisplayString as V, ref as x } from "vue";
import { isEqual as b, cloneDeep as j } from "lodash";
import { nanoid as w } from "nanoid";
import { SHJDatasourceV2 as B } from "../../commons/plugins/datasource/index.mjs";
import { autoInstallFont as H } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as g } from "../../commons/plugins/event/index.mjs";
const J = ["onClick"], M = ["src"], q = f({ name: "zv-commons-loop-iterator" }), Y = /* @__PURE__ */ f({
  ...q,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-change"],
  setup(S, { expose: k, emit: v }) {
    const e = S, I = () => {
      const r = x(), a = x([]);
      return {
        init: () => {
          B.parse({
            tId: e.uuid,
            sources: e.sources,
            callback: (o) => {
              try {
                r.value = w(), o && o.data ? a.value = j(o.data[0].data) : a.value = [];
              } catch {
                g.parseEvents(e.useEvents, "dataListener", null), r.value = w(), a.value = [];
              }
            }
          });
        },
        key: r,
        loopData: a,
        renderItemStyle: (o) => ({
          gridTemplateColumns: `repeat(${o.columns}, 1fr)`,
          alignItems: o.alignItems,
          rowGap: o.rowGap + "px",
          columnGap: o.columnGap + "px",
          borderWidth: o.border.width + "px",
          borderColor: o.border.color,
          borderStyle: o.border.style,
          background: o.background.type === "color" ? o.background.color : `no-repeat center/100% url(${o.background.image})`,
          boxShadow: o.shadow.x + "px " + o.shadow.y + "px " + o.shadow.blur + "px " + o.shadow.diffus + "px " + o.shadow.color
        }),
        renderImageStyle: (o) => o ? {
          width: o.width + "px",
          height: o.height + "px",
          objectFit: o.objectFit,
          borderWidth: o.border.width + "px",
          borderColor: o.border.color,
          borderStyle: o.border.style,
          boxShadow: o.shadow.x + "px " + o.shadow.y + "px " + o.shadow.blur + "px " + o.shadow.diffus + "px " + o.shadow.color,
          padding: o.padding[0] + "px " + o.padding[1] + "px " + o.padding[2] + "px " + o.padding[3] + "px"
        } : {},
        renderTextStyle: (o) => (H(o.font), o ? {
          width: o.width + "px",
          height: o.height + "px",
          color: o.color,
          fontSize: o.size + "px",
          fontFamily: o.font,
          fontStyle: o.style,
          // textAlign: style.align,
          boxShadow: o.shadow.x + "px " + o.shadow.y + "px " + o.shadow.blur + "px " + o.shadow.diffus + "px " + o.shadow.color,
          padding: o.padding[0] + "px " + o.padding[1] + "px " + o.padding[2] + "px " + o.padding[3] + "px"
        } : {}),
        renderLoopWrapStyle: (o) => ({
          overflow: o.overflow,
          gridTemplateColumns: `repeat(${o.columns}, 1fr)`,
          rowGap: o.rowGap + "px",
          columnGap: o.columnGap + "px",
          borderWidth: o.border.width + "px",
          borderColor: o.border.color,
          borderStyle: o.border.style,
          background: o.background.type === "color" ? o.background.color : `no-repeat center/100% url(${o.background.image})`,
          boxShadow: o.shadow.x + "px " + o.shadow.y + "px " + o.shadow.blur + "px " + o.shadow.diffus + "px " + o.shadow.color
        })
      };
    }, {
      init: i,
      key: _,
      loopData: C,
      renderImageStyle: E,
      renderTextStyle: G,
      renderItemStyle: D,
      renderLoopWrapStyle: L
    } = I(), W = v, T = (r) => {
      W("on-change", r), g.parseEvents(e.useEvents, "on-change", { data: r });
    };
    return F(() => i()), h(() => e.basicOption, (r, a) => {
      b(r, a) || i();
    }, { deep: !0 }), h(() => e.sources, (r, a) => {
      b(r, a) || i();
    }, { deep: !0 }), k({
      refresh: () => i(),
      refreshView: () => i(),
      refreshData: () => i()
    }), (r, a) => (t(), n("div", {
      key: p(_),
      class: "zerov-widget loop-iterator-wrap",
      style: u(p(L)(e.basicOption))
    }, [
      (t(!0), n(s, null, m(p(C), (c, l) => (t(), n("div", {
        key: l,
        class: "loop-iterator-item",
        style: u(p(D)(e.basicOption.itemStyle)),
        onClick: O((d) => T(c), ["stop"])
      }, [
        (t(!0), n(s, null, m(e.basicOption.itemContent, (d, z) => (t(), n("div", {
          key: d.id
        }, [
          d.type === "image" ? (t(), n("div", {
            key: 0,
            class: "loop-iterator-item-image",
            style: u(p(E)(d.style))
          }, [
            $("img", {
              src: c[d.field],
              alt: "图片"
            }, null, 8, M)
          ], 4)) : (t(), n("div", {
            key: 1,
            style: u(p(G)(d.style))
          }, V(c[d.field]), 5))
        ]))), 128))
      ], 12, J))), 128))
    ], 4));
  }
});
export {
  Y as default
};
