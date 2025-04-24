/**
 * 绘制3d图
 * @param pieData 总数据
 * @param option 配置项
 * @param internalDiameterRatio:透明的空心占比
 * @param distance 视角到主体的距离
 * @param alpha 旋转角度
 * @param pieHeight 立体的高度
 * @param opacity 饼或者环的透明度
 */
declare const getPie3D: (pieData: any, option: any) => any;
/**
   * 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
   */
declare const getParametricEquation: (startRatio: any, endRatio: any, isSelected: any, isHovered: any, k: any, h: any) => {
    u: {
        min: number;
        max: number;
        step: number;
    };
    v: {
        min: number;
        max: number;
        step: number;
    };
    x: (u: any, v: any) => number;
    y: (u: any, v: any) => number;
    z: (u: any, v: any) => number;
};
export { getPie3D, getParametricEquation };
