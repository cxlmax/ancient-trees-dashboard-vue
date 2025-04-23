import { storeToRefs } from 'pinia'
import { usePageStore } from '../../../stores/pageStore'
import { IEvent } from '@shjjs/visual-ui'

/**
 * 执行切换子页面
 * @param event 事件
 */
export const executeSwitchViewAction = (event: IEvent) => {
    try {
        const designerStore = usePageStore()
        const { currentPage } = storeToRefs(designerStore)

        currentPage.value.defaultView = event.switchViewAction.viewId
    } catch (error) {
        console.error('切换子页面错误', error, event)
    }
}