import { AxiosPromise } from 'axios'
import { dispatchRequest } from '@/service/base/common'

export function getBanner(): AxiosPromise {
  const url = '/banner'
  return dispatchRequest(url, {}, 'banners')
}

export function getRecommend(): AxiosPromise {
  const url = '/personalized/1/15/'

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
// export function getNewSong(): AxiosPromise {
//   const url = 'top/song'
//
//   addResponseInterceptor('data')
//
//   instance.interceptors.response.use((res) => {
//     const songs: any[] = [[], []]
//     const arr: any[] = [[], []]
//     if (Array.isArray(res)) {
//       ;(res as Array<any>) = res.slice(0, 6)
//       songs[0] = res.slice(0, 3)
//       songs[1] = res.slice(3, 6)
//       for (let index in songs) {
//         for (let song of songs[index]) {
//           arr[index].push(createSong(song))
//         }
//       }
//     }
//     return arr
//   })
//
//   return dispatchRequest(url)
// }
