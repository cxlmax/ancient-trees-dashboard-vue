<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
/** 导入当前组件的Option */
import option from './option.json'
/** 组件唯一ID */
const id = ref('ZjnjbBDcKWDTB0nW0TSo')
</script>
<template>
    <!-- 加载组件 -->
    <div class="hologram-container">
        <zv-commons-product-model :uuid="id" :basic-option="option" :ref="ComponentRefs.registerRef(id)" />
    </div>
</template>

<style scoped>
.hologram-container {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.65;
    filter: brightness(1.2) drop-shadow(0 0 10px #1DAB7E87);
}

.hologram-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 100, 255, 0.05)); */
    pointer-events: none;
    z-index: 1;
}
</style>