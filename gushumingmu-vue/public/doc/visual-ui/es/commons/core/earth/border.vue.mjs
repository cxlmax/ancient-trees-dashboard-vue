import { defineComponent as e } from "vue";
const t = e({ name: "th-earth-border" }), a = /* @__PURE__ */ e({
  ...t,
  props: {
    propsGeojson: { default: "world" },
    color: { default: "#ffffff" },
    width: { default: 1 },
    opacity: { default: 1 },
    wakeline: { type: Boolean, default: !1 },
    wakelineNumber: { default: 3 }
  },
  setup(o) {
    return () => {
    };
  }
});
export {
  a as default
};
