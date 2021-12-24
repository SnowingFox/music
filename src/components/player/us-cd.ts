import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default function useCd(): any {
  const store = useStore()

  const playing = computed(() => store.state.playing)

  const cdRef = ref<HTMLImageElement | any>()

  watch(playing, (newPlaying) => {
    if (newPlaying) {
      setTimeout(() => {
        cdRef.value.style.animationPlayState = 'running'
      }, 200)
    } else {
      setTimeout(() => {
        cdRef.value.style.animationPlayState = 'paused'
      }, 200)
    }
  })

  return {
    cdRef,
  }
}
