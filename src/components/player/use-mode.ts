import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export const enum PLAY_MODE {
  sequence = 'icon-icon_loop',
  random = 'icon-loop',
  loop = 'icon-LOOP_ONCE',
}

export default function useMode(): any {
  const store = useStore()

  const playMode = computed(() => store.state.playMode)
  const modeTipsStyle = ref<any>({})
  let timer: any

  const modeTipsText = computed<string>(() => {
    let text: string
    if (playMode.value === PLAY_MODE.sequence) {
      text = '列表循环'
    } else if (playMode.value === PLAY_MODE.random) {
      text = '随机播放'
    } else {
      text = '单曲循环'
    }

    return text
  })

  watch(playMode, async (newMode) => {
    clearTimeout(timer)
    let marginTop: number = -20
    let opacity: number = 0
    setStyle()
    marginTop = -40
    opacity = 1
    timer = setTimeout(() => {
      setStyle()
    }, 100)

    timer = setTimeout(() => {
      marginTop = -20
      opacity = 0
      setStyle()
    }, 3000)

    function setStyle(): void {
      modeTipsStyle.value = {
        marginTop: `${marginTop}px`,
        opacity,
      }
    }
  })

  function toggleMode(): void {
    store.dispatch('togglePlayMode')
  }

  return {
    playMode,
    modeTipsText,
    modeTipsStyle,
    toggleMode,
  }
}
