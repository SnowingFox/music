import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useRenderPlayer(): any {
  const store = useStore()

  const fullScreen = computed(() => store.state.fullScreen)
  const currentSong = computed(() => store.getters.currentSong)

  function handlerHiddenPlayer(): void {
    store.commit('setFullScreen', false)
  }

  return {
    fullScreen,
    currentSong,
    handlerHiddenPlayer,
  }
}
