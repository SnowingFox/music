<template>
  <div class="banner" v-loading="!banners.length">
    <slider class="slider mdui-ripple" v-if="banners && banners?.length" :options="sliderOptions">
      <div class="banner-item" v-for="item in banners" :key="item">
        <a :href="item?.url">
          <img :src="item.imageUrl" />
        </a>
      </div>
    </slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getBanner } from '@/service/home'
import { Options } from 'better-scroll'
import Slider from '@/components/base/slider/Slider.vue'

const sliderOptions = ref<Options>({
  slide: true,
  momentum: true,
})

const banners = ref({})
getBanner().then((res) => {
  banners.value = res
})
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  top: 0.5rem;
  height: 0;
  padding-bottom: 36%;

  .banner-item {
    position: relative;
    display: inline-block;
    text-align: center;
    img {
      width: 90%;
      object-fit: cover;
      border-radius: 5px;
      height: 100%;
    }
  }
}
</style>
