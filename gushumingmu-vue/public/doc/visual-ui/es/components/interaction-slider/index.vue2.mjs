import { defineComponent as l, useCssVars as O, ref as h, onMounted as g, watch as n, createElementBlock as v, openBlock as E, createVNode as H, unref as T } from "vue";
import { cloneDeep as p, isEqual as r } from "lodash";
import V from "@vueform/slider";
import { SHJDatasourceV2 as w } from "../../commons/plugins/datasource/index.mjs";
import "@vueform/slider/themes/default.css";
import { SHJParseEvent as a } from "../../commons/plugins/event/index.mjs";
const C = { class: "zerov-widget-slider" }, B = l({ name: "zv-interaction-slider" }), W = /* @__PURE__ */ l({
  ...B,
  props: {
    basicOption: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-change"],
  setup(d, { expose: c, emit: b }) {
    O((s) => ({
      "3c5b8910": s.basicOption.css.sliderBg,
      f3ecf0b8: s.basicOption.css.sliderConnectBg,
      "9b89184a": s.basicOption.css.sliderHeight + "px",
      "0446fa10": s.basicOption.css.sliderRadius + "px",
      "7901f5d0": s.basicOption.css.sliderHandleBg,
      bf9745cc: s.basicOption.css.sliderHandleWidth + "px",
      "9e40ba5a": s.basicOption.css.sliderHandleHeight + "px",
      "02eb2908": s.basicOption.css.sliderHandleRadius + "px",
      "261491ea": s.basicOption.css.sliderHandleRingWidth + "px",
      75889240: s.basicOption.css.sliderHandleRingColor,
      ed677736: s.basicOption.css.sliderTooltipFontSize + "px",
      "5cb2a3ce": s.basicOption.css.sliderTooltipFontWeight + "px",
      de310706: s.basicOption.css.sliderTooltipBg,
      ab3997aa: s.basicOption.css.sliderTooltipColor,
      "3d0edefa": s.basicOption.css.sliderTooltipRadius + "px",
      "09794f2c": s.basicOption.css.sliderTooltipPy + "px",
      bccfbb66: s.basicOption.css.sliderTooltipPx + "px",
      "2afba7db": s.basicOption.css.sliderTooltipArrowSize + "px",
      "6a864c80": s.basicOption.css.sliderTooltipDistance + "px"
    }));
    const i = d, u = b, t = h(20), o = () => {
      w.parse({
        tId: i.uuid,
        sources: i.sources,
        callback: ({ data: s }) => {
          try {
            a.parseEvents(i.useEvents, "dataListener", s), t.value = s[0].data[0].value;
          } catch {
            a.parseEvents(i.useEvents, "dataListener", null);
          }
        }
      });
    };
    g(() => o());
    const f = (s) => {
      u("on-change", {
        data: s,
        event: s
      }), a.parseEvents(i.useEvents, "on-change", {
        data: s,
        event: s
      });
    };
    return n(
      () => p(i.basicOption),
      (s, e) => {
        r(s, e) || o();
      },
      { deep: !0 }
    ), n(
      () => p(i.sources),
      (s, e) => {
        r(s, e) || o();
      },
      { deep: !0 }
    ), c({
      refresh: () => o(),
      refreshView: () => o(),
      refreshData: () => o()
    }), (s, e) => (E(), v("div", C, [
      H(T(V), {
        modelValue: t.value,
        "onUpdate:modelValue": e[0] || (e[0] = (m) => t.value = m),
        class: "slider",
        min: s.basicOption.slider.min,
        max: s.basicOption.slider.max,
        step: s.basicOption.slider.step,
        tooltips: s.basicOption.slider.tooltips,
        "show-tooltip": s.basicOption.slider.showTooltip,
        "tooltip-position": s.basicOption.slider.tooltipPosition,
        format: {
          prefix: s.basicOption.slider.prefix,
          suffix: s.basicOption.slider.suffix,
          decimals: s.basicOption.slider.decimals
        },
        onChange: f
      }, null, 8, ["modelValue", "min", "max", "step", "tooltips", "show-tooltip", "tooltip-position", "format"])
    ]));
  }
});
export {
  W as default
};
