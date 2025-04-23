import { SHJDatasourceV2 } from '@shjjs/visual-ui'
        import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
            history: createWebHistory('/web'),
routes: [
        {
        path: '/page1',
        name: '古树详情',
        component: () => import('@/page1/index.vue')
        },
        {
        path: '/page2',
        name: '某某监测可视化大屏',
        component: () => import('@/page2/index.vue')
        },
        {
        path: '/page3',
        name: '无标题',
        component: () => import('@/page3/index.vue')
        },
        {
        path: '/page4',
        name: '古树',
        component: () => import('@/page4/index.vue')
        },
        {
        path: '/page5',
        name: '二级页面',
        component: () => import('@/page5/index.vue')
        },
        {
        path: '/page6',
        name: '无标题5',
        component: () => import('@/page6/index.vue')
        }
]
})

router.beforeEach((to, form, next) => {
    SHJDatasourceV2.datasourceTimer.forEach(item => item.timer && clearInterval(item.timer))
    SHJDatasourceV2.datasourceTimer = []

    next()
})

export default router