var d = Object.defineProperty;
var g = (i, t, s) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var l = (i, t, s) => g(i, typeof t != "symbol" ? t + "" : t, s);
import { cloneDeep as p, isObject as f, isNumber as x } from "lodash";
import { PX_PROPERTIES as $ } from "../const/css.mjs";
class h {
  /**
   * 将 JSON 转换为 CSS 样式对象
   * @param styleJson - 需要转换的 JSON 对象
   * @param prefix - 前缀
   * @returns 转换后的 CSS 样式对象
   */
  static json2cssObject(t, s) {
    const e = p(t);
    if (!f(e))
      return {};
    const c = {};
    for (const o in e) {
      const n = e[o];
      if (n === "" || n === null)
        continue;
      const u = o.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase(), a = (s ? `--${s}-` : "") + u;
      if (f(n)) {
        if (o === "textShadow") {
          const r = n;
          r.show && Object.assign(c, { [a]: `${r.x}px ${r.y}px ${r.value}px ${r.color}` });
          continue;
        }
        continue;
      }
      if (o === "backgroundImage") {
        c[a] = `url('${n}')`;
        continue;
      }
      if ($.includes(o) && x(n)) {
        c[a] = `${n}px`;
        continue;
      }
      if (o === "fontFamily" && this.installFont(n), o === "color" && n.includes("linear-gradient")) {
        c["-webkit-background-clip"] = "text", c.color = "transparent", c.backgroundImage = n;
        continue;
      }
      c[a] = String(n);
    }
    return c;
  }
  /**
   * 安装字体
   * @param fontFamily - 字体名称
   */
  static installFont(t) {
    if (t && t.startsWith("SHJ-")) {
      let s = !1;
      if (document.fonts.forEach((e) => {
        e.family === t && (s = !0);
      }), !s) {
        const e = t.slice(4, t.lastIndexOf("-")), c = e.slice(0, e.lastIndexOf("-")), o = t.slice(t.lastIndexOf("-") + 1, t.length), n = new FontFace(t, `url(${this.fontUrl}/${c}/${e}.${o})`);
        document.fonts.add(n), n.load().then(() => {
        }).catch(() => {
        });
      }
    }
  }
}
/**
 * 字体地址
 */
l(h, "fontUrl", "https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/fonts");
export {
  h as Utils
};
