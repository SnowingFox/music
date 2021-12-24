import { createApp, Directive } from 'vue'
import { addClass, removeClass } from '@/assets/ts/dom'
import Loading from './Loading.vue'

const relativeCls = 'g-relative'

const loadingDirective: Directive = {
  mounted(el: any, binding: any) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance

    if (binding.value) {
      append(el)
    }
  },

  updated(el: any, binding: any) {
    if (binding.value !== binding.oldValue) {
      if (binding.value) {
        append(el)
      } else {
        remove(el)
      }
    }
  },
}

function append(el: any): void {
  const style = getComputedStyle(el)
  if (['relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el: any): void {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
