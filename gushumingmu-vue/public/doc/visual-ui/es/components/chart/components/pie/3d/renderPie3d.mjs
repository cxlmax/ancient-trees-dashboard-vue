const p = (a, i) => {
  const t = [];
  let l = 0, r = 0, f = 0, u = [], c = [];
  const h = 1 - i.internalDiameterRatio / 100 || 0;
  a.sort((e, n) => n.value - e.value);
  for (let e = 0; e < a.length; e++) {
    l += a[e].value;
    const n = {
      name: typeof a[e].category > "u" ? `series${e}` : a[e].category,
      type: "surface",
      parametric: !0,
      wireframe: {
        show: !1
      },
      pieData: a[e],
      pieStatus: {
        selected: !1,
        hovered: !1,
        k: h
      },
      itemStyle: {
        opacity: i.itemStyle.opacity
      },
      center: ["10%", "50%"]
    };
    if (typeof a[e].itemStyle < "u") {
      const s = {};
      s.color = typeof a[e].itemStyle.color < "u" ? a[e].itemStyle.color : i.itemStyle.opacity, s.opacity = typeof a[e].itemStyle.opacity < "u" ? a[e].itemStyle.opacity : i.itemStyle.opacity, n.itemStyle = s;
    }
    t.push(n);
  }
  u = [], c = [];
  for (let e = 0; e < t.length; e++) {
    f = r + t[e].pieData.value, t[e].pieData.startRatio = r / l, t[e].pieData.endRatio = f / l, t[e].parametricEquation = M(
      t[e].pieData.startRatio,
      t[e].pieData.endRatio,
      !1,
      !1,
      h,
      t[e].pieData.value
    ), r = f;
    const n = g(t[e].pieData.value / l, 4);
    u.push({
      name: t[e].name,
      value: n
    }), c.push({
      name: t[e].name,
      value: n
    });
  }
  const d = y(t, i.grid3D.boxHeight);
  return t.push({
    type: "pie",
    labelLine: i.labelLine,
    label: i.label,
    startAngle: -30,
    // 起始角度，支持范围[0, 360]。
    clockwise: !1,
    // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    radius: ["65%", "65%"],
    center: ["50%", "46%"],
    // 指示线的位置
    itemStyle: {
      color: "#00000000"
    }
  }), {
    ...i,
    tooltip: {
      ...i.tooltip,
      formatter: (e) => {
        const n = (a[e.seriesIndex].endRatio - a[e.seriesIndex].startRatio) * 100;
        return `
                ${e.seriesName}<br/>
                ${n.toFixed(2)}%
                `;
      }
    },
    grid3D: {
      ...i.grid3D,
      boxHeight: d,
      boxWidth: i.grid3D.boxWidth,
      boxDepth: i.grid3D.boxDepth
    },
    series: t
  };
}, M = (a, i, t, l, r, f) => {
  const u = (a + i) / 2, c = a * Math.PI * 2, h = i * Math.PI * 2, d = u * Math.PI * 2;
  a === 0 && i === 1 && (t = !1), r = typeof r < "u" ? r : 0.3333333333333333;
  const m = t ? Math.cos(d) * 0.1 : 0, e = t ? Math.sin(d) * 0.1 : 0, n = 1;
  return {
    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32
    },
    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20
    },
    x: function(s, o) {
      return s < c ? m + Math.cos(c) * (1 + Math.cos(o) * r) * n : s > h ? m + Math.cos(h) * (1 + Math.cos(o) * r) * n : m + Math.cos(s) * (1 + Math.cos(o) * r) * n;
    },
    y: function(s, o) {
      return s < c ? e + Math.sin(c) * (1 + Math.cos(o) * r) * n : s > h ? e + Math.sin(h) * (1 + Math.cos(o) * r) * n : e + Math.sin(s) * (1 + Math.cos(o) * r) * n;
    },
    z: function(s, o) {
      return s < -Math.PI * 0.5 ? Math.sin(s) : s > Math.PI * 2.5 ? Math.sin(s) * f * 0.1 : Math.sin(o) > 0 ? 1 * f * 0.1 : -1;
    }
  };
}, y = (a, i) => (a.sort((t, l) => l.pieData.value - t.pieData.value), i * 25 / a[0].pieData.value), g = (a, i) => {
  let t = parseFloat(a);
  if (isNaN(t))
    return !1;
  t = Math.round(a * Math.pow(10, i)) / Math.pow(10, i);
  let l = t.toString(), r = l.indexOf(".");
  for (r < 0 && (r = l.length, l += "."); l.length <= r + i; )
    l += "0";
  return l;
};
export {
  M as getParametricEquation,
  p as getPie3D
};
