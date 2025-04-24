var I = Object.defineProperty;
var N = (d, r, i) => r in d ? I(d, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : d[r] = i;
var h = (d, r, i) => N(d, typeof r != "symbol" ? r + "" : r, i);
import { Mesh as q, PerspectiveCamera as G, Color as C, Plane as L, Vector3 as p, Matrix4 as U, Vector4 as _, WebGLRenderTarget as X, HalfFloatType as J, ShaderMaterial as K, UniformsUtils as Q, NoToneMapping as Y } from "three";
const R = class R extends q {
  constructor(i, n = {}) {
    super(i);
    h(this, "isReflector");
    h(this, "camera");
    h(this, "getRenderTarget");
    this.isReflector = !0, this.type = "Reflector", this.camera = new G();
    const s = this, j = n.color !== void 0 ? new C(n.color) : new C(8355711), O = n.textureWidth || 512, D = n.textureHeight || 512, F = n.clipBias || 0, m = n.shader || R.ReflectorShader, V = n.multisample !== void 0 ? n.multisample : 4, c = new L(), l = new p(), u = new p(), W = new p(), f = new U(), M = new p(0, 0, -1), o = new _(), x = new p(), w = new p(), v = new _(), g = new U(), t = this.camera, y = new X(O, D, {
      samples: V,
      type: J
    }), S = new K({
      name: m.name !== void 0 ? m.name : "unspecified",
      uniforms: Q.clone(m.uniforms),
      fragmentShader: m.fragmentShader,
      vertexShader: m.vertexShader
    });
    S.uniforms.tDiffuse.value = y.texture, S.uniforms.color.value = j, S.uniforms.textureMatrix.value = g, this.material = S, this.onBeforeRender = function(e, A, b) {
      if (u.setFromMatrixPosition(s.matrixWorld), W.setFromMatrixPosition(b.matrixWorld), f.extractRotation(s.matrixWorld), l.set(0, 0, 1), l.applyMatrix4(f), x.subVectors(u, W), x.dot(l) > 0) return;
      x.reflect(l).negate(), x.add(u), f.extractRotation(b.matrixWorld), M.set(0, 0, -1), M.applyMatrix4(f), M.add(W), w.subVectors(u, M), w.reflect(l).negate(), w.add(u), t.position.copy(x), t.up.set(0, 1, 0), t.up.applyMatrix4(f), t.up.reflect(l), t.lookAt(w), t.far = b.far, t.updateMatrixWorld(), t.projectionMatrix.copy(b.projectionMatrix), g.set(
        0.5,
        0,
        0,
        0.5,
        0,
        0.5,
        0,
        0.5,
        0,
        0,
        0.5,
        0.5,
        0,
        0,
        0,
        1
      ), g.multiply(t.projectionMatrix), g.multiply(t.matrixWorldInverse), g.multiply(s.matrixWorld), c.setFromNormalAndCoplanarPoint(
        l,
        u
      ), c.applyMatrix4(t.matrixWorldInverse), o.set(
        c.normal.x,
        c.normal.y,
        c.normal.z,
        c.constant
      );
      const a = t.projectionMatrix;
      v.x = (Math.sign(o.x) + a.elements[8]) / a.elements[0], v.y = (Math.sign(o.y) + a.elements[9]) / a.elements[5], v.z = -1, v.w = (1 + a.elements[10]) / a.elements[14], o.multiplyScalar(2 / o.dot(v)), a.elements[2] = o.x, a.elements[6] = o.y, a.elements[10] = o.z + 1 - F, a.elements[14] = o.w, s.visible = !1;
      const k = e.getRenderTarget(), z = e.xr.enabled, B = e.shadowMap.autoUpdate, H = e.outputColorSpace, E = e.toneMapping;
      e.xr.enabled = !1, e.shadowMap.autoUpdate = !1, e.outputColorSpace = "srgb-linear", e.toneMapping = Y, e.setRenderTarget(y), e.state.buffers.depth.setMask(!0), e.autoClear === !1 && e.clear(), e.render(A, t), e.xr.enabled = z, e.shadowMap.autoUpdate = B, e.outputColorSpace = H, e.toneMapping = E, e.setRenderTarget(k);
      const T = b.viewport;
      T !== void 0 && e.state.viewport(T), s.visible = !0;
    }, this.getRenderTarget = function() {
      return y;
    }, this.dispose = function() {
      y.dispose(), s.material.dispose();
    };
  }
  dispose() {
    throw new Error("Method not implemented.");
  }
};
h(R, "ReflectorShader");
let P = R;
P.ReflectorShader = {
  name: "ReflectorShader",
  uniforms: {
    color: {
      value: null
    },
    tDiffuse: {
      value: null
    },
    textureMatrix: {
      value: null
    }
  },
  vertexShader: (
    /* glsl */
    `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ),0.15 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
  )
};
export {
  P as Reflector
};
