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
import ZvTextRealTimeFYan from './components/zv-text-real-time-FYan/index.vue'
import ZvTextOverNumberlqFo from './components/zv-text-over-number-lqFo/index.vue'
import ZvTextOverNumberTPLT from './components/zv-text-over-number-TPLT/index.vue'
import ZvTextOverNumberSYHc from './components/zv-text-over-number-SYHc/index.vue'
import ZvTextOverNumberXYBv from './components/zv-text-over-number-XYBv/index.vue'
import ZvChartBarGradientColumnChartgxfH from './components/zv-chart-bar-gradient-column-chart-gxfH/index.vue'
import ZvChartBarRankjlck from './components/zv-chart-bar-rank-jlck/index.vue'
import ZvTextOverNumbertyhf from './components/zv-text-over-number-tyhf/index.vue'
import ZvTextOverNumberAaUI from './components/zv-text-over-number-AaUI/index.vue'
import ZvTextOverNumberFnNa from './components/zv-text-over-number-FnNa/index.vue'
import ZvTextOverNumberzwSi from './components/zv-text-over-number-zwSi/index.vue'
import ZvChartPieBasicZVEz from './components/zv-chart-pie-basic-ZVEz/index.vue'
import ZvChartPieBasicETrj from './components/zv-chart-pie-basic-ETrj/index.vue'
import ZvChartLineSmoothAreaygTM from './components/zv-chart-line-smooth-area-ygTM/index.vue'
import ZvTextOverNumberZaXf from './components/zv-text-over-number-ZaXf/index.vue'
import ZvTextOverNumberpaBO from './components/zv-text-over-number-paBO/index.vue'
import ZvTextOverNumberXdhw from './components/zv-text-over-number-Xdhw/index.vue'
import ZvTextOverNumberRfzs from './components/zv-text-over-number-Rfzs/index.vue'
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
                    <div class="layer-wrap layer-wrap_rdtwYJ" id="2LLQOwA8ZH0Zliae41vp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-soDv"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OehghG" id="wjbCJIflmMEhqrq8NxCH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Luwp"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NLjMan" id="SsuuCYuC89Xm8ujjsjol">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -37, -33)` }"
                        >

                    <div class="layer-wrap layer-wrap_zvPtVc" id="oQ2qcsuuAlgYxWivGUqt">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-SXEg">晴  25℃   湖北省武汉市</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OvMuyu" id="GYjeCN0XnHIPgR5KTedH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimeFYan />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gEeNsq" id="RCQVpAP2mLDituUnqZu6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qgvA"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_jmnRiU" id="bScXe2G4lGK7KVILxLRm">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2, -1013)` }"
                        >

                <div class="layer-wrap layer-wrap_MKYncm" id="jYbpwR0gszB8G5WbITmG">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -940, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_MCRhXB" id="cwA9uWr2qMVaK52VYtgd">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-JlUi">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HcCfRa" id="qOi1pyqBq7XMpd47oVgW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-eWhf"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CfKdgr" id="6RcACWMx42fGelLSIj0L">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1461, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_nAGPqi" id="F79hQA0hgdXCJPdH6BTN">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-DIbE">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kBKoFm" id="phHbYxfsMHxXcdGX58tv">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QOAf"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_dYoAKa" id="dJKy061fFMRtbinDvxq4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1287, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_WTLcBE" id="H0abgnovvnpZ4Ygo9grZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-sEBK">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OdFGHT" id="Z0sKx45MmlQP8VWIqXtD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Oxlg"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TxefGh" id="JVmqcrUJYB2B6rNXcngR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1114, -1025)` }"
                        >

                    <div class="layer-wrap layer-wrap_HinOEo" id="0sLG56tnFrBiXsijI9qs">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-TSXr">选择按钮</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yumoUf" id="gZXwEc7AYt1EF6iPSAzA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-smOo"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_uoobjL" id="eptUSPLlXQay7bt7F6GE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ASdP"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WjYRPu" id="wIeIBnlIZKJgeRHEKDQF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_ZzTSAR" id="xZmv6OejRq1gdoZhm3ks">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -100)` }"
                        >

                <div class="layer-wrap layer-wrap_UnUfWo" id="C36EkO2WhxlBwGnZCPcR">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_tJdanY" id="EH9nTUsxH80j5Y7ciG9v">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-IRST"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_kJrRrD" id="IgvEc02y0lRk6qpSHGvA">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_beKkjx" id="8MNRisjedeSyvtTj8MBs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vDEm"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NOMGkl" id="Nuwvc6zWwP2DhbJd4yr0">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-IbeU"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_pZyMYv" id="S4zeKTYK6x6bYPJMLPX6">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                <div class="layer-wrap layer-wrap_XHKZYA" id="Q72Iq4YJoxgInwpOoQCz">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                    <div class="layer-wrap layer-wrap_dWWZmV" id="YmCCfW2UZenxYqM9ekhc">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberlqFo />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_IbvLDE" id="npFJ4tJ2GYawgsys9KAr">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-CRgH">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vcYxfH" id="HfZu3vlSbJ814F56I8VJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EVtO">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_pyeVRa" id="EPzVUFuv1rt4ihqJ71Ck">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-cybL"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_BJTNJu" id="9XiknBBOdNGzOqXvWG5r">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_fRMElo" id="tvhpbbmXQu12qjJO6Hah">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-lPZM"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TesrmY" id="MFpSO32P0B6U2G2sektF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_IVehpG" id="TX39zdMbXKTlDB8c5N16">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-cYse"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AJvvMJ" id="FAo37BHAeQxgh5e8GGtS">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-EvyW"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NHHbQR" id="AXt3wcYlYAoqPeymLmMF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                <div class="layer-wrap layer-wrap_GrEzXU" id="vVzUPKu0onDUa3AnFlpj">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                    <div class="layer-wrap layer-wrap_xocbiV" id="X5AJ0M1Rgcr1y7J3u0R7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberTPLT />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_YHhLkZ" id="YHohvPHTU51l5dSsQkdL">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-depK">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_EpgRuK" id="I62sIxE3TG611pCG5r0X">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-zcwR">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ljNakH" id="BNKFeqcFob6mWycEZZxT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GnFO"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_JVEfrY" id="32D1R8PGaaZ2qdxJz1h0">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_rKPgBr" id="cxIBqZJ8NjzUcW2uNZAT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Omry"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WKZtzp" id="eHuJCeOKCPvqB35ZX38a">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_nRkGpW" id="tLCauc9IRzYhc61cQrsa">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-AMcX"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_amXzoV" id="JDUSjGvGEdjNMhXO92up">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SuyB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_QFNXeE" id="Bh51LYNjWTtUSG0tCWkb">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                <div class="layer-wrap layer-wrap_oALTve" id="FTy9mCd6FX9kam258x4l">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                    <div class="layer-wrap layer-wrap_mGCLjA" id="xqtN5sijmnRQp3035Y2f">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberSYHc />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FgRpRM" id="hLH7iq8ciK7NqLLVTHgX">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-isNk">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oqwMRv" id="zbGoNSjrDF4zmKM3zAAH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-koXr">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tGtpmb" id="eZsIt8K60MJqTxq8QxnY">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YutT"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tvxstt" id="ffD23tawHY8ZyUOwQBE3">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1977, -100)` }"
                        >

                    <div class="layer-wrap layer-wrap_sqkvsG" id="46qt4yllgactlNEraNnW">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WHmz"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gWFdQn" id="GtwS7ufi8DwWCU5lqef6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-MUKP" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mSXJOt" id="mzcbXwIQvhWtmhfYxXvE">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-kVFO" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_YPLaSv" id="9ZqDXNDUfUjq3k14oLpl">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_exyuTS" id="wtRbp46xo4gnkAeDJ5Bw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mrgS"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_OwJQMl" id="CeVHXQXoOTZihouqW6uX">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1887, -156)` }"
                        >

                    <div class="layer-wrap layer-wrap_XpXWPD" id="QmqHXwyj2VyXpPI24t84">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-EAZd"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KSCVGe" id="b7OWVxEEAISFMww1KyrS">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zOsU"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_qUDAHd" id="sLuaWfS6yu4qcNSlNCEr">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                <div class="layer-wrap layer-wrap_KsfQOV" id="XmjGxbQqvxcTLU7cHl6U">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2103, -161)` }"
                        >

                    <div class="layer-wrap layer-wrap_EVupmd" id="b7oyX1XdSeHcO6TCuZmU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberXYBv />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OgxwsV" id="uSFHkx88DtoYSBJnTq4X">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-kXFe">单位</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wnAjSB" id="0JDcE4FlqFscTmo2FgSA">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-pszJ">数据一</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_aHzOQf" id="FQkuQOiJlsmSlJqDl0Nx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZBBk"></div>
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
                <div class="layer-wrap layer-wrap_uFskZS" id="MbbkmGMsCv8IHuH6qlQa">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1977, -759)` }"
                        >

                    <div class="layer-wrap layer-wrap_nXFGCD" id="2T20O09BxuduvTGVBxp7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarGradientColumnChartgxfH />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_MHZAAD" id="QSMa3cguxQkmhNYM3CZP">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1977, -759)` }"
                        >

                    <div class="layer-wrap layer-wrap_vFTwid" id="0dT86GFjcGbw800FiKRz">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TLHZ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hrxHaU" id="sgVLABxoeRT4SPpxvaVu">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-aTYV" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dQRLpH" id="726hGuD0xeEKKdezZht1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-vPii" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_uTXZdb" id="Ju1BNJe6KZJEdo5WqlJE">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1977, -413)` }"
                        >

                    <div class="layer-wrap layer-wrap_QOpGpt" id="3vhQjqxf0Cu8GNpT2nRO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarRankjlck />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ApZwyL" id="IfUbrJNvzPanp9niq79Z">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1977, -413)` }"
                        >

                    <div class="layer-wrap layer-wrap_TpyUxa" id="2UMTyv3Fe5Cyw6zS5iwp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-eNCe"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qSEkzI" id="4FgsO9nwpc828WCT0KLT">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-brMX" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yZMoVt" id="IGvAtYTIF093fVuigJE7">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-UFyI" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nueBqi" id="8XYdD5th4AzRGuWtVT41">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_cXJJMZ" id="aPVqn2fYI7FLFVYJZWLo">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -82)` }"
                        >

                <div class="layer-wrap layer-wrap_ZeyhsT" id="xKTvYpCDYlui27MI2C8r">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -754)` }"
                        >

                <div class="layer-wrap layer-wrap_KPYwfP" id="QbStzrupPlFcUfBjp67O">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -50, -754)` }"
                        >

                    <div class="layer-wrap layer-wrap_bISauR" id="v8m5RXdj7VdOt5KR5ySD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-lORw"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vFlxby" id="OQMK9PvASRxrsAJyDtQJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-GjEn" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VYiRUC" id="pqoypcyug6d5lJiSWSyG">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-BdSR" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WKQZUX" id="L2qa8AnUhlvpRvTcRpZm">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 45, -772)` }"
                        >

                <div class="layer-wrap layer-wrap_HFUtbT" id="MVPxiOH7c4WwN0ut5d4M">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -977)` }"
                        >

                    <div class="layer-wrap layer-wrap_oeaImU" id="8K6HiNlckBV7E0wyYvjb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbertyhf />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xDRPFG" id="UlBu4H4eGEudB4xwN3dL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-rZPz"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CAPSCP" id="eOyidUaALFhTrStce9WT">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -962)` }"
                        >

                    <div class="layer-wrap layer-wrap_PILCJZ" id="bAfqNaFBYyRLdC1wOj2Q">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberAaUI />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BIRQmG" id="y89ok91GkKQjAGM40krL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-axlj"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CQJGpO" id="wznMydx3d7QlM8SEuy2K">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -908)` }"
                        >

                    <div class="layer-wrap layer-wrap_PopgGg" id="pbz8FfQS68QQU5MwV7nH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberFnNa />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_fLCXXx" id="wr98PJgWqxTwvqQKdq17">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mYPT"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_mauZlp" id="mpXqghDcq3AadSLLbg64">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -352, -855)` }"
                        >

                    <div class="layer-wrap layer-wrap_gspiiX" id="JIiVVRU74wHfwOKe7As8">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberzwSi />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VpkuWe" id="ZLQO1MdwnawhGvh1YLfI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WKmW"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_shVACT" id="MmEAkrJl2bU3GdkD4uSm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-yWzL"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hilABS" id="iJ4lOCPgYG1ad930mh66">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xnfo"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Yzvbvq" id="3RDIRGY9RrnBCxxdwTIm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasicZVEz />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MJGDFw" id="64l2wCI2q2Jyu5BvgnBs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartPieBasicETrj />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_VfqJQd" id="aEnTQBRGCM8LuCRFzmg4">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -614, -362)` }"
                        >

                    <div class="layer-wrap layer-wrap_RFkpLT" id="Gqp9HivLet9xd4nT94dN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartLineSmoothAreaygTM />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_TMkTJW" id="G63MXSs3i7EeUqpeWurK">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -614, -362)` }"
                        >

                    <div class="layer-wrap layer-wrap_CKKihs" id="ozLbHRafSe68JYRwKQuw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-eNFd"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_LeZKLR" id="MHdqWsHH8SAaiLtSgm65">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-KZCb" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NNnUrp" id="96kWHm742BDaojn3TjC1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-RtaX" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_WyVYhX" id="FQclEnwnGN4FamYgSQyy">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -94)` }"
                        >

                <div class="layer-wrap layer-wrap_hvROHm" id="CVhgVS5WHKy0T5ZLv2B6">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -94)` }"
                        >

                    <div class="layer-wrap layer-wrap_rkWbbG" id="oAT4YNsDaU0TMY5epCa6">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ftxl"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zyacBq" id="6CuLqtfQRwS9RxBwSX0Q">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-lUmc" :content="`ZHIHUINONGYE`">ZHIHUINONGYE</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hTtkGm" id="0u4GWZ6TWgRef5HYntNh">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-sVZC" :content="`小标题`">小标题</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_Rvnejm" id="ifqn6lcHpIqaB2tnGWQT">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -60, -177)` }"
                        >

                <div class="layer-wrap layer-wrap_GiVwLM" id="4vYIyyQdj5UPyMLFjWZo">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -430, -286)` }"
                        >

                <div class="layer-wrap layer-wrap_JmbdCF" id="cxB9ZSTGTo1wBqyAODtU">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -450, -286)` }"
                        >

                    <div class="layer-wrap layer-wrap_yJErPu" id="5TaVK4vZ6bjGf7nrVY21">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberZaXf />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lffaEn" id="KeL9XQMmMKzdiEDBeXFW">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-rXfm">Lux</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CpSfmq" id="aUuMSZJSpmaEhF75eawW">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-riGB">室内光照强度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_aJWIUC" id="L4tGAF0peTc0OXNDIare">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -440, -208)` }"
                        >

                    <div class="layer-wrap layer-wrap_tSvbvH" id="SquJJ7PGcowM8xRJia5n">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberpaBO />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XTTRav" id="WmOuvTheh7MDCd8UtAF5">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-vpWV">ppm</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OEnCgi" id="HJOJ0sc28St4aAEFUBg5">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-gIQy">棚内氧气浓度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AIChra" id="Ioj4sGaDXnOzMPJWXkVJ">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -65, -285)` }"
                        >

                <div class="layer-wrap layer-wrap_RFUwrR" id="AoiFhsSjwxRpPtqhaNmW">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -65, -285)` }"
                        >

                    <div class="layer-wrap layer-wrap_tmevWU" id="qFFvE9R4prHjhc9YhKr2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberXdhw />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jNJHYH" id="VFKrLo7S4Duz5GFEvJ7t">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-EQSZ">0g</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rxPXUV" id="bCKJ6tmkca9D499yX2P4">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-aRTy">土壤含水量</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_hFynAU" id="kJV97gIyJsA6fizw9o3m">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -65, -177)` }"
                        >

                    <div class="layer-wrap layer-wrap_IWUFIp" id="0oZT9DtaSLzXqAHNq4cD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberRfzs />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JREtRG" id="qVOEPfEr8GjXdkMPXnlw">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-aqoT">ppm</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mimdyl" id="bCti4HB9UsFuwFty39Rs">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-mfXM">棚内二氧化碳浓度</p>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oJsGJQ" id="ql0BOhTuXqt91zRZQVN1">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-DFyG"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CSzIvZ" id="SgKMOJA9KTeIB4kUCy0J">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-fjEY"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_UWRsOm" id="SnV0eGKCbbuIQyatjl84">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -221, -214)` }"
                        >

                    <div class="layer-wrap layer-wrap_oOzQPI" id="kmkee6vgzHixYsZvcY62">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VPSW"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qIWuql" id="tkRk3MJxP5kpKGKQWabx">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ivil"></div>
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
                    <div class="layer-wrap layer-wrap_zgdQye" id="AWzbCXgWKH7AI74gP8LN">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_PiksLJ" id="sML2tYzDm32v6mFjc2s1">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, 0, 0)` }"
                        >

                    <div class="layer-wrap layer-wrap_ioDKzg" id="SGVZKOoK5sbubb8iPzY2">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-Oplx" :content="`智慧农业监测可视化大屏`">智慧农业监测可视化大屏</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hdZhqk" id="GwMaRv3OiKCIU6ij8782">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-OQIh"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vcEWSv" id="Uq2lapSf14GGSpQASEPE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XXWW"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XRGLzz" id="5SI40aPoejwX155Ght2O">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qlbE"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tsWgpR" id="hO70gvoWxAaMJPoMA9Jn">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vwMT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MNtcLw" id="ODjrSGE6kfXuWfEUrMB3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZcYI"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JfFwLh" id="Bz03jimsYJktGn3FNRsv">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Puxi"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_woFQqX" id="PjxWcKBdPH532B1anBZ9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PlQB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NXfsOz" id="ArOWtbuWwacGd9F1P4d9">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gsakfU" id="fGzU6pJTHpYShcWZvE6B">
                        <div class="layer-main">
                            <div class="layer" >
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