<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'

/** 导入场景 */
import bgScene from './scene.vue'
/** 导入当前页面基础信息 */
import config from './config.json'
import { usePageStore } from '@/commons/stores/pageStore'
import { DataSourceUtils } from "@shjjs/visual-ui"
import { useAutoSize1 } from '@/commons/hook/useAutoSize'
/** 导出工具类，包含页面JSON处理，初始化变量，执行事件，图层属性动态渲染等 */
import { execEvent, execStatesEvent, initVariableDataValue, layerRenderStyles1, layerRenderStyles2, layerRenderStyles3, findLayerUseState } from '@/commons/utils/utils'
/** 导入页面组件和图层事件 */
import ZvCommonsProductModelYeOg from './components/zv-commons-product-model-YeOg/index.vue'
import ZvInteractionSelectXaDX from './components/zv-interaction-select-XaDX/index.vue'
import ZvTextRealTimePMgL from './components/zv-text-real-time-PMgL/index.vue'
import event_KvlzxX from './events/event_KvlzxX'
import ZvTextOverNumberjkzH from './components/zv-text-over-number-jkzH/index.vue'
import ZvTextOverNumberNKgY from './components/zv-text-over-number-NKgY/index.vue'
import ZvTextOverNumberRwqE from './components/zv-text-over-number-RwqE/index.vue'
import ZvTextOverNumberbcyr from './components/zv-text-over-number-bcyr/index.vue'
import ZvTextOverNumberPTpy from './components/zv-text-over-number-PTpy/index.vue'
import ZvTextOverNumberBUAB from './components/zv-text-over-number-BUAB/index.vue'
import ZvMediaVideoDynamicmGbP from './components/zv-media-video-dynamic-mGbP/index.vue'




import ZvMediaVideoDynamicUelC from './components/zv-media-video-dynamic-UelC/index.vue'
import ZvChartBarPolarGuZc from './components/zv-chart-bar-polar-GuZc/index.vue'
import ZvChartBarHorizontalpXST from './components/zv-chart-bar-horizontal-pXST/index.vue'
import ZvTextTextDynamicvOdx from './components/zv-text-text-dynamic-vOdx/index.vue'
import ZvChartOtherRadarAyVL from './components/zv-chart-other-radar-AyVL/index.vue'
import PurposeSpecialFunds from "./components/PurposeSpecialFunds.vue";
import mEarthLabel from "./components/mEarthLabel/index.vue";
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
            <div style="position: absolute; top: 440px; left: 523px; width: 1505px; height: 600px; z-index: 0;">
                <mEarthLabel></mEarthLabel>
            </div>
            <div class="layer-wrap layer-wrap_xPvNqU" id="ZjnjbBDcKWDTB0nW0TSo">
                <div class="layer-main">
                    <div class="layer">
                        <ZvCommonsProductModelYeOg />
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_JQCVTf" id="QM3Spx4KbKmyzY5J3rJ3">
                <div class="layer-main">
                    <div class="layer">
                        <div class="img-qbod"></div>
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_NujmIL" id="R21Ua6qmOT8j0DR4NfhC">
                <div class="layer-main">
                    <div class="layer">
                        <div class="img-zTnU"></div>
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_IcskXn" id="AaWIHgZJJGgVlSg51-6O">
                <div class="layer-main">
                    <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }">

                        <div class="layer-wrap layer-wrap_DMeFyS" id="1ls7VM4yd7rSu8eEQDzy">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }">

                                    <div class="layer-wrap layer-wrap_QRewkS" id="0s1XVWA4ZZs2y_Sm114E">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <h1 class="text-MukG" :content="`古树43010400038`">古树43010400038</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <!--顶部选项卡-->
                                    <!-- <div class="layer-wrap layer-wrap_jMwYrY" id="vVQNBVrdBVJVGf8HhO9I">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvInteractionSelectXaDX />
                            </div>
                    </div>
                </div> -->
                                    <div class="layer-wrap layer-wrap_NfYFel" id="uoIJX82PdmdFlXQVyCr3">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-Dzce"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_YewNab" id="y1cgJqqAGnDrfYMQyIoZ">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-TZka"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_XOFKkN" id="Fk_pG7OOTK3pK2U84NPH">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-nKOG"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_cYHqzm" id="BWc8uqvOn7D4-A9xzhHX">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-aZGT"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_CKRFVx" id="L_HKV0PFdpeJaLUc-vXA">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-iYHC"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_oaBTOK" id="Wq-ghwABlKjkodB1ZVuN">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-llnf"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_xrcyeQ" id="PLO6bdhSJrT7gjid38Bn">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-xbaE"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 洪水预警面板 -->
                                    <div class="layer-wrap layer-wrap_FloodWarning" id="flood-warning-panel" style="position: absolute; left: 50px; top: 200px; width: 150px; height: 200px;">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <img src="./resources/images/flood_warning_panel.svg" alt="洪水预警" style="width: 100%; height: 100%;" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 风力预警面板 -->
                                    <div class="layer-wrap layer-wrap_WindWarning" id="wind-warning-panel" style="position: absolute; left: 220px; top: 200px; width: 150px; height: 200px;">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <img src="./resources/images/wind_warning_panel.svg" alt="风力预警" style="width: 100%; height: 100%;" />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 洪水预警面板 -->
                                    <div class="layer-wrap layer-wrap_FloodWarning" id="flood-warning-panel" style="width: 150px; height: 200px; position: absolute; left: 50px; top: 200px; z-index: 5; visibility: visible; display: block; transform: matrix(1, 0, 0, 1, 2028.0000, 946.0000);">
                                        <div class="layer-main" style="transform: rotate(0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg); transform-origin: 50% 50%; animation: 1000.0ms ease 0.0ms normal both running 1.0;">
                                            <div class="layer" style="pointer-events: all; border-radius: 0px;">
                                                <img src="./resources/images/flood_warning_panel.svg" alt="洪水预警" style="width: 100%; height: 100%;" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 风力预警面板 -->
                                    <div class="layer-wrap layer-wrap_WindWarning" id="wind-warning-panel" style="width: 150px; height: 200px; position: absolute; left: 220px; top: 200px; z-index: 5; visibility: visible; display: block; transform: matrix(1, 0, 0, 1, 2198.0000, 946.0000);">
                                        <div class="layer-main" style="transform: rotate(0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg); transform-origin: 50% 50%; animation: 1000.0ms ease 0.0ms normal both running 1.0;">
                                            <div class="layer" style="pointer-events: all; border-radius: 0px;">
                                                <img src="./resources/images/wind_warning_panel.svg" alt="风力预警" style="width: 100%; height: 100%;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layer-wrap layer-wrap_bkPDuR" id="KNuDf5P1GG5Z0kytj58E">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -37, -33)` }">

                                    <div class="layer-wrap layer-wrap_aqLQyf" id="zsjN7AW9tVy3SLi1B3hX">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <p class="text-VOxq">晴 25℃ 湖南省长沙市</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_BqluNo" id="5DkuZR0BAkh_WJqiow9L">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <ZvTextRealTimePMgL />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_tofzcI" id="NJ-h_naUnBPNAxxEPA09">
                                        <div class="layer-main">
                                            <div class="layer">
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
                    <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -2, -1013)` }">

                        <div class="layer-wrap layer-wrap_KvlzxX" id="upsnx4W7qxdkJW-g6BGR">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1044, -1026)` }">
                                    <div class="group-event" :style="{
                                        transform: `matrix(1, 0, 0, 1, 1044, 1026)`,
                                        width: '175px',
                                        height: '39px',
                                    }" @click="execEvent(event_KvlzxX, 'click', $event)">
                                    </div>

                                    <div class="layer-wrap layer-wrap_aruEIi" id="UCHO15A59tij5PqOeRf0">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <p class="text-oIOb">数据大屏</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_wJrQcZ" id="urPYDvgIl0n42xqES4H5">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-vvxV"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layer-wrap layer-wrap_IPkuIa" id="S9aqL-msYq6nbGeXyrzN">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1309, -1026)` }">

                                    <div class="layer-wrap layer-wrap_JhPUiE" id="q1qQDqdR97EF26LGZsUM">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <p class="text-WVuF">古树详情</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_WhdScw" id="QovIzPykXNG5z_YzyGjC">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <div class="img-hMsE"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layer-wrap layer-wrap_tFbOQn" id="Xvg85qP_CG6zxgGn__X3">
                            <div class="layer-main">
                                <div class="layer">
                                    <div class="img-BECL"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_OOWcgj" id="TQB3UsnI7uBvsUxehmsE">
                <div class="layer-main">
                    <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1942, -82)` }">

                        <div class="layer-wrap layer-wrap_wvTdSg" id="xkmZoEt8Bqmk2BDz5N5z">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1942, -87)` }">

                                  <div class="layer-wrap layer-wrap_IlvSsi" id="gVQ_vF7u2ZFR62YkRfWX">
                                    <div class="layer-main">
                                      <div class="group"
                                           :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }">

                                        <div class="layer-wrap layer-wrap_zBmpuB" id="bT9zDj88AtQ03A2EoE7W">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }">

                                              <div class="layer-wrap layer-wrap_xMWfVG"
                                                   id="iLhTXQaMxSKE2NRTv4Mv">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-riSO"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_DCsMlI"
                                                   id="AciWrmlBJKpMCqobYYHy">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -1942, -154)` }">

                                                    <div class="layer-wrap layer-wrap_gUKeIv"
                                                         id="KJTRxmXyccrftfoojNGP">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-nncZ"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_CtPBLt"
                                                         id="BDdkLze6YFxCBc-zm9bw">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-gBen"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_KBSLoS"
                                                   id="bJc58QDe4TaXH2LQrxuC">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2074, -159)` }">

                                                    <div class="layer-wrap layer-wrap_eFvTNd"
                                                         id="KcZSDITGOBmfu8PwWxmt">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2086, -159)` }">

                                                          <div class="layer-wrap layer-wrap_fUIMjq"
                                                               id="ecJ9h41VpRPoU9GDj_lm">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberjkzH />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_ufsoxK"
                                                               id="v7Gim7ke5qlQANxOrqdR">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-vIEC">℃
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_KPHYCK"
                                                               id="sRQBxGKwjayagNCk7Zwi">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-LwLc">气温
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_bLTZLR"
                                                         id="Em9QgEr-ND0Xe2hjqmHt">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-ehBr"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_tPkvRE" id="AXB-UlG_gF125r7d7i85">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -2086, -154)` }">

                                              <div class="layer-wrap layer-wrap_WgJAaH"
                                                   id="npk4zSzX3Zs_aoZ_FK1J">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-czYG"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_YDtJqG"
                                                   id="ytdfsr_HhODFnHM750O0">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2086, -154)` }">

                                                    <div class="layer-wrap layer-wrap_TuAkFi"
                                                         id="TUkVb6ujV-NPyYlSCIm5">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-pltm"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_vLcRnS"
                                                         id="CUMvFf6qP16APncKtMT4">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-qulL"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_NZaCPp"
                                                   id="AUb7fXmjeIdLBxZHnj--">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2221, -158)` }">

                                                    <div class="layer-wrap layer-wrap_wmosqa"
                                                         id="NpTP5Nijj9oPrksfcQua">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2233, -158)` }">

                                                          <div class="layer-wrap layer-wrap_ZOkzbn"
                                                               id="ghK_8E-d2qjhGDSTOCkM">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberNKgY />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_BYsErC"
                                                               id="j32TIXAY_PucN54GZ9Td">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-mvaN">LUX
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_bxLdhD"
                                                               id="yrDxpgHwZBX5LbhDPRy0">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-EBol">
                                                                  光照强度
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_HtZqgX"
                                                         id="Uk5bQntUBS9c_hEiQ3ML">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-Wrrz"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_nAGMfI" id="Hedi7VAA8ANWJvjyPN6F">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -2258, -156)` }">

                                              <div class="layer-wrap layer-wrap_gGhWFs"
                                                   id="I6izPC5rr8NbQ0_ngKv6">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-rKyh"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_RuCJAb"
                                                   id="NeNwGOcrDiTdE5VmBHNM">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2258, -156)` }">

                                                    <div class="layer-wrap layer-wrap_rufzDS"
                                                         id="39HpN4AQ0ISN8Nf0yM1a">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-qbVd"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_uyLTfS"
                                                         id="eBj-cH_X9BUIUgtelSUG">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-LxvY"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_DqeAzh"
                                                   id="IXYQg7nC8JDMmj_1NMmH">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2389, -160)` }">

                                                    <div class="layer-wrap layer-wrap_TwAqJZ"
                                                         id="95bQaR8yHQY9qbgzCd0I">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2401, -160)` }">

                                                          <div class="layer-wrap layer-wrap_yklgrT"
                                                               id="e2U350n9VuuadJuzOsQF">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberRwqE />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_skXFHE"
                                                               id="QsOoFHgqZRzTs8X9jzlB">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-Qnjo">%RH
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_NBReNF"
                                                               id="18ZNzD7fShkkCoHFw5BG">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-ouBV">湿度
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_oumLwk"
                                                         id="oTUUWFzwb_QS7sGGZdSR">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-bJFD"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_oCuafO" id="NZI6159eQ7kJlPuzlPZK">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -1942, -248)` }">

                                              <div class="layer-wrap layer-wrap_DKqTzl"
                                                   id="j7gm2EL6YAIeQT3JrjUx">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-dycB"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_mdCHvR"
                                                   id="uFpEUkrpYj0C2xBpri8w">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -1942, -248)` }">

                                                    <div class="layer-wrap layer-wrap_ouVcKV"
                                                         id="myxAEOptKIJiYeQlFigM">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-PnFQ"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_khrAJx"
                                                         id="lRcIVgs8J8baBRQOC2kn">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-gIZo"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_YrkVam"
                                                   id="eeH6o1MAYKfCTm4w96ln">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2074, -252)` }">

                                                    <div class="layer-wrap layer-wrap_TPQqRU"
                                                         id="fVicvDYcZvl1ONN8hhFH">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2086, -252)` }">

                                                          <div class="layer-wrap layer-wrap_dDCkjh"
                                                               id="1BjAuv4JfRHuhR3etqGx">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberbcyr />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_NcFNeM"
                                                               id="wCin_dok7mFoLtQbcGnd">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-mvlo">kPa
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_jrVLxb"
                                                               id="CfHFQ2CRwh_57PE__8US">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-hgdZ">气压
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_eRnjOx"
                                                         id="t9lslU53qs2m9U0ykVv0">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-wHYd"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_cphmCx" id="dH4dxTE3qAX4dNiLEcK9">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -2090, -248)` }">

                                              <div class="layer-wrap layer-wrap_XXySFi"
                                                   id="AYS5evUkPclhDbVZWZzc">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-VFxs"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_XTSoOt"
                                                   id="e9r54mZ9xIM3SUw3O_Ms">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2090, -248)` }">

                                                    <div class="layer-wrap layer-wrap_ZAoVjh"
                                                         id="FV5yEpVeymN1LgMzKwK2">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-Upux"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_taABUw"
                                                         id="qUqNJZ9S2Bd7e1w0uqc0">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-nQtg"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_Nzbtnv"
                                                   id="tO-sl33Lih7ZSp1C7s_L">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2235, -252)` }">

                                                    <div class="layer-wrap layer-wrap_WAqjVY"
                                                         id="dElukmqWiCXhqT1Ob23b">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2247, -252)` }">

                                                          <div class="layer-wrap layer-wrap_ZijLIJ"
                                                               id="L97CMRrMUKPCLzSTWzHd">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberPTpy />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_abtfAj"
                                                               id="snkrkYoYnxRG9j5i6J3T">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-MUko">米/秒
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_STBMDX"
                                                               id="1So7BPPuunYZcD67ob6x">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-eHsZ">风速
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_DmHQvg"
                                                         id="ZEMnngIYkR7g0MgR-vZE">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-AZmg"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_njTdVb" id="KSIqhY-_7y7AP2IUxhVM">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -2259, -248)` }">

                                              <div class="layer-wrap layer-wrap_FBSGcA"
                                                   id="dJxp498UiOgSQNtydHGI">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-DHBw"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_agYDgF"
                                                   id="GDOwQeit3prmVkBvZIX9">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2259, -248)` }">

                                                    <div class="layer-wrap layer-wrap_vJEoAY"
                                                         id="r93wJO23NGqj1_x9bGo_">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-wwPJ"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_VuWiyd"
                                                         id="qVhHkzT7KMQ3v8US3vbd">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-MotC"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_LJWYKe"
                                                   id="fYOWdQv_UQDlK7XSG2eF">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2386, -253)` }">

                                                    <div class="layer-wrap layer-wrap_UFEfxW"
                                                         id="o3MRLSZVAiVHmLLmvaLe">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2386, -253)` }">

                                                          <div class="layer-wrap layer-wrap_GoaimP"
                                                               id="nzEVX5WxWl4JrGimq0P8">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <ZvTextOverNumberBUAB />
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_BwJPth"
                                                               id="tti0dhxX9IUd4f_10E3N">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-DNMv">%
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_bAyEPw"
                                                               id="-LleC6FZtPFHRgNKoZSp">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-ETTi">
                                                                  二氧化碳浓度
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_MydruN"
                                                         id="ROMI4eAYrrIenkwWRuuL">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-pAvp"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="layer-wrap layer-wrap_RXdWSR" id="ld8TGjQKu-OD1dUxa3E2">
                                          <div class="layer-main">
                                            <div class="group"
                                                 :style="{ transform: `matrix(1, 0, 0, 1, -1944, -329)` }">

                                              <div class="layer-wrap layer-wrap_GkKoOJ"
                                                   id="QPfoAo2_Z_grIQAcEu1Z">
                                                <div class="layer-main">
                                                  <div class="layer">
                                                    <div class="img-ZlFT"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_yOKMUQ"
                                                   id="ruYm0ESc4mNb05OXYk3O">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -1944, -332)` }">

                                                    <div class="layer-wrap layer-wrap_oWqDod"
                                                         id="Kt17pGT_PR6ZPd2fJk_7">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-ZeTP"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_qUjdjR"
                                                         id="RHZIqOVQ72QIFlOFcYX9">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-vTDC"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="layer-wrap layer-wrap_oVioOU"
                                                   id="xUk21n1ZaQG8ZIuD2CII">
                                                <div class="layer-main">
                                                  <div class="group"
                                                       :style="{ transform: `matrix(1, 0, 0, 1, -2075, -329)` }">

                                                    <div class="layer-wrap layer-wrap_YkBMwX"
                                                         id="yDX4pc7ibD32nAaFjfge">
                                                      <div class="layer-main">
                                                        <div class="group"
                                                             :style="{ transform: `matrix(1, 0, 0, 1, -2075, -329)` }">

                                                          <div class="layer-wrap layer-wrap_SsTxol"
                                                               id="R58cAbdFUDQ6vW-HDiUZ">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-LKal">东北风
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="layer-wrap layer-wrap_JwqiAT"
                                                               id="_ye9yAO9IyfbBLiaRyTc">
                                                            <div class="layer-main">
                                                              <div class="layer">
                                                                <p class="text-vdTK">风向
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="layer-wrap layer-wrap_CMuOQn"
                                                         id="2z_5npt1Qdxz1BatN669">
                                                      <div class="layer-main">
                                                        <div class="layer">
                                                          <div class="img-UeiT"></div>
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
                                            <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1978, -87)` }">

                                                <div class="layer-wrap layer-wrap_TjzhYW" id="Z5896HEzJuSeRpD0Kavs">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-fSVO"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_eUAbqh" id="veSVqsEcr-554-lsLLxx">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-mOVl" :content="`Weather data`">Weather data
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_zItvNv" id="GcmfDbuGiFHkqyZErYpy">
                                                    <div class="layer-main">
                                                        <div class="layer">
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
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }">
                                    <div class="layer-wrap layer-wrap_BuQGef" id="9L_Il-gL0C52OGPH_Loy">
                                        <div class="layer-main">
                                            <div class="group"
                                                :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }">

                                                <div class="layer-wrap layer-wrap_DiEYOx" id="qUv9cOT2Eg3Juci_SGqj">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-QLEt"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_FMOOba" id="2tcmiCB9lHB7GPBzaT-U">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-wQEg" :content="`Risk Warning​`">Risk
                                                                Warning​</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_IutfuO" id="DY4UNE_5zqylDwRCCyzv">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-dSRz" :content="`风险预警`">风险预警</p>
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
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }">


                                    <div class="layer-wrap layer-wrap_VovMHb" id="mbYo43ldG5PYmmL5cjep">
                                      <div class="layer-main">
                                        <div class="layer">
                                          <ZvTextTextDynamicvOdx />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_AwvAXO" id="G-IWQM4bUVT6DH7eiG1c">
                                      <div class="layer-main">
                                        <div class="layer">
                                          <ZvChartOtherRadarAyVL />
                                        </div>
                                      </div>
                                    </div>


                                    <div class="layer-wrap layer-wrap_ZUtCTi" id="L4DNYQNSQpk_PJ4J9-Fj">
                                        <div class="layer-main">
                                            <div class="group"
                                                :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }">

                                                <div class="layer-wrap layer-wrap_HnXiAD" id="onQu3uvRYs8UWkBu8UTW">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-BKlE"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_LIqDSV" id="ArYsJCXias8n-S1LhCBd">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-nsZz" :content="`Health monitoring`">
                                                                Health monitoring</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_iIPVqY" id="phDvqedmwqXjNUfqVEoS">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-geYG" :content="`健康监控`">健康监控</p>
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
                                <div class="layer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_RfEEAP" id="ZOtR6SEhIb2RSR4jTUZU">
                <div class="layer-main">
                    <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -36, -82)` }">

                        <div class="layer-wrap layer-wrap_phKvKf" id="LJQIJhMGaW9bDGnsLxf5">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -46, -494)` }">

                                    <div class="layer-wrap layer-wrap_IdUVas" id="Pci9DsdjydpHjTjVQKzN">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <ZvChartBarPolarGuZc />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_rFpyPX" id="8nYpJW9aZV-BrSnSwtzB">
                                        <div class="layer-main">
                                            <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -46, -494)` }">

                                                <div class="layer-wrap layer-wrap_TItWCK" id="iNcsjYLEPCtswiqjlRDC">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-Npvo"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_ztFjZs" id="f1g2z81QeiZv6OLXdzuv">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-vDjM" :content="`Insect infestation data`">
                                                                Insect infestation data</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_izALLd" id="muqOuCX0arQzarO8Af6y">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-xzax" :content="`虫情数据`">虫情数据</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="layer-wrap layer-wrap_evysrY" id="1w-nXv6zuc0RqzTC8W2g">
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
                </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="layer-wrap layer-wrap_kKnhjC" id="V39TREShf3RR9_UJdMyY">
                            <div class="layer-main">
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }">

                                    <!-- <div class="layer-wrap layer-wrap_nwFPTo" id="JAUC5ryhE_heoeJ8_dUz">
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
                </div> -->
                                    <div class="layer-wrap layer-wrap_UgIInJ" id="UfuhuRF42NzOI0SsrtI9">
                                        <div class="layer-main">
                                            <div class="layer">
                                                <PurposeSpecialFunds></PurposeSpecialFunds>
                                                <!-- <ZvChartBarHorizontalpXST /> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layer-wrap layer-wrap_tqbWJF" id="4ZNbeZyKO6A7q5qVu984">
                                        <div class="layer-main">
                                            <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }">

                                                <div class="layer-wrap layer-wrap_nSeYqe" id="EorDElxhx1AMexcvuxfr">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-aLuV"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_StQZfv" id="LtmlUl6LFUCvOyTkJ-fW">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-hWyk" :content="`Soil data`">Soil data
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_NRZhIM" id="KhNHAyNF-kvj9RLRKloy">
                                                    <div class="layer-main">
                                                        <div class="layer">
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
                                <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -53, -598)` }">

                                  <div class="layer-wrap layer-wrap_HkLaUS" id="FZuggzTs_LNY3g3FCnKC">
                                    <div class="layer-main">
                                      <div class="layer">
                                        <p class="text-yWwm">纬度：103.65422</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="layer-wrap layer-wrap_bPlUyX" id="lrN06p6VJh4PmUTOxvH4">
                                    <div class="layer-main">
                                      <div class="layer">
                                        <p class="text-oBrJ">经度：113.15554</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="layer-wrap layer-wrap_EFIuSO" id="xewF74TR6-gXI-mpXkd4">
                                    <div class="layer-main">
                                      <div class="layer">
                                        <p class="text-LsSq">位置：长沙市11号</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="layer-wrap layer-wrap_cNcgsD" id="K2K9PAW7rhQulCP1S7jb">
                                    <div class="layer-main">
                                      <div class="layer">
                                        <p class="text-hWmo">设备编号：S24563</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="layer-wrap layer-wrap_brceKD" id="hUak570G3YMVTbwDy7qk">
                                    <div class="layer-main">
                                      <div class="layer">
                                        <ZvMediaVideoDynamicmGbP />
                                      </div>
                                    </div>
                                  </div>

                                    <div class="layer-wrap layer-wrap_YrpofU" id="b2zVJKrUi9X7bjKg5c-g">
                                        <div class="layer-main">
                                            <div class="group" :style="{ transform: `matrix(1, 0, 0, 1, -53, -747)` }">

                                                <div class="layer-wrap layer-wrap_gatoxh" id="dQ7TgwyciTgr5N3d_tuG">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <div class="img-bKKS"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_BHSfGg" id="uAvxamxCj7kF4sqEzrpV">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-bdBq" :content="`Real-time monitoring`">
                                                                Real-time monitoring</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="layer-wrap layer-wrap_mXuYXh" id="_Pjq09Z1Mgrmkd7MtKBE">
                                                    <div class="layer-main">
                                                        <div class="layer">
                                                            <p class="text-jKlF" :content="`实时监控`">实时监控</p>
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
                                <div class="layer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layer-wrap layer-wrap_DMxRYG" id="vt5O3rZQUVljAokvkA5m">
                <div class="layer-main">
                    <div class="layer">
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
@import url(./resources/scss/warning-panels.scss);
</style>