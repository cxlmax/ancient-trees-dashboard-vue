var d = Object.defineProperty;
var h = (s, e, o) => e in s ? d(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[e] = o;
var r = (s, e, o) => h(s, typeof e != "symbol" ? e + "" : e, o);
const n = class n {
  constructor() {
    r(this, "connections", /* @__PURE__ */ new Set());
  }
  // 单例模式
  static getInstance() {
    return n.instance || (n.instance = new n()), n.instance;
  }
  // 添加 WebSocket 连接
  add(e, o) {
    Array.from(this.connections).filter((t) => t.componentId === o).forEach((t) => {
      if (this.removeAllListeners(t.ws), t.ws.readyState !== WebSocket.CLOSED)
        try {
          t.ws.close(1e3, `Replacing connection for component ${o}`);
        } catch {
        }
      this.connections.delete(t);
    });
    const c = { ws: e, componentId: o };
    this.connections.add(c), this.setupAutoRemove(e, c);
  }
  // 改进点：更彻底的连接关闭 + 内存泄漏防护
  closeByComponentIds(e) {
    const o = Array.isArray(e) ? e : [e], i = new Set(o);
    Array.from(this.connections).filter(
      (t) => i.has(t.componentId) && t.ws.readyState !== WebSocket.CLOSED
    ).forEach((t) => {
      this.removeAllListeners(t.ws);
      try {
        t.ws.close(1e3, `Component ${t.componentId} unmounted`);
      } catch {
      }
      this.connections.delete(t);
    });
  }
  // 辅助方法：清理事件监听器
  removeAllListeners(e) {
    const o = () => {
    };
    e.onopen = o, e.onmessage = o, e.onerror = o, e.onclose = o, "removeAllListeners" in e && e.removeAllListeners();
  }
  // 关闭所有连接
  closeAll() {
    this.connections.forEach((e) => {
      if (e.ws.readyState === WebSocket.OPEN || e.ws.readyState === WebSocket.CONNECTING)
        try {
          e.ws.close(1e3, "All connections closed");
        } catch {
        }
    }), this.connections.clear();
  }
  // 自动移除已关闭的连接
  setupAutoRemove(e, o) {
    const i = e.close.bind(e);
    e.close = (c, t) => {
      this.connections.delete(o), i(c, t);
    }, e.onclose = () => {
      this.connections.delete(o);
    };
  }
  // 用于调试的方法
  getConnectionsInfo() {
    return Array.from(this.connections).map((e) => ({
      componentId: e.componentId,
      readyState: e.ws.readyState
    }));
  }
};
// eslint-disable-next-line no-use-before-define
r(n, "instance");
let a = n;
const A = a.getInstance();
export {
  A as wsManager
};
