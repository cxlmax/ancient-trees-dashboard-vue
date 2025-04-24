import { SHJDatasourceV2 as n } from "../../datasource/index.mjs";
import { DataSourceUtils as i } from "../../datasource/utils/utils.mjs";
import { EventUtils as l } from "../utils/utils.mjs";
const b = (o, s) => {
  const { updateVariableAction: t } = o, r = i.getVariableData(), a = r.find((e) => e.id === t.name || e.name === t.name);
  if (o.updateVariableAction.dataType === "params") {
    a._value = s, i.setVariableData(r), l.updateWidgetVariableData(a);
    return;
  }
  n.parse({
    sources: [t.useDataSource],
    isStore: !1,
    noUseMapping: !0,
    tId: "",
    isInterval: !1,
    callback: (e) => {
      a._value = e, i.setVariableData(r), l.updateWidgetVariableData(a);
    }
  });
};
export {
  b as executeUpdateVariableAction
};
