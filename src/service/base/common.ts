import request, { instance } from '@/service/base/base'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { addResponseInterceptor } from './interceptor'

export function dispatchRequest<T = any>(
  url: string,
  config?: AxiosRequestConfig,
  property?: string | string[]
): AxiosPromise {
  // @ts-ignore
  // 请求之前删除之前所有的response拦截器
  const handlers = instance.interceptors.response.handlers

  for (const id in handlers) {
    instance.interceptors.response.eject(parseInt(id))
  }
  if (property) {
    addResponseInterceptor(property)
  }

  return request<T>(url, config)
}

export function throwIfNoData(): void {
  throw new Error('No data')
}
