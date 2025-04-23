// @ts-ignore
import { createApp } from 'vue'

// @ts-ignore
import router from './commons/router'
import pinia from './commons/utils/piniaInstance'

import './commons/styles/reset.scss'

import 'animate.css'

// @ts-ignore
import zerovWidgets from '@shjjs/visual-ui'

import App from './commons/App.vue'

/** 加载组件库样式 */
import '@shjjs/visual-ui/es/widgets.css'

/** 拓展事件解析器 */
import './commons/plugins/event'

createApp(App).use(router).use(zerovWidgets).use(pinia).mount('#app')