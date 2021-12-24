import BScroll from 'better-scroll'
import { onMounted, ref, onUnmounted, Ref } from 'vue'

export default function useSlider(wrapper: Ref, options: Object): any {
  const slider = ref<any>(null)
  let scrollVal: any
  onMounted(() => {
    scrollVal = slider.value = new BScroll(wrapper.value, {
      scrollX: true,
      scrollY: false,
      click: true,
      ...options,
    })
  })

  onUnmounted(() => {
    scrollVal.destroy()
  })

  return {
    slider,
  }
}
