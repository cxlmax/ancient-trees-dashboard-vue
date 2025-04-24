import { watch as c } from "vue";
const s = (e, t) => {
  c(() => e.sources, () => {
    e.sources && e.sources.length > 0 && t(e.option);
  }, {
    deep: !0
  });
};
export {
  s as useListWatch
};
