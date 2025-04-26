<template>
    <div class="shj-app">
        <router-view />
        <alarm-button v-show="showAlarmButton"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AlarmButton from './components/AlarmButton.vue';

// 控制是否显示警报按钮，可以根据需要在特定条件下显示
const showAlarmButton = ref(false);
</script>

<style lang="scss" scoped>
.shj-app {
  height: 100vh;
  overflow: hidden;
}
</style>