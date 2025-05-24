<template>
  <div class="tree-distribution-container">
    <!-- 使用绝对定位的元素，相对于父容器定位 -->
    <div class="distribution-item item-1">
      <div class="item-value">328</div>
      <div class="item-label">银杏</div>
    </div>
    <div class="distribution-item item-2">
      <div class="item-value">256</div>
      <div class="item-label">樟树</div>
    </div>
    <div class="distribution-item item-3">
      <div class="item-value">195</div>
      <div class="item-label">榕树</div>
    </div>
    <div class="distribution-item item-4">
      <div class="item-value">501</div>
      <div class="item-label">其他</div>
    </div>
    <!-- 中心图形 -->
    <div class="center-circle">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑可以在这里添加
</script>

<style scoped>
.tree-distribution-container {
  width: 100%;
  height: 100%;
  position: relative; /* 创建一个定位上下文 */
}

/* 绝对定位的元素，相对于父容器定位 */
.distribution-item {
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(0, 180, 255, 0.2);
  border: 1px solid rgba(0, 180, 255, 0.6);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.distribution-item:hover {
  transform: scale(1.1);
  background: rgba(0, 180, 255, 0.4);
}

.item-1 {
  top: 20%;
  left: 20%;
}

.item-2 {
  top: 20%;
  right: 20%;
}

.item-3 {
  bottom: 20%;
  left: 20%;
}

.item-4 {
  bottom: 20%;
  right: 20%;
}

.item-value {
  font-size: 20px;
  font-weight: bold;
  color: #00b4ff;
}

.item-label {
  font-size: 14px;
  color: #7aceff;
  margin-top: 5px;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: rgba(0, 180, 255, 0.1);
  border: 2px solid rgba(0, 180, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  width: 60px;
  height: 60px;
  background: rgba(0, 180, 255, 0.2);
  border: 1px solid rgba(0, 180, 255, 0.7);
  border-radius: 50%;
}
</style>
