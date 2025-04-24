var f = Object.defineProperty;
var r = (s, t, e) => t in s ? f(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => r(s, typeof t != "symbol" ? t + "" : t, e);
import { isArray as c } from "lodash";
class p {
  /**
   * 注册组件Ref
   * @param id
   * @returns
   */
  static registerRef(t) {
    return (e) => {
      if (c(this.componentRefs) && e && t) {
        const n = this.componentRefs.find((i) => i.id === t);
        n ? n.ref = e : this.componentRefs.push({ id: t, ref: e });
      }
    };
  }
  /**
   * 获取组件Ref
   * @param id
   * @returns
   */
  static getComponentRef(t) {
    return this.componentRefs.find((e) => e.id === t);
  }
  /**
   * 清除组件Ref
   */
  static clearComponentRefs() {
    this.componentRefs = [];
  }
}
o(p, "componentRefs", []);
export {
  p as ComponentRefs
};
