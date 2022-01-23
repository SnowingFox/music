import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import config from '@/assets/ts/config/service'
import { getCurrentScope } from 'vue'
import throwError from '@/shared/utils/error'

const baseURL = config.baseURL

export function useAxios(url: string, params?: any, property?: string | string[]): any {
  if (!getCurrentScope()) {
    throwError('你不能在Vue实例之外调用Axios', 'useAxios')
  }

  let instance: AxiosInstance
  let data: any

  if (typeof property === 'string') {
    property = ['data', property]
  } else if (typeof property === 'undefined') {
    property = ['data']
  }

  instance = axios.create({
    baseURL,
    method: 'get',
    params,
  })

  instance(url).then((res) => {
    data = res
    ;(property as string[]).forEach((pro) => {
      data = data[pro]
    })
  })

  return {
    data,
  }
}
