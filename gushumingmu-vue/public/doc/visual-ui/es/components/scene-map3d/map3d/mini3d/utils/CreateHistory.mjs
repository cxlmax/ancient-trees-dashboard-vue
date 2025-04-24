class h {
  constructor() {
    this.past = [], this.future = [], this.present = void 0;
  }
  gotoState(t) {
    const s = [...this.past, this.present, ...this.future];
    this.present = s[t], this.past = s.slice(0, t), this.future = s.slice(t + 1, s.length);
  }
  // 获取当前状态index
  getIndex() {
    return this.past.length;
  }
  // 保存当前状态
  push(t) {
    this.present && this.past.push(this.present), this.present = t;
  }
  // 后退
  undo() {
    this.past.length !== 0 && this.gotoState(this.getIndex() - 1);
  }
  // 前进
  redo() {
    this.future.length !== 0 && this.gotoState(this.getIndex() + 1);
  }
  // 清空
  empty() {
    this.past = [], this.future = [], this.present = void 0;
  }
}
export {
  h as createHistory
};
