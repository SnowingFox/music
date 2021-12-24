import BScroll, { Options } from 'better-scroll'
import { ref, Ref, onMounted, onUnmounted } from 'vue'

export default function useScroll(wrapper: Ref, options: Options, emits: any): void {
  const scroll = ref<any>(null)
  let scrollVal: any

  onMounted(() => {
    scrollVal = scroll.value = new BScroll(wrapper.value, {
      observeDOM: true,
      ...options,
    })

    if (options.probeType && options.probeType > 0) {
      scrollVal.on('scroll', (pos: any) => {
        emits('scroll', pos)
      })
    }

    wrapper.value.scroll = scrollVal
    scrollVal.on('scrollStart', () => {
      wrapper.value.scroll.isScrolling = true
    })
    scrollVal.on('scrollEnd', () => {
      wrapper.value.scroll.isScrolling = false
    })
  })

  onUnmounted(() => {
    scrollVal.destroy()
  })
}
