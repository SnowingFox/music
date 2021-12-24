import { useStore } from 'vuex'
import { computed } from 'vue'
import mitt from 'mitt'

export type PlayerProgressEvent = {
  onProgressStart: null
  onProgressMove: number
  onProgressEnd: null
  onTimeUpdated: number
}
export const emitter = mitt<PlayerProgressEvent>()
export function usePlayerProgress(setCurrentTime: (time: number) => void): any {
  const store = useStore()

  const playing = computed<boolean>(() => store.state.playing)
  const duration = computed<number>(() => store.state.duration)

  let audioCurrentTime: number
  function onProgressStart(): void {
    emitter.emit('onProgressStart', null)
  }
  function onProgressMove(offsetTime: number): void {
    audioCurrentTime = offsetTime
    emitter.emit('onProgressMove', offsetTime)
  }
  function onProgressEnd(): void {
    if (audioCurrentTime >= 0) {
      if (playing.value) {
        setCurrentTime(audioCurrentTime)
      } else {
        store.commit('setCurrentTime', audioCurrentTime)
      }
    }
    emitter.emit('onProgressEnd', null)
  }

  function onTeleportBar(percent: number): void {
    const currentTime = (duration.value * percent) / 100
    setCurrentTime(currentTime)
  }

  return {
    onProgressStart,
    onProgressMove,
    onProgressEnd,
    onTeleportBar,
  }
}
