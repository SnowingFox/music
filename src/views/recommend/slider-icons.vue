<template>
  <div class='slider-banner'>
    <slider
      v-if='icons.length'
      class='slider'
      :options='options'
    >
      <div
        class='scroll-item'
        v-for='item in icons'
        :key='item'
      >
        <div class='icon-container mdui-ripple border-cycle mdui-color-red cycle'>
          <i
            class='iconfont'
            :class='item.code'
          ></i>
        </div>
        <p class='icons-title'>{{ item.name }}</p>
      </div>
    </slider>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { HOME_SLIDER_ICONS, Icons } from '@/assets/ts/constant/home'
import { Options } from 'better-scroll'
import slider from '@/components/base/slider/Slider.vue'

const icons = ref<Icons[]>(HOME_SLIDER_ICONS)
const options = ref<Options>({
  slide: false
})
</script>

<style lang='scss' scoped>
.slider {
  margin-top: 1rem;
  width: 90%;
  margin-left: 2.5%;

  .scroll-item {
    display: inline-block;
    width: 20vw;
    text-align: center;

    .icon-container {
      width: 14vw;
      height: 14vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      .iconfont {
        font-size: 25px;
      }
    }

    .icons-title {
      position: relative;
      margin-top: 7px;
      font-size: 14px;
      transform: scale(0.8);
    }
  }
}
</style>