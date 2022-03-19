import { request } from '@/service/base'

export function getBanner() {
  return request({
    url: '/banner',
    params: {
      type: 1,
    },
  })
}
