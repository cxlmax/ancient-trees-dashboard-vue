import { SHJDatasourceV2 as a } from "../../datasource/index.mjs";
import { EventUtils as o } from "../utils/utils.mjs";
const f = (r, n) => {
  try {
    const { ueCommonsWebscoketAction: e } = r;
    if (e.dataType === "params") {
      const t = o.toStringify(n);
      e.escape ? window.SHJSceneUEIframeWebscoket.send(JSON.stringify(t)) : window.SHJSceneUEIframeWebscoket.send(t);
      return;
    }
    if (!e.useDataSource)
      return;
    a.parse({
      sources: [e.useDataSource],
      isStore: !1,
      noUseMapping: !0,
      tId: "",
      isInterval: !1,
      callback: (t) => {
        if (t && window.SHJSceneUEIframeWebscoket) {
          const s = o.toStringify(t);
          e.escape ? window.SHJSceneUEIframeWebscoket.send(JSON.stringify(s)) : window.SHJSceneUEIframeWebscoket.send(s);
        }
      }
    });
  } catch {
  }
};
export {
  f as executeUeCommonsWebscoketAction
};
