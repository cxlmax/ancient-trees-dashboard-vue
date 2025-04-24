import { watch as t } from "vue";
import { cloneDeep as r, isEqual as c } from "lodash";
const s = (e, a, u, l) => {
  t(() => e.sources, () => {
    e.sources && e.sources.length > 0 && a(e.option);
  }, {
    deep: !0
  }), t(() => r(e.option.value), (o, i) => {
    c(o, i) || (u.value = o, !u.value && l.value.length > 0 && (u.value = l.value[0].value));
  }, {
    deep: !0
  });
};
export {
  s as useTabsWatch
};
