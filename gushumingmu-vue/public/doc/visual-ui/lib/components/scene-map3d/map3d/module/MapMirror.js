"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("three"),i=require("../map/Reflector.js");function l(r){const t=new n.PlaneGeometry(500,500),o={name:"CusReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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
                return  0.9999 * base * blend;
    
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
    
            }`},e=new i.Reflector(t,{clipBias:.003,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:16777215,multisample:0,shader:o});e.material.transparent=!0,e.position.y=0,e.rotateX(-Math.PI/2),r.groundMirror=e,r.groundMirror.visible=r.option.map.mirrorShow,r.scene.add(e)}exports.createMirror=l;
