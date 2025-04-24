"use strict";var p=Object.defineProperty;var m=(a,i,t)=>i in a?p(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var f=(a,i,t)=>m(a,typeof i!="symbol"?i+"":i,t);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("vue"),g=require("@babylonjs/core");function h(a){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const t in a)if(t!=="default"){const s=Object.getOwnPropertyDescriptor(a,t);Object.defineProperty(i,t,s.get?s:{enumerable:!0,get:()=>a[t]})}}return i.default=a,Object.freeze(i)}const y=h(g),v=a=>{const i=l.ref(),t=l.ref(!1);class s{constructor(){f(this,"_iframe");this._iframe=i.value}fastEval(n){const e=this._iframe.contentWindow.document.getElementsByTagName("head")[0],r=this._iframe.contentWindow.document.createElement("script");r.setAttribute("type","text/javascript");const o=this._iframe.contentWindow.document.createElement("style");o.innerHTML=`
            *{
                margin:0;
                padding:0;
            }
            body, html {
                height:100%;
                overflow: hidden;
                background-color: transparent;
                position: relative;
            }
            #renderCanvas {
                width:100%;
                height:100%;
                background-color: transparent;
                outline: none !important;
                position: absolute;
                inset: 0;
            }
        `,r.innerHTML=`
        try {
            ${n};
        } catch(e) {
            handleException(e);
        }`,e.innerHTML="",e.appendChild(o),e.appendChild(r)}async loadScriptAsync(n){return new Promise(e=>{const r=document.createElement("script");r.src=n,r.onload=()=>{e()},document.head.appendChild(r)})}async compileAndRunAsync(n){try{if(n.includes("window.")||n.includes("parent.")||n.includes("top."))return;t.value=!0;const e=this._iframe.contentWindow;if(e.engine){try{e.engine.dispose(),e.scene.dispose()}catch{}e.engine=null,e.scene=null}delete e.engine,delete e.scene,delete e.initFunction,delete e.canvas;let r=e.document.getElementById("renderCanvas");if(r||(r=e.document.createElement("canvas"),r.id="renderCanvas",e.document.body.appendChild(r)),e.BABYLON=y,!r||(e.canvas=r,!n))return;let o="createDefaultEngine",c="";if(n.indexOf("createEngine")!==-1&&(o="createEngine"),n.indexOf("delayCreateScene")!==-1?c="delayCreateScene":n.indexOf("createScene")!==-1?c="createScene":n.indexOf("CreateScene")!==-1?c="CreateScene":n.indexOf("createscene")!==-1&&(c="createscene"),!c)t.value=!1;else{n+=`
                        window.initFunction = async function() {
                            window.engine = new BABYLON.Engine(canvas, true);
                    `,n+=`

                            if (!engine) throw 'engine should not be null.';`,n+=`

                            engine.runRenderLoop(function () {
                                if(window.scene){
                                    scene.render();
                                }
                            });
                        `,n+=`\r
window.scene = `+c+"();",n+=`

                        }`;try{this.fastEval(n)}catch{}try{await e.initFunction()}catch{}if(!e.engine)return;e.scene,t.value=!1}}catch{t.value=!1}}}const u=l.ref();return l.onMounted(()=>{u.value=new s,u.value.compileAndRunAsync(a.code)}),{iframeRef:i,loadingStatus:t,renderingComponent:u}};exports.useBabaylon=v;
