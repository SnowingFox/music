/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  import { Options } from 'better-scroll'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
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
