import { computed, nextTick, ref } from 'vue'

export default function useScroll(playlist: any): any {
  const paddingBottom = ref<string>('400px')
  const diffY = ref<number>(330)
  const bgImageStyle = computed(() => {
    const diffYVal: number = diffY.value
    let ZIndex: number = 0
    if (diffYVal <= 56) {
      ZIndex = 99
    } else {
      ZIndex = 0
    }
    if (diffYVal <= 56) {
      paddingBottom.value = '56px'
    } else {
      paddingBottom.value = '400px'
    }
    return {
      paddingBottom: paddingBottom.value,
      backgroundImage: `url(${playlist.value.coverImgUrl}?param=170y170)`,
      'z-index': ZIndex,
      maxHeight: '56px',
    }
  })

  const onScroll = (pos: any): void => {
    nextTick(() => {
      const y: number = -pos.y
      const songRef: any = document.querySelector('.song-list-ref')
      const diff: number = songRef.offsetTop - y
      diffY.value = diff
    })
  }

  return {
    bgImageStyle,
    onScroll,
  }
}
