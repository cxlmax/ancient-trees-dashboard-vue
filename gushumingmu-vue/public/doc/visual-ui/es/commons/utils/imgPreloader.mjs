const t = (e) => new Promise((r, o) => {
  const n = new Image();
  n.onload = () => {
    r(!0);
  }, n.onerror = (s) => {
    o(s);
  }, n.src = e;
}), a = (e) => {
  const r = [];
  return e.forEach((o) => {
    r.push(t(o));
  }), Promise.all(r);
};
export {
  a as imgsPreloader
};
