import { SHJDatasourceV2 as e } from "../index.mjs";
import { DataSourceUtils as n } from "../utils/utils.mjs";
const m = (t, a, c) => new Promise(function(r, i) {
  if (t.source.static !== void 0) {
    e.processData(t.source.filter, t.source.static, t.source.mapping, a, t.source.dynamicMapping, c).then((o) => {
      r(o);
    }).catch(() => {
      r(n.noneData(a));
    });
    return;
  }
  r(n.noneData(a));
});
export {
  m as parseStaticData
};
