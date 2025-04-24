import { SHJDatasourceV2 as o } from "../../datasource/index.mjs";
import { EventUtils as c } from "../utils/utils.mjs";
const s = (t, a) => {
  try {
    const { unityWebglExecMethodAction: e } = t;
    if (e.dataType === "params") {
      const n = c.toStringify(a);
      window.SHJSceneUnityIframeInstance.ref && window.SHJSceneUnityIframeInstance.ref.contentWindow.postMessage({ object: e.objectName, function: e.functionName, data: n }, window.SHJSceneUnityIframeInstance.url);
      return;
    }
    if (!e.useDataSource)
      return;
    o.parse({
      sources: [e.useDataSource],
      isStore: !1,
      noUseMapping: !0,
      tId: "",
      isInterval: !1,
      callback: (n) => {
        window.SHJSceneUnityIframeInstance.ref && window.SHJSceneUnityIframeInstance.ref.contentWindow.postMessage({ object: e.objectName, function: e.functionName, data: n }, window.SHJSceneUnityIframeInstance.url);
      }
    });
  } catch {
  }
};
export {
  s as executeUnityWebglExecMethodAction
};
