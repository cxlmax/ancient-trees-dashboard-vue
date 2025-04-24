import { isArray as s } from "lodash";
const n = (r, c) => {
  const t = [];
  return s(r) && r.forEach((o) => {
    s(o.data) && o.data.forEach((a) => {
      t.push([a.x, a.y, a.value]);
    });
  }), {
    source: t
  };
};
export {
  n as parseScatterData
};
