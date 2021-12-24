import _ from 'lodash'

export function ellipsis(ctx: string, saveCtxLength: number, postfix?: string): string {
  const length = ctx.length

  if (!postfix) {
    postfix = ''
  }
  if (!postfix && length > saveCtxLength) {
    postfix = '...'
  }

  return ctx.slice(0, saveCtxLength) + postfix
}
/**
 *
 * @param artists 作者信息
 * @returns string 作者名字
 */
export function ellipsisArtists(artists: any[]): string {
  const names: string[] = []
  for (let artist of artists) {
    names.push(artist.name)
  }

  return names.join('/')
}

export function warn(msg: string): void {
  console.warn(msg)
}
/*
 * 序列化时间
 *
 * @param time
 * @returns 序列化后的时间格式
 */
export function serializeTime(time: number): string {
  let hours = Math.floor(time / 3600).toString()
  let minutes = Math.floor((time / 60) % 60).toString()
  let seconds = Math.floor(time % 60).toString()

  let serialize: string = `${
    parseInt(hours) > 0 ? hours.padStart(2, '0') + ':' : ''
  }${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`

  return serialize
}

// export function shuffle(list: any[]): any {
//   if (!list.length) {
//     return
//   }
//   let result: any[] = _.cloneDeep(list)
//
//   for (let i = 0; i < list.length; i++) {
//     const randomIndex = getRandom(i, result)
//     swap(result, i, randomIndex)
//   }
//
//   function swap(arr: any[], i: number, j: number): void {
//     let temp: any = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
//
//   return result
// }
// export function getRandom(i: number, list: any[]): number {
//   let randomNum: number = Math.ceil(Math.random() * list.length)
//
//   if (randomNum === i) {
//     randomNum = getRandom(i, list)
//   }
//
//   return randomNum - 1
// }
