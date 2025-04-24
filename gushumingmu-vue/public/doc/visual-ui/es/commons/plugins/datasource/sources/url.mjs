import { SHJDatasourceV2 as i } from "../index.mjs";
import { DataSourceUtils as n } from "../utils/utils.mjs";
const f = (t, a, c) => new Promise(function(r, m) {
  const o = new URLSearchParams(window.location.search), e = Object.fromEntries(o.entries());
  if (Object.keys(e).length > 0) {
    i.processData(t.source.filter, e, t.source.mapping, a, t.source.dynamicMapping, c).then((s) => {
      r(s);
    }).catch(() => {
      r(n.noneData(a));
    });
    return;
  }
  r(n.noneData(a));
});
export {
  f as parseUrlData
};
