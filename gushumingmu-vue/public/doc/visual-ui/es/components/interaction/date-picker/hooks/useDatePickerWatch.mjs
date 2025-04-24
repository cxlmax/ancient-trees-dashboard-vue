import { watch as t } from "vue";
import { cloneDeep as r } from "lodash";
const s = (e, o, c) => {
  t(() => e.sources, () => {
    e.sources && e.sources.length > 0 && o(e.option);
  }, {
    deep: !0
  }), t(() => r(e.option), (i, n) => {
    c();
  }, {
    deep: !0
  });
};
export {
  s as useDatePickerWatch
};
