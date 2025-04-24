import { SHJDatasourceV2 as T } from "../index.mjs";
import { httpRequest as s } from "../utils/request.mjs";
import { DataSourceUtils as t } from "../utils/utils.mjs";
const q = (f, e, y) => new Promise(function(r, U) {
  const { api: n } = f.source;
  try {
    if (n) {
      let { isHeaders: m, isBody: h, headers: c, contentType: u, url: a, postParam: o } = n;
      const E = t.getEnvironments(), l = t.getVariableData(), i = (P) => {
        P.then((D) => {
          if (D.status === 200) {
            const { filter: V, mapping: g } = f.source;
            T.processData(V, D.data, g, e, f.source.dynamicMapping, y).then((b) => {
              b && r(b);
            }).catch(() => r(t.noneData(e)));
            return;
          }
          r(t.noneData(e));
        }).catch(() => {
          r(t.noneData(e));
        });
      }, p = t.replaceEnvVariables(a, E);
      a = t.replaceURLVariables(a, l), h && (o = t.replaceObjectVariables(o, l)), m && (c = t.replaceObjectVariables(c, l)), n.type === "GET" && i(s.get(p + a, { headers: c })), n.type === "POST" && i(s.post(p + a, o, { headers: c }, u)), n.type === "PUT" && i(s.put(p + a, o, { headers: c }, u)), n.type === "DELETE" && i(s.delete(p + a, { headers: c }));
    } else
      r(t.noneData(e));
  } catch {
    r(t.noneData(e));
  }
});
export {
  q as parseAPIPort
};
