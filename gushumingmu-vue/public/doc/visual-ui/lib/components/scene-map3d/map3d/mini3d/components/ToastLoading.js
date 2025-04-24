"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});class t{constructor(){this.toastNode=null,this.init()}init(){if(this.toastNode)return!1;this.toastNode=document.createElement("div"),this.toastNode.classList.add("fixed-loading"),this.toastNode.id="fixed-loading",this.toastNode.innerHTML=`
    <div class="page-loading-container">
      <div class="page-loading"></div>
    </div>
  `,this.toastNode.style.visibility="hidden",document.body.appendChild(this.toastNode)}show(){this.toastNode.style.visibility="visible"}hide(){this.toastNode&&(this.toastNode.style.visibility="hidden")}destroy(){this.toastNode&&document.body.removeChild(this.toastNode)}}exports.ToastLoading=t;
