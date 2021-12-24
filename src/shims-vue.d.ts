/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'lyric-parser' {
  class Lyric {
    constructor(lrc: string, handler: (params: { lineNum: number; txt: string }) => void)

    lrc: string
    tags: { album: string; artist: string; by: string; offset: string; title: string }
    lines: Array<{ time: number; txt: string }>
    handler: (params: { lineNum: number; txt: string }) => void
    state: number
    curLine: number

    play(startTime: number, skipLast?: boolean): void

    togglePlay(): void

    stop(): void

    seek(offset: number): void
  }

  export = Lyric
}

declare interface PointerEvent extends MouseEvent {
  readonly height: number
  readonly isPrimary: boolean
  readonly pointerId: number
  readonly pointerType: string
  readonly pressure: number
  readonly tangentialPressure: number
  readonly tiltX: number
  readonly tiltY: number
  readonly layerX: number
  readonly layerY: number
  readonly twist: number
  readonly width: number
}
