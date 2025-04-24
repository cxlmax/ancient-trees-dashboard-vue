const y = (i, c) => {
  var a;
  const { scaleAction: t } = i;
  (a = t.layerIds) != null && a.length && t.layerIds.forEach((l) => {
    const e = document.getElementById(l).children[0], s = e.style.transform.split(" ");
    if (e._transitionTimer && clearTimeout(e._transitionTimer), s.length >= 5) {
      const r = s[2] || "", n = s[3] || "", o = s[4] || "";
      e.style.transform = `scaleX(${t.x / 100}) scaleY(${t.y / 100}) ${r} ${n} ${o}`;
    } else {
      const r = s[0] || "", n = s[1] || "", o = s[2] || "";
      e.style.transform = `scaleX(${t.x / 100}) scaleY(${t.y / 100}) ${r} ${n} ${o}`;
    }
    if (e.style.transformOrigin = t.origin, t.speed !== "") {
      e.style.transition = `transform ${t.duration}ms ${t.speed} ${t.delay}ms`;
      const r = t.duration + t.delay;
      e._transitionTimer = setTimeout(() => {
        e.style.transition = "";
      }, r);
    }
  });
};
export {
  y as executeScaleAction
};
