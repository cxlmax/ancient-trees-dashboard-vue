import { defineComponent as g, ref as u, onMounted as y, createBlock as j, openBlock as a, unref as t, withCtx as w, createElementVNode as i, createElementBlock as d, Fragment as k, renderList as S, normalizeStyle as s, createVNode as h } from "vue";
import { Vue3SeamlessScroll as V } from "vue3-seamless-scroll";
import { useListWatch as O } from "./hooks/useListWatch.mjs";
import { SHJDatasourceV2 as D } from "../../../commons/plugins/datasource/index.mjs";
import { Utils as l } from "../../../commons/utils/utils.mjs";
import f from "../../../commons/components/text.vue.mjs";
const B = { class: "list-wrap flex flex-direction-column gap-10px margin-top-10px" }, E = ["src"], N = g({ name: "shj-list" }), I = /* @__PURE__ */ g({
  ...N,
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-click-item"],
  setup(v, { expose: x, emit: C }) {
    const n = v, m = u(n.option.scroll.start), r = u([]), c = () => {
      D.parse({
        tId: n.uuid,
        sources: n.sources,
        callback: ({ data: e }) => {
          if (!e) {
            r.value = [];
            return;
          }
          r.value = e[0].data;
        }
      });
    };
    return y(() => c()), O(n, c), x({
      refresh: () => c(),
      refreshView: () => {
      },
      // 刷新视图 无需刷新
      refreshData: () => c()
    }), (e, p) => (a(), j(t(V), {
      modelValue: m.value,
      "onUpdate:modelValue": p[0] || (p[0] = (o) => m.value = o),
      direction: e.option.scroll.direction,
      list: r.value,
      "is-watch": "",
      step: e.option.scroll.step,
      hover: e.option.scroll.hover,
      "limit-scroll-num": e.option.scroll.limitScrollNum,
      "single-height": e.option.scroll.isSingle ? e.option.css.item.height : 0,
      "single-wait-time": e.option.scroll.singleWaitTime,
      class: "list-container overflow-hidden"
    }, {
      default: w(() => [
        i("div", B, [
          (a(!0), d(k, null, S(r.value, (o, b) => (a(), d("div", {
            key: b,
            class: "list-item flex gap-10px align-items-center padding-4px height-60px background-color-black overflow-hidden",
            style: s(t(l).json2cssObject(e.option.css.item))
          }, [
            i("div", {
              class: "item-thumbnail width-50px height-50px flex-none background-color-blue overflow-hidden",
              style: s(t(l).json2cssObject(e.option.css.item.thumbnail))
            }, [
              i("img", {
                class: "width-100 height-100 object-fit-cover",
                src: o.thumbnail,
                alt: ""
              }, null, 8, E)
            ], 4),
            i("div", {
              class: "item-container flex flex-direction-column gap-2px",
              style: s(t(l).json2cssObject(e.option.css.item.container))
            }, [
              i("div", {
                class: "item-title width-100 flex-none",
                style: s(t(l).json2cssObject(e.option.css.item.container.title))
              }, [
                h(f, {
                  "text-style": e.option.css.item.container.title.textStyle,
                  text: o.title
                }, null, 8, ["text-style", "text"])
              ], 4),
              i("div", {
                class: "item-description flex-none",
                style: s(t(l).json2cssObject(e.option.css.item.container.description))
              }, [
                h(f, {
                  "text-style": e.option.css.item.container.description.textStyle,
                  text: o.description
                }, null, 8, ["text-style", "text"])
              ], 4)
            ], 4)
          ], 4))), 128))
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "direction", "list", "step", "hover", "limit-scroll-num", "single-height", "single-wait-time"]));
  }
});
export {
  I as default
};
