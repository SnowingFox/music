import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { serializeTime } from '@/assets/ts/utils'
import { useMouse } from '@vueuse/core'
// @ts-ignore
import { Emits } from '@/components/player/progress-bar.vue'
import { emitter } from '@/components/player/use-player-progress'

export default function useProgress(emits: Emits): any {
  const { x } = useMouse()
  const store = useStore()
  const rootRef = ref<HTMLDivElement>()

  const currentTime = computed(() => store.state.currentTime)
  const duration = computed(() => store.state.duration)
  const serializedTime = computed<any>(() => {
    return {
      currentTime: serializeTime(currentTime.value),
      duration: serializeTime(duration.value),
    }
  })
  let offsetPercent = ref<number>(0)
  const btnScale = ref<string>('scale(1)')
  const offsetStyle = computed(() => {
    return {
      width: `${offsetPercent.value}%`,
    }
  })
  const offsetBtnStyle = computed(() => {
    return {
      transform: btnScale.value,
      left: `${offsetPercent.value}%`,
    }
  })

  const isTouch = ref<boolean>(false)
  emitter.on('onTimeUpdated', (newTime) => {
    if (!isTouch.value) {
      offsetPercent.value = Math.floor((newTime / duration.value) * 100)
    }
  })

  let barWidth: number = window.innerWidth * 0.7
  let initX: number = window.innerWidth * 0.15 + 3

  function onTouchStart(e: TouchEvent): void {
    isTouch.value = true
    store.commit('setOnProgress', true)
    btnScale.value = 'scale(1.5)'
    emits('onProgressStart')
  }
  function onTouchMove(): void {
    const percent: number = Math.min((Math.max(x.value - initX, 0) / barWidth) * 100, 100)
    offsetPercent.value = percent
    store.commit('setCurrentTime', (percent * duration.value) / 100)
    emits('onProgressMove', currentTime.value)
  }
  function onTouchEnd(): void {
    emits('onProgressEnd')
    isTouch.value = false
    btnScale.value = 'scale(1)'
    store.commit('setOnProgress', false)
  }

  function teleportProgressBar(e: PointerEvent): void {
    const { layerX } = e
    const percent: number = (layerX / barWidth) * 100
    offsetPercent.value = percent

    emits('onTeleportBar', percent)
  }
  return {
    rootRef,
    offsetStyle,
    offsetBtnStyle,
    serializedTime,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    teleportProgressBar,
  }
}
