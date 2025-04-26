<template>
  <div class="alarm-button-container">
    <button 
      class="alarm-button"
      @click="triggerAlarm"
      :disabled="isAlarming"
      :class="{ 'alarm-active': isAlarming }"
    >
      <span class="alarm-icon">⚠</span>
      <span class="alarm-text">紧急警报</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';

// 报警状态
const isAlarming = ref(false);

// 全局报警遮罩div的ID
const ALARM_OVERLAY_ID = 'global-alarm-overlay';

// 触发报警
const triggerAlarm = () => {
  // 如果已经在报警，不重复触发
  if (isAlarming.value) return;
  
  isAlarming.value = true;
  
  // 创建全屏闪烁遮罩，如果不存在
  let alarmOverlay = document.getElementById(ALARM_OVERLAY_ID);
  if (!alarmOverlay) {
    alarmOverlay = document.createElement('div');
    alarmOverlay.id = ALARM_OVERLAY_ID;
    alarmOverlay.className = 'alarm-overlay';
    document.body.appendChild(alarmOverlay);
  }
  
  // 添加闪烁动画类
  alarmOverlay.classList.add('alarm-flashing');
  
  // 播放警报声音
  const alarmSound = new Audio('/sounds/alarm.mp3');
  try {
    // alarmSound.play();
  } catch (error) {
    console.error('无法播放警报声音:', error);
  }
  
  // 10秒后自动停止警报
  setTimeout(() => {
    stopAlarm();
  }, 10000);
};

// 停止报警
const stopAlarm = () => {
  isAlarming.value = false;
  
  const alarmOverlay = document.getElementById(ALARM_OVERLAY_ID);
  if (alarmOverlay) {
    alarmOverlay.classList.remove('alarm-flashing');
  }
};

// 在组件卸载时清理
onBeforeUnmount(() => {
  const alarmOverlay = document.getElementById(ALARM_OVERLAY_ID);
  if (alarmOverlay) {
    document.body.removeChild(alarmOverlay);
  }
});
</script>

<style scoped>
.alarm-button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.alarm-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #e57373, #c62828);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(183, 28, 28, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.alarm-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(183, 28, 28, 0.6);
}

.alarm-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(183, 28, 28, 0.5);
}

.alarm-icon {
  font-size: 20px;
}

.alarm-active {
  animation: pulse 1s infinite;
  background: linear-gradient(135deg, #c62828, #e57373);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style>
/* 全局样式 */
.alarm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0);
  pointer-events: none;
  z-index: 9998;
  transition: background-color 0.1s ease;
}

.alarm-flashing {
  animation: alarmFlash 0.5s infinite alternate;
}

@keyframes alarmFlash {
  0% {
    background-color: rgba(255, 0, 0, 0);
  }
  100% {
    background-color: rgba(255, 0, 0, 0.3);
  }
}
</style>
