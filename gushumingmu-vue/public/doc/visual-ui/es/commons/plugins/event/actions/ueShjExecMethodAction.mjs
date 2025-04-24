import { SHJDatasourceV2 as n } from "../../datasource/index.mjs";
import { EventUtils as i } from "../utils/utils.mjs";
const u = (r, a) => {
  try {
    const { ueShjExecMethodAction: e } = r;
    if (e.dataType === "params") {
      const t = i.toStringify(a);
      e.escape ? window.ue5(e.functionName, JSON.stringify(t)) : window.ue5(e.functionName, t);
      return;
    }
    if (!e.useDataSource)
      return;
    n.parse({
      sources: [e.useDataSource],
      isStore: !1,
      noUseMapping: !0,
      tId: "",
      isInterval: !1,
      callback: (t) => {
        if (t) {
          const o = i.toStringify(t);
          e.escape ? window.ue5(e.functionName, JSON.stringify(o)) : window.ue5(e.functionName, o);
        }
      }
    });
  } catch {
  }
};
export {
  u as executeUeShjExecMethodAction
};
