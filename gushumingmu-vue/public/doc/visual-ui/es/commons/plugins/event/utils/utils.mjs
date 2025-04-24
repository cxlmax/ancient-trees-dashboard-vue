import { ComponentRefs as o } from "../../../utils/componentRefs.mjs";
class f {
  /**
   * 将URL参数转换为JSON对象
   * @param urlParam - 需要转换的URL参数
   * @returns 转换后的JSON对象
   */
  static urlParamToJson(r) {
    if (!r) return r;
    const t = {};
    return r.trim().split("&").forEach((e) => t[e.split("=")[0]] = e.split("=")[1]), t;
  }
  /**
   * 更新组件数据
   * @param variableData 变量数据
   */
  static updateWidgetVariableData(r) {
    var t;
    (t = r.useList) != null && t.length && r.useList.forEach((e) => {
      const s = o.getComponentRef(e);
      try {
        s && s.ref && s.ref.refreshData();
      } catch {
      }
    });
  }
  /**
   * 将JSON对象转换为字符串
   * @param json - 需要转换的JSON对象
   * @returns 转换后的字符串
   */
  static toStringify(r) {
    try {
      let t = [];
      const e = JSON.stringify(r, (s, n) => {
        if (typeof n == "object" && n !== null) {
          if (t.indexOf(n) !== -1) return;
          t.push(n);
        }
        return n;
      });
      return t = null, e;
    } catch {
      return "";
    }
  }
}
export {
  f as EventUtils
};
