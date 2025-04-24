import { isArray as i, cloneDeep as d } from "lodash";
const g = (a, f) => {
  const e = {};
  i(a) ? a.forEach((t) => {
    const c = t.key;
    i(t.data) && t.data.forEach((r) => {
      const s = r.category, n = r.value;
      e[s] || (e[s] = { category: s }), e[s][c] ? e[s][c] += n : e[s][c] = n;
    });
  }) : e.key = {};
  const l = Object.values(e), o = Object.keys(l[0]), y = o.findIndex((t) => t === "category");
  return o.splice(y, 1), o.unshift("category"), {
    dimensions: f || o,
    source: Object.values(d(e))
  };
};
export {
  g as parseDataset
};
