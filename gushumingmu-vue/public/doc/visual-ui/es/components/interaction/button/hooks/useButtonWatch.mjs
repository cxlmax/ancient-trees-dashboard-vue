import { watch as o } from "vue";
const u = (t, e) => {
  o(() => t.sources, () => {
    t.sources && t.sources.length > 0 && e(t.option);
  }, {
    deep: !0
  });
};
export {
  u as useButtonWatch
};
