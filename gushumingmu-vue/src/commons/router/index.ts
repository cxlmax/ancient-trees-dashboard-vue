import { SHJDatasourceV2 } from '@shjjs/visual-ui'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/web'),
    routes: [
        {
            path: '/',
            redirect: '/page2'
        },
        {
            path: '/page2',
            name: '古树名木智慧大屏',
            component: () => import('@/page2/index.vue')
        },
        {
            path: '/page4',
            name: '古树',
            component: () => import('@/page4/index.vue')
        }
    ]
})

router.beforeEach((to, form, next) => {
    SHJDatasourceV2.datasourceTimer.forEach(item => item.timer && clearInterval(item.timer))
    SHJDatasourceV2.datasourceTimer = []

    next()
})

export default router