<template>
  <keep-alive>
    <scroll :options="options" :optionStyle="optionStyle">
      <div class="recommend">
        <banner-slider></banner-slider>
        <slider-icons></slider-icons>
        <list-slider></list-slider>
      </div>
    </scroll>
  </keep-alive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BannerSlider from './banner.vue'
import SliderIcons from './slider-icons.vue'
import ListSlider from '@/views/recommend/recommend-slider.vue'
import Scroll from '@/components/base/scroll/Scroll.vue'
import { Options } from 'better-scroll'
import { DEFAULT_HEAD_HEIGHT } from '../../assets/ts/constant/common'

const options = ref<Options>({
  click: true,
  scrollY: true,
})
const optionStyle = () => {
  const height = window.innerHeight - DEFAULT_HEAD_HEIGHT
  return {
    height: `${height}px`,
  }
}
</script>
