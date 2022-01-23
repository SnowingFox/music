import { AxiosPromise } from 'axios'
import { dispatchRequest } from '@/service/base/common'

export function getBanner(): AxiosPromise {
  const url = '/banner'
  return dispatchRequest(url, {}, 'banners')
}

export function getRecommend(): AxiosPromise {
  const url = '/personalized/'

  return dispatchRequest(
    url,
    {
      params: {
        limit: 6,
      },
    },
    'result'
  )
}
