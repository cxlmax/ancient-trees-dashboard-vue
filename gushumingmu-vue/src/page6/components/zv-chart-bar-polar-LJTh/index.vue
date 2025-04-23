<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
/** 导入当前组件的Option */
import option from './option.json'
/** 导入当前组件的数据源配置 */
import sources from './sources.json'
/** 组件唯一ID */
const id = ref('Qckre1682Oi7R3Lu95AA')
</script>
<template>
    <!-- 加载组件 -->
        <zv-chart-bar-polar :uuid="id"   :basic-option="option" :ref="ComponentRefs.registerRef(id)" :sources="sources"/>
</template>