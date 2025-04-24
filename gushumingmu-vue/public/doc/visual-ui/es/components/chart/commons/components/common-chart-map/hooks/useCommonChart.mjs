import { watch as u, defineExpose as f } from "vue";
import { cloneDeep as s, isEqual as h } from "lodash";
const a = (e, o, t, c) => {
  u(() => e.sources, () => {
    e.sources && e.sources.length > 0 && o(e.option);
  }, {
    deep: !0
  }), u(() => s(e.option), (r, n) => {
    h(r, n) || t(r);
  }, {
    deep: !0
  }), f({
    getEchartsInstance: () => c.value,
    refresh: () => {
      e.sources && e.sources.length > 0 && o(e.option), t(e.option);
    },
    refreshView: () => {
      t(e.option);
    },
    refreshData: () => {
      o(e.option);
    }
  });
};
export {
  a as useCommonChart
};
