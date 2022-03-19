import { request } from '@/service/base'

// 全局组件请求API

export function getRecommendSearchWords() {
  return request({
    url: '/search/hot',
  })
}
