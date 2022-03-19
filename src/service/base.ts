import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ServiceConfig } from '@/shared/config'
import { addInterceptor, getResponseDataInterceptor } from '@/service/interceptors'

export function createInstance(config: AxiosRequestConfig = {}) {
  const instance = axios.create(config)
  addInterceptor(instance, { response: getResponseDataInterceptor })

  return instance
}

const baseInstance = createInstance({ baseURL: ServiceConfig.baseURL })

export function request(config: AxiosRequestConfig = { method: 'get' }): Promise<any> {
  if (!config.method) {
    config.method = 'get'
  }

  return baseInstance(config)
}
