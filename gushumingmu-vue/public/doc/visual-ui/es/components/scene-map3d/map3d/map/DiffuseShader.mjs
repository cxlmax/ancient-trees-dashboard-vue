var s = Object.defineProperty;
var d = (t, i, o) => i in t ? s(t, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[i] = o;
var r = (t, i, o) => d(t, typeof i != "symbol" ? i + "" : i, o);
import { Color as g } from "three";
class c {
  constructor({
    material: i,
    time: o,
    size: a,
    diffuseColor: n,
    diffuseSpeed: f,
    diffuseWidth: u,
    diffuseDir: e
  }) {
    r(this, "pointShader");
    r(this, "time");
    r(this, "options");
    this.time = o;
    const l = {
      size: 100,
      // 尺寸
      diffuseSpeed: 15,
      // 扩散速度
      diffuseColor: 9345950,
      // 扩散颜色
      diffuseWidth: 10,
      // 扩散圆环宽度
      diffuseDir: 1
      // 1.0,2.0
    };
    this.options = Object.assign({}, l, {
      material: i,
      size: a,
      diffuseColor: n,
      diffuseSpeed: f,
      diffuseWidth: u,
      diffuseDir: e
    }), this.init();
  }
  init() {
    this.pointShader = null;
    const {
      material: i,
      size: o,
      diffuseColor: a,
      diffuseSpeed: n,
      diffuseWidth: f,
      diffuseDir: u
    } = this.options;
    i.onBeforeCompile = (e) => {
      this.pointShader = e, e.uniforms = {
        ...e.uniforms,
        uTime: {
          value: 0
        },
        uSpeed: {
          value: n
        },
        uWidth: {
          value: f
        },
        uColor: {
          value: new g(a)
        },
        uDir: {
          value: u
          // 1.0-xy,2.0-xz
        }
      }, e.vertexShader = e.vertexShader.replace(
        "void main() {",
        /* glsl */
        `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `
      ), e.fragmentShader = e.fragmentShader.replace(
        "void main() {",
        /* glsl */
        `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uWidth;
            uniform vec3 uColor;
            uniform float uDir;
            varying vec3 vPosition;
            
            void main(){
          `
      ), e.fragmentShader = e.fragmentShader.replace(
        "#include <opaque_fragment>",
        /* glsl */
        `
            #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif
            
            #ifdef USE_TRANSMISSION
            diffuseColor.a *= material.transmissionAlpha;
            #endif
            
            float r = uTime * uSpeed;
            //光环宽度
            float w = 0.0; 
            if(w>uWidth){
              w = uWidth;
            }else{
              w = uTime * 5.0;
            }
            //几何中心点
            vec2 center = vec2(0.0, 0.0); 
            // 距离圆心的距离

            float rDistance = distance(vPosition.xz, center);
            if(uDir==2.0){
              rDistance = distance(vPosition.xy, center);
            }
            if(rDistance > r && rDistance < r + 2.0 * w) {
              float per = 0.0;
              if(rDistance < r + w) {
                per = (rDistance - r) / w;
                outgoingLight = mix(outgoingLight, uColor, per);
                // 获取0->透明度的插值
                float alphaV = mix(0.0,diffuseColor.a,per);
                gl_FragColor = vec4(outgoingLight,  alphaV);
              } else {
                per = (rDistance - r - w) / w;
                outgoingLight = mix(uColor, outgoingLight, per);
                // 获取0->透明度的插值
                float alphaV = mix(diffuseColor.a,0.0,per);
                gl_FragColor = vec4(outgoingLight,  alphaV);
              }
            } else {
              gl_FragColor = vec4(outgoingLight, 0.0);
            }
          `
      );
    };
  }
}
export {
  c as DiffuseShader
};
