import { defineComponent as B, ref as f, computed as te, onMounted as oe, watch as F, withDirectives as re, createElementBlock as s, openBlock as d, normalizeClass as y, unref as o, createElementVNode as u, createVNode as ne, normalizeStyle as h, createCommentVNode as S, toDisplayString as O, Transition as ae, withCtx as le, Fragment as ie, renderList as ce, withModifiers as se } from "vue";
import { nanoid as V } from "nanoid";
import { cloneDeep as I, isEqual as j } from "lodash";
import { jsonToCssStyle as r, autoInstallFont as v } from "../../commons/utils/json2css.mjs";
import de from "../../commons/utils/clickOutSide.mjs";
import { SHJDatasourceV2 as ue } from "../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as z } from "../../commons/plugins/event/index.mjs";
const pe = { style: { display: "flex", "align-items": "center", gap: "4px" } }, fe = {
  key: 1,
  class: "zerov-widget-select__prefix"
}, ve = ["src"], me = ["src"], he = ["onClick"], be = ["src"], Se = { class: "zerov-widget-select__option-label" }, ge = B({ name: "zv-interaction-select" }), ze = /* @__PURE__ */ B({
  ...ge,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["update:modelValue", "on-change"],
  setup(L, { expose: R, emit: T }) {
    const p = L, N = () => {
      const t = f(), c = (e) => {
        if (t.value) {
          v(e.fontFamily), v(e.hover.fontFamily), v(e.focus.fontFamily);
          const n = f("");
          return e.boxShadow && (n.value = `${e.boxShadow.isInset ? "inset" : ""} ${e.boxShadow.offsetX}px ${e.boxShadow.offsetY}px ${e.boxShadow.blur}px ${e.boxShadow.diffus}px ${e.boxShadow.color}`), {
            ...r(e),
            ...r(e.hover, "hover"),
            ...r(e.focus, "focus"),
            boxShadow: n.value,
            padding: `${e.padding.map((a) => `${a}px`).join(" ")}`,
            background: e.isBgImage ? `no-repeat center/100% url(${e.backgroundImage})` : e.backgroundColor
          };
        }
        return {};
      }, l = (e) => {
        if (t.value) {
          v(e.fontFamily);
          const n = `${e.boxShadow.isInset ? "inset" : ""} ${e.boxShadow.offsetX}px ${e.boxShadow.offsetY}px ${e.boxShadow.blur}px ${e.boxShadow.diffus}px ${e.boxShadow.color}`;
          return e.placement === "bottom" ? {
            ...r(e),
            top: "100%",
            marginTop: "6px",
            boxShadow: n,
            padding: `${e.padding.map((a) => `${a}px`).join(" ")}`
          } : {
            ...r(e),
            bottom: "100%",
            marginBottom: "6px",
            boxShadow: n,
            padding: `${e.padding.map((a) => `${a}px`).join(" ")}`
          };
        }
      }, P = (e) => {
        if (t.value)
          return v(e.fontFamily), {
            padding: `${e.padding.map((n) => `${n}px`).join(" ")}`,
            ...r(e),
            ...r(e.hover, "hover"),
            ...r(e.active, "active")
          };
      }, W = (e) => {
        if (t.value)
          return v(e.fontFamily), {
            ...r(e)
          };
      }, Z = (e) => {
        if (t.value)
          return v(e.fontFamily), {
            ...r(e),
            ...r(e, "hover"),
            ...r(e, "focus")
          };
      }, C = (e, n) => {
        const a = n.find((k) => k.type === e);
        return a ? a.url : "";
      }, ee = (e, n) => {
        if (t.value) {
          const a = n.find((k) => k.type === e);
          if (a)
            return {
              ...r(a)
            };
        }
      }, $ = f(), b = f([]);
      return {
        key: $,
        init: () => {
          ue.parse({
            tId: p.uuid,
            sources: p.sources,
            callback: (e) => {
              try {
                z.parseEvents(p.useEvents, "dataListener", b), $.value = V(), e && e.data ? b.value = I(e.data[0].data) : b.value = [];
              } catch {
                z.parseEvents(p.useEvents, "dataListener", null), $.value = V(), b.value = [];
              }
            }
          });
        },
        options: b,
        selectRef: t,
        rendererSelectInput: c,
        rendererSelectOption: P,
        rendererSelectDropdown: l,
        rendererSelectSelected: Z,
        rendererSelectPlaceholder: W,
        rendererPrefixIcon: C,
        rendererPrefixIconCss: ee
      };
    }, w = f(""), E = T, i = f(!1), g = te(() => {
      const t = D.value.find((c) => c.value === w.value);
      return t ? t.label : "";
    }), H = () => {
      i.value = !i.value;
    }, _ = f(""), J = (t) => {
      w.value = t.value, _.value = t.type, E("update:modelValue", t.value), E("on-change", t), z.parseEvents(p.useEvents, "on-change", {
        data: t
      }), i.value = !1;
    }, M = () => {
      i.value = !1;
    }, {
      key: X,
      init: m,
      options: D,
      selectRef: Y,
      rendererSelectInput: q,
      rendererSelectOption: A,
      rendererSelectDropdown: G,
      rendererSelectSelected: K,
      rendererSelectPlaceholder: Q,
      rendererPrefixIcon: x,
      rendererPrefixIconCss: U
    } = N();
    return oe(() => m()), F(
      () => I(p.basicOption),
      (t, c) => {
        j(t, c) || m();
      },
      { deep: !0 }
    ), F(
      () => I(p.sources),
      (t, c) => {
        j(t, c) || m();
      },
      { deep: !0 }
    ), R({
      refresh: () => m(),
      refreshView: () => m(),
      refreshData: () => m()
    }), (t, c) => re((d(), s("div", {
      key: o(X),
      ref_key: "selectRef",
      ref: Y,
      class: y(["zerov-widget-select", { "is-open": i.value }]),
      onClick: H
    }, [
      u("div", {
        class: y(["zerov-widget-select__trigger", { "is-active": i.value }]),
        style: h({
          ...o(q)(t.basicOption.input)
        })
      }, [
        u("div", pe, [
          g.value ? S("", !0) : (d(), s("span", {
            key: 0,
            class: "zerov-widget-select__placeholder",
            style: h({
              ...o(Q)(t.basicOption.input.placeholder)
            })
          }, O(t.basicOption.input.placeholder.value), 5)),
          g.value && o(x)(_.value, t.basicOption.dropdown.option.prefixs) ? (d(), s("span", fe, [
            u("img", {
              src: o(x)(_.value, t.basicOption.dropdown.option.prefixs),
              alt: ""
            }, null, 8, ve)
          ])) : S("", !0),
          g.value ? (d(), s("span", {
            key: 2,
            class: "zerov-widget-select__selected",
            style: h({
              ...o(K)(t.basicOption.input.selected)
            })
          }, O(g.value), 5)) : S("", !0)
        ]),
        u("span", {
          class: y(["zerov-widget-select__arrow", { "is-open": i.value }])
        }, [
          u("img", {
            src: t.basicOption.input.arrow.url,
            alt: ""
          }, null, 8, me)
        ], 2)
      ], 6),
      ne(ae, { name: "fade-in-linear" }, {
        default: le(() => [
          i.value ? (d(), s("div", {
            key: 0,
            class: "zerov-widget-select__dropdown",
            style: h({
              ...o(G)(t.basicOption.dropdown)
            })
          }, [
            u("ul", null, [
              (d(!0), s(ie, null, ce(o(D), (l) => (d(), s("li", {
                key: l.value,
                class: y([{ "is-selected": l.value === w.value }, "zerov-widget-select__option"]),
                style: h({
                  ...o(A)(t.basicOption.dropdown.option)
                }),
                onClick: se((P) => J(l), ["stop"])
              }, [
                o(x)(l.type, t.basicOption.dropdown.option.prefixs) ? (d(), s("span", {
                  key: 0,
                  class: "zerov-widget-select__option-prefix",
                  style: h({
                    ...o(U)(l.type, t.basicOption.dropdown.option.prefixs)
                  })
                }, [
                  u("img", {
                    src: o(x)(l.type, t.basicOption.dropdown.option.prefixs),
                    alt: ""
                  }, null, 8, be)
                ], 4)) : S("", !0),
                u("span", Se, O(l.label), 1)
              ], 14, he))), 128))
            ])
          ], 4)) : S("", !0)
        ]),
        _: 1
      })
    ], 2)), [
      [o(de), M]
    ]);
  }
});
export {
  ze as default
};
