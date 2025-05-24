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
/** 导入自定义组件 */
import ZvChartBarRankcLAz from './components/zv-chart-bar-rank-cLAz/index.vue'

/** 动态自适应分辨率 */
const { pageRef, transform } = useAutoSize1(1920, 920, true)
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
            <!-- 背景场景 -->
            <bg-scene></bg-scene>
            
            <!-- 整体网格布局容器 -->
            <div class="dashboard-grid">
                <!-- 页面标题区域 - 跨越所有列 -->
                <div class="header-container">
                    <div class="header-title">古树名木智慧监测系统</div>
                    <div class="header-time">{{ new Date().toLocaleString() }}</div>
                </div>
                
                <!-- 左侧面板区域 -->
                <!-- 古树分布统计 -->
                <div class="panel-item panel-tree-distribution">
                    <div class="panel-header">
                        <div class="panel-title">古树分布统计</div>
                    </div>
                    <div class="panel-content">
                        <!-- 使用排行榜图表组件 -->
                        <ZvChartBarRankcLAz />
                    </div>
                </div>
                
                <!-- 古树种类统计 -->
                <div class="panel-item panel-tree-types">
                    <div class="panel-header">
                        <div class="panel-title">古树种类统计</div>
                    </div>
                    <div class="panel-content">
                        <!-- 这里将放置古树种类统计图表组件 -->
                    </div>
                </div>
                
                <!-- 古树年龄分布 -->
                <div class="panel-item panel-tree-age">
                    <div class="panel-header">
                        <div class="panel-title">古树年龄分布</div>
                    </div>
                    <div class="panel-content">
                        <!-- 这里将放置古树年龄分布图表组件 -->
                    </div>
                </div>
                
                <!-- 中间区域 - 地图或3D模型展示 -->
                <div class="panel-item panel-map">
                    <div class="panel-content">
                        <!-- 这里将放置地图或3D模型组件 -->
                    </div>
                </div>
                
                <!-- 下方数据概览 - 跨越中间区域 -->
                <div class="bottom-overview">
                    <div class="overview-item">
                        <div class="overview-num">1280</div>
                        <div class="overview-label">古树总数</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-num">56</div>
                        <div class="overview-label">监测点位</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-num">12</div>
                        <div class="overview-label">预警数量</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-num">98%</div>
                        <div class="overview-label">健康率</div>
                    </div>
                </div>
                
                <!-- 右侧面板区域 -->
                <!-- 环境监测数据 -->
                <div class="panel-item panel-environment">
                    <div class="panel-header">
                        <div class="panel-title">环境监测数据</div>
                    </div>
                    <div class="panel-content">
                        <!-- 这里将放置环境监测数据组件 -->
                    </div>
                </div>
                
                <!-- 生长状态监测 -->
                <div class="panel-item panel-growth">
                    <div class="panel-header">
                        <div class="panel-title">生长状态监测</div>
                    </div>
                    <div class="panel-content">
                        <!-- 这里将放置生长状态监测组件 -->
                    </div>
                </div>
                
                <!-- 预警信息 -->
                <div class="panel-item panel-warning">
                    <div class="panel-header">
                        <div class="panel-title">预警信息</div>
                    </div>
                    <div class="panel-content">
                        <!-- 这里将放置预警信息组件 -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url(./resources/scss/page.scss);

.shj-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  
  .shj-page-content {
    width: 1920px;
    height: 920px;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0;
    color: #fff;
  }
  
  // 使用Grid布局的主容器
  .dashboard-grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 450px 940px 450px; // 左中右三列布局
    grid-template-rows: 80px repeat(3, 260px); // 顶部标题 + 3行内容
    grid-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #161B24;
  }
  
  // 页面标题区域 - 跨越所有列
  .header-container {
    grid-column: 1 / span 3; // 从第1列开始，跨越3列
    grid-row: 1; // 第一行
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background: linear-gradient(90deg, rgba(31, 55, 104, 0.8), rgba(16, 29, 55, 0.6));
    border-bottom: 1px solid rgba(65, 106, 166, 0.5);
    box-shadow: 0 0 20px rgba(0, 180, 255, 0.2);
    z-index: 10;
    margin: -20px -20px 0 -20px; // 抵消padding，使标题区域占满宽度
    width: calc(100% + 40px); // 补偿左右padding
    
    .header-title {
      font-size: 32px;
      font-weight: bold;
      color: #ffffff;
      font-family: 'AlimamaShuHeiTi-Bold', sans-serif;
      text-shadow: 0 0 10px rgba(58, 139, 255, 0.5);
    }
    
    .header-time {
      font-size: 18px;
      color: #a8c6ff;
      font-family: 'HarmonyOS_Sans_TC-Regular', sans-serif;
    }
  }
  
  // 左侧面板 - 古树分布统计
  .panel-tree-distribution {
    grid-column: 1; // 第1列
    grid-row: 2; // 第2行
  }
  
  // 左侧面板 - 古树种类统计
  .panel-tree-types {
    grid-column: 1; // 第1列
    grid-row: 3; // 第3行
  }
  
  // 左侧面板 - 古树年龄分布
  .panel-tree-age {
    grid-column: 1; // 第1列
    grid-row: 4; // 第4行
  }
  
  // 中间区域 - 地图或3D模型展示
  .panel-map {
    grid-column: 2; // 第2列
    grid-row: 2 / span 2; // 从第2行开始，跨越2行
    height: auto; // 高度由Grid控制
  }
  
  // 下方数据概览
  .bottom-overview {
    grid-column: 2; // 第2列
    grid-row: 4; // 第4行
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 均分为4列
    grid-gap: 15px;
    
    .overview-item {
      background: rgba(16, 29, 55, 0.5);
      border: 1px solid rgba(65, 106, 166, 0.5);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .overview-num {
        font-size: 36px;
        font-weight: bold;
        color: #3a8bff;
        margin-bottom: 10px;
        font-family: 'HarmonyOS_Sans_TC-Regular', sans-serif;
      }
      
      .overview-label {
        font-size: 16px;
        color: #a8c6ff;
        font-family: 'SourceHanSansSC-Regular', sans-serif;
      }
    }
  }
  
  // 右侧面板 - 环境监测数据
  .panel-environment {
    grid-column: 3; // 第3列
    grid-row: 2; // 第2行
  }
  
  // 右侧面板 - 生长状态监测
  .panel-growth {
    grid-column: 3; // 第3列
    grid-row: 3; // 第3行
  }
  
  // 右侧面板 - 预警信息
  .panel-warning {
    grid-column: 3; // 第3列
    grid-row: 4; // 第4行
  }
  
  // 面板通用样式
  .panel-item {
    background: rgba(16, 29, 55, 0.5);
    border: 1px solid rgba(65, 106, 166, 0.5);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 180, 255, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    .panel-header {
      height: 40px;
      background: linear-gradient(90deg, rgba(31, 55, 104, 0.9), rgba(16, 29, 55, 0.7));
      display: flex;
      align-items: center;
      padding: 0 15px;
      
      .panel-title {
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        position: relative;
        padding-left: 15px;
        font-family: 'SourceHanSansSC-Bold', sans-serif;
        
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 16px;
          background: #3a8bff;
          border-radius: 2px;
        }
      }
    }
    
    .panel-content {
      padding: 15px;
      flex: 1;
      overflow: hidden;
      position: relative; /* 为内部绝对定位元素创建定位上下文 */
    }
  }
}
</style>
