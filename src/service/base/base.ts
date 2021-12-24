import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import config from '@/assets/ts/config/service'

export const instance = axios.create({
  baseURL: config.baseURL,
})

export default function request<T = any>(url: string, options?: AxiosRequestConfig): AxiosPromise {
  return instance.get<T>(url, options)
}
