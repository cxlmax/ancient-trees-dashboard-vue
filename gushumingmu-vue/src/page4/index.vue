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
import ZvCommonsProductModelYeOg from './components/zv-commons-product-model-YeOg/index.vue'
import ZvInteractionSelectXaDX from './components/zv-interaction-select-XaDX/index.vue'
import ZvTextRealTimePMgL from './components/zv-text-real-time-PMgL/index.vue'
import event_KvlzxX from './events/event_KvlzxX'
import ZvTextOverNumberackA from './components/zv-text-over-number-ackA/index.vue'
import ZvTextOverNumberAWzd from './components/zv-text-over-number-AWzd/index.vue'
import ZvTextOverNumbercyAx from './components/zv-text-over-number-cyAx/index.vue'
import ZvTextOverNumberrqRr from './components/zv-text-over-number-rqRr/index.vue'
import ZvTextOverNumbervfxF from './components/zv-text-over-number-vfxF/index.vue'
import ZvTextOverNumberpBOT from './components/zv-text-over-number-pBOT/index.vue'
import ZvTextOverNumberYPII from './components/zv-text-over-number-YPII/index.vue'
import ZvMediaVideoDynamicUelC from './components/zv-media-video-dynamic-UelC/index.vue'
import ZvChartBarPolarGuZc from './components/zv-chart-bar-polar-GuZc/index.vue'
import ZvChartBarHorizontalpXST from './components/zv-chart-bar-horizontal-pXST/index.vue'
import ZvTextTextDynamicvOdx from './components/zv-text-text-dynamic-vOdx/index.vue'
import ZvChartOtherRadarAyVL from './components/zv-chart-other-radar-AyVL/index.vue'
/** 动态自适应分辨率 */
const { pageRef, transform } = useAutoSize1(2560, 1080, true)
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
                    <div class="layer-wrap layer-wrap_xPvNqU" id="ZjnjbBDcKWDTB0nW0TSo">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvCommonsProductModelYeOg />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_IcskXn" id="AaWIHgZJJGgVlSg51-6O">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                <div class="layer-wrap layer-wrap_DMeFyS" id="1ls7VM4yd7rSu8eEQDzy">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                    <div class="layer-wrap layer-wrap_QRewkS" id="0s1XVWA4ZZs2y_Sm114E">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-MukG" :content="`古树名木智慧监测系统`">古树名木智慧监测系统</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jMwYrY" id="vVQNBVrdBVJVGf8HhO9I">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvInteractionSelectXaDX />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NfYFel" id="uoIJX82PdmdFlXQVyCr3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Dzce"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_YewNab" id="y1cgJqqAGnDrfYMQyIoZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TZka"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XOFKkN" id="Fk_pG7OOTK3pK2U84NPH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nKOG"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cYHqzm" id="BWc8uqvOn7D4-A9xzhHX">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-aZGT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CKRFVx" id="L_HKV0PFdpeJaLUc-vXA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-iYHC"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oaBTOK" id="Wq-ghwABlKjkodB1ZVuN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-llnf"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xrcyeQ" id="PLO6bdhSJrT7gjid38Bn">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xbaE"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bkPDuR" id="KNuDf5P1GG5Z0kytj58E">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -37, -33)` }"
                        >

                    <div class="layer-wrap layer-wrap_aqLQyf" id="zsjN7AW9tVy3SLi1B3hX">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-VOxq">晴  25℃   湖南省长沙市</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BqluNo" id="5DkuZR0BAkh_WJqiow9L">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimePMgL />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tofzcI" id="NJ-h_naUnBPNAxxEPA09">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-cyzC"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_hYmqGD" id="3KIAOjOvrWJlbNezfaHg">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2, -1013)` }"
                        >

                <div class="layer-wrap layer-wrap_KvlzxX" id="upsnx4W7qxdkJW-g6BGR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1044, -1026)` }"
                        >
                                <div
                                    class="group-event"
                                    :style="{
                                        transform: `matrix(1, 0, 0, 1, 1044, 1026)`,
                                        width: '175px',
                                        height: '39px',
                                    }"
                                     @click="execEvent(event_KvlzxX, 'click', $event)"
                                >
                                </div>

                    <div class="layer-wrap layer-wrap_aruEIi" id="UCHO15A59tij5PqOeRf0">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-oIOb">数据大屏</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wJrQcZ" id="urPYDvgIl0n42xqES4H5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vvxV"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_IPkuIa" id="S9aqL-msYq6nbGeXyrzN">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1309, -1026)` }"
                        >

                    <div class="layer-wrap layer-wrap_JhPUiE" id="q1qQDqdR97EF26LGZsUM">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-WVuF">古树详情</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WhdScw" id="QovIzPykXNG5z_YzyGjC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-hMsE"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tFbOQn" id="Xvg85qP_CG6zxgGn__X3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-BECL"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_OOWcgj" id="TQB3UsnI7uBvsUxehmsE">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_wvTdSg" id="xkmZoEt8Bqmk2BDz5N5z">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -87)` }"
                        >

                <div class="layer-wrap layer-wrap_cypMJe" id="gVQ_vF7u2ZFR62YkRfWX">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }"
                        >

                <div class="layer-wrap layer-wrap_xVOkNt" id="KSIqhY-_7y7AP2IUxhVM">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2259, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_yPJCxg" id="dJxp498UiOgSQNtydHGI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-yNzi"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TVxqiE" id="GDOwQeit3prmVkBvZIX9">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2259, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_KAxdqF" id="r93wJO23NGqj1_x9bGo_">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ihGb"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KVIOQV" id="qVhHkzT7KMQ3v8US3vbd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-weaC"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AZWSkZ" id="fYOWdQv_UQDlK7XSG2eF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2393, -252)` }"
                        >

                <div class="layer-wrap layer-wrap_FoZfsq" id="o3MRLSZVAiVHmLLmvaLe">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2405, -252)` }"
                        >

                    <div class="layer-wrap layer-wrap_XwuoWo" id="nzEVX5WxWl4JrGimq0P8">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberackA />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vFlyUS" id="tti0dhxX9IUd4f_10E3N">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-JsTI">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ePshAc" id="-LleC6FZtPFHRgNKoZSp">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-RNqE">土壤监测
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PUlpBZ" id="ROMI4eAYrrIenkwWRuuL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mdUA"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_MDkZOs" id="Hedi7VAA8ANWJvjyPN6F">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2258, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_fTGRVv" id="I6izPC5rr8NbQ0_ngKv6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vLEL"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ibYZsP" id="NeNwGOcrDiTdE5VmBHNM">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2258, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_ytIZPi" id="39HpN4AQ0ISN8Nf0yM1a">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QOgB"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ErQYgA" id="eBj-cH_X9BUIUgtelSUG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-bjtV"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ngGMUT" id="IXYQg7nC8JDMmj_1NMmH">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2392, -158)` }"
                        >

                <div class="layer-wrap layer-wrap_nVvMoi" id="95bQaR8yHQY9qbgzCd0I">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2404, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_swLRwk" id="e2U350n9VuuadJuzOsQF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberAWzd />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mZFKGq" id="QsOoFHgqZRzTs8X9jzlB">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-paYc">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qSTXmB" id="18ZNzD7fShkkCoHFw5BG">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-WbhU">诱捕器
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OAyRZv" id="oTUUWFzwb_QS7sGGZdSR">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mLmo"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_fazWjw" id="ld8TGjQKu-OD1dUxa3E2">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1944, -328)` }"
                        >

                    <div class="layer-wrap layer-wrap_KoQpDE" id="QPfoAo2_Z_grIQAcEu1Z">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WQwB"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tCVCuf" id="ruYm0ESc4mNb05OXYk3O">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1944, -332)` }"
                        >

                    <div class="layer-wrap layer-wrap_vWUMPs" id="Kt17pGT_PR6ZPd2fJk_7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-lnkJ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dejUNO" id="RHZIqOVQ72QIFlOFcYX9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mlZJ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BhLzVA" id="xUk21n1ZaQG8ZIuD2CII">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2075, -328)` }"
                        >

                <div class="layer-wrap layer-wrap_CofcPF" id="yDX4pc7ibD32nAaFjfge">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2086, -328)` }"
                        >

                    <div class="layer-wrap layer-wrap_EzhLSZ" id="PNsu25G6b5npJwreho2-">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbercyAx />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OOxqFO" id="R58cAbdFUDQ6vW-HDiUZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-pfiU">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_klPFpM" id="_ye9yAO9IyfbBLiaRyTc">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EPnW">多光谱检测仪
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vIXEnY" id="2z_5npt1Qdxz1BatN669">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-wpqz"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_msObwG" id="dH4dxTE3qAX4dNiLEcK9">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2090, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_OFEEal" id="AYS5evUkPclhDbVZWZzc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SrJT"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_RdAEif" id="e9r54mZ9xIM3SUw3O_Ms">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2090, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_nDdsuF" id="FV5yEpVeymN1LgMzKwK2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vujV"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ywYpnA" id="qUqNJZ9S2Bd7e1w0uqc0">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ktFN"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wrYHiR" id="tO-sl33Lih7ZSp1C7s_L">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2224, -250)` }"
                        >

                <div class="layer-wrap layer-wrap_GkEHGs" id="dElukmqWiCXhqT1Ob23b">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2236, -250)` }"
                        >

                    <div class="layer-wrap layer-wrap_zFtZco" id="L97CMRrMUKPCLzSTWzHd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberrqRr />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AXbMsV" id="snkrkYoYnxRG9j5i6J3T">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-oRve">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WaPHut" id="1So7BPPuunYZcD67ob6x">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-hYoh">土壤监测
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Rhrzcu" id="ZEMnngIYkR7g0MgR-vZE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-wPgC"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wMXgYD" id="AXB-UlG_gF125r7d7i85">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2086, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_FHTvKm" id="npk4zSzX3Zs_aoZ_FK1J">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-NUgc"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TZpAFt" id="ytdfsr_HhODFnHM750O0">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2086, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_vCpUjN" id="TUkVb6ujV-NPyYlSCIm5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zpZg"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ItncZo" id="CUMvFf6qP16APncKtMT4">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YLyD"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_fBSRqU" id="AUb7fXmjeIdLBxZHnj--">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2221, -158)` }"
                        >

                <div class="layer-wrap layer-wrap_fujKXh" id="NpTP5Nijj9oPrksfcQua">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2233, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_cFQHmL" id="ghK_8E-d2qjhGDSTOCkM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbervfxF />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AtwBAj" id="j32TIXAY_PucN54GZ9Td">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-OVbd">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iZgwKz" id="yrDxpgHwZBX5LbhDPRy0">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-YmHj">诱捕器
</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xFQKXn" id="Uk5bQntUBS9c_hEiQ3ML">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-miPC"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_sAWQpF" id="NZI6159eQ7kJlPuzlPZK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_HjrawV" id="j7gm2EL6YAIeQT3JrjUx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mAsz"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iRzApY" id="uFpEUkrpYj0C2xBpri8w">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -248)` }"
                        >

                    <div class="layer-wrap layer-wrap_fahITo" id="myxAEOptKIJiYeQlFigM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kptA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yfjNEC" id="lRcIVgs8J8baBRQOC2kn">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uMOK"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KrjQQj" id="eeH6o1MAYKfCTm4w96ln">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2076, -250)` }"
                        >

                <div class="layer-wrap layer-wrap_SypCjv" id="fVicvDYcZvl1ONN8hhFH">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2088, -250)` }"
                        >

                    <div class="layer-wrap layer-wrap_cEcIoW" id="1BjAuv4JfRHuhR3etqGx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberpBOT />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FesmDk" id="wCin_dok7mFoLtQbcGnd">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-uNhz">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NtgGwE" id="CfHFQ2CRwh_57PE__8US">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bFJt">倾角传感器</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RVyYnX" id="t9lslU53qs2m9U0ykVv0">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ibco"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AugjZR" id="bT9zDj88AtQ03A2EoE7W">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_hkzynl" id="iLhTXQaMxSKE2NRTv4Mv">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WUZY"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wlISMo" id="AciWrmlBJKpMCqobYYHy">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_ybkJVM" id="KJTRxmXyccrftfoojNGP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WvdG"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_YKUfqs" id="BDdkLze6YFxCBc-zm9bw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Xgnh"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_LQaLzu" id="bJc58QDe4TaXH2LQrxuC">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2076, -158)` }"
                        >

                <div class="layer-wrap layer-wrap_lQnSGU" id="KcZSDITGOBmfu8PwWxmt">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2088, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_LAVADb" id="ecJ9h41VpRPoU9GDj_lm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberYPII />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_znkAUp" id="v7Gim7ke5qlQANxOrqdR">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-tTwh">台</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UwDLoh" id="sRQBxGKwjayagNCk7Zwi">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-LbKR">气象监测站</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cdKuRd" id="Em9QgEr-ND0Xe2hjqmHt">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-imXo"></div>
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
                <div class="layer-wrap layer-wrap_uoLNnD" id="sVAf3Sx62hvXe4TMLYrK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_TjzhYW" id="Z5896HEzJuSeRpD0Kavs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-fSVO"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_eUAbqh" id="veSVqsEcr-554-lsLLxx">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-mOVl" :content="`IoT Device​​`">IoT Device​​</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zItvNv" id="GcmfDbuGiFHkqyZErYpy">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-oBrj" :content="`气象数据`">气象数据</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ohsNCZ" id="93NRD1Nm6-DjDX6NzTEs">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                    <div class="layer-wrap layer-wrap_oEaHTz" id="hUak570G3YMVTbwDy7qk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvMediaVideoDynamicUelC />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_fsPqXI" id="K2K9PAW7rhQulCP1S7jb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EnFX">设备编号：S24563</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wPgykG" id="xewF74TR6-gXI-mpXkd4">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-hXny">位置：长沙市11号</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MddNxU" id="lrN06p6VJh4PmUTOxvH4">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-fDYo">经度：113.15554</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_DMWDnN" id="FZuggzTs_LNY3g3FCnKC">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ptgU">纬度：103.65422</p>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BuQGef" id="9L_Il-gL0C52OGPH_Loy">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                    <div class="layer-wrap layer-wrap_DiEYOx" id="qUv9cOT2Eg3Juci_SGqj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QLEt"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FMOOba" id="2tcmiCB9lHB7GPBzaT-U">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-wQEg" :content="`Risk Warning​`">Risk Warning​</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_IutfuO" id="DY4UNE_5zqylDwRCCyzv">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-dSRz" :content="`实时监控`">实时监控</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WXaEmQ" id="s2BWHqNE6rOACzrZMntT">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_zGWqMD" id="ADixqzurpeQNk4KQwNzK">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nzFY"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ZUtCTi" id="L4DNYQNSQpk_PJ4J9-Fj">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_HnXiAD" id="onQu3uvRYs8UWkBu8UTW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-BKlE"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_LIqDSV" id="ArYsJCXias8n-S1LhCBd">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-nsZz" :content="` Warning Statistics`"> Warning Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iIPVqY" id="phDvqedmwqXjNUfqVEoS">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-geYG" :content="`风险诊断`">风险诊断</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kdrDep" id="omwejspD0Nz1WfYFzLhj">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_RfEEAP" id="ZOtR6SEhIb2RSR4jTUZU">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -36, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_phKvKf" id="LJQIJhMGaW9bDGnsLxf5">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -46, -494)` }"
                        >

                    <div class="layer-wrap layer-wrap_IdUVas" id="Pci9DsdjydpHjTjVQKzN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarPolarGuZc />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_rFpyPX" id="8nYpJW9aZV-BrSnSwtzB">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -46, -494)` }"
                        >

                    <div class="layer-wrap layer-wrap_TItWCK" id="iNcsjYLEPCtswiqjlRDC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Npvo"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ztFjZs" id="f1g2z81QeiZv6OLXdzuv">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-vDjM" :content="`Regional Statistics`">Regional Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_izALLd" id="muqOuCX0arQzarO8Af6y">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-xzax" :content="`虫情数据`">虫情数据</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_evysrY" id="1w-nXv6zuc0RqzTC8W2g">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -63, -598)` }"
                        >

                <div class="layer-wrap layer-wrap_wQUMqJ" id="lQz6JC-H_MZiOpMOf2zk">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -63, -598)` }"
                        >

                    <div class="layer-wrap layer-wrap_BtHPlG" id="vlCSD65W0Ru33Wlzppkk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kcjM"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iXSsyo" id="tqZ_w84P-j8rEpx4_Lln">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qUtn"></div>
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
                <div class="layer-wrap layer-wrap_kKnhjC" id="V39TREShf3RR9_UJdMyY">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_nwFPTo" id="JAUC5ryhE_heoeJ8_dUz">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PBQS"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HSJuJX" id="jAyHFsIiBqH1YPcqEbEy">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kkgU"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UgIInJ" id="UfuhuRF42NzOI0SsrtI9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarHorizontalpXST />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tqbWJF" id="4ZNbeZyKO6A7q5qVu984">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_nSeYqe" id="EorDElxhx1AMexcvuxfr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-aLuV"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_StQZfv" id="LtmlUl6LFUCvOyTkJ-fW">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-hWyk" :content="`Famous Trees`">Famous Trees</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NRZhIM" id="KhNHAyNF-kvj9RLRKloy">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-DLZQ" :content="`土壤数据`">土壤数据</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_gilomn" id="6qaGP4dyhKLadyR6OioD">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -598)` }"
                        >

                    <div class="layer-wrap layer-wrap_uOqzQU" id="mbYo43ldG5PYmmL5cjep">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextTextDynamicvOdx />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VQkIHO" id="G-IWQM4bUVT6DH7eiG1c">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartOtherRadarAyVL />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_YrpofU" id="b2zVJKrUi9X7bjKg5c-g">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -747)` }"
                        >

                    <div class="layer-wrap layer-wrap_gatoxh" id="dQ7TgwyciTgr5N3d_tuG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-bKKS"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BHSfGg" id="uAvxamxCj7kF4sqEzrpV">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bdBq" :content="`Categorical Statistics`">Categorical Statistics</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mXuYXh" id="_Pjq09Z1Mgrmkd7MtKBE">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-jKlF" :content="`健康诊断`">健康诊断</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FDZcvp" id="reDRwnPzNiQGOSlo-lul">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_DMxRYG" id="vt5O3rZQUVljAokvkA5m">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-DxGs"></div>
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