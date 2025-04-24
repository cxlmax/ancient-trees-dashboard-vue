<template>
  <div class="left-card" ref="cardRef">

      <v-chart ref="vChart" :option="option" :autoresize="true" />

  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";

import VChart from "vue-echarts";
const cardRef = ref(null);
const height = ref(280);
const names = [
  "pH值(6.3)",
  "水分(60%)",
  "有机质(3%)",
  "氮含量(150mg/kg)",
  "磷含量(15mg/kg)",
  "钾含量(160mg/kg)",
];
const values = [63, 60, 30, 75, 15, 80];
const maxValue = 100;
const maxData = new Array(names.length).fill(maxValue);
const dataStyle = [
  {
    value: 0,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0, color: "rgba(3,65,128,1)" },
        { offset: 1, color: "rgba(115,208,255,1)" },
      ]),
    },
  },
  {
    value: 0,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0, color: "rgba(11, 77, 44, 1)" },
        { offset: 1, color: "rgba(77, 255, 181, 1)" },
      ]),
    },
  },
  {
    value: 0,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0, color: "rgba(117, 117, 117, 1)" },
        { offset: 1, color: "rgba(230, 230, 230, 1)" },
      ]),
    },
  },
  {
    value: 0,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0, color: "rgba(153, 105, 38, 1)" },
        { offset: 1, color: "rgba(255, 200, 89, 1)" },
      ]),
    },
  },
];
const option = ref({
  grid: {
    left: "5%",
    top: "10%",
    width: "90%",
    height: "86%",
  },
  legend: {
    top: "8%",
    icon: "circle",
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      color: "#90979c",
      fontSize: 12,
      lineHeight: 20,
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      shadowStyle: { opacity: 0.2 },
    },
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#999999",
    textStyle: {
      color: "#ffffff",
      fontSize: 10,
      lineHeight: 156,
    },
  },
  color: ["#6BC7F6", "#44E6A2"],
  xAxis: [
    {
      type: "value",
      interval: 0,

      axisLine: {
        show: false,
        lineStyle: {
          color: "#407A80",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: "#ABCCFF",
        fontSize: 10,
        interval: 0,
        fontFamily: "SourceHanSansSC-Bold",
        fontWeight: "bold",
      },
    },
  ],

  yAxis: [
    {
      type: "category",
      inverse: true,
      axisLabel: {
        color: "#ABCCFF",
        fontSize: 15,
        interval: 0,
        show: false,
        verticalAlign: "top",
        fontFamily: "SourceHanSansSC-Bold",
        fontWeight: "bold",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      data: names,
    },
    {
      inverse: true,
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(0,0,0,0)",
        },
      },
      data: [],
    },
  ],
  color: [
    "rgba(115,208,255,1)",
    "rgba(77, 255, 181, 1)",
    "rgba(230, 230, 230, 1)",
    "rgba(255, 200, 89, 1)",
  ],
  series: [
    {
      data: [],
      type: "bar",
      barWidth: 7,
      yAxisIndex: 0,
      showBackground: false,
      z: 2,
      label: {
        show: true,
        position: "middle",
        padding: [-18, 0, 0, 0],
        color: "#16C1A6",
        fontSize: 15,
        formatter: "{title|{b}} ",
        fontFamily: "SourceHanSansSC-Bold",
        fontWeight: "bold",
        rich: {
          title: {
            color: "#D9D9D9",
            fontSize: 15,
            fontFamily: "SourceHanSansSC-Bold",
            fontWeight: "bold",
            padding: [0, 288, 0, 0],
          },
          value: {
            fontSize: 16,
            width: 50,
            align: "right",
            padding: [0, 0, 0, 0],
          },
        },
      },
      itemStyle: {
        borderRadius: 0,
        borderWidth: 2,
        borderColor: "rgba(26, 57, 77,1)",
      },
    },
    {
      name: "",
      type: "bar",
      yAxisIndex: 1,
      barGap: "-100%",
      data: maxData,
      barWidth: 10,
      z: 0,
      itemStyle: {
        color: "none",
        borderColor: "rgba(172,191,188,0.4)",
        borderWidth: 1,
        borderRadius: 0,
      },
    },
  ],
});
// 获取Series数据
function getSeriesData() {
  let data = [];
  values.forEach((value, index) => {
    // 使用不同颜色的样式
    const styleIndex = index % dataStyle.length;
    const item = {
      value: value,
      itemStyle: dataStyle[styleIndex].itemStyle
    };
    data.push(item);
  });
  return data;
}

// 设置图表数据
function setOptionsData() {
  option.value.series[0].data = getSeriesData();
}

onMounted(() => {
  setOptionsData();
});
onBeforeUnmount(() => {});
</script>

<style lang="scss"></style>
