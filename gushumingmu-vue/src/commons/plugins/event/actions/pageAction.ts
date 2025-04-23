import { DataSourceUtils, EventUtils, IEvent } from '@shjjs/visual-ui'

import router from '../../../router'

/**
 * 执行页面跳转
 * @param event 事件
 * @param params 参数
 * @returns
 */
export const executePageAction = (event: IEvent, params: any) => {
    const { pageAction } = event

    const variableData = DataSourceUtils.getVariableData()
    const parameter = DataSourceUtils.replaceStringVariables(pageAction.parameter, variableData)
    const query = parameter ? EventUtils.urlParamToJson(parameter) : null

    router.replace({ path: pageAction.target, query })
}