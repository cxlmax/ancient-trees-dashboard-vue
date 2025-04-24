import { defineComponent as g, watch as z, createElementBlock as s, openBlock as i, createCommentVNode as c, normalizeStyle as u, unref as r, toDisplayString as n, createTextVNode as R, ref as f, onMounted as W, onBeforeUnmount as B } from "vue";
import C from "axios";
import { autoInstallFont as D, jsonToCssStyle as A } from "../../commons/utils/json2css.mjs";
import { SHJParseEvent as v } from "../../commons/plugins/event/index.mjs";
const F = {
  key: 0,
  class: "weather-temperature__suffix"
}, H = g({ name: "zv-commons-weather" }), P = /* @__PURE__ */ g({
  ...H,
  props: {
    basicOption: {},
    useEvents: {}
  },
  emits: [
    "on-success",
    "on-error"
  ],
  setup(O, { emit: k }) {
    const o = O, w = k, S = () => {
      const t = f(), p = f({
        city: "",
        date: "",
        week: "",
        dayweather: "",
        nightweather: "",
        daytemp: "",
        nighttemp: "",
        daywind: "",
        nightwind: "",
        daypower: "",
        nightpower: "",
        daytemp_float: "",
        nighttemp_float: ""
      }), h = f(null), d = (e) => {
        C.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${e.city}&key=${e.key}&extensions=all`).then((a) => {
          a.status === 200 && a.data.status === "1" && a.data.forecasts.length > 0 ? (w("on-success", a), v.parseEvents(o.useEvents, "on-success", a), p.value = a.data.forecasts[0].casts[0], p.value.city = a.data.forecasts[0].city) : (w("on-error", a), v.parseEvents(o.useEvents, "on-error", a));
        }).catch(() => {
          w("on-error", null), v.parseEvents(o.useEvents, "on-error", null);
        });
      }, I = (e) => (e.fontFamily && D(e.fontFamily), {
        ...A(e),
        lineHeight: `${e.lineHeight}px`,
        transform: `translate(${e.transform.x}px, ${e.transform.y}px)`
      }), T = (e, a) => {
        if (a.find((m) => m.name === p.value.dayweather)) {
          const m = a.find((U) => U.name === p.value.dayweather).url || "";
          return {
            mask: `url(${m}) 0px 0px / 100% 100%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: `url(${m}) 0px 0px / 100% 100%, ${e.color}`,
            backgroundBlendMode: "overlay",
            marginRight: `${e.margin.right}px`
          };
        }
        return {};
      }, b = (e) => {
        h.value && clearInterval(h.value), e.autoUpdate !== 0 ? h.value = setInterval(() => d(e), e.autoUpdate * 1e3) : (clearInterval(h.value), d(e));
      };
      return W(() => {
        d(o.basicOption), b(o.basicOption);
      }), B(() => {
        h.value && clearInterval(h.value);
      }), {
        initWeatherMessage: d,
        rendererDomStyle: I,
        handleAutoUpdate: b,
        rendererWeatherTypeStyle: T,
        weatherRef: t,
        weather: p
      };
    }, { handleAutoUpdate: $, rendererDomStyle: y, rendererWeatherTypeStyle: x, weatherRef: E, weather: l } = S();
    return z(() => o.basicOption, () => $(o.basicOption), { deep: !0 }), (t, p) => (i(), s("div", {
      ref_key: "weatherRef",
      ref: E,
      class: "zerov-widgets"
    }, [
      t.basicOption.icon.show ? (i(), s("p", {
        key: 0,
        class: "weather-icon",
        style: u(r(x)(t.basicOption.icon, t.basicOption.icons))
      }, null, 4)) : c("", !0),
      t.basicOption.weather.city.show ? (i(), s("p", {
        key: 1,
        class: "weather-city",
        style: u(r(y)(t.basicOption.weather.city.textStyle))
      }, n(r(l).city), 5)) : c("", !0),
      t.basicOption.weather.type.show ? (i(), s("p", {
        key: 2,
        class: "weather-type",
        style: u(r(y)(t.basicOption.weather.type.textStyle))
      }, n(r(l).dayweather), 5)) : c("", !0),
      t.basicOption.weather.wind.show ? (i(), s("p", {
        key: 3,
        class: "weather-wind",
        style: u(r(y)(t.basicOption.weather.wind.textStyle))
      }, n(r(l).daywind) + "风" + n(r(l).daypower) + "级 ", 5)) : c("", !0),
      t.basicOption.weather.temperature.show ? (i(), s("p", {
        key: 4,
        class: "weather-temperature",
        style: u(r(y)(t.basicOption.weather.temperature.textStyle))
      }, [
        R(n(r(l).nighttemp) + " " + n(t.basicOption.weather.temperature.connectors) + " " + n(r(l).daytemp) + " ", 1),
        t.basicOption.weather.temperature.suffix.show ? (i(), s("span", F, n(t.basicOption.weather.temperature.suffix.suffix), 1)) : c("", !0)
      ], 4)) : c("", !0)
    ], 512));
  }
});
export {
  P as default
};
