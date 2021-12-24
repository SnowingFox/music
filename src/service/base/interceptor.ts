import { instance } from '@/service/base/base'
import { throwIfNoData } from '@/service/base/common'

export function addResponseInterceptor<T = any>(property: string[] | string): void {
  instance.interceptors.response.use((res) => {
    let data: any = res.data
    if (typeof property === 'string') {
      property = [property]
    }

    if (typeof data === 'undefined') {
      return data
    }

    property.forEach((key) => {
      if (typeof data[key] === 'undefined') {
        return data
      }
      data = data[key]
    })
    return data
  })
}
