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
import ZvCommonsProductModelPYeh from './components/zv-commons-product-model-PYeh/index.vue'
import ZvChartBarPolar2YIGN from './components/zv-chart-bar-polar2-YIGN/index.vue'
import ZvChartBarPolarLJTh from './components/zv-chart-bar-polar-LJTh/index.vue'
import ZvChartBarZebraldWM from './components/zv-chart-bar-zebra-ldWM/index.vue'
import ZvChartBarHorizontalcqja from './components/zv-chart-bar-horizontal-cqja/index.vue'
import ZvTextOverNumberPWCV from './components/zv-text-over-number-PWCV/index.vue'
import ZvGraphicalCircleydHB from './components/zv-graphical-circle-ydHB/index.vue'
import ZvTextOverNumberuSUP from './components/zv-text-over-number-uSUP/index.vue'
import ZvGraphicalCirclezgWp from './components/zv-graphical-circle-zgWp/index.vue'
import ZvChartLineSmoothAreatksK from './components/zv-chart-line-smooth-area-tksK/index.vue'
import ZvTextOverNumberCHCa from './components/zv-text-over-number-CHCa/index.vue'
import ZvTextRealTimeShSN from './components/zv-text-real-time-ShSN/index.vue'
import ZvTextOverNumberksuJ from './components/zv-text-over-number-ksuJ/index.vue'
import ZvTextOverNumberNXjx from './components/zv-text-over-number-NXjx/index.vue'
import ZvTextOverNumberPXKP from './components/zv-text-over-number-PXKP/index.vue'
import ZvTextOverNumberlmFS from './components/zv-text-over-number-lmFS/index.vue'
import ZvTextOverNumbervgzC from './components/zv-text-over-number-vgzC/index.vue'
import ZvTextOverNumbereKpa from './components/zv-text-over-number-eKpa/index.vue'
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
                    <div class="layer-wrap layer-wrap_QfNqJW" id="jr17ogfaVPPpNwZL2JWA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvCommonsProductModelPYeh />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_TyENJV" id="A8NjuzpGCc5XSqndeGtR">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarPolar2YIGN />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rBLtHC" id="Qckre1682Oi7R3Lu95AA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarPolarLJTh />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_URUTMc" id="HRXnmAkGc20jXaqJzZEN">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2048, -670)` }"
                        >

                    <div class="layer-wrap layer-wrap_oOHqGv" id="99eFqe5CZBErZ1W1OpE9">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarZebraldWM />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_awxfIY" id="vPGhpJgOzjlgmvwHjism">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-txqw">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NKJogA" id="rxfCw1ZmZNqzFZgYVSWL">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XEPM"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_JHVbwa" id="fKqAjqqj03gvZPpNMfeH">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2052, -367)` }"
                        >

                    <div class="layer-wrap layer-wrap_qOadrd" id="11QL9Z3k87YceWPZXlfm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartBarHorizontalcqja />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RPNsvI" id="umqsQUfkHAJhoae2xSOg">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-Wqzv">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BKgQPe" id="7OTSyOZ5lyRjseVws9KU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-yRVR"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_uclsTW" id="jQMnzofGZO1rVEyCnHtA">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -2054, -95)` }"
                        >

                    <div class="layer-wrap layer-wrap_rUxZhC" id="ub7ScF1pGhyqtLcXC794">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberPWCV />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lGIitR" id="qwj5GOz38pM7cff8QRnn">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Fkko">数据名称</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SPaygF" id="C2pflBOAZ28qHFaCc4Cp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvGraphicalCircleydHB />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_qeYisg" id="JDWyKVkLNZqHO7jWWFhZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberuSUP />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ToNAUG" id="7Z148j8HXuqalwnWMSVV">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-dWHj">数据名称</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vomvHd" id="8VNBpahaWgBzlg2GLpjk">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvGraphicalCirclezgWp />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oNnKOk" id="JxXF7FUgmK2ECUKat9Iw">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zesA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_docBuE" id="xyYOdZ12E2iIupIcurSZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-rOAW">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RaAjvD" id="frSXFF03vA4SJnMTOnox">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-eFvH"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_gjBgBo" id="HuzHeS9Yv7but3SqwHX0">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -25, -671)` }"
                        >

                    <div class="layer-wrap layer-wrap_UvmEDB" id="kATVywkgpCvQ52BSLyNP">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bbwm" :content="`心脏病`">心脏病</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_OOPKcI" id="8XXQRMa6yrXoa8noOH0L">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-IIVg" :content="`急性阑尾炎`">急性阑尾炎</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FTRimC" id="S55F801kelcJfCp5KP7k">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-nQYN" :content="`肾结石`">肾结石</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xnYIdv" id="EQQ7uA1OfPsbYRvJu2w0">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-segL" :content="`鼻窦炎`">鼻窦炎</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kKkEGQ" id="dflfoKcLXBbW5GqJd0qb">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-swLE" :content="`肺结核`">肺结核</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_mskpRy" id="ttKE5tVwtyoamjyERSDI">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ESil" :content="`糖尿病`">糖尿病</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_vnZeKz" id="MA8ElXFZEvRENopHBmYt">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-tRxB" :content="`高血压`">高血压</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xEmGEP" id="sDi0IkU1FzKhplXzej4N">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Hfun" :content="`胰腺囊肿`">胰腺囊肿</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_CketjD" id="mpAUZTYVAdQtg5R29vBd">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-FYKi">重点疾病
监测</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MLJUQy" id="pvmygReuZoNirOPaJZQl">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-epmr">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lnyUmu" id="WylLnceEPdHMfX50VIB2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-FUug"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_IyZAtl" id="M3iv1ecq3tGBhEAb0NzB">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-HVTS"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_cgRNrC" id="v4RxRBcQvjCMgBsX1f3B">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -53, -368)` }"
                        >

                    <div class="layer-wrap layer-wrap_LkXkso" id="c8cD3CwEJ4WoHDL1w82J">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvChartLineSmoothAreatksK />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_dXoulA" id="QQCaw5pfvpA3cFGZmsVI">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-OvzA">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oedUpr" id="VoucHWUfqIh5SvPhJN7k">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SXuO"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_bnoYRy" id="52v8dNATMw0yQZYyeqtF">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -55, -95)` }"
                        >

                    <div class="layer-wrap layer-wrap_XRJRQJ" id="tGJhjGQrt7rYoFIMyERs">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XEZr">今日收入</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WgqJQx" id="hbGjzvH5WH2nx1ZA7dlM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberCHCa />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MuGzIQ" id="bVfYczBqcKcW2BBKAGHi">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-snru">标题名称</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PecayR" id="AJSP2Gs1ItWvrIg7GpNK">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qJDt"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PaptOz" id="Y06pchkEOxSTNadjZbvN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ebmt"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_JBsulC" id="jS0908kwB9xyofNtJSfz">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextRealTimeShSN />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KaHBiH" id="vQYWyd6p3GoUOds6Sjie">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-jrKu"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tTrjmU" id="7drfruO4T9LAyz9bEdm2">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-XyPD" :content="`智慧医疗大屏模板`">智慧医疗大屏模板</h1>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_pzHhmg" id="nVmFSzacFbCs2G4uq1dI">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -994, 395)` }"
                        >

                    <div class="layer-wrap layer-wrap_NrddmI" id="C2zoVCGCb4iCXpQ9tIb2">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-KtaH">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_prqhmj" id="lr627xlWwPIBmpF976j6">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-GsJF">今日手术人数</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_uOzmGA" id="uHv50BqnimiPsxahIXrD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberksuJ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ZlzHtI" id="pRgm5jo8qPiGY921YkLs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZvKf"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yMPgfk" id="NTXFYSvIUt5lZGLg3DdC">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-iBkH">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RLfjdt" id="e3lFxEHE52hKnjoB1vPH">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-igzf">今日手术人数</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AsolTk" id="4VWi55pfGcaQyP9EbQDj">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberNXjx />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ektydO" id="zqFLfAEoP7fGfA1iA1RB">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-kuOt"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gAnVoc" id="XWo3DOu5KmHxoNaeS6XZ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-NkuE">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FxcgMg" id="lmYyvlUHjtrdLB1m4Hdu">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-XuYd">今日出院人数
</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_eKGILo" id="rRBQ51Kquorrr1cjDIr0">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberPXKP />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ufARIA" id="3oeaFNFl5gRvTpputmxZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-OZVV"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zYcLPQ" id="fPzGT1vLYbTL82KrTM9J">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-kjNt">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rBILiD" id="XHCgTK2KxJLcKAgGPAHz">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-jshs">今日在院人数
</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kpUMYB" id="0yuG6D4HjI1QMNduVSh5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumberlmFS />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FYnhoG" id="kCS2vskXU2ORUiV5dwnA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-vteT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cbvkzJ" id="PD0T5Mw7FHG0ZhsvFQdJ">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-OhlY">重症医疗ICU</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_LTTZfD" id="vUJiuwBsk59Dxry7EQ8z">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-zerx">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Bidrbl" id="CBX0lyNKJUIKxdnlwPM8">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbervgzC />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_DLLAEX" id="9cf3ljPHd4w9CUBNGMpP">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-wTxk"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_BxBRrl" id="iJNloNKqjDOUJwXu5Qx1">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-hvZh">今日门诊人数</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gagWif" id="xclCslRBh7Lg77L43JWR">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-TaXV">人</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ltEhoy" id="Wy6NBaWxmRUZispKTU4V">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvTextOverNumbereKpa />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iffYyN" id="r9U2tILgL6TE6UkfBKGy">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-POqc"></div>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_feUzIC" id="yIlmbNOJxy4vFoYjqvxV">
                    <div class="layer-main">
                        <div class="group"
                            :style="{ transform: `matrix(1, 0, 0, 1, -1124, 217)` }"
                        >

                    <div class="layer-wrap layer-wrap_NGSYgn" id="u7Q2V2Y32AizCnOEEFU5">
                        <div class="layer-main">
                            <div class="layer" >
                                        <h1 class="text-eMtq">智慧医疗</h1>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QCmCze" id="llNzwvLfVItr0cFkVUxh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZvKH"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_iwlOpj" id="FkW1cJDoWp2dMruCixDi">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zbdZ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AoDQtf" id="r43FdwVrzfhXaUAjPGWY">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GTBG"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_geaauL" id="T5zwiOutgSkH8hUUdd4L">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Ngre"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HMZvdz" id="Ud3YUm2TyuXGD6PD4ilS">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-tuBr"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_fJrRJQ" id="utDlXsrEkCrMOZdmsaj5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-rRZf"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_pUQHfI" id="eEt6GjmRdq8aWERNLqDE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-RUwU"></div>
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