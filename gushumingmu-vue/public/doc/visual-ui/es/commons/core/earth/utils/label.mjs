import { CSS2DObject as o, CSS2DRenderer as s } from "three/examples/jsm/renderers/CSS2DRenderer";
function d(t) {
  const e = document.createElement("div");
  e.innerHTML = t, e.classList.add("tag");
  const n = new o(e);
  return e.style.pointerEvents = "none", n;
}
function r(t) {
  const e = new s();
  return e.setSize(t.offsetWidth, t.offsetHeight), e.domElement.style.position = "absolute", e.domElement.style.top = "0px", e.domElement.style.left = "0px", e.domElement.style.pointerEvents = "none", t.appendChild(e.domElement), e;
}
export {
  r as labelRenderer,
  d as tag2D
};
