var x = Object.defineProperty;
var A = (g, t, a) => t in g ? x(g, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : g[t] = a;
var S = (g, t, a) => A(g, typeof t != "symbol" ? t + "" : t, a);
import { isArray as k, isString as K, cloneDeep as I } from "lodash";
import { parseStaticData as U } from "./sources/static.mjs";
import { parseUrlData as j } from "./sources/url.mjs";
import { parseVariableData as E } from "./sources/variable.mjs";
import { parseAPIPort as W } from "./sources/api.mjs";
import { parseWebSocket as $ } from "./sources/ws.mjs";
import { DataSourceUtils as P } from "./utils/utils.mjs";
import { parseStorage as v } from "./sources/storage.mjs";
const y = class y {
  static addParser(t, a) {
    this.parsers.add({ type: t, parser: a });
  }
  static getParser(t) {
    const a = Array.from(this.parsers).find((e) => e.type === t);
    return a == null ? void 0 : a.parser;
  }
  /**
   * 解析数据源
   * @param sources 数据源
   * @param callback 回调函数
   * @param tId 组件id
   * @param isStore 是否存储
   * @param noUseMapping 是否不使用映射
   * @param isInterval 是否开启定时任务
   * @returns
   */
  static parse({ sources: t, callback: a, tId: e, isStore: s = !1, noUseMapping: i = !1, isInterval: n = !0 }) {
    return a ?? (a = () => {
    }), t && k(t) && t.length > 0 && t[0] ? new Promise((p, o) => {
      P.cleanupPreviousWebSockets(this.wsInstances, t.map((r) => r.id), e);
      const f = /* @__PURE__ */ new Set(), m = this.wsInstances.get(e) || /* @__PURE__ */ new Set();
      t.forEach((r) => {
        var w;
        if (n) {
          const { source: c } = r, u = `${e}-${r.id}`, D = this.datasourceTimer.findIndex((h) => h.id === u);
          if (D !== -1 && (clearInterval(this.datasourceTimer[D].timer), this.datasourceTimer.splice(D, 1)), c.isAutoUpdate) {
            const h = setInterval(() => {
              var l;
              (l = this.task(r, s, i, e, (d) => {
                a(d);
              })) == null || l.then((d) => {
                p(d);
              });
            }, c.autoUpdateTime * 1e3);
            this.datasourceTimer.push({ id: u, timer: h });
          }
        }
        if (r.source.type !== "ws") {
          (w = this.task(r, s, i, e, (c) => a(c))) == null || w.then((c) => p(c));
          return;
        }
        if (P.hasValidWebSocket(this.wsInstances, e, r.id))
          m.forEach((c) => {
            c.getId() === r.id && f.add(c);
          });
        else {
          const c = $(r, r.id, i, e, (u) => {
            p(u), a({ data: [{ data: u.finalUserData.data }] }), this.taskStorage(t, u.rawData.data);
          });
          f.add(c);
        }
      }), f.size > 0 && this.wsInstances.set(e, f);
    }) : (a([]), Promise.resolve([]));
  }
  /**
   * 执行数据源任务
   * @param sources 数据源
   * @param isStore 是否存储
   * @param noUseMapping 是否不使用映射
   * @param tId 组件id
   * @param callback 回调函数
   * @returns
   */
  static task(t, a = !1, e = !1, s, i = () => {
  }) {
    return t ? new Promise((n, p) => {
      let o = null;
      const { source: f } = t, m = this.getParser(f.type);
      m && (o = m(t, t.id, e)), o.then((r) => {
        i(e ? r.noMappingData : r.finalKeyData), this.taskStorage(t, r.rawData.data), n(r);
      });
    }) : (i([]), Promise.resolve([]));
  }
  /**
   * 过滤数据
   * @param filter 过滤器
   * @param data 数据
   * @returns
   */
  static filterData(t, a) {
    return new Promise((e, s) => {
      if (K(t)) {
        try {
          const i = P.getVariableData();
          let n = `
                        ${t}
            
                        // 在这里调用 filter 函数，并传递 data 参数
                        return filter(data);
                    `;
          n = n.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""), n = P.replaceStringVariables(n, i);
          const p = new Function("data", n);
          e(p(a));
        } catch {
          e(a);
        }
        return;
      }
      e(a);
    });
  }
  /**
   * 处理数据
   * @param filter 过滤器
   * @param data 数据
   * @param mappings 映射
   * @param id 组件id
   * @param dynamicMapping 是否动态映射
   * @param noUseMapping 是否不使用映射
   * @returns
   */
  static processData(t, a, e, s, i, n) {
    return new Promise(function(p) {
      const o = I({ id: s, data: a });
      y.filterData(t, a).then((f) => {
        const m = I({ id: s, data: f });
        if (n)
          p({
            id: s,
            finalKeyData: [],
            finalUserData: { id: s, data: f },
            filteredData: m,
            rawData: o,
            noMappingData: f
          });
        else {
          let r = [];
          k(f) && (r = f.map((u, D) => {
            const h = {};
            if (i && i && D === 0) {
              const l = [];
              for (const d in u) {
                const T = e.find((b) => b.name === d);
                T ? l.push({ alias: T.alias, name: d, type: "any", label: d, mapping: T.mapping, status: !0 }) : l.push({ alias: d, name: d, type: "any", label: d, mapping: d, status: !0 });
              }
              e.splice(0, e.length), e.push(...l);
            }
            return e.forEach((l) => {
              l.alias ? h[l.alias] = u[l.mapping] : h[l.name] = u[l.mapping];
            }), h.userdata = u, h;
          }));
          const w = I({ id: s, data: r }), c = I({ id: s, data: y.parseMappedData(r, e, s) });
          p({
            id: s,
            finalKeyData: r.length === 0 ? { id: s, data: f } : c,
            finalUserData: r.length === 0 ? { id: s, data: f } : w,
            filteredData: m,
            rawData: o,
            noMappingData: []
          });
        }
      });
    });
  }
  /**
   * 解析数据为Key、Data格式
   * @param data 数据
   * @param mappings 映射
   * @param id 组件id
   * @returns
   */
  static parseMappedData(t, a, e) {
    return t.reduce(
      (s, i) => {
        let n = "系列一";
        a && a.find((o) => o.name === "series") && (n = i[a.find((o) => o.name === "series").name], delete i[a.find((o) => o.name === "series").name]);
        const p = s.find((o) => o.key === n);
        return p ? p.data.push(i) : s.push({ key: n, data: [i] }), s;
      },
      []
    );
  }
  /**
   * 处理数据存储
   * @param sources 数据源
   * @returns
   */
  static taskStorage(t, a) {
    const { source: e } = t;
    e.storage && e.storage.setField && e.storage.setType !== 0 && (e.storage.setType === 1 && localStorage.setItem("Local_" + e.storage.setField, JSON.stringify(a)), e.storage.setType === 2 && sessionStorage.setItem("Session_" + e.storage.setField, JSON.stringify(a)));
  }
};
S(y, "wsInstances", /* @__PURE__ */ new Map()), S(y, "datasourceTimer", []), S(y, "parsers", /* @__PURE__ */ new Set([
  { type: "url", parser: j },
  { type: "static", parser: U },
  { type: "variable", parser: E },
  { type: "api", parser: W },
  { type: "storage", parser: v }
]));
let F = y;
export {
  F as SHJDatasourceV2
};
