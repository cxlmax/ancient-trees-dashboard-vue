import { defineComponent as r, watch as s, createElementBlock as c, openBlock as l, createElementVNode as m } from "vue";
import { cloneDeep as p, isEqual as f } from "lodash";
import { useBabaylon as d } from "./compileAndRunBabylon.mjs";
const u = { class: "zerov-widget" }, _ = r({ name: "zv-commons-babylon" }), y = /* @__PURE__ */ r({
  ..._,
  props: {
    basicOption: {}
  },
  setup(a) {
    const o = a, { iframeRef: i, renderingComponent: t } = d(o.basicOption);
    return s(() => p(o.basicOption), (e, n) => {
      !f(e, n) && t.value && t.value.compileAndRunAsync(e.code);
    }, {
      deep: !0
    }), (e, n) => (l(), c("div", u, [
      m("iframe", {
        ref_key: "iframeRef",
        ref: i,
        style: { width: "100%", height: "100%", border: "0" },
        sandbox: "allow-scripts allow-same-origin"
      }, null, 512)
    ]));
  }
});
export {
  y as default
};
