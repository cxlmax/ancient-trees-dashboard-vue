"use strict";var y=Object.defineProperty;var g=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>g(e,typeof t!="symbol"?t+"":t,n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("vue"),w=require("echarts"),v=require("nanoid"),f=require("../../commons/plugins/event/index.js"),b=require("../../commons/plugins/datasource/index.js");function E(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const c=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const C=E(w),D=(e,t,n)=>{const c=d.ref(),s=d.ref(!1);class p{constructor(){u(this,"_iframe");u(this,"isChartInitialized",!1);this._iframe=c.value}fastEval(r){const i=this._iframe.contentWindow.document.getElementsByTagName("head")[0],a=this._iframe.contentWindow.document.createElement("script");a.setAttribute("type","text/javascript");const o=this._iframe.contentWindow.document.createElement("style");o.innerHTML=`
            *{
                margin:0;
                padding:0;
            }
            body, html {
                height:100%;
                overflow: hidden;
                background-color: transparent;
            }
            #renderDom {
                width:100%;
                height:100%;
                background-color: transparent;
                outline: none !important;
            }
        `,a.innerHTML=`
        try {
            ${r};
        } catch(e) {
            handleException(e);
        }`,i.innerHTML="",i.appendChild(o),i.appendChild(a)}async compileAndRunAsync(r){try{if(r.includes("window.")||r.includes("parent.")||r.includes("top."))return;let i="";s.value=!0;const a=this._iframe.contentWindow;let o=a.document.getElementById("renderDom");if(o||(o=a.document.createElement("div"),o.id="renderDom",a.document.body.appendChild(o)),a.echarts=C,a.renderDom=o,!r)return;i+=`
                    window.initFunction = async function() {
                        if (!window.myChart) {
                            window.myChart = echarts.init(renderDom, null, { renderer: 'svg' });
                        }
                        window.option;
                        ${r}
                        option && myChart.setOption(option, true); // 合并选项
                    }
                `;try{this.fastEval(i)}catch{}await a.initFunction(),this.isChartInitialized=!0,s.value=!1}catch{s.value=!1}}}const m=h=>{b.SHJDatasourceV2.parse({tId:v.nanoid(),sources:t,callback:({data:r})=>{try{f.SHJParseEvent.parseEvents(n,"dataListener",r);const i=`var echartsData = ${JSON.stringify(r[0].data[0].echartsData)};`;l.value.compileAndRunAsync(i+`
`+h)}catch{f.SHJParseEvent.parseEvents(n,"dataListener",null)}}})},l=d.ref();return d.onMounted(()=>{l.value=new p,m(e.code)}),{iframeRef:c,loadingStatus:s,renderingComponent:l,initEcharts:m}};exports.useEcharts=D;
