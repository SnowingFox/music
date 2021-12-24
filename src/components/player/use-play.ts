import { computed, nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { State } from '@/store/state'
import { getSongUrl } from '@/service/song'
import { warn } from '@/assets/ts/utils'
import { emitter } from '@/components/player/use-player-progress'
import { PLAY_MODE } from '@/components/player/use-mode'

const enum PlayIcon {
  pause = 'icon-pause',
  play = 'icon-play',
}

export default function usePlay(): any {
  const audioRef = ref<HTMLAudioElement | any>()
  const readyPlay = ref<boolean>(false)

  let playIcon = ref<PlayIcon>(PlayIcon.pause)

  const store = useStore<State>()

  const playing = computed<boolean>(() => store.state.playing)
  const playlist = computed<any>(() => store.state.playlist)
  const playMode = computed<PLAY_MODE>(() => store.state.playMode)
  const currentSong = computed<any>(() => store.getters.currentSong)
  const currentIndex = computed<number>(() => store.state.currentIndex)
  const currentTime = computed<number>(() => store.state.currentTime)
  const onProgress = computed(() => store.state.onProgress)

  watch(currentSong, async (newSong) => {
    if (!newSong) {
      return
    }
    await nextTick()
    getSongUrl(newSong.id).then((res) => {
      if (Array.isArray(res)) {
        audioRef.value.src = res[0].url
        readyPlay.value = false
      }
    })
  })

  watch(playing, (newPlaying) => {
    if (newPlaying) {
      playIcon.value = PlayIcon.pause
      setCurrentTime(currentTime.value)
    } else {
      playIcon.value = PlayIcon.play
    }
  })

  watch(currentTime, (newTime) => {
    if (newTime >= audioRef.value.duration && !onProgress.value) {
      if (playMode.value === PLAY_MODE.loop) {
        loop()
      } else {
        next()
      }
    }
  })

  function prev(): void {
    const len: number = playlist.value.length
    let index: number = currentIndex.value - 1
    //歌单歌曲为0
    if (len === 0 || !len) {
      return
    }
    //歌单只有一首歌
    if (len === 1) {
      loop()
    }

    if (index === -1) {
      index = len - 1
    }

    store.commit('setCurrentIndex', index)
    store.dispatch('resetTime')
  }
  function next(): void {
    const len: number = playlist.value.length
    let index: number = currentIndex.value + 1
    if (len === 0 || !len) {
      return
    }

    if (len === 1) {
      loop()
    }
    if (index === len - 1) {
      index = 0
    }
    store.commit('setCurrentIndex', index)
    store.dispatch('resetTime')
  }
  function togglePlay(): void {
    if (playing.value) {
      pause()
    } else {
      play()
    }
  }
  function pause(): void {
    store.commit('setPlaying', false)
    audioRef.value.pause()
  }
  function play(): void {
    store.commit('setPlaying', true)
    audioRef.value.play()
  }
  function loop(): void {
    audioRef.value.currentTime = 0
    store.commit('setCurrentTime', 0)
    play()
  }
  function canplay(): void {
    if (!readyPlay.value) {
      play()
      readyPlay.value = true
      store.dispatch('resetTime')
      store.commit('setDuration', audioRef.value.duration)
    }
  }
  function error() {
    readyPlay.value = true
    store.dispatch('resetTime')
  }
  function dispatchCurrentTime(): void {
    const currentTime: number = audioRef.value.currentTime

    if (!currentTime) {
      warn('获取歌曲时间失败')
      return
    }

    if (onProgress.value) {
      return
    }
    emitter.emit('onTimeUpdated', currentTime)
    store.commit('setCurrentTime', currentTime)
  }
  function setCurrentTime(seconds: number): void {
    audioRef.value.currentTime = seconds
  }

  return {
    audioRef,
    playIcon,
    next,
    prev,
    togglePlay,
    pause,
    play,
    canplay,
    error,
    dispatchCurrentTime,
    setCurrentTime,
  }
}
