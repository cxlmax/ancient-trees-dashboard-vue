var d = Object.defineProperty;
var f = (s, e, t) => e in s ? d(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var m = (s, e, t) => f(s, typeof e != "symbol" ? e + "" : e, t);
import { cloneDeep as y } from "lodash";
import { executeLinkAction as A } from "./actions/linkAction.mjs";
import { executeMoveAction as g } from "./actions/moveAction.mjs";
import { executeSendApiAction as h } from "./actions/sendApiAction.mjs";
import { executeScaleAction as x } from "./actions/scaleAction.mjs";
import { executeRotateAction as S } from "./actions/rotateAction.mjs";
import { executeUpdatePageAction as b } from "./actions/updatePageAction.mjs";
import { executeInvokeAction as E } from "./actions/invokeAction.mjs";
import { executeFullScreenAction as V } from "./actions/fullScreenAction.mjs";
import { executeUpdateVariableAction as w } from "./actions/updateVariableAction.mjs";
import { executeUpdateWidgetAction as M } from "./actions/updateWidgetAction.mjs";
import { executeUeCommonsWebscoketAction as U } from "./actions/ueCommonsWebscoketAction.mjs";
import { executeUeShjExecMethodAction as k } from "./actions/ueShjExecMethodAction.mjs";
import { executeUnityWebglExecMethodAction as C } from "./actions/unityWebglExecMethodAction.mjs";
import { executeUnityIframeExecMethodAction as D } from "./actions/unityIframeExecMethodAction.mjs";
import { executeVrSceneMethodAction as N } from "./actions/vrSceneMethodAction.mjs";
import { DataSourceUtils as l } from "../datasource/utils/utils.mjs";
class W {
  /**
   * 添加事件解析器
   * @param type 事件类型
   * @param parser 事件解析器
   */
  static addAction(e, t) {
    const i = Array.from(this.actions).find((r) => r.type === e);
    i && this.actions.delete(i), this.actions.add({ type: e, parser: t });
  }
  /**
   * 获取事件解析器
   * @param type 事件类型
   * @returns 事件解析器
   */
  static getAction(e) {
    const t = Array.from(this.actions).find((i) => i.type === e);
    return t == null ? void 0 : t.parser;
  }
  /**
   * 解析事件
   * @param events 事件
   * @param type 事件类型
   * @param params 参数
   */
  static parseEvents(e, t, i) {
    e != null && e.length && e.forEach((r, c) => {
      r.eventType === t && setTimeout(() => {
        const u = new CustomEvent("event-params-log", {
          detail: {
            eventId: r.id,
            params: i
          }
        });
        window.dispatchEvent(u);
        const p = this.filterEvent(r, i);
        if (!this.conditionLogic(r, p) || !r.actions)
          return;
        const n = this.getAction(r.actions);
        n && n(r, p);
      }, r.delay + c * 10);
    });
  }
  /**
   * 过滤事件返回值
   * @param event 事件
   * @param params 参数
   * @returns 过滤后的参数
   */
  static filterEvent(e, t) {
    let i = y(t);
    if (e.filterCode)
      try {
        const r = l.getVariableData();
        let c = `
                 ${e.filterCode}
     
                 // 在这里调用 filter 函数，并传递 data 参数
                 return filter(data);
             `;
        c = c.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""), c = l.replaceStringVariables(c, r), i = new Function("data", c)(t);
      } catch {
      }
    return i;
  }
  /**
   * 条件逻辑判断
   * @param event 事件
   * @param params 参数
   * @returns 是否通过
   */
  static conditionLogic(e, t) {
    var u, p;
    if (!((p = (u = e.condition) == null ? void 0 : u.list) != null && p.length))
      return !0;
    const i = (n) => {
      if (n.type === "field") {
        if (!n.conditionName) return !1;
        const a = t[n.conditionName];
        if (a === void 0) return !1;
        const o = n.conditionValue;
        switch (n.conditionExpression) {
          case "eq":
            return a.toString() === (o || "").toString();
          case "neq":
            return a !== o;
          case "lt":
            return a < Number(o);
          case "gt":
            return a > Number(o);
          case "lte":
            return a <= Number(o);
          case "gte":
            return a >= Number(o);
          case "includes":
            return a.includes(o);
          case "noincludes":
            return !a.includes(o);
          default:
            return !1;
        }
      }
      if (n.type === "custom")
        try {
          const a = l.getVariableData();
          let o = `
                        ${n.customValue}
                        return condition(data);
                    `;
          return o = o.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""), o = l.replaceStringVariables(o, a), new Function("data", o)(t);
        } catch {
          return !1;
        }
      return !1;
    }, r = e.condition.list.map(i);
    return e.condition.type === "and" ? r.every(Boolean) : r.some(Boolean);
  }
}
/** 事件动作 */
m(W, "actions", /* @__PURE__ */ new Set([
  { type: "link", parser: A },
  { type: "sendApi", parser: h },
  { type: "move", parser: g },
  { type: "scale", parser: x },
  { type: "rotate", parser: S },
  { type: "updatePage", parser: b },
  { type: "invoke", parser: E },
  { type: "fullscreen", parser: V },
  { type: "updateVariable", parser: w },
  { type: "updateWidget", parser: M },
  { type: "ueCommonsWebscoket", parser: U },
  { type: "ueShjExecMethod", parser: k },
  { type: "unityWebglExecMethod", parser: C },
  { type: "unityIframeExecMethod", parser: D },
  { type: "vrSceneMethod", parser: N }
]));
export {
  W as SHJParseEvent
};
