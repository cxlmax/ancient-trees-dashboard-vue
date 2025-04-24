var l = Object.defineProperty;
var u = (i, t, e) => t in i ? l(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var f = (i, t, e) => u(i, typeof t != "symbol" ? t + "" : t, e);
import d from "axios";
import { merge as p } from "lodash";
class T {
  constructor() {
    f(this, "instance");
    this.instance = d.create();
  }
  /**
   * GET 请求
   * @param url
   * @param config
   * @returns
   */
  get(t, e) {
    return this.instance.get(t, e);
  }
  /**
   * POST 请求
   * @param url 请求的URL
   * @param data 发送的数据
   * @param contentType 数据的内容类型
   * @param config 额外的Axios配置
   * @returns
   */
  post(t, e, a, o = "application/json; charset=UTF-8") {
    const s = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
        /* Json */
      }
    };
    if (o === "multipart/form-data") {
      s.headers = {};
      const n = new FormData();
      for (const r in e)
        n.append(r, e[r]);
      e = n;
    } else o === "application/x-www-form-urlencoded; charset=UTF-8" && (s.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8", s.transformRequest = [(n) => {
      const r = new URLSearchParams();
      for (const c in n)
        r.append(c, n[c]);
      return r.toString();
    }]);
    return this.instance.post(t, e, p({}, s, a));
  }
  /**
   * PUT 请求
   * @param url
   * @param data
   * @param config
   * @returns
   */
  put(t, e, a, o = "application/x-www-form-urlencoded; charset=UTF-8") {
    const s = {
      headers: {
        "Content-Type": o
      }
    };
    if (o === "multipart/form-data") {
      s.headers = {};
      const n = new FormData();
      for (const r in e)
        n.append(r, e[r]);
      e = n;
    } else o === "application/x-www-form-urlencoded; charset=UTF-8" && (s.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8", s.transformRequest = [(n) => {
      const r = new URLSearchParams();
      for (const c in n)
        r.append(c, n[c]);
      return r.toString();
    }]);
    return this.instance.put(t, e, p({}, s, a));
  }
  /**
   * DELETE 请求
   * @param url
   * @param config
   * @returns
   */
  delete(t, e) {
    const a = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        /* UrlEncoded */
      }
    };
    return this.instance.delete(t, p({}, a, e));
  }
  /**
   * 文件上传
   * @param url
   * @param params
   * @param config
   * @returns
   */
  upload(t, e, a) {
    const o = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    return this.instance.post(t, e, a || o);
  }
  /**
   * blob文件下载
   * @param url
   * @param params
   * @param config
   * @returns
   */
  download(t, e, a) {
    const o = {
      responseType: "blob",
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.instance.post(t, e, a || o);
  }
  /**
   * Custom 请求
   * @param url
   * @param config
   * @returns
   */
  custom(t, e) {
    return this.instance.get(t, e);
  }
}
export {
  T as HttpRequest
};
