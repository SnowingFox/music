import { AxiosPromise } from 'axios'
import { dispatchRequest } from '@/service/base/common'
import { addResponseInterceptor } from '@/service/base/interceptor'
import { BitRate } from '@/assets/ts/config/player'

export function getPlaylist(id: string | number): AxiosPromise {
  const url: string = '/playlist/detail'

  return dispatchRequest(
    url,
    {
      params: {
        id,
      },
    },
    'playlist'
  )
}

export async function getAllTrack(id: string | number): Promise<AxiosPromise> {
  const url: string = '/playlist/track/all'
  await setTimeout(() => {})
  return dispatchRequest(
    url,
    {
      params: {
        id,
      },
    },
    'songs'
  )
}

export function getSongUrl(id: string | number): AxiosPromise {
  const url = '/song/url'

  return dispatchRequest(
    url,
    {
      params: {
        id,
        br: BitRate,
      },
    },
    ['data']
  )
}

export function getLyric(currentSong: any): AxiosPromise | Promise<any> {
  const id = currentSong.id
  const url: string = '/lyric/'

  if (currentSong.lyric) {
    return Promise.resolve(currentSong.lyric)
  }

  return dispatchRequest(
    url,
    {
      params: {
        id,
      },
    },
    ['lrc']
  )
}

export function getSongComment(id: number | string, offset: number): AxiosPromise {
  const url = '/comment/music/'
  return dispatchRequest(
    url,
    {
      params: {
        id,
        offset,
      },
    },
    'data'
  )
}

export function getSongDetail(ids: number | string | string[] | number[]): AxiosPromise {
  const url = '/song/detail/'

  return dispatchRequest(
    url,
    {
      params: {
        ids,
      },
    },
    'data'
  )
}
