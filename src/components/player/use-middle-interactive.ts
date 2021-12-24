import { useMouse } from '@vueuse/core'
import { computed, ref } from 'vue'

const enum MiddleView {
  cd,
  lyric,
}

export function useMiddleInteractive(): any {
  const { x } = useMouse()
  const showView = ref<MiddleView>(MiddleView.cd)
  let currentView: MiddleView = MiddleView.cd

  const cdStyle = ref<any>(null)
  const lyricStyle = ref<any>(null)

  let initX: number = 0
  let percent: number = 0

  function onTouchStart(e: TouchEvent): void {
    initX = e.touches[0].pageX
  }

  function onTouchMove(): void {
    let deltaX = (x.value - initX) / window.innerWidth
    if (deltaX < 0) {
      percent = 1 + Math.min(Math.min(deltaX, 0), 1)
    } else {
      percent = Math.min(Math.max(deltaX, 0), 1)
    }

    if (showView.value === MiddleView.cd && deltaX < 0) {
      if (percent < 0.8) {
        currentView = MiddleView.lyric
      }
      cdStyle.value = {
        opacity: percent,
      }
      lyricStyle.value = {
        transform: `translateX(${percent * 100}%)`,
      }
    }
    if (showView.value === MiddleView.lyric && deltaX > 0) {
      if (percent > 0.2) {
        currentView = MiddleView.cd
      }
      cdStyle.value = {
        opacity: percent,
      }
      lyricStyle.value = {
        transform: `translateX(${percent * 100}%)`,
      }
    }
  }
  function onTouchEnd(): void {
    if (currentView === MiddleView.cd) {
      showView.value = MiddleView.cd
      cdStyle.value = {
        opacity: 1,
      }
      lyricStyle.value = {
        transform: 'translateX(100%)',
        transitionDuration: '.3s',
      }
    } else {
      showView.value = MiddleView.lyric
      cdStyle.value = {
        opacity: 0,
      }
      lyricStyle.value = {
        transform: 'translateX(0%)',
        transitionDuration: '.3s',
      }
    }
  }

  return { onTouchStart, onTouchMove, onTouchEnd, lyricStyle, cdStyle }
}
