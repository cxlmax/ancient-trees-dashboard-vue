import { cloneDeep as e, isArray as i } from "lodash";
const f = (r, t) => {
  const s = e(t);
  return r && i(r) && r.forEach((p, o) => {
    r[o] ? s.series[o].data = r[o].data : s.series[o].data = [];
  }), s;
};
export {
  f as parseOtherData
};
