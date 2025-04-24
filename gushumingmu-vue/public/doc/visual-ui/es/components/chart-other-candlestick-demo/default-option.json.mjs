const e = { inactiveColor: "#777" }, t = { trigger: "axis", axisPointer: { animation: !1, type: "cross", lineStyle: { color: "#376df4", width: 2, opacity: 1 } } }, o = { type: "category", axisLine: { lineStyle: { color: "#8392A5" } } }, l = { scale: !0, axisLine: { lineStyle: { color: "#8392A5" } }, splitLine: { show: !1 } }, i = { bottom: 80 }, s = [{ textStyle: { color: "#8392A5" }, dataBackground: { areaStyle: { color: "#8392A5" }, lineStyle: { opacity: 0.8, color: "#8392A5" } }, brushSelect: !0 }, { type: "inside" }], n = [{ type: "candlestick", itemStyle: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } }, { type: "line", smooth: !0, showSymbol: !1, lineStyle: { width: 1 } }, { type: "line", smooth: !0, showSymbol: !1, lineStyle: { width: 1 } }, { type: "line", smooth: !0, showSymbol: !1, lineStyle: { width: 1 } }, { type: "line", smooth: !0, showSymbol: !1, lineStyle: { width: 1 } }], r = {
  legend: e,
  tooltip: t,
  xAxis: o,
  yAxis: l,
  grid: i,
  dataZoom: s,
  series: n
};
export {
  s as dataZoom,
  r as default,
  i as grid,
  e as legend,
  n as series,
  t as tooltip,
  o as xAxis,
  l as yAxis
};
