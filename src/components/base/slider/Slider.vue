<template>
  <div class='slider'>
    <div
      class='slider-wrapper'
      ref='scrollRef'
    >
      <div class='slider-content'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import useSlider from './useSlider'

interface Props {
  options?: Object
  style?: Object
}

const props = withDefaults(defineProps<Props>(), {
  options: () => {
    return {
      slide: true
    }
  }
})

const scrollRef = ref<any>(null)

useSlider(scrollRef, props.options)
</script>

<style lang='scss' scoped>
.slider {
  &-wrapper {
    position: relative;
    width: 100%;
    white-space: nowrap;

    .slider-content {
      display: inline-block;
    }
  }
}
</style>