var p = Object.defineProperty;
var g = (c, t, e) => t in c ? p(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var d = (c, t, e) => g(c, typeof t != "symbol" ? t + "" : t, e);
import { SHJDatasourceV2 as f } from "../index.mjs";
import { wsManager as m } from "../utils/wsManager.mjs";
import { DataSourceUtils as l } from "../utils/utils.mjs";
class w {
  constructor(t, e, s, i, n, o) {
    d(this, "ws", null);
    d(this, "reconnectAttempts", 0);
    d(this, "timeoutTimer");
    d(this, "isDisconnecting", !1);
    d(this, "config");
    this.source = t, this.id = e, this.noUseMapping = s, this.tId = i, this.onData = n, this.onEvent = o;
    const { websocket: r } = t.source;
    if (!r) {
      n == null || n(l.noneData(e)), this.config = {
        url: "",
        reconnect: !1,
        timeout: 3e4
      };
      return;
    }
    this.config = r, this.connect();
  }
  // 新增：获取连接ID
  getId() {
    return this.id;
  }
  // 新增：检查连接是否有效
  isConnected() {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }
  processProtocols() {
    const { protocols: t = "" } = this.config;
    return t ? Array.isArray(t) ? t : t.split(/\s*,\s*/) : [];
  }
  injectHeadersToUrl(t) {
    try {
      const e = new URL(t);
      return Object.entries(this.config.headers || {}).forEach(([s, i]) => {
        e.searchParams.append(s, i);
      }), e.toString();
    } catch {
      return t;
    }
  }
  connect() {
    var r, h;
    if (this.isDisconnecting) return;
    const {
      url: t,
      isHeaders: e = !1,
      binaryType: s = "blob",
      timeout: i = 3e4
    } = this.config, n = e ? this.injectHeadersToUrl(t) : t, o = this.processProtocols();
    m.closeByComponentIds(this.tId);
    try {
      this.ws = o.length > 0 ? new WebSocket(n, o) : new WebSocket(n), this.ws && (m.add(this.ws, this.tId), this.ws.binaryType = s, this.timeoutTimer = setTimeout(() => {
        var a, u;
        ((a = this.ws) == null ? void 0 : a.readyState) === WebSocket.CONNECTING && (this.ws.close(), (u = this.onEvent) == null || u.call(this, "error", "Connection timeout"), this.handleClose({ code: 4001, reason: "Timeout" }));
      }, i), this.ws.onopen = this.handleOpen.bind(this), this.ws.onmessage = this.handleMessage.bind(this), this.ws.onerror = this.handleError.bind(this), this.ws.onclose = this.handleClose.bind(this), (r = this.onEvent) == null || r.call(this, "connecting"));
    } catch (a) {
      (h = this.onEvent) == null || h.call(this, "error", a), this.scheduleReconnect();
    }
  }
  handleOpen() {
    var s, i, n, o;
    this.timeoutTimer && clearTimeout(this.timeoutTimer), (s = this.onEvent) == null || s.call(this, "connected"), this.reconnectAttempts = 0;
    const { message: t, isMessage: e } = this.config;
    if (t && e)
      try {
        const r = l.getVariableData(), h = typeof t == "string" ? l.replaceStringVariables(t, r) : l.replaceObjectVariables(t, r), a = typeof h == "string" ? h : JSON.stringify(h);
        (i = this.ws) == null || i.send(a), (n = this.onEvent) == null || n.call(this, "messageSent", a);
      } catch {
        (o = this.onEvent) == null || o.call(this, "error", "Failed to send initial message");
      }
  }
  async handleMessage(t) {
    var e, s, i, n;
    try {
      let o = t.data;
      if (typeof o == "string")
        try {
          o = JSON.parse(o);
        } catch {
        }
      const r = await f.processData(
        this.source.source.filter,
        o,
        this.source.source.mapping,
        this.id,
        this.source.source.dynamicMapping,
        this.noUseMapping
      );
      (e = this.onData) == null || e.call(this, r), (s = this.onEvent) == null || s.call(this, "data", r);
    } catch {
      (i = this.onEvent) == null || i.call(this, "error", "Data processing failed"), (n = this.onData) == null || n.call(this, l.noneData(this.id));
    }
  }
  handleError(t) {
    var e, s, i;
    (e = this.onEvent) == null || e.call(this, "error", t), ((s = this.ws) == null ? void 0 : s.readyState) !== WebSocket.OPEN && ((i = this.onData) == null || i.call(this, l.noneData(this.id)));
  }
  handleClose(t) {
    var e, s;
    this.timeoutTimer && clearTimeout(this.timeoutTimer), (e = this.onEvent) == null || e.call(this, "disconnected", { code: t.code, reason: t.reason }), this.shouldReconnect(t) ? this.scheduleReconnect() : (s = this.onData) == null || s.call(this, l.noneData(this.id));
  }
  shouldReconnect(t) {
    const { reconnect: e = !1, maxReconnectAttempts: s = 10 } = this.config;
    return !this.isDisconnecting && e && this.reconnectAttempts < s && t.code !== 1e3 && t.code !== 4001;
  }
  scheduleReconnect() {
    var s;
    if (this.isDisconnecting) return;
    const { reconnectInterval: t = 5e3 } = this.config;
    this.reconnectAttempts++;
    const e = t * Math.pow(2, this.reconnectAttempts - 1);
    (s = this.onEvent) == null || s.call(this, "reconnecting", { attempt: this.reconnectAttempts, delay: e }), setTimeout(() => this.connect(), Math.min(e, 3e4));
  }
  send(t) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
      throw new Error("WebSocket 未连接");
    const e = typeof t == "string" ? t : JSON.stringify(t);
    this.ws.send(e);
  }
  disconnect() {
    this.isDisconnecting = !0, this.ws && (this.ws.close(1e3, "Manual close"), this.timeoutTimer && clearTimeout(this.timeoutTimer), m.closeByComponentIds(this.tId));
  }
  getWebSocket() {
    return this.ws;
  }
}
const T = (c, t, e, s, i, n) => new w(c, t, e, s, i, n);
export {
  w as WebSocketInstance,
  T as parseWebSocket
};
