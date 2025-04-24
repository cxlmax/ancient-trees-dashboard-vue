import { useFullscreen as s } from "@vueuse/core";
const { enter: n, exit: o, toggle: c } = s(), i = (e, l) => {
  const { fullscreenAction: t } = e;
  t && t.status && (t.status === "fullscreen" && n(), t.status === "window" && o(), t.status === "toggle" && c());
};
export {
  i as executeFullScreenAction
};
