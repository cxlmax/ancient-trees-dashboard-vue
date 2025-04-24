import { SHJDatasourceV2 as s } from "../../datasource/index.mjs";
const o = (a, t) => {
  const { sendAPIAction: e } = a;
  e.useDataSource && s.parse({
    sources: [e.useDataSource],
    callback: () => {
    },
    isStore: !1,
    noUseMapping: !0,
    tId: "",
    isInterval: !1
  });
};
export {
  o as executeSendApiAction
};
