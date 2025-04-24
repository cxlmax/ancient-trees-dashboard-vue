<template>
  <div class="earth-label">
    <canvas id="earth-label"></canvas>

  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from "vue";
import { App } from "./index.js";
import pointIcon from "./icon.png";
import pointIcon2 from "./icon2.png";
import pointIcon3 from "./icon3.png";
let app = null;
// 标签数据
const labelArr = [
  {
    icon: pointIcon,
    name: "树龄",
    value: 516,
    unit: "年",
  },
  {
    icon: pointIcon2,
    name: "保护级别",
    value: 1,
    unit: "级",
  },
  {
    icon: pointIcon,
    name: "树高",
    value: 9,
    unit: "米",
  },
  {
    icon: pointIcon2,
    name: "胸径",
    value: 106,
    unit: "厘米",
  },
  {
    icon: pointIcon3,
    name: "平均冠幅",
    value: 8,
    unit: "米",
  },
];
onMounted(() => {
  nextTick(() => {
    app = new App(document.querySelector("#earth-label"), {
      antialias:false,
      onComplete: () => {
        app.initLabel(labelArr);
      },
    });
  });
});
onBeforeUnmount(() => {
  app && app.destroy();
});
</script>

<style lang="scss">
.earth-label {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  canvas {
    width: 100%;
    height: 100%;
  }

  .total-indicator {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #90d5ff;
    pointer-events: none;
    &-icon {
      width: 28px;
      height: 28px;
    }

    &-label {
      font-size: 14px;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    &-value {
      font-size: 14px;
      font-family: Roboto, Arial, Helvetica, sans-serif;
      color: #afffc3;
      font-weight: bold;
      margin-bottom: 60px;
    }
  }

  .earth-point {
    color: #fff;
    pointer-events: none;
    will-change: transform;
    &-wrap {
      position: relative;
      width: 10px;
      height: 10px;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0.8);
      opacity: 0.2;
      // cursor: help;
      pointer-events: none;

      &.visible {
        opacity: 1;
        transform: scale(1);
      }
    }

    &-text {
      position: absolute;
      bottom: 55px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 110px;
      font-size: 12px;
      font-family: "微软雅黑";
      color: #abccff;
      // background: url('./earth-label2/icon-bg-line.png') right bottom no-repeat;
      // background-size: contain;
      // padding-bottom: 10px;

      .label {
        // will-change: transform;
      }

      .value {
        font-size: 14px;
        color: #2398f1;
        font-family: D-DIN, Arial, Helvetica, sans-serif;
        padding: 0 5px;
        // will-change: transform;
      }

      .unit {
        // will-change: transform;
      }
    }

    &-icon {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
    }

    &-icon-bg {
      position: absolute;
      bottom: 0px;
      left: 50%;
      margin-left: -25px;
      width: 50px;
      height: 50px;
      animation: rotate360 3s linear infinite;
    }
  }
}

@keyframes rotate360 {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(-360deg);
  }
}
</style>
