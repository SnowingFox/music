import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
