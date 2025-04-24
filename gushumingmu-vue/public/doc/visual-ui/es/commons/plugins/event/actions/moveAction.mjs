const a = (i, s) => {
  var n;
  const { moveAction: t } = i;
  (n = t.layerIds) != null && n.length && t.layerIds.forEach((r) => {
    const e = document.getElementById(r);
    e._transitionTimer && clearTimeout(e._transitionTimer), e.style.transform = `matrix(1, 0, 0, 1, ${t.x}, ${t.y}) `, e.style.transition = `transform ${t.duration}ms ${t.speed} ${t.delay}ms`;
    const o = t.duration + t.delay;
    e._transitionTimer = setTimeout(() => {
      e.style.transition = "";
    }, o);
  });
};
export {
  a as executeMoveAction
};
