import { defineComponent as S, useCssVars as O, ref as y, onMounted as B, createElementBlock as u, openBlock as m, createVNode as I, unref as h, normalizeStyle as T, withCtx as $, createElementVNode as s, createCommentVNode as C, Fragment as w, pushScopeId as E, popScopeId as N } from "vue";
import R from "@vuepic/vue-datepicker";
import { nanoid as g } from "nanoid";
import i from "dayjs";
import "dayjs/locale/zh-cn";
import j from "dayjs/plugin/relativeTime";
import { useDatePickerWatch as H } from "./hooks/useDatePickerWatch.mjs";
import { SHJDatasourceV2 as q } from "../../../commons/plugins/datasource/index.mjs";
import { SHJParseEvent as z } from "../../../commons/plugins/event/index.mjs";
import { Utils as F } from "../../../commons/utils/utils.mjs";
import "@vuepic/vue-datepicker/dist/main.css";
const n = (r) => (E("data-v-a6893215"), r = r(), N(), r), J = { class: "left-sidebar" }, U = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "今天", -1)), A = [
  U
], K = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "昨天", -1)), L = [
  K
], M = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "前天", -1)), W = [
  M
], Y = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "近7天", -1)), G = [
  Y
], Q = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "近15天", -1)), X = [
  Q
], Z = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "近30天", -1)), _ = [
  Z
], x = /* @__PURE__ */ n(() => /* @__PURE__ */ s("span", null, "近365天", -1)), ee = [
  x
], oe = S({ name: "shj-date-picker" }), me = /* @__PURE__ */ S({
  ...oe,
  props: {
    option: {},
    sources: {},
    useEvents: {},
    uuid: {}
  },
  emits: ["on-change"],
  setup(r, { expose: P, emit: V }) {
    O((e) => ({
      "7f1b2dc8": e.option.css.dp.backgroundColor,
      "20b9512e": e.option.css.dp.textColor,
      "7ee84e98": e.option.css.dp.hoverColor,
      "890e71f2": e.option.css.dp.hoverTextColor,
      "3a87ef24": e.option.css.dp.primaryColor,
      "5b705f5c": e.option.css.dp.primaryDisabledColor,
      "3392ec7e": e.option.css.dp.primaryTextColor,
      "073d9608": e.option.css.dp.secondaryColor,
      "8e8fa1ec": e.option.css.dp.borderColor,
      "204c8eab": e.option.css.dp.menuBorderColor,
      43488052: e.option.css.dp.borderColorHover,
      "432c0bee": e.option.css.dp.borderColorFocus,
      d074ec0c: e.option.css.dp.disabledColor,
      fee81572: e.option.css.dp.scrollBarBackground,
      "28d423aa": e.option.css.dp.scrollBarColor,
      "037021e6": e.option.css.dp.successColor,
      "466330a9": e.option.css.dp.successColorDisabled,
      "6d0f2f73": e.option.css.dp.dangerColor,
      74789372: e.option.css.dp.disabledColorText,
      "60ef21bc": e.option.css.dp.highlightColor,
      "5cd1cbc0": e.option.css.dp.loader,
      "174f055d": e.option.css.dp.fontSize,
      "1d47b298": e.option.css.dp.inputBackgroundColor,
      "67c8fe04": e.option.css.dp.inputHeight
    })), i.extend(j), i.locale("zh-cn");
    const l = r, D = V, t = y(), f = y(g()), b = () => f.value = g(), d = () => {
      q.parse({
        tId: l.uuid,
        sources: l.sources,
        callback: ({ data: e }) => {
          try {
            t.value = i(e[0].data[0].date);
          } catch {
          }
        }
      });
    };
    B(() => d()), H(l, d, b), P({
      refresh: () => d(),
      refreshView: () => b(),
      refreshData: () => d()
    });
    const k = (e) => {
      t.value = e, D("on-change", { data: t.value }), z.parseEvents(l.useEvents, "on-change", { data: t.value });
    }, c = (e) => {
      e === "today" ? t.value = i() : e === "yesterday" ? t.value = i().subtract(1, "day") : e === "before-yesterday" && (t.value = i().subtract(2, "day"));
    }, p = (e) => {
      e === "last-7" ? t.value = [i().subtract(7, "day").startOf("day"), i().endOf("day")] : e === "last-15" ? t.value = [i().subtract(15, "day").startOf("day"), i().endOf("day")] : e === "last-30" ? t.value = [i().subtract(30, "day").startOf("day"), i().endOf("day")] : e === "last-365" && (t.value = [i().subtract(365, "day").startOf("day"), i().endOf("day")]), k(t.value);
    };
    return (e, o) => (m(), u("div", {
      key: f.value,
      class: "date-picker"
    }, [
      I(h(R), {
        modelValue: t.value,
        "onUpdate:modelValue": [
          o[7] || (o[7] = (v) => t.value = v),
          k
        ],
        range: e.option.range,
        "multi-calendars": e.option.multiCalendars,
        "month-picker": e.option.monthPicker,
        "time-picker": e.option.timePicker,
        "year-picker": e.option.yearPicker,
        "week-picker": e.option.weekPicker,
        "quarter-picker": e.option.quarterPicker,
        inline: e.option.inline,
        "auto-apply": e.option.autoApply,
        clearable: e.option.clearable,
        placeholder: e.option.placeholder,
        disabled: e.option.disabled,
        readonly: e.option.readonly,
        "action-row": {
          showNow: e.option.actionRow.showNow,
          showPreview: e.option.actionRow.showPreview,
          showSelect: e.option.actionRow.showSelect,
          showCancel: e.option.actionRow.showCancel
        },
        "disable-year-select": e.option.disableYearSelect,
        "enable-time-picker": e.option.enableTimePicker,
        "enable-seconds": e.option.enableSeconds,
        "time-picker-inline": e.option.timePickerInline,
        "now-button-label": e.option.nowButtonLabel,
        "cancel-text": e.option.cancelText,
        "select-text": e.option.selectText,
        "hide-input-icon": e.option.hideInputIcon,
        class: "date-picker-container",
        style: T(h(F).json2cssObject(e.option.css.dp, "dp"))
      }, {
        "left-sidebar": $((v) => [
          s("div", J, [
            e.option.range ? C("", !0) : (m(), u(w, { key: 0 }, [
              s("div", {
                class: "left-sidebar-item",
                onClick: o[0] || (o[0] = (a) => c("today"))
              }, A),
              s("div", {
                class: "left-sidebar-item",
                onClick: o[1] || (o[1] = (a) => c("yesterday"))
              }, L),
              s("div", {
                class: "left-sidebar-item",
                onClick: o[2] || (o[2] = (a) => c("before-yesterday"))
              }, W)
            ], 64)),
            e.option.range ? (m(), u(w, { key: 1 }, [
              s("div", {
                class: "left-sidebar-item",
                onClick: o[3] || (o[3] = (a) => p("last-7"))
              }, G),
              s("div", {
                class: "left-sidebar-item",
                onClick: o[4] || (o[4] = (a) => p("last-15"))
              }, X),
              s("div", {
                class: "left-sidebar-item",
                onClick: o[5] || (o[5] = (a) => p("last-30"))
              }, _),
              s("div", {
                class: "left-sidebar-item",
                onClick: o[6] || (o[6] = (a) => p("last-365"))
              }, ee)
            ], 64)) : C("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "range", "multi-calendars", "month-picker", "time-picker", "year-picker", "week-picker", "quarter-picker", "inline", "auto-apply", "clearable", "placeholder", "disabled", "readonly", "action-row", "disable-year-select", "enable-time-picker", "enable-seconds", "time-picker-inline", "now-button-label", "cancel-text", "select-text", "hide-input-icon", "style"])
    ]));
  }
});
export {
  me as default
};
