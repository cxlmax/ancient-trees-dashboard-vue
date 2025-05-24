<script lang="ts" setup>
/** 数据大屏背景场景 **/
import { storeToRefs } from 'pinia'
import { ref, onMounted, onBeforeUnmount } from 'vue'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
import { usePageStore } from '@/commons/stores/pageStore'
import warningMonitor from '@/commons/services/WarningMonitor'

const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)

// 保存原始值，用于警报解除时恢复
const originalValues = {
  warningStatus: false,
  dataValues: {}
};

/** 配置参数 */
const sceneOption = {"backButtonLeft":70,"backButtonBottom":5,"debugger":false,"orbitControls":{"panSpeed":1,"minPolarAngle":0,"maxPolarAngle":75,"enablePan":true,"minDistance":50,"maxDistance":300,"enableDamping":true,"enableZoom":true,"zoomSpeed":1},"widgets":[{"defaultColor":"#212121","name":"古树数量","labelStyle":{"fontFamily":"SHJ-SourceHanSansSC-Regular-otf","top":50,"color":"#FFFFFF","left":75,"gap":16,"colorStyle":{"borderRadius":0,"width":14,"height":6},"fontSize":12,"fontStyle":"normal","direction":"column"},"_sourceId":"6acha","rules":[{"min":1000,"color":"#FF0000","max":10000,"label":"预警"},{"min":0,"color":"#7FF08C","max":100,"label":"0-10万"},{"min":101,"color":"#5FD96E","max":201,"label":"10-50万"},{"min":202,"color":"#3EB049","max":302,"label":"50-100万"},{"min":303,"color":"#289E35","max":600,"label":"100万+"}],"id":"ieibd","type":"regionalLevel","opacity":0.5,"isHide":false}],"scene":{"geojson":"","translateZ":0,"isDrilling":true,"defaultMapAdcode":100000,"background":"#020A07","translateY":0,"translateX":0,"defaultMap":"china","x":5,"y":0,"z":0,"isBackground":true},"light":{"pointLight2":{"intensity":60,"color":"#ffffff","distance":30,"show":true,"x":-4,"y":8,"z":43},"ambientLight":{"intensity":1,"color":"#FFFFFF","show":true},"directionalLight":{"intensity":2,"color":"#ffffff","show":true,"position":{"x":-22,"y":128,"z":-20},"target":{"position":{"x":0,"y":0,"z":0}}},"pointLight1":{"intensity":60,"color":"#ffffff","distance":24,"show":true,"x":1,"y":19,"z":7}},"backButtonCss":{"backgroundColor":"#35743F","borderColor":"#289E35","fontFamily":"SHJ-SourceHanSansSC-Regular-otf","color":"#FFFFFF","borderRadius":4,"backgroundImage":"","borderWidth":1,"backgroundSize":"cover","fontSize":12,"fontStyle":"normal","borderStyle":"solid","fontWeight":600},"backButton":true,"particle":{"material":{"size":10,"color":"#FFFFFF","opacity":0.3},"num":20,"show":true,"range":200,"dir":"up","speed":0.1},"floor":{"quan":{"color":"#007BFF","show":true},"gaoguang":{"color":"#394D41","show":true},"gridRipple":{"diffuseWidth":20,"color":"#566A78","diffuseOpacity":0.7,"alphaMap":"map3d/gridRippleAlphaMap.png","repeat":100,"show":true,"diffuseSpeed":20,"diffuseColor":"#566A78","opacity":0.2,"map":"map3d/gridRippleMap.png"},"rotateBorder":{"rotateBorder1":{"size":1.18,"color":"#445057","texture":"map3d/rotateBorder1Map.png","show":true,"rotateSpeed":1.5,"opacity":0.5},"rotateBorder2":{"size":1.12,"color":"#445057","texture":"map3d/rotateBorder2Map.png","show":true,"rotateSpeed":-4,"opacity":0.6}}},"camera":{"position":{"x":0,"y":127,"z":105},"target":[0,0,0]}}

/** 数据源 */
const sceneSources = ref([])

/** 全局事件 */
const globalEvent = currentPage.value.globalEvent || []

/**
 * 处理警报状态变化
 * @param {boolean} isWarning - 是否处于警报状态
 */
const handleWarningChange = (isWarning) => {
  console.log('警报状态变化:', isWarning ? '警报中' : '正常');
  originalValues.warningStatus = isWarning;
  
  // 在这里可以添加警报状态变化的处理逻辑
  // 例如修改数据源、触发动画等
}

// 组件挂载时启动监控服务
onMounted(() => {
  // 注册警报状态变化回调
  warningMonitor.onWarningChange(handleWarningChange);
})

// 组件卸载时清理资源
onBeforeUnmount(() => {
  // 移除警报状态变化回调
  warningMonitor.offWarningChange(handleWarningChange);
})
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
