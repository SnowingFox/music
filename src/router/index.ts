import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = import('@/views/Recommend/Recommend.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/recommend',
    component: Recommend,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
