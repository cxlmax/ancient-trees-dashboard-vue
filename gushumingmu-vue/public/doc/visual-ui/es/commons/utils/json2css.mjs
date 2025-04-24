import { isObject as f, isNumber as a } from "lodash";
import { PX_PROPERTIES as l } from "../const/css.mjs";
function u(t, n) {
  if (!t || typeof t != "object")
    return {};
  const e = {};
  for (const c in t) {
    const s = t[c];
    if (f(s)) {
      const i = u(s, c);
      Object.assign(e, i);
      continue;
    }
    const o = c.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase(), r = (n ? `--${n}-` : "") + o;
    l.includes(c) && a(s) ? e[r] = `${s}px` : e[r] = String(s);
  }
  return e;
}
const g = (t) => {
  if (t && t.startsWith("SHJ-")) {
    let n = !1;
    if (document.fonts.forEach((e) => {
      e.family === t && (n = !0);
    }), !n) {
      const e = t.slice(4, t.lastIndexOf("-")), c = e.slice(0, e.lastIndexOf("-")), s = t.slice(t.lastIndexOf("-") + 1, t.length), o = new FontFace(t, `url(https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/fonts/${c}/${e}.${s})`);
      document.fonts.add(o), o.load().then(() => {
      }).catch(() => {
      });
    }
  }
};
export {
  g as autoInstallFont,
  u as jsonToCssStyle
};
