import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeVideo from '@/views/home-video/home-video.vue'
import HomeVillage from '@/views/home-village/home-village.vue'
import Mine from '@/views/mine/Mine.vue'
import Recommend from '@/views/recommend/Recommend.vue'
import MusicList from '@/views/music-list/music-list.vue'
import Comment from '@/components/comment/Comment.vue'
import * as process from "process";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/recommend',
    component: Recommend,
  },
  {
    path: '/homevideo',
    component: HomeVideo,
  },
  {
    path: '/homevillage',
    component: HomeVillage,
  },
  {
    path: '/musiclist/:id',
    components: {
      transformInOut: MusicList,
    },
  },
  {
    path: '/comment/:id',
    components: {
      transformInOut: Comment,
    },
    beforeEnter: (to, from) => {
      const id = to.params.id
      if (isNaN(Number(id))) {
        return {
          path: from.fullPath,
        }
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
