<template>
  <div class="scroll-wrapper" ref="scrollRef" :style="scrollStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useScroll from './useScroll'
import { Options } from 'better-scroll'

interface Props {
  options: Options
  optionStyle?: any
}

const props = withDefaults(defineProps<Props>(), {
  options: () => {
    return {
      scrollX: false,
      scrollY: true,
      momentum: true,
      bounce: true,
    }
  },
})
const emits = defineEmits(['scroll'])

const scrollRef = ref<any>(null)
const scrollStyle = computed(() => {
  if (props.optionStyle) {
    return props.optionStyle
  }

  const height = `${window.innerHeight - scrollRef?.value?.offsetTop}px`

  return {
    height,
  }
})

useScroll(scrollRef, props.options, emits)
</script>
