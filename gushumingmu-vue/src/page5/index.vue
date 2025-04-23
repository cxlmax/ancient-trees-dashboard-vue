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
import ZvTextOverNumberHJmi from './components/zv-text-over-number-HJmi/index.vue'
import ZvTextOverNumberwWBw from './components/zv-text-over-number-wWBw/index.vue'
import ZvTextOverNumberPmdP from './components/zv-text-over-number-PmdP/index.vue'
import ZvTextOverNumberRomm from './components/zv-text-over-number-Romm/index.vue'
import ZvTextOverNumberBfwc from './components/zv-text-over-number-Bfwc/index.vue'
import ZvTextOverNumberqHhd from './components/zv-text-over-number-qHhd/index.vue'
import ZvTextOverNumberHszq from './components/zv-text-over-number-Hszq/index.vue'
import ZvTextOverNumberkRWk from './components/zv-text-over-number-kRWk/index.vue'
import ZvChartLineSmoothAreaJYGu from './components/zv-chart-line-smooth-area-JYGu/index.vue'
import ZvChartBarZebraiEzi from './components/zv-chart-bar-zebra-iEzi/index.vue'
import ZvTextRealTimeGZtu from './components/zv-text-real-time-GZtu/index.vue'
/** 动态自适应分辨率 */
const { pageRef, transform } = useAutoSize1(1920, 1080, false)
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
                <div class="layer-wrap layer-wrap_fHgotw" id="GWYUOhAmBjCktDsYHmMI">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1427, -804)` }"
                        >

                <div class="layer-wrap layer-wrap_hvymNk" id="AzRluAjQto7yMdmKX1Yw">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1420, -735)` }"
                        >

                    <div class="layer-wrap layer-wrap_MSvkeY" id="jECc9g03jMQZ0cAmy09X">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-gypw">06农业资源概况</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_DrPsaQ" id="RtgFS8q9lTcaHRqFhFYP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zfiy"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RQXZAW" id="ViOeNCyCVP1PsHL0p93v">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Dxwu"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_erxjWk" id="8qcv0kvz5leckiSwggat">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1431, -992)` }"
                        >

                    <div class="layer-wrap layer-wrap_iqBqyO" id="c42u9HN1VsPg4fD4Gjwp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-tVeX"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_eoCvvf" id="0WrcccFlHm3eqpjkih4U">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-AeGJ">统计时间：2022-06-28  11:26:22</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ZhXIKf" id="PVHSM2vASK7BfveHP65C">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-axTr">资源概况：XXXXXX省XXX市的农业资源分布为......</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dKWGfc" id="6X4o9sTgNtetIdhBUfCG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-pOco"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_yGAwUi" id="5CEFXTPNnmFWOQsSd1LQ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1427, -896)` }"
                        >

                    <div class="layer-wrap layer-wrap_LbVaJf" id="aX5jVz3IgNMV9QSFPsPU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GDvm"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MRNrGD" id="TUPBUPJLmVQmuRgHCQP1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XxTg">统计时间：2022-06-28  11:26:22</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_aNarhf" id="NSliBDxQMcPGcyQvts0t">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-lpNv">资源概况：XXXXXX省XXX市的农业资源分布为......</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nJFKBF" id="6ApYAjq1LHc4y83k5B23">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mBpd"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tXBPeI" id="q9YE9M4M2X8ILsbd0j7e">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ktdJ"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AUmBhi" id="KhE67WyuVjIDXFYj0UTN">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1427, -804)` }"
                        >

                    <div class="layer-wrap layer-wrap_UxodiL" id="OcnGPzLpk3ouBbqgDR1L">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-sUfA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tTeUfS" id="y8OWeTDrkthKHfQ30AY6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-wyoc">统计时间：2022-06-28  11:26:22</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hzmnqz" id="yuoIq9NvyBCnD4fj7mbB">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-fRRV">资源概况：XXXXXX省XXX市的农业资源分布为......</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ENUnfZ" id="aQyOOptAtJQhjDomRUjd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-CblW"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_DUDVhb" id="NEYkQBgQVrc1ZEayYE7a">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1462, -500)` }"
                        >

                <div class="layer-wrap layer-wrap_azGjHf" id="DCtKDYefqQqXCjQOoCwu">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1420, -438)` }"
                        >

                    <div class="layer-wrap layer-wrap_iBlxvV" id="j9Q62x8dXdFWDD3Xluhu">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-HOpH">05农业资源分布</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NWgIdt" id="JM34UvqMUYA86w4uyrhW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YFIS"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_JrxzCz" id="Tz7T1ska1sUbhRZtpsRU">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1478, -648)` }"
                        >

                    <div class="layer-wrap layer-wrap_pSbWTn" id="WFOBsbLuv9ceq9oEhqoO">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Djut">水流量数据展示</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NppImY" id="bm4RvLWiusddTXHPThvH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-RSzm">XX省xxxx市</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BjxyWF" id="djXJIrgcRe48wgdePQrC">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1462, -533)` }"
                        >

                    <div class="layer-wrap layer-wrap_gJBDPN" id="FQIZhPjZCjhu78xvWsBw">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bJvp">水流量数据展示</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QIHXfX" id="JfAVR2ckGcJlcEBLztCK">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Yded">XX省xxxx市</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UypEeY" id="891IqpcD00ybcLO3hdZw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberHJmi />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oaKcNH" id="85y1RUIjTpHhwnqs4OcH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberwWBw />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_GZPgIN" id="NyBtZ8zbr9UGwAJuVhbQ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1768, -629)` }"
                        >

                    <div class="layer-wrap layer-wrap_IxRKUJ" id="6KjF2OV3PLZlbvl6S4hU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-BWxF"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OIKwUG" id="gWzi88Kx3OSwkkvF7sh5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberPmdP />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ujgAeK" id="PMScIPr1GRTwKktN9ZuT">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1768, -500)` }"
                        >

                    <div class="layer-wrap layer-wrap_gXEBIh" id="3r0MeW23rHV7L5LQGBJf">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberRomm />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BwLXCq" id="JMOp5hyIdZDkWKXqdJwW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PiTQ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ufpaau" id="9psvj26dITI3HI0po4dt">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1407, -175)` }"
                        >

                <div class="layer-wrap layer-wrap_lEMlwk" id="nI5gXAYPj562y1EslH6I">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1420, -118)` }"
                        >

                    <div class="layer-wrap layer-wrap_ZTrabI" id="zOhfa5cxtYMYxhqBBN6p">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-QZcC">04农业资源分布</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ysOilV" id="gLGmlOKHDI1n6CfbpWCC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-MGEN"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_lGWIGf" id="w7nodBkY1cD9jlCIe1zi">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1422, -304)` }"
                        >

                <div class="layer-wrap layer-wrap_ZyXtdk" id="AHghufcw3XMbPVos23HR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1422, -318)` }"
                        >

                    <div class="layer-wrap layer-wrap_zoJDsz" id="GZtb0bXvQX62VeICVHpl">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-sEpb"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_REzBPp" id="OioedBSlMmiV2OZ1ZFK4">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberBfwc />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CXMbQB" id="qyKxvWfqqID4rZwHQeVB">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-RHtR">水流量数据展示</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AlTQxY" id="bflndCYI8Q4J7YJGWePd">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1675, -304)` }"
                        >

                    <div class="layer-wrap layer-wrap_LcFvAN" id="msNNCkrDEQxyKxWS8Kak">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GwjL"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GQpteS" id="sVsNBFlAtRh9JOq5ddRl">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberqHhd />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jIieyx" id="9sjMzl2VFZge0skAt69Q">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-zfFu">水流量数据展示</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_rqHjne" id="xy6DalkFvdKSp7X8uGNl">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1407, -175)` }"
                        >

                <div class="layer-wrap layer-wrap_myyqJA" id="87KWY5r45A2C6DQBYrpn">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1407, -175)` }"
                        >

                    <div class="layer-wrap layer-wrap_yHOyop" id="8FqIboeaTWoPz6ouNlCb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-iYGD"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yFeOfz" id="A5Id7m7Al5GjCGUb6Zrq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberHszq />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_DKLXLK" id="Gn3q8UISYdM6qYEnpbjq">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XcBa">水流量数据展示</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_McwmfZ" id="846FeTEWnl7M6zY40QzL">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1675, -175)` }"
                        >

                    <div class="layer-wrap layer-wrap_ajtaAQ" id="5JGPd6jFnUwfCxEjs3En">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xvax"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QQOoHu" id="zX2xojOwbQLkNUwayQsx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberkRWk />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_EwlDte" id="BAHqCoSqWGmM9Nas6aaJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-tAmA">水流量数据展示</p>
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
                <div class="layer-wrap layer-wrap_vVRLft" id="gx3l7STUenOIb5ox6nzx">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -19, -753)` }"
                        >

                <div class="layer-wrap layer-wrap_JtOtdT" id="trIiiqh7wBILE6UNJxB4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -19, -753)` }"
                        >

                    <div class="layer-wrap layer-wrap_nSDlxu" id="pbTS9kwO3LyireDaNeZZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-rEfF">03农业分布
</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ftvFTs" id="cSORzazx0Ddv7OOedfVw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TvUs"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RQYgJZ" id="lRiBx5GPGXfWYa6upJYs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartLineSmoothAreaJYGu />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_uJTkTT" id="kacvjSzpiRPecGkfCPaG">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -29, -382)` }"
                        >

                <div class="layer-wrap layer-wrap_HOyoUp" id="QXrwNlQr1ONPZfXcsKTQ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -29, -382)` }"
                        >

                    <div class="layer-wrap layer-wrap_WrjrMJ" id="eZn7Uo0YyD55V9SGiSzv">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-ESnr">02农业资源排行
</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kHSMYE" id="E68sYHkblBeQ0CdRcgCA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nOiF"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cgsjIC" id="Ua33GQL3JyLBNpD8QiHG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarZebraiEzi />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_IpAmWe" id="KLeHjl0uskkPtMl9mUvY">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -29, -110)` }"
                        >

                <div class="layer-wrap layer-wrap_PsnPGj" id="3RutXCCB2AaVIFFua0py">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -44, -189)` }"
                        >

                <div class="layer-wrap layer-wrap_lBRylV" id="XCX6a3fidjo0iKUFsvjR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -44, -189)` }"
                        >

                    <div class="layer-wrap layer-wrap_qWVoiV" id="yvBID70LihIy8OxR7QFC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ahhl"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qofjXG" id="cXrpaiXqyLZfFUwYTiHH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-LIzQ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SqdnBV" id="vmaGAobf4wyt7OMppz7D">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qZgv"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xegVku" id="xQqN0ibjUlyJ6VUC3OhD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-OzrS"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ygoZng" id="7xSvDNK3VwdT6AUvYsq1">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ItqV"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_oATCik" id="Lo6gYyfMd8lQi3k2Upbd">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -322, -209)` }"
                        >

                <div class="layer-wrap layer-wrap_dTEiYN" id="7nWI62PEFPVk7PuihxvV">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -328, -209)` }"
                        >

                    <div class="layer-wrap layer-wrap_LwIeLv" id="Vxr7ezzs42HNLjBydzWm">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-YrUN">某某地区数据值XXX</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WeGuoG" id="oXUJAona3fuAVtyLf6ub">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-PPsu">1</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MsaEZg" id="5DjyICbSbdzmsNPPRkmT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GyTP"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cSkntG" id="AT09Z9naMNn4c67hYTbc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-IKYx"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_zTtWXf" id="RtDX0ODa25jtbPsGfaCn">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -322, -328)` }"
                        >

                    <div class="layer-wrap layer-wrap_FIopAb" id="stH5Bsrl115dmgm7EecS">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XgIT">某某地区数据值XXX</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VmQjqn" id="poXyPLZFHYUkExTTENKh">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-mXEi">5</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RDfWvG" id="xwYpImbKF7Hz4F47Yxbk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AMUP"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xKrrDw" id="BRXEZW9gRkNh8JORtUdI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vqVj"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_QijDTk" id="o7RCCC7JYL6QgFJGbBC6">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -322, -298)` }"
                        >

                    <div class="layer-wrap layer-wrap_AtUQkl" id="xwjYhihZZP3YtQ2XT6x6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-wndR">某某地区数据值XXX</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zLPqdF" id="GetJRjg63NqM5PyPSM2x">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-HPuO">4</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AgAEJQ" id="mKitUNLtbeJA3q3aJrea">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-czZO"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QpKYMD" id="6oZitHK2sh0ofhsb7lc2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-CSwj"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_yWwDDa" id="2NgLax7szhfSjsTP2f5F">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -328, -268)` }"
                        >

                    <div class="layer-wrap layer-wrap_fuRcIp" id="tjc3sbZtvpjXUVVJbp6I">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XrFV">某某地区数据值XXX</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_leZYUr" id="9lRgIvlDS480evaQYRiY">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-cjQp">3</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_IdgHRL" id="vcPyLRDRTrYv8z0k8bo6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AOsL"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XKOvsl" id="4C8pIMerjtTR6tIgdStd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-KVfQ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_VoyHbd" id="pYVIzT375i9fjrisUkPv">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -328, -240)` }"
                        >

                    <div class="layer-wrap layer-wrap_TjQmLb" id="ZIE9FvM4gg0YVbokTt0U">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ltaH">某某地区数据值XXX</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GnJuyS" id="yox36Xk3TwJoz65hXkjm">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-wNBB">2</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_awiVgd" id="jU0yvpNXqIBMLplpbL9Y">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ntRg"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JsRgfr" id="5P099yfA5nDp8VlQ1xsb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ozqb"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_pdUjQA" id="UgIW4VSm98UF7Wedl15w">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ifqz"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_zUGpnn" id="CsWmjHY6YUgt6ic9q33v">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -29, -110)` }"
                        >

                    <div class="layer-wrap layer-wrap_eWkOsw" id="6KgtfXPtr6YsaDnl1CiV">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-rKgL">01农业资源监控</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nSbgcY" id="VtF8SrQQiKjEfxSAn27k">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QiGG"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_uSFmTz" id="Wc3NAFLwsOlEgyMirhjr">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -4, 0)` }"
                        >

                    <div class="layer-wrap layer-wrap_IddwiS" id="7jwaisEGw7Tc6mq0mZux">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-suli">欢迎您，admin!</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cLtUdN" id="mpy80pQwEkryIlYLxnVq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimeGZtu />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FgTJDw" id="sJjFyPObAxqdkUYRHKBX">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-UixS">北京</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JKofSj" id="VuE4IRWtanK9PRoxA9sH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xPit"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dzDNTf" id="XeNlYXYYoZUALSA31ATr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SbZq"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XymwxJ" id="wyRlfjA9xUmMRGyiGeIX">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kNeh"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ARzBov" id="0NQYJIE8jSTzCphkpSsL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-DwLo"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ZBlJIP" id="fS81UpY7L6X3YqHFIEhR">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-dLsO"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mEHSrC" id="BcM8NF1ELFmMMfP4RLZD">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-jOkI">全国农业可视化数据指挥中心</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zeGbQA" id="gyXuAmlzhlr24d86R7oc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-rwnM"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wbftOy" id="PK5WZML9Z8ltOdWOYCyT">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 5, -1090)` }"
                        >

                <div class="layer-wrap layer-wrap_kxAhmJ" id="BYGd9ZML4ekh6m5RBbix">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -71, -1090)` }"
                        >

                    <div class="layer-wrap layer-wrap_CjWgUD" id="Ht0xNSHbx1qQyG0KUlad">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-qYrX">农业占比：36%</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OYxxUg" id="hIoVvAN9CY0tlWXz4AY9">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-TvEd">内蒙古自治区</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PZafPB" id="Wlv2MZrZCpJe1HRayubT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-udAk"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xuSxdT" id="ZBq3P88VOqQeLoNQgRY1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bOfS">广东</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_unsktb" id="8OliYhjxP36D366xeP6o">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xKyu"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wFhQcf" id="6dzTjpsuNA9dYIT7VQx1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-BWCl">青岛</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OgIImv" id="xsBtWJR7cx1Mk4AxOvMl">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-rMZt">南海诸岛</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VLaXNE" id="wTpXKFxIndBGOXLhoB5t">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JeQc"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JHVBtK" id="m6Ia3zPz1JQyNel8Zwtp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nxZo"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KHmzLO" id="6MfnhoXAFVlcAGq4AqF5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PjME"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mqzXOC" id="aacRozOtyNiu2qYLduey">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AAvt"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HdjKuA" id="xRsVOlYcwgktlgJGp2lF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AiQh"></div>
                            </div>
                    </div>
                </div>
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