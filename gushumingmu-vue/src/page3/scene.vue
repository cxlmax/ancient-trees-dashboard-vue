<script lang="ts" setup>
/** 720全景 **/
import { storeToRefs } from 'pinia'
// @ts-ignore
import { ComponentRefs } from '@shjjs/visual-ui'
import { usePageStore } from '@/commons/stores/pageStore'

const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)

/** 配置参数 */
const sceneOption = {"default":{"controls":{"rotate":false,"top":false,"left":false,"shrink":false,"bottom":false,"right":false,"audio":false,"magnify":false,"scene":false,"mouseTipShow":false},"draggable":true,"firstScene":"scene1","autoLoad":true,"audio":{"volume":50,"src":"","loop":true,"autoplay":true},"autoRotate":0,"keyboardZoom":true,"mouseZoom":true,"showControls":false,"autoRotateInactivityDelay":5000},"scenes":{"scene1":{"preview":"","hotSpots":[{"targetPitch":0,"scale":true,"type":"info","targetHfov":100,"yaw":9.905860919600935,"div":{},"draggable":true,"cssClass":"custom-hotspot","name":"作者","sceneId":"","id":"gkMXHSpcZ8gvQDc9BdaiQ","pitch":4.819269763922029,"text":"此图片由墨竹提供\\n如需支持请联系17710245279","targetYaw":0,"customCss":{"iconHeight":30,"iconWidth":30,"icon":"https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/vr-scene/default/zz.jpg","type":"image"},"customTooltipCss":{"border":{"color":"#000","show":false,"width":1,"type":""},"padding":{"top":0,"left":0},"shadow":{"color":"","show":false,"x":0,"y":0,"value":0},"background":{"color":"#000000b3","show":true},"fontStyle":{"fontFamily":"","color":"#fff","fontSize":12,"align":"center","fontStyle":"normal"}}}],"maxHfov":120,"maxYaw":180,"maxPitch":90,"minYaw":-180,"label":"场景01","type":"multires","yaw":58.8272750477048,"cover":"https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/vr-scene/default/cover.png","minPitch":-90,"minHfov":50,"hfov":100,"sceneType":"image","pitch":-26.526940004107235,"multiRes":{"maxLevel":3,"path":"/%l/%s%y_%x","extension":"jpg","fallbackPath":"/fallback/%s","basePath":"https://lganv-1304359499.cos.ap-beijing.myqcloud.com/lg_cos_static/system/scene/vr-scene/default/multires","tileResolution":512,"cubeResolution":1952}}}}

/** 数据源 */
const sceneSources = [{"name":"柱体数据","id":"jk216","source":{"mapping":[{"mapping":"name","name":"name","label":"名称","type":"string","status":false},{"mapping":"adcode","name":"adcode","label":"行政区划代码","type":"number","status":false},{"mapping":"coords","name":"coords","label":"经纬度","type":"array","status":false},{"mapping":"value","name":"value","label":"值","type":"number","status":false}],"static":[{"adcode":110000,"name":"北京市","value":50,"coords":[114.3,31.09]},{"adcode":120000,"name":"天津市","value":112,"coords":[112.81,30.4]},{"adcode":130000,"name":"河北省","value":31,"coords":[112.5,32.04]},{"adcode":140000,"name":"山西省","value":42,"coords":[111.09,32.7]},{"adcode":150000,"name":"内蒙古自治区","value":87,"coords":[111.49,30.67]},{"adcode":210000,"name":"辽宁省","value":45,"coords":[109.78,30.33]},{"adcode":220000,"name":"吉林省","value":56,"coords":[114.91,29.95]},{"adcode":230000,"name":"黑龙江省","value":21,"coords":[114.29,29.75]},{"adcode":320000,"name":"江苏省","value":61,"coords":[115.49,30.85]},{"adcode":330000,"name":"浙江省","value":85,"coords":[112.39,30.48]},{"adcode":420000,"name":"湖北省","value":53,"coords":[114.298572,30.584355]}],"isAutoUpdate":false,"autoUpdateTime":60,"type":"static"}}]

/** 全局事件 */
const globalEvent = currentPage.value.globalEvent

</script>
<template>
    <div class="shj-scene">
        <!-- 使用@shjjs/visual-ui全局组件，basic-option暴漏所有参数可修改，sources为指定数据源 -->
        <zv-scene-vr
            :ref="ComponentRefs.registerRef('scene-vr-5')"
            :basic-option="sceneOption"
            :sources="sceneSources"
            :use-events="globalEvent"
        ></zv-scene-vr>
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