const e = (t, o) => {
  const { linkAction: n } = t;
  window.open(n.url, n.target);
};
export {
  e as executeLinkAction
};
