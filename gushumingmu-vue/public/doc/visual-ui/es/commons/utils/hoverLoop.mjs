var h = Object.defineProperty;
var d = (s, t, e) => t in s ? h(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => d(s, typeof t != "symbol" ? t + "" : t, e);
class n {
  constructor(t, e) {
    i(this, "timer");
    i(this, "currentIndex", -1);
    i(this, "currentSeriesIndex", -1);
    this.myChart = t, this.option = e, this.timer = setInterval(() => {
      this.switchTooltip(this.myChart, this.option);
    }, e.hoverLoop.delay);
  }
  switchTooltip(t, e) {
    try {
      if (e.dataset && e.dataset.source || e.series[0].data) {
        t.dispatchAction({
          type: "downplay",
          seriesIndex: this.currentSeriesIndex,
          dataIndex: this.currentIndex
        }), this.currentSeriesIndex = (this.currentSeriesIndex + 1) % e.series.length;
        let r = 0;
        e.dataset && e.dataset.source && (r = e.dataset.source.length), e.series[this.currentSeriesIndex] && e.series[this.currentSeriesIndex].data && (r = e.series[this.currentSeriesIndex].data.length), this.currentSeriesIndex === 0 && (this.currentIndex = (this.currentIndex + 1) % r), e.hoverLoop.highlight && t && t.dispatchAction({
          type: "highlight",
          seriesIndex: this.currentSeriesIndex,
          dataIndex: this.currentIndex
        }), e.hoverLoop.showTip && t && t.dispatchAction({
          type: "showTip",
          seriesIndex: this.currentSeriesIndex,
          dataIndex: this.currentIndex
        });
      } else
        this.closeSwitchTooltip();
    } catch {
      this.closeSwitchTooltip();
    }
  }
  closeSwitchTooltip() {
    clearInterval(this.timer), this.timer = void 0;
  }
}
export {
  n as HoverLoop
};
