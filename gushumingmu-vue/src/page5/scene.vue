<script lang="ts" setup>
/** 空场景 **/
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/commons/stores/pageStore'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'

const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)

/** 配置参数 */
const sceneOption = {"background":{"image":"","color":"#161B24","size":""}}

/** 数据源 */
const sceneSources = []

/** 全局事件 */
const globalEvent = currentPage.value.globalEvent

</script>
<template>
    <div class="shj-scene">
        <!-- 使用@shjjs/visual-ui全局组件，basic-option暴漏所有参数可修改，sources为指定数据源 -->
        <zv-scene-default
            :ref="ComponentRefs.registerRef('scene-default-1')"
            :basic-option="sceneOption"
            :sources="sceneSources"
            :use-events="globalEvent"
        />
    </div>
</template>
<style lang="scss" scoped>
.shj-scene {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
</style>
