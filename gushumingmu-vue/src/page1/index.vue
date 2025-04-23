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
import ZvTextRealTimeWKgG from './components/zv-text-real-time-WKgG/index.vue'
import ZvTextOverNumberdTVw from './components/zv-text-over-number-dTVw/index.vue'
import ZvTextOverNumberUZpG from './components/zv-text-over-number-UZpG/index.vue'
import ZvTextOverNumberbHAE from './components/zv-text-over-number-bHAE/index.vue'
import ZvTextOverNumberjYCo from './components/zv-text-over-number-jYCo/index.vue'
import ZvChartBarGradientColumnChartXiBR from './components/zv-chart-bar-gradient-column-chart-XiBR/index.vue'
import ZvChartBarRanklPlV from './components/zv-chart-bar-rank-lPlV/index.vue'
import ZvTextOverNumberfchS from './components/zv-text-over-number-fchS/index.vue'
import ZvTextOverNumberqiEq from './components/zv-text-over-number-qiEq/index.vue'
import ZvTextOverNumberypGu from './components/zv-text-over-number-ypGu/index.vue'
import ZvTextOverNumberGNvP from './components/zv-text-over-number-GNvP/index.vue'
import ZvChartPieBasicAijW from './components/zv-chart-pie-basic-AijW/index.vue'
import ZvChartPieBasicZBFw from './components/zv-chart-pie-basic-ZBFw/index.vue'
import ZvChartLineSmoothAreagcJn from './components/zv-chart-line-smooth-area-gcJn/index.vue'
import ZvTextOverNumberbahd from './components/zv-text-over-number-bahd/index.vue'
import ZvTextOverNumberSoTh from './components/zv-text-over-number-SoTh/index.vue'
import ZvTextOverNumberIsjE from './components/zv-text-over-number-IsjE/index.vue'
import ZvTextOverNumbermfTs from './components/zv-text-over-number-mfTs/index.vue'
import ZvChartOtherRadargTBQ from './components/zv-chart-other-radar-gTBQ/index.vue'
/** 动态自适应分辨率 */
const { pageRef, transform } = useAutoSize1(2560, 1080, false)
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
                <div class="layer-wrap layer-wrap_IIyQYU" id="GETxZIvWAPilWSTPAghp">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                <div class="layer-wrap layer-wrap_bgAtmH" id="6DVEv5HMWgZYgnWQzF6l">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, -1)` }"
                        >

                    <div class="layer-wrap layer-wrap_DtmgtI" id="mKaxS0R33cCIu9vRPW9i">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-wQrc" :content="`某某监测可视化大屏`">某某监测可视化大屏</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XAvazK" id="MYS54DzltZOEcOIPkWJS">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ghJN"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CaclJk" id="5OhB6RVMftY5ELGv1MPh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mXES"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yDQzNn" id="is8TUvT0U7e7I2WgDuhP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Usub"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PqqJDx" id="jm5Rbf7vP6YqSRf5qtug">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ugEW"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WwtCMq" id="8KJyh7yzwxOuXNqpTHKc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ISls"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HsCjYT" id="xTnQXSCMr2oIcN4crehN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TbnQ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jCCahe" id="emtsOzEL797c7jB4hzHD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gbwe"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ntFLKs" id="06BCMvn6VNXM3mktzDAK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -37, -33)` }"
                        >

                    <div class="layer-wrap layer-wrap_lhdhVR" id="8PXItgzuG4MGTjV6dVPk">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-lyxE">晴  25℃   湖北省武汉市</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_TcMkeV" id="0PJrGqbPfYTUL4hkKkJh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimeWKgG />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_bVUOQa" id="vgOG9VmOk5E3a0DYup5j">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-dmne"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_HbmlcU" id="iqal3sIBnjieUhUH6ZLt">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2, -1013)` }"
                        >

                <div class="layer-wrap layer-wrap_AOKAJB" id="zWoGjueQSvGga2Gghep3">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -940, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_HgZLAx" id="MpEXfB688uvXfysJqOaN">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-qMRt">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kXpKlA" id="CJQ1AThlWeKUI8BgVKq2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-oymR"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_uZMxky" id="2yQ8rhRtyX5qb8dmWAKm">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1461, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_KsKJQH" id="F3Sp3HxGJCFOvCmDJPw9">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-kBLy">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yYrrex" id="dKSCUy5Miaz22O6GITPZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YIRG"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KSdhlV" id="V9zsBHa5HALgpokRwDIE">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1287, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_pGgMkX" id="znmUaAtmkp4QgmWmrUk5">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-haie">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_LTemrA" id="dTuPrNUVvMNSyayO00cw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ENlR"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_RxXjAj" id="3sug1L5NsQf4v5anfKNF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1114, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_kIdEfx" id="N9kSR8RTWC7JWftnVitL">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-BaeU">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mvABDx" id="my86Gp02kRgHzUzQv5qj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WGNr"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BGJKZE" id="D7SdPBYUVlyG6qozgQwp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZfmH"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_JrXMmb" id="nK5CTVzO907BNEWBwjwz">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_tsdoZE" id="3q8pcd5Ouhw6kTwTklHc">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -87)` }"
                        >

                <div class="layer-wrap layer-wrap_nsRUem" id="Rgzb3P3HoEiEPECOQRdA">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2152, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_PpZDgN" id="3TTD4t2YsKHs4L8UJ1yq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uoXp"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_vIggMF" id="N9kFPdLQyxlizKlw0Pgc">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2152, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_tApwsa" id="vsOi0yg8zq9R4CMCRVCg">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-bzCM"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XkjyTS" id="h0Jk6axKjimxnfTja7x6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gtCG"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_sfIJhW" id="duM4782gm6GDnCN6Cv3I">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2368, -265)` }"
                        >

                <div class="layer-wrap layer-wrap_wnkScv" id="gfN7m28Cj7qTSDaqUN55">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2368, -265)` }"
                        >

                    <div class="layer-wrap layer-wrap_CwASac" id="BeNt95GBZw9lWkyW8MmG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberdTVw />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dgxPHr" id="9tQOmfbrr7oF1FkCIgbj">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-SmGd">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RcetaB" id="195rQdIBwDfJiEe16ydf">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Vtto">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qMLeSv" id="opIuRs9f6h8pGzehSQPP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-OJfu"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_VndkhA" id="wkmIkE7Cd15Cz0JEivZD">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -154)` }"
                        >

                <div class="layer-wrap layer-wrap_nkbFcv" id="qf517KWP7SL01Ns8yjlu">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_ESyRUo" id="ikjxrpvHwio636HqlLsa">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-rKRz"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NXfkvS" id="Q4KkktIwvlFTZ8cKcBJQ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_HLMBNk" id="FtYbnAvd6Jey1st7yyiu">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Peka"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hJBwts" id="lZow0jcZlKZ2h6xLNz1F">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XNNF"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tWtmIo" id="c8bRns4rcasU97MI5sqK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -154)` }"
                        >

                <div class="layer-wrap layer-wrap_yoYmrF" id="ILElZYVV5XQFnnYbwTLA">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -154)` }"
                        >

                    <div class="layer-wrap layer-wrap_qCTOIS" id="adoyHpt0EOGtjcCSgUrb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberUZpG />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gIHiqa" id="ZsxzgLUZqQRGCRuYwT2a">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Osvm">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GEXPAs" id="BMFt72Gf5tiAwpSYflY6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-WLAQ">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FeQVUi" id="191Sx4nXvw3PW7Ezz4p9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VHuC"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KAOmTn" id="vaDRuProNURGmVkdtq2n">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2152, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_lbcODc" id="W31mOddrpRkBNPmnQFOJ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gwHk"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_flHPPb" id="qzBW4Kyx4Rsq0vehkDgv">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2152, -158)` }"
                        >

                    <div class="layer-wrap layer-wrap_ecxYOU" id="dQqJivctIgAfAKb5bIiU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AYWM"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_volXEn" id="90mGc38u9Ov0aeGaeqNY">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-euWQ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bKwMIC" id="QrDNRpoYyQpkRA17WDcn">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2368, -156)` }"
                        >

                <div class="layer-wrap layer-wrap_ZHBCmS" id="1yr4wXfwBEFbLa58w77I">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2368, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_mlgczp" id="XJ15QEh3plvAGkhsPgae">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberbHAE />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nWzzNL" id="XoYAa1huVNcb80Fd5Oeo">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-lkef">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kPNqHv" id="AJIV1t2erV9IgWzFp98j">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Osqg">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nnddOt" id="qnvEO3d3BJPvOL6ZxzAM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-nSAn"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PJBdQT" id="uU4RLRq5MjLnHJ3VEQdm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vjcy"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_llFAzr" id="mOogwka36t8JbcnVwwMo">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_BePLSf" id="DYxyf4mOHzVJ00H8MZkX">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-CLuP"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WaWhmC" id="wFAvTC9YHpXiywG2c3ML">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JTFe"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_hdMEyV" id="Ct21FqN4dTDz9HxchV8L">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -265)` }"
                        >

                <div class="layer-wrap layer-wrap_FgFqOa" id="JenDlWVFGlZ7UZWVXun6">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -265)` }"
                        >

                    <div class="layer-wrap layer-wrap_DiuQKS" id="rJD4dOHS7sspNICUBeqr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberjYCo />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NhKVZX" id="x5m0O9jsy6SfHamdJ5RH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-DRSp">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lIoxIP" id="ZkrUEY3ymc8WN7s2foJb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-tYVT">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_aCDMJp" id="Wzb6yjxMs5q6lhaxF2jw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-eYMe"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CnrbjM" id="z1bnzHF4HxYl8gV4cI9s">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_bUhTCT" id="huWsU2uLvR8D5d32py3t">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-skyt"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BCjEra" id="wazMzZCVqn37A7fVVYtk">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-HohT" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OumDPc" id="lOOyxjlLDBuzwvdrarXN">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-xMel" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NMLdRB" id="dfPt0z5AuAegW1577FWe">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                    <div class="layer-wrap layer-wrap_xWmbLC" id="G8wxGTnInxPKVLaipcoI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarGradientColumnChartXiBR />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_RIjEgB" id="JGYkNWpjK3g9CfiTqLOD">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -746)` }"
                        >

                    <div class="layer-wrap layer-wrap_BCGcqu" id="NtTJv1MOm4umkhiKbC6N">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VXxv"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gFEDPw" id="7foXwMqKXeYEkGftrdCQ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-sZrb" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JNFilN" id="Y3vdpoqCFJ2dIVZUPE1x">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-LTGO" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KAGBfn" id="9370HI5kfUWcUqBASFOy">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_wLISnb" id="fT7KIvhBJTrn84c7Cncr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarRanklPlV />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AsvZVp" id="hZ1Hh4KyLaVs6YBiU5de">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1978, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_JZDrMs" id="FLNuWwkazpj7XwNdMquD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-KUev"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SPFgTx" id="0Cx8lzS3WX0HZYoKTC6U">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-uWwX" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GixcWC" id="Jxr5w5YMvqhP35rJyT4Q">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-IvCb" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rPBdkp" id="a9JIg0TpXnuEL5bGaVmv">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_zaHlYR" id="fSOZRiq47aIB0pUWBLQ4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_fVAeHV" id="MG5jw6UD2IXujucv8dJk">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -747)` }"
                        >

                <div class="layer-wrap layer-wrap_KYBiVw" id="ZivIkhSIhlaqT6gZ9xCH">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -747)` }"
                        >

                    <div class="layer-wrap layer-wrap_KySMZC" id="32Ex3dAZ5Lgg9KWTearh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-FtoO"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FqWeTg" id="QUlTj1H3VDWOay4sbqQw">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-cTIq" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Jdxjpa" id="pPUbm6OdqfwKXHN7StSg">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ckwl" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_eGgkzp" id="RDIavOcBHDXx81vavLw4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -772)` }"
                        >

                <div class="layer-wrap layer-wrap_zCnSht" id="WTAp302KgEr1kM8sjwqp">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -977)` }"
                        >

                    <div class="layer-wrap layer-wrap_AtwCbD" id="1jYKp0Q1QCqYgHb3ZvvL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberfchS />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rHHMSs" id="zIj7RlHmD3zjlBtrFh7p">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VbWk"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_HhRsOc" id="qpvdcDwHHZ5cE806PWOY">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -962)` }"
                        >

                    <div class="layer-wrap layer-wrap_MBniRi" id="LKDllZkiwmNnOkZ3qtjk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberqiEq />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SYUoDN" id="4YcUYPCpabDdQIRsVYdW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-huBO"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_yEdICV" id="MMeWJynWx96YB2dhfe15">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -908)` }"
                        >

                    <div class="layer-wrap layer-wrap_GdOSwV" id="6XL0yYrelMqapxxhYPuL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberypGu />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mABqGS" id="Bx5lNKkwYz5HaoC6GHXC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TbCI"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_GZzznc" id="vqrRgA1h5Uh449Qvs74o">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -855)` }"
                        >

                    <div class="layer-wrap layer-wrap_vCUWCo" id="QIZJWATER0LUntqRL3Zj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberGNvP />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ddhKOC" id="4pUqVUJAICEqAmXeDSzf">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QKRZ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ghBEYF" id="olchGwII4onXSRWxZ3ny">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-InQT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_huqmkR" id="636g2BgITOV4DQ8ZxmAP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-BdSU"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oLHjbG" id="ZpFrF3ymT2b16B3KaNf5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasicAijW />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tCHNhV" id="gPsH7bCH33kE0VdaeQSr">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasicZBFw />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_EiqeqD" id="qW1lWOad19h6YADqQXO4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_GzGyfK" id="oCVI1qmy6iDBbEe9Egbm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartLineSmoothAreagcJn />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_sieBkZ" id="pn39zgIINLjwpAEp4J2i">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -406)` }"
                        >

                    <div class="layer-wrap layer-wrap_IgVgep" id="dV0T1urFN5xkD1nK0IA7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-EVCZ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VVLKVB" id="XKtVF4EWbJhcaa8p65W4">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-fEzI" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ppjbHp" id="fQfrfaRjskyXerhTrTdn">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-AQKW" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BiZgdG" id="Mqxnh9IonLCWatvU0e8g">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                <div class="layer-wrap layer-wrap_FmILnW" id="WnU9d96kAKu9AvQC6YeJ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -87)` }"
                        >

                    <div class="layer-wrap layer-wrap_nSEawC" id="1qBrclt6X2g43TfdeOYD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-pzEi"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dPZxOY" id="FUaHBlGFCv0AYcmVdtUE">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-nUen" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qtThBv" id="hAz6EF7VpX85BxhaOMkw">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EQmR" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_nDsYHv" id="OdzCdOFoX0jPGe7oxEhl">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -61, -176)` }"
                        >

                <div class="layer-wrap layer-wrap_QFmKHN" id="P8URBJG56y5JPc8rukDw">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -438, -286)` }"
                        >

                <div class="layer-wrap layer-wrap_QHBWpn" id="FJYZrFL8dKTdcRzHfBTI">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -460, -286)` }"
                        >

                    <div class="layer-wrap layer-wrap_njVOpI" id="Z0xtlbKZo43dHdPWXw3I">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberbahd />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NUUSNy" id="muHLnT6Jga1SfRduFvYH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-CXbK">Lux</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OqiBOc" id="lgGWBUcyRSrBM9S8fKMH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-hGxY">室内光照强度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ZEAjsl" id="ifwmT3ogpNYYTnbKDmlI">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -440, -176)` }"
                        >

                    <div class="layer-wrap layer-wrap_maeuiP" id="xRDJ8md617V2pIbZmMWU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberSoTh />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wtraBk" id="aSgePzNHNwccUQZGB1yp">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-WNtR">ppm</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UMHRPq" id="RoZ0tNbTvXAP6AkxEwwJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-nUPB">棚内氧气浓度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WGwEDs" id="WMzk5Wsre8xjclt4bVh9">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -72, -286)` }"
                        >

                <div class="layer-wrap layer-wrap_BOTYgJ" id="s6LwXd0ovBi273Pbn19R">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -72, -286)` }"
                        >

                    <div class="layer-wrap layer-wrap_zwatDS" id="wPTBP6ysEQc8mb1Z3aJF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberIsjE />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_arOwKZ" id="9o8PFZ3bOf1XnNpU5yJq">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-UdAI">0g</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dcVAze" id="Buehfq8LtljwyE7BaF94">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-SRfr">土壤含水量</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_qwcZYk" id="J3pBWLNcbZytM6Wydg7n">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -72, -176)` }"
                        >

                    <div class="layer-wrap layer-wrap_NCdEpH" id="AktZqaibSqXj118lqpA0">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbermfTs />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tetygc" id="y8lF2R6fn0PK9k4ACQiT">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-tkeW">ppm</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_TycSOK" id="CR1e9RC2a5VcF8zUCUdB">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-YthB">棚内二氧化碳浓度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gWEOiP" id="ZcO6OJwQudfrApnOUg8i">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gMLY"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BrpIRl" id="QR1aT23AzJO9ofItcFrU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-IwGQ"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_rulzps" id="UK9ugEQpUZE1GYzm2xBp">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -221, -214)` }"
                        >

                    <div class="layer-wrap layer-wrap_NCPVfC" id="eEqVQQISBUxIlS7HhfhR">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-gDiR"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ECZOCu" id="Bpgo7zqX5ar7Af2fjtwC">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ggPX"></div>
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
                    <div class="layer-wrap layer-wrap_goqqhh" id="MHManhwM5zru25kg0Ilg">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GFMYmB" id="bWcy9QtAX4CJqx3Lsx99">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartOtherRadargTBQ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_uXtIXj" id="nrcTQgeLTSCmdFB4HmXL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-tliM"></div>
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