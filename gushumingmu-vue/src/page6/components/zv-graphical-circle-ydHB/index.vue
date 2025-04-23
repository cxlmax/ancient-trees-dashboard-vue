<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
/** 导入当前组件的Option */
import option from './option.json'
/** 组件唯一ID */
const id = ref('C2pflBOAZ28qHFaCc4Cp')
</script>
<template>
    <!-- 加载组件 -->
        <zv-graphical-circle :uuid="id"   :basic-option="option" :ref="ComponentRefs.registerRef(id)" />
</template>