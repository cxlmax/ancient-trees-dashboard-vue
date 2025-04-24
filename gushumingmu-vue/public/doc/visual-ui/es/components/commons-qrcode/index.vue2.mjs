import { defineComponent as e, createBlock as r, openBlock as n } from "vue";
import a from "qrcode.vue";
const c = e({ name: "zv-commons-qrcode" }), i = /* @__PURE__ */ e({
  ...c,
  props: {
    basicOption: {}
  },
  setup(s) {
    return (o, l) => (n(), r(a, {
      value: o.basicOption.value,
      class: "qrcode",
      level: o.basicOption.level,
      background: o.basicOption.background,
      foreground: o.basicOption.foreground,
      "render-as": "svg"
    }, null, 8, ["value", "level", "background", "foreground"]));
  }
});
export {
  i as default
};
