<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
/** 导入场景 */
import bgScene from './scene.vue'
/** 导入当前页面基础信息 */
import config from './config.json'
import { usePageStore } from '@/commons/stores/pageStore'
import { DataSourceUtils} from "@shjjs/visual-ui"
import { useAutoSize1} from '@/commons/hook/useAutoSize'
/** 导出工具类，包含页面JSON处理，初始化变量，执行事件，图层属性动态渲染等 */
import { execEvent, execStatesEvent, initVariableDataValue, layerRenderStyles1, layerRenderStyles2, layerRenderStyles3, findLayerUseState } from '@/commons/utils/utils'
/** 导入页面组件和图层事件 */
import ZvTextRealTimeVeRh from './components/zv-text-real-time-VeRh/index.vue'
import event_oZGGqR from './events/event_oZGGqR'
import ZvTextOverNumberUpDC from './components/zv-text-over-number-UpDC/index.vue'
import ZvTextOverNumberBVaf from './components/zv-text-over-number-BVaf/index.vue'
import ZvTextOverNumberxHCV from './components/zv-text-over-number-xHCV/index.vue'
import ZvTextOverNumberLICv from './components/zv-text-over-number-LICv/index.vue'
import ZvTextOverNumberBnvQ from './components/zv-text-over-number-BnvQ/index.vue'
import ZvTextOverNumberKRrM from './components/zv-text-over-number-KRrM/index.vue'
import ZvTextOverNumberebZW from './components/zv-text-over-number-ebZW/index.vue'
import ZvChartLineSmoothAreafjvd from './components/zv-chart-line-smooth-area-fjvd/index.vue'
import ZvChartBarRankcLAz from './components/zv-chart-bar-rank-cLAz/index.vue'
import ZvChartPieBasicqMnL from './components/zv-chart-pie-basic-qMnL/index.vue'
import ZvChartPieBasictyKg from './components/zv-chart-pie-basic-tyKg/index.vue'
import ZvTextOverNumberqIXO from './components/zv-text-over-number-qIXO/index.vue'
import ZvTextOverNumberjvWW from './components/zv-text-over-number-jvWW/index.vue'
import ZvTextOverNumberkdOx from './components/zv-text-over-number-kdOx/index.vue'
import ZvTextOverNumbervWoK from './components/zv-text-over-number-vWoK/index.vue'
/** 动态自适应分辨率 */
const { pageRef, transform } = useAutoSize1(2559.9, 1080, false)
/** 页面加载状态 */
const pageLoading = ref<boolean>(true)
/** 页面基础信息存储 */
const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)
/** 初始化页面基础信息 */
const init = () => {
pageLoading.value = true
pageStore.setCurrentPage(config)
/** 设置API环境*/
DataSourceUtils.setEnvironments(config.environments)
pageLoading.value = false
}
/** 初始化 */
onMounted(() => init())
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
                <div class="shj-page-content" :style="{ transform }" v-if="!pageLoading">
                <bg-scene></bg-scene>
                <div class="layer-wrap layer-wrap_opzlMF" id="VRXAR2WwOduBxmaYmrLt">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                <div class="layer-wrap layer-wrap_KKAiQw" id="kqohPhMiIhNrZDjMgIiu">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                    <div class="layer-wrap layer-wrap_bgRDVP" id="0Ydhp2SBsLFJgMI4kZMJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-agzV" :content="`古树名木智慧监测系统`">古树名木智慧监测系统</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VsWtsp" id="E5xNSuEIb4Fc3x16xolY">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-EOmE"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cQKdAj" id="Wedn20J4dOKgwsKWXYjJ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-yllX"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Phuynd" id="yUGvwWnYPfoCiKVgPPfq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Vuqo"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_alFgNu" id="Y6xLvLFylllLsPAyDxzx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YBjL"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NsfFxD" id="brgwBIv6HNMQNwDVUJrI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZJME"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KTtqaA" id="n0was9xC6yunNhrTjDez">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-FcOA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rIYDbz" id="JfiF5BLlPYU1Q7yNqfwS">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-sXZi"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iDeNhv" id="89nb3zpUXFvW6cx0pxy0">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -37, -33)` }"
                        >

                    <div class="layer-wrap layer-wrap_FHqezJ" id="wLP32K311HjBleTAspkr">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-wRQq">晴  25℃   湖南省长沙市</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SuPUOD" id="kYmVME3pMT8ywemSHfkQ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimeVeRh />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_uqBGkK" id="fV6tqtabSqKhxUVCAJnG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-FONB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wSYTBH" id="OGxsKnOhv7hEBEyfGVyp">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2, -1013)` }"
                        >

                <div class="layer-wrap layer-wrap_NvGtEe" id="UVUjLDufxVj41Ker9DrO">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1044, -1026)` }"
                        >

                    <div class="layer-wrap layer-wrap_fRsOYv" id="67lTXnuF7CsceuFTPY30">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-qPWr">数据大屏</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yTTLzH" id="dcIGpN4lgFHpwl8D7RIj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-KufB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_oZGGqR" id="rkNqDYMGpPRVftC8Nn8X">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1309, -1026)` }"
                        >
                                <div
                                    class="group-event"
                                    :style="{
                                        transform: `matrix(1, 0, 0, 1, 1309, 1026)`,
                                        width: '175px',
                                        height: '39px',
                                    }"
                                     @click="execEvent(event_oZGGqR, 'click', $event)"
                                >
                                </div>

                    <div class="layer-wrap layer-wrap_pOsSZy" id="OlUgSljtm6lx687wdPNE">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-JJuq">古树详情</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FIkNDF" id="PTky5yETMbLJJkMMBQc8">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uZBM"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PJzJfl" id="NAk4PlpFFbr1veovbpB6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-cdFy"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_zEqitO" id="N5FGUZupKVoIAYY1b8iA">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1961, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_LeAmZj" id="UqdX2BlMTDyPZci7YJE4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -87)` }"
                        >

                <div class="layer-wrap layer-wrap_vLQXBc" id="Dt0mf2GXhI8xxJi5bYVh">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2128, -155)` }"
                        >

                <div class="layer-wrap layer-wrap_wEEdMC" id="cBMFF8aL_7LPmXevD8W7">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2130, -329)` }"
                        >

                    <div class="layer-wrap layer-wrap_zTvTDS" id="6wfPIoX36EsDLJcQYWXe">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-sBOv"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BlkWzb" id="GdGlr7IPKwBgfPW_7Oxs">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2130, -333)` }"
                        >

                    <div class="layer-wrap layer-wrap_qBBwGl" id="OAB6gPw7zGehaNt-3D4O">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-cBJq"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_suSlNm" id="MMgQhsMmipJ8ASIhBvVP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-pQXU"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_nNKSvc" id="avIwNfR-eyyckTqrUiMr">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2261, -329)` }"
                        >

                <div class="layer-wrap layer-wrap_tWpaKQ" id="tkJuEA9anFct7xKI6bor">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2272, -329)` }"
                        >

                    <div class="layer-wrap layer-wrap_GrUbqr" id="PbACrPoDlL9Qj-bOzxmj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberUpDC />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HfAbbt" id="SZkmsRaQ6dNTV0rqUnDR">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-UJuA">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iaSEXo" id="sMbfIcrV_-oKI5elbiSb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-yBlF">多光谱检测仪
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xTBMRT" id="YicdJpmLMWoVffPcNVtl">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-iZho"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_rAYuCu" id="JgWemGMfAwSixuyxKa5l">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2276, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_UnCMPu" id="EFIr17njXDqyTfG3rdeF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gBMp"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NsxBsV" id="VXDUd1zy99ohDXMMPXs7">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2276, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_VGJPMN" id="YAKEx80xM6ZEWCpvPoBl">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YjlZ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MytUfM" id="Oi6WuFNVQ84QkENkYyOG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JmNJ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_IwdQFJ" id="DwlREHhFJWPPwsRYIlE_">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2410, -251)` }"
                        >

                <div class="layer-wrap layer-wrap_oiuBKZ" id="ArDgoUBjSyYSKt22hwYR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2422, -251)` }"
                        >

                    <div class="layer-wrap layer-wrap_YkUOVE" id="GUpAi19efwZBAKAGhMJK">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberBVaf />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RruPfq" id="NAfZpOe_akHU4uQfq0_6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ryGz">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WpCqmj" id="mdcPaqHfDUCIIsWplyyk">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-OoQQ">土壤监测
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lfnQqD" id="-JB1zLZ9sJ7OpqWpZPbU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PIiQ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_LduycY" id="0zazAFtFfsbzYy5CtmRP">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2272, -155)` }"
                        >

                    <div class="layer-wrap layer-wrap_WeEyvx" id="qD1D3-UBz5af87Y83y4v">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WMCv"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_DmmVYs" id="e8X0BTTfVl2JIyUfV0wP">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2272, -155)` }"
                        >

                    <div class="layer-wrap layer-wrap_jAlHwc" id="_iAC_FQL6_PZTX8m6Lkc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uBXl"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ULutsi" id="29KPPn5tISW50IdmXnz4">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GffT"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NpRnYO" id="rkygS3f9kqnQuW8y5nyG">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2407, -158)` }"
                        >

                <div class="layer-wrap layer-wrap_ZPQOEd" id="7UNIv98BJwMb7ckD45Ha">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2419, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_yWbpfg" id="O-g_wI7LD1wVflgX2ghG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberxHCV />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UDDilS" id="8KihfYvwMC_DaK0XBOVA">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-vEmI">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xBXJOr" id="UKub5N801UtNXqkCUYCH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-TVAz">诱捕器
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PMQPSP" id="xSd7ryS3JKubwrvmyFFE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ixHk"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KSUSxX" id="SQ_ZgWgU4lx98HWUi1Eb">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2128, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_yIarEb" id="1Emo_YFvLoBexhFn_aCw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Faxv"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_FRrvfL" id="i766LKXAk1oNy8oTC3lQ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2128, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_YOFMDo" id="aUBFdDjZN6bPlY1W0pLw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QIvA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_IIVqwC" id="_wP2XBhXWSDO7TTcuS2N">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Xfdr"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_YxAkFy" id="pEapwGc-Mgg-sSOa65f1">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2262, -251)` }"
                        >

                <div class="layer-wrap layer-wrap_vzHVPp" id="0aFrBn1TojDzbD3wjLtC">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2274, -251)` }"
                        >

                    <div class="layer-wrap layer-wrap_TrkPsb" id="REt8Acr5wgyZXkSYmjOe">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberLICv />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jUYHBT" id="u7cwatCtIeov_aj0OTzC">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-JXwm">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NAxITM" id="lB8NLF6jBDKuCoAbmG9w">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-dWkl">倾角传感器</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_venuxD" id="XASrM2fKb2xqlAF7bLVM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TBig"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bSNCgc" id="avrM7ES49daYqCMLyEPd">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2128, -155)` }"
                        >

                    <div class="layer-wrap layer-wrap_cotAJA" id="QtdX3JIeUjav6Kil8yRi">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TeUd"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_kyygEZ" id="3rG0le8zx6wn3LONwGXn">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2128, -155)` }"
                        >

                    <div class="layer-wrap layer-wrap_iGaDOI" id="yZvj78awIIsXN8N4dmAR">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ildV"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qVfhjZ" id="EtT9k1LKbgRtAdoHvi5w">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-hnuJ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_MZNeqN" id="AlLmkHwzNPjYdl6e1DRa">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2262, -158)` }"
                        >

                <div class="layer-wrap layer-wrap_pUGolr" id="McB25dV0kUME2VABFPuv">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2274, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_hfcIee" id="lNBAj7tiyQ1pOkrfe60u">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberBnvQ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MKuwtU" id="mOFOjYEskYHrEsk4i85m">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-VsCw">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wSrWcY" id="IIyPJQg7gi3nx4paxH6x">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EIJW">气象监测站</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UGGSdf" id="0LXWIOnsJO2pazC4OIGE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VWAz"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bkEtVv" id="0CJ-6rmTdyDzYfs0TcEE">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1986, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_LOOoPW" id="Tt5v-5IUgfB8EFLvYqX3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberKRrM />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SmNAfP" id="s6YvGHC8dm-P8y4VoVZN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WRlI"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_YWuzwq" id="HmK2e3SPSjtGSY8ym8Ex">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1987, -278)` }"
                        >

                    <div class="layer-wrap layer-wrap_YRMSoe" id="kDe775rj6HLiENMcle7G">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-COxr"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cmbGHk" id="ze0ImyT49Frjo1Kres71">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberebZW />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yvnPlJ" id="0l5FDXIA1bgZA3r5COSK">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-YqDa">在线设备</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kjKbaV" id="w7H_liyGZ6vD46YhCFFn">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-IaGR">离线设备</p>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TJvOtP" id="CJqO2ExHOfjJWxquyBvJ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_hJsEAb" id="EyVUcLMb6mqQ4gv2b1cO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XvBJ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xBlOHd" id="3L51TrqDXWAawZAWXTk9">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-sKhF" :content="`IoT Device​​`">IoT Device​​</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_aRjLPU" id="vBwYe7aRCAbhcbyX4X33">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-vZbg" :content="`物联设备`">物联设备</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bDvrXc" id="Y3Km8nkDn7o2NuKjWBGZ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                <div class="layer-wrap layer-wrap_pyRcFh" id="1Bz3b_uSk93Othrx-fKS">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2015, -796)` }"
                        >

                    <div class="layer-wrap layer-wrap_XjsBgi" id="ihUySGjd7ZmbZg7OyJ3U">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-UGNL"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_UkLqZn" id="IKY9x_N9J1rJtmmWbYu1">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2019, -984)` }"
                        >

                    <div class="layer-wrap layer-wrap_zbYmik" id="mBbL7nve2sgzLRxHyI3R">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TSdd"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_aGdERd" id="ZS9snbOBf3KWOkiJCqcM">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-LlFC">时间：2024-04-16  11:26:22 古树编号：895175</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NhdkXk" id="MX51zPv5VDHdmZfmOteZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-xgHa">发现树干非法刻划（深度3mm，面积20cm²）</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qfEvdg" id="uqr1LjjFIY_kV0PHl9mz">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-yLPr"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_UxUaXr" id="GVu8KoUznlkbg5HbTO-Z">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2015, -888)` }"
                        >

                    <div class="layer-wrap layer-wrap_zimTvg" id="SkXucbXabp5vF0eCAaIb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mmqM"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_pIXOsx" id="RzgBWmBjq7nhxyCupCuq">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-uPuO">时间：2024-04-18  11:26:22 古树编号：117575</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vlraLi" id="Bu0gK7WY09vKujgn-iz0">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-acut">监测到松材线虫在主干形成层扩散（感染面积15cm²）</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XUNgdj" id="B5h4_2Y3BAf595KR9sWg">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-bEph"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yFsywi" id="YuO5Q-ilCulUExTytYXn">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-oVnK"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_frlNRS" id="7xMOmMebHZhRq1nQ9mDB">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2015, -796)` }"
                        >

                    <div class="layer-wrap layer-wrap_cdRQJj" id="ZWJem--Id3bb_6fmxcyo">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zMyf"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FXecgC" id="9JIkFbH3B_RV4Qkem0cC">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-fNyI">时间：2024-04-28  11:26:22  古树编号：115572</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mDKAJa" id="fgRAYedeMqCaS-oKmoIz">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-qANq">枝干发现介壳虫聚集（密度120只/10cm²）</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_fWIQvZ" id="AT3Vazo9P4ZxXbjKW55k">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QeDH"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_xKIWWf" id="JHi0tos8ey1uB94NiRy8">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                    <div class="layer-wrap layer-wrap_udAGxY" id="e1iosVATuRRZa9Vac99m">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gMvs"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qRQADD" id="Dw9IkqBujlwijjdxXJ8l">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-RyFl" :content="`Risk Warning​`">Risk Warning​</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nuqaEt" id="BKDdrQAXw9T7kL0wUobU">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-uTvE" :content="`风险预警`">风险预警</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TjoQdp" id="7mOiZdDAI8eVW2v2h7Zd">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_VBiYeo" id="3dPOtI4WZgXSxyBJkLm9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartLineSmoothAreafjvd />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_hYDIHZ" id="h3EfBkEh4714Nl2E3LHa">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_wfELBg" id="siWVEL7BwAUfYdRKXMuk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-abwO"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ZQBYUL" id="5HffLbz5qqZA3QvJtEJU">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-AEnQ" :content="` Warning Statistics`"> Warning Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HYfZAL" id="9UYtYmlOVtDwA1eO0QPv">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-iSjb" :content="`预警统计`">预警统计</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XhqtnB" id="XGyADF46vQtO72nG72rJ">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AYfjwc" id="EgwsIbwLLbngkeGAS67R">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_yncaag" id="pt2DMYa0zrqyP6nnCEVI">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -54, -388)` }"
                        >

                    <div class="layer-wrap layer-wrap_MCMgwk" id="oX7hTtalxHpHgrgo85B7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarRankcLAz />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iiGXNy" id="QyAuamjAWOK5k0pwuA4r">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -54, -388)` }"
                        >

                    <div class="layer-wrap layer-wrap_IDriKS" id="T4C2EHyNCa1wAa4arsXr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XcBt"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UiHPlm" id="UDT3fhHdhmIjEvqdBalu">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-NamF" :content="`Regional Statistics`">Regional Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JWvOGp" id="HJ1qbWCQWuCD1SPE6mzL">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-aHnQ" :content="`区域统计`">区域统计</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CemlBc" id="lhex5QGHWNpovlBrvdxc">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -747)` }"
                        >

                <div class="layer-wrap layer-wrap_MVxYpE" id="t7hyMHfvwd4OfCLON5XK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -747)` }"
                        >

                    <div class="layer-wrap layer-wrap_QYQdxQ" id="5REIJR5U3372RgP4g7WG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZstP"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zErhst" id="lPBDFCYP2izrbBKg1tjb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-kPxD" :content="`Categorical Statistics`">Categorical Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mxeTbt" id="9R4SrsQRdMjlBbU4Q6rf">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-KCjq" :content="`树种统计               `">树种统计               </p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_XepPdi" id="gYkvATzO9Mv5dPKpbWVb">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -772)` }"
                        >

                <div class="layer-wrap layer-wrap_JHvGRS" id="v1d7WHmyK5lIiiv953PS">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -175, -856)` }"
                        >

                    <div class="layer-wrap layer-wrap_sHCYfw" id="aY7aaJ6LRqrP9YMsC1TZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kHre"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JELVSH" id="qIaibxPo81VquZC0KTT6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WCxi"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wgpacd" id="UI8sYze2KgVtNCeI3YBD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasicqMnL />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PkVvTl" id="nbsoq6xVenrCdEVie4XG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasictyKg />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_JzYKIi" id="cnp9qbPv4LON1qtveLxi">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                <div class="layer-wrap layer-wrap_FoxQaA" id="iadxo1cTVRFeMPyxBzVF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_qwhgPP" id="wmxXpdykqSEchgSCMSOh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GnoN"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nbauVn" id="tMJFI4dkagSCRtsRCN1F">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-rnWz" :content="`Famous Trees`">Famous Trees</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_pqDbIB" id="klvAjvBTfgJ6uxubftsW">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-nsHG" :content="`古树等级`">古树等级</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iJmKXB" id="dDzrkaOMoImfafhW86GG">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -176)` }"
                        >

                <div class="layer-wrap layer-wrap_prMLuH" id="np_qCeQCjw-_80Db9f5C">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -443, -178)` }"
                        >

                    <div class="layer-wrap layer-wrap_baSsNk" id="b5fystadfxqv8xRI7bDn">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-FZua">一级古树</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_vhDUEl" id="Quu7cj5HQR3lTiNpCEV5">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -444, -316)` }"
                        >

                    <div class="layer-wrap layer-wrap_jevLMK" id="qAAd7Om5ZFs6EJwPnxOa">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-mZCR">三级古树</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wQIjCv" id="8GBkUA3yU5hLA0K0oc6H">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -72, -314)` }"
                        >

                    <div class="layer-wrap layer-wrap_bXeiJS" id="FHCfFZcBFEK6tVhvQGRb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-rOOE">二级古树</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_nPXych" id="QL7FCONGUkzvL9g97TRu">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -176)` }"
                        >

                    <div class="layer-wrap layer-wrap_XxBKkd" id="QJo4z9U4ykFFcsWinH3u">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberqIXO />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wNifZu" id="Sprzbp3kk2v67E-K_X2J">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberjvWW />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jlGOdF" id="GMPTaSNCNO7OsgFmLTFC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberkdOx />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gpusNn" id="L31tiQM54a4luqgMZNlz">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbervWoK />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_uBfKyT" id="SIWGTxm5fSWE7NMMVfVA">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-PlFg">名木
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MBudxm" id="iV4YfeoVNHt1iD7Tq9io">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nqyi"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rZnLjX" id="wY9syXn8BACjUSTzGtQ7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-UcPV"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_YACybF" id="utAUNvMuoPDNVxWnnZAw">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -221, -214)` }"
                        >

                    <div class="layer-wrap layer-wrap_cBrNhn" id="X51P7AQgv0Ham83eOODH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-jahv"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NrXMbv" id="ZRcCeNgAW3L98V5s8m4O">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-pAYw"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QDnbpZ" id="GuX0OY5i9pQp8DAvxJja">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yqQaLo" id="zxGYDj7h3GB9jRa4P4KO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JLGv"></div>
                            </div>
                    </div>
                </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import url(./resources/scss/page.scss);
    @import url(./resources/scss/index.scss);
</style>