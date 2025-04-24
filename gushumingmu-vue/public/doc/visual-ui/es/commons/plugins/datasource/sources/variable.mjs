import { SHJDatasourceV2 as c } from "../index.mjs";
import { DataSourceUtils as n } from "../utils/utils.mjs";
const s = (a, r, o) => new Promise(function(e, D) {
  const i = n.getVariableData().find((t) => t.id === a.source.variableId || t.name === a.source.variableId);
  if (i) {
    c.processData(a.source.filter, i._value, a.source.mapping, r, a.source.dynamicMapping, o).then((t) => {
      e(t);
    }).catch(() => {
      e(n.noneData(r));
    });
    return;
  }
  e(n.noneData(r));
});
export {
  s as parseVariableData
};
