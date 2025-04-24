const i = (n, e) => {
  if (!Array.isArray(n) || !n.length || typeof e != "string")
    return null;
  const t = n.indexOf(e);
  if (t === -1)
    return null;
  const l = (t + 1) % n.length;
  return n[l];
};
export {
  i as getNextElement
};
