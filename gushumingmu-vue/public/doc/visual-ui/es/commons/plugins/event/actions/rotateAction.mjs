const d = (o, m) => {
  var r;
  const { rotateAction: t } = o;
  (r = t.layerIds) != null && r.length && t.layerIds.forEach((i) => {
    const s = document.getElementById(i), e = s.children[0];
    e._transitionTimer && clearTimeout(e._transitionTimer);
    const n = e.style.transform.split(" "), a = n[0] || "", c = n[1] || "";
    if (e.style.transform = `${a} ${c} rotateX(${t.x}deg) rotateY(${t.y}deg) rotateZ(${t.z}deg)`, (t.x > 0 || t.y > 0 || t.z > 0) && (s.style.perspective = t.perspective + "px"), t.speed !== "") {
      e.style.transition = `transform ${t.duration}ms ${t.speed} ${t.delay}ms`;
      const l = t.duration + t.delay;
      e._transitionTimer = setTimeout(() => {
        e.style.transition = "";
      }, l);
    }
  });
};
export {
  d as executeRotateAction
};
