"use strict";var k=Object.defineProperty;var z=(p,n,s)=>n in p?k(p,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[n]=s;var h=(p,n,s)=>z(p,typeof n!="symbol"?n+"":n,s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("three"),P=class P extends t.Mesh{constructor(s,l={}){super(s);h(this,"isReflector");h(this,"camera");h(this,"getRenderTarget");this.isReflector=!0,this.type="Reflector",this.camera=new t.PerspectiveCamera;const c=this,C=l.color!==void 0?new t.Color(l.color):new t.Color(8355711),V=l.textureWidth||512,U=l.textureHeight||512,j=l.clipBias||0,m=l.shader||P.ReflectorShader,O=l.multisample!==void 0?l.multisample:4,u=new t.Plane,i=new t.Vector3,d=new t.Vector3,T=new t.Vector3,f=new t.Matrix4,M=new t.Vector3(0,0,-1),r=new t.Vector4,v=new t.Vector3,w=new t.Vector3,x=new t.Vector4,g=new t.Matrix4,o=this.camera,y=new t.WebGLRenderTarget(V,U,{samples:O,type:t.HalfFloatType}),S=new t.ShaderMaterial({name:m.name!==void 0?m.name:"unspecified",uniforms:t.UniformsUtils.clone(m.uniforms),fragmentShader:m.fragmentShader,vertexShader:m.vertexShader});S.uniforms.tDiffuse.value=y.texture,S.uniforms.color.value=C,S.uniforms.textureMatrix.value=g,this.material=S,this.onBeforeRender=function(e,_,b){if(d.setFromMatrixPosition(c.matrixWorld),T.setFromMatrixPosition(b.matrixWorld),f.extractRotation(c.matrixWorld),i.set(0,0,1),i.applyMatrix4(f),v.subVectors(d,T),v.dot(i)>0)return;v.reflect(i).negate(),v.add(d),f.extractRotation(b.matrixWorld),M.set(0,0,-1),M.applyMatrix4(f),M.add(T),w.subVectors(d,M),w.reflect(i).negate(),w.add(d),o.position.copy(v),o.up.set(0,1,0),o.up.applyMatrix4(f),o.up.reflect(i),o.lookAt(w),o.far=b.far,o.updateMatrixWorld(),o.projectionMatrix.copy(b.projectionMatrix),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(o.projectionMatrix),g.multiply(o.matrixWorldInverse),g.multiply(c.matrixWorld),u.setFromNormalAndCoplanarPoint(i,d),u.applyMatrix4(o.matrixWorldInverse),r.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const a=o.projectionMatrix;x.x=(Math.sign(r.x)+a.elements[8])/a.elements[0],x.y=(Math.sign(r.y)+a.elements[9])/a.elements[5],x.z=-1,x.w=(1+a.elements[10])/a.elements[14],r.multiplyScalar(2/r.dot(x)),a.elements[2]=r.x,a.elements[6]=r.y,a.elements[10]=r.z+1-j,a.elements[14]=r.w,c.visible=!1;const D=e.getRenderTarget(),F=e.xr.enabled,A=e.shadowMap.autoUpdate,E=e.outputColorSpace,H=e.toneMapping;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.outputColorSpace="srgb-linear",e.toneMapping=t.NoToneMapping,e.setRenderTarget(y),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(_,o),e.xr.enabled=F,e.shadowMap.autoUpdate=A,e.outputColorSpace=E,e.toneMapping=H,e.setRenderTarget(D);const W=b.viewport;W!==void 0&&e.state.viewport(W),c.visible=!0},this.getRenderTarget=function(){return y},this.dispose=function(){y.dispose(),c.material.dispose()}}dispose(){throw new Error("Method not implemented.")}};h(P,"ReflectorShader");let R=P;R.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
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

		}`};exports.Reflector=R;
