import { cloneDeep as c } from "lodash";
const p = (n, o) => {
  if (n !== void 0) {
    const e = n.length - o.length;
    for (let t = 0; t < e; t++)
      o.push(c(o[0]));
  }
  return o;
};
export {
  p as cloneSeries
};
