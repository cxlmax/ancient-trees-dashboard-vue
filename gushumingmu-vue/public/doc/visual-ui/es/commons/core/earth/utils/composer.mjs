import * as P from "three";
import { EffectComposer as r } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass as o } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass as d } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { GlitchPass as f } from "three/examples/jsm/postprocessing/GlitchPass";
import { DotScreenPass as m } from "three/examples/jsm/postprocessing/DotScreenPass";
import { FilmPass as c } from "three/examples/jsm/postprocessing/FilmPass";
const b = (e, t, i, s = {
  unrealBloomPass: {},
  glitchPass: {},
  dotScreenPass: {},
  filmPass: {}
}) => {
  const n = new r(e), l = new o(t, i);
  if (n.addPass(l), s.unrealBloomPass.enable) {
    const a = new d(
      new P.Vector2(window.innerWidth, window.innerHeight),
      s.unrealBloomPass.strength || 1,
      s.unrealBloomPass.radius || 0,
      s.unrealBloomPass.threshold || 0.83
    );
    n.addPass(a);
  }
  if (s.glitchPass.enable) {
    const a = new f(s.glitchPass.dtSize || 64);
    n.addPass(a);
  }
  if (s.dotScreenPass.enable) {
    const a = new m(void 0, s.dotScreenPass.angle, s.dotScreenPass.scale);
    n.addPass(a);
  }
  if (s.filmPass.enable) {
    const a = new c(s.filmPass.noiseIntensity, s.filmPass.scanlinesIntensity, s.filmPass.scanlinesCount, s.filmPass.grayscale);
    n.addPass(a);
  }
  return n;
};
export {
  b as createComposer
};
