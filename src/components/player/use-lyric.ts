import Lyric, { HandlerParams } from 'lyric-resolver'
import { getLyric } from '@/service/song'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { MountedBScrollHTMLElement } from 'better-scroll'
import { emitter } from '@/components/player/use-player-progress'

export default function useLyric(): any {
  const store = useStore()

  const currentSong = computed<any>(() => store.getters.currentSong)
  const playing = computed<boolean>(() => store.state.playing)
  const fullScreen = computed<boolean>(() => store.state.fullScreen)

  const currentLyric = ref<any>()
  const currentLineNum = ref<number>(0)

  watch(
    currentSong,
    async (newSong) => {
      if (currentLyric.value) {
        currentLyric.value.restore()
      }

      const lyric = await getLyric(newSong)

      currentLyric.value = new Lyric(lyric.lyric, handlerLyric)

      if (!currentSong.value.lyric) {
        store.commit('addLyric', lyric)
      }
      emitter.on('onTimeUpdated', (time) => {
        currentLyric.value.seek(time * 1000)
        scrollToCurLine()
      })
      emitter.on('onProgressMove', (time) => {
        currentLyric.value.seek(time * 1000)
        scrollToCurLine()
      })
      playLyric()
    },
    {
      immediate: true,
    }
  )

  watch(
    playing,
    (newPlaying) => {
      stopLyric()
      if (newPlaying) {
        playLyric()
      } else {
        stopLyric()
      }
    },
    { immediate: true }
  )

  function handlerLyric(payload: HandlerParams): void {
    const { curLineNum, txt } = payload
    scrollToCurLine()
  }

  function scrollToCurLine(): void {
    if (!fullScreen.value) {
      return
    }
    const curLineNum = currentLyric.value.curLine
    const scrollDom: MountedBScrollHTMLElement | any = document.querySelector('#lyricScrollRef')
    const listDom = scrollDom.children[0].children

    if (curLineNum > 10 && !scrollDom.scroll.isScrolling) {
      scrollDom.scroll.scrollToElement(listDom[curLineNum - 5], 1000)
    } else if (curLineNum <= 7 && !scrollDom.scroll.isScrolling) {
      scrollDom.scroll.scrollToElement(listDom[0], 1000)
    }
  }

  function playLyric(): void {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.play()
    }
  }

  function stopLyric(): void {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.stop()
    }
  }

  return {
    currentLyric,
    currentLineNum,
  }
}
