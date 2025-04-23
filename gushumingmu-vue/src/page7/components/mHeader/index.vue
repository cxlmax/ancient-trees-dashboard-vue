<template>
  <div class="m-header">
    <div class="m-header-wrap">
      <div class="m-header-title">{{ title }}</div>
      <div class="m-header-bottom-line"></div>
    </div>
    <div class="m-header-left" style="color: #fff">
      <slot name="left"></slot>
    </div>
    <div class="m-header-right"><slot name="right"></slot></div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: "可视化智慧监测综合驾驶舱大屏",
  }
});
</script>
<style lang="scss">
.m-header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 2560px;
  height: 108px;
  z-index: 2;
  &:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 2560px;
    height: 180px;
    background: url("~@/assets/images/headerPathLine.png") center no-repeat;
    background-size: contain;
    z-index:9;
    mix-blend-mode: overlay;
  }
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 2560px;
    height: 180px;
    background: url("~@/assets/images/headerPathLine.png") center no-repeat;
    background-size: contain;
    transform: scaleX(-1);
    z-index:9;
    mix-blend-mode: overlay;
  }
  &-wrap {
    // position: absolute;
    // left: 50%;
    // transform: translateX(-50%);
    width: 2560px;
    height: 108px;
    margin: 0 auto;
    background: url("~@/assets/images/header-top-bg.png") center no-repeat;
    background-size: contain;
    text-align: center;
    box-sizing: border-box;
  }

  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 108px;
    color: #fff;
    font-size: 50px;
    letter-spacing: 10px;
    font-family: "优设标题黑";
    // font-family: "阿里妈妈数黑体 Bold";
    background: -webkit-linear-gradient(rgb(255, 255, 255), rgb(104 200 246));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-bottom-line{
    position: absolute;
    left: 50%;
    top: 104px;
    margin-left: -103px;
    width: 207px;
    height: 4px;
    border-radius: 20px;
    background: #FFDF7B;
    // box-shadow:0 0 8px #FFDF7B;
    animation: colorAnimate 1s linear infinite;
  }
  &-left {
    color: #fff;
    position: absolute;
    top: 20px;
    left: 32px;
  }
  &-right {
    color: #fff;
    position: absolute;
    top: 20px;
    right: 32px;
  }
  
}
@keyframes colorAnimate {
  0%{
   opacity: 1;
  }
  100%{
    opacity: 0;
    transform: scale(1.1,5);
  }
}
</style>
