import { isArray as g } from "lodash";
class o {
  /**
   * 解析URL中是否包含全局变量
   * @param url URL
   * @param variableData 变量数据
   * @returns 解析后的URL
   */
  static replaceURLVariables(e, n) {
    try {
      const t = e.match(/\${(.*?)}/g);
      if (t)
        for (let a = 0; a < t.length; a++) {
          const r = t[a].substring(2, t[a].length - 1), i = o.extractVariableName(r), c = n.find((l) => l.name === i);
          if (!c)
            continue;
          const s = o.getNestedValue(c._value, r.substring(i.length));
          e = e.replaceAll(t[a], s);
        }
      return e;
    } catch {
      return e;
    }
  }
  /**
   * 解析对象中是否包含全局变量
   * @param obj 对象
   * @param variableData 变量数据
   * @returns 解析后的对象
   */
  static replaceObjectVariables(e, n) {
    try {
      let t = JSON.stringify(e);
      const a = t.match(/\$g{(.*?)}/g);
      if (a) {
        for (let r = 0; r < a.length; r++) {
          const i = a[r].substring(3, a[r].length - 1), c = this.extractVariableName(i), s = n.find((u) => u.name === c);
          if (!s)
            continue;
          const l = this.getNestedValue(s._value, i.substring(c.length));
          t = t.replaceAll(a[r], l);
        }
        return JSON.parse(t);
      }
      return e;
    } catch {
      return e;
    }
  }
  /**
   * 解析字符串中是否包含全局变量
   * @param str 字符串
   * @param variableData 变量数据
   * @returns 解析后的字符串
   */
  static replaceStringVariables(e, n) {
    try {
      const t = e.match(/\$g{(.*?)}/g);
      if (t)
        for (let a = 0; a < t.length; a++) {
          const r = t[a].substring(3, t[a].length - 1), i = this.extractVariableName(r), c = n.find((l) => l.name === i);
          if (!c)
            continue;
          const s = this.getNestedValue(c._value, r.substring(i.length));
          e = e.replaceAll(t[a], s);
        }
      return e;
    } catch {
      return e;
    }
  }
  /**
   * 解析环境变量
   * @param url URL
   * @param environments 环境变量
   * @returns 解析后的环境变量
   */
  static replaceEnvVariables(e, n) {
    try {
      let t = "";
      if (!e.includes("http") && n) {
        const a = n.filter((r) => r.selected);
        a && g(a) && a.length > 0 && (t = a[0].envBaseUrl || "");
      }
      return t;
    } catch {
      return "";
    }
  }
  /**
   * 返回空数据
   * @param id 数据源 ID
   * @returns 空数据
   */
  static noneData(e) {
    return {
      id: e,
      finalKeyData: [],
      finalUserData: { id: e, data: [] },
      filteredData: [],
      rawData: [],
      noMappingData: []
    };
  }
  /**
   * 获取环境变量
   * @returns 环境变量
   */
  static getEnvironments() {
    let e = localStorage.getItem("currentApiEnvironments");
    return e && (e = JSON.parse(e)), e;
  }
  /**
   * 设置环境变量
   * @param environments 环境变量
   */
  static setEnvironments(e) {
    localStorage.setItem("currentApiEnvironments", JSON.stringify(e));
  }
  /**
   * 获取变量数据
   * @returns 变量数据
   */
  static getVariableData() {
    let e = localStorage.getItem("currentVariableData");
    return e && (e = JSON.parse(e)), e;
  }
  /**
   * 设置变量数据
   * @param variableData 变量数据
   */
  static setVariableData(e) {
    localStorage.setItem("currentVariableData", JSON.stringify(e));
  }
  /**
   * 检查 WebSocket 是否已存在且有效
   * @param wsInstances WebSocket 实例
   * @param tId WebSocket 实例的 ID
   * @param sourceId WebSocket 实例的源 ID
   * @returns 是否有效
   */
  static hasValidWebSocket(e, n, t) {
    const a = e.get(n);
    if (!a) return !1;
    for (const r of a)
      if (r.getId() === t && r.isConnected())
        return !0;
    return !1;
  }
  /**
   * 只在必要时清理 WebSocket 连接
   * @param wsInstances WebSocket 实例
   * @param sourceIds 源 ID
   * @param tId WebSocket 实例的 ID
   */
  static cleanupPreviousWebSockets(e, n, t) {
    const a = e.get(t);
    a && (a.forEach((r) => {
      n.includes(r.getId()) || (r.disconnect(), a.delete(r));
    }), a.size === 0 && e.delete(t));
  }
  /**
   * 使用 Function 构造函数获取对象中的嵌套值（更简洁但安全性较低）
   * @param obj 源对象
   * @param path 路径字符串，例如 ".a[0].value"
   * @returns 获取到的值，如果路径不存在则返回 undefined
   */
  static getNestedValue(e, n) {
    try {
      return new Function("obj", `return obj${n}`)(e);
    } catch {
      return;
    }
  }
  /**
   * 从路径字符串中提取变量名
   * @param path 路径字符串，例如 "测试.test" 或 "333[0].aa"
   * @returns 提取出的变量名
   */
  static extractVariableName(e) {
    const n = e.match(/^([\u4e00-\u9fa5a-zA-Z0-9_][\u4e00-\u9fa5a-zA-Z0-9_]*)/);
    return n ? n[1] : "";
  }
}
export {
  o as DataSourceUtils
};
