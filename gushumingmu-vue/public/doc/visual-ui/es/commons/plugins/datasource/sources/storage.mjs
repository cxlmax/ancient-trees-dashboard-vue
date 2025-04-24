import { SHJDatasourceV2 as f } from "../index.mjs";
import { DataSourceUtils as n } from "../utils/utils.mjs";
const S = (e, t, i) => new Promise(function(a, m) {
  if (!e.source.storage) {
    a(n.noneData(t));
    return;
  }
  const { getType: o, getField: r } = e.source.storage;
  if (o === 0) {
    a(n.noneData(t));
    return;
  }
  if (!r) {
    a(n.noneData(t));
    return;
  }
  let c = null;
  o === 1 && (c = localStorage.getItem("Local_" + r)), o === 2 && (c = sessionStorage.getItem("Session_" + r));
  const { filter: s, mapping: g } = e.source;
  f.processData(s, c, g, t, e.source.dynamicMapping, i).then((p) => {
    a(p);
  }).catch(() => {
    a(n.noneData(t));
  });
});
export {
  S as parseStorage
};
