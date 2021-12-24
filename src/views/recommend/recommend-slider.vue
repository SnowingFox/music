<template>
  <div class="list-slider">
    <slider-name :options="headOptions"></slider-name>
    <div class="list-slider-content">
      <slider :options="options" v-if="recommendList?.length">
        <div class="list-slider-item" v-for="item in recommendList" :key="item.picUrl">
          <router-link :to="`/musiclist/${item.id}`">
            <div class="img-container">
              <img :src="`${item.picUrl}?param=300y300`" />
            </div>
            <div class="name">{{ ellipsis(item.name, 12, '...') }}</div>
          </router-link>
        </div>
      </slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRecommend } from '@/service/home'
import { ellipsis } from '@/assets/ts/utils'
import Slider from '@/components/base/slider/Slider.vue'
import SliderName, { Options } from '../../components/base/slider-head.vue'

const recommendList = ref<any>(null)
const options = ref<Object>({
  slide: false,
  scrollX: true,
})
const headOptions = ref<Options>({
  leftName: '推荐歌单',
  rightName: '查看更多',
})

getRecommend().then((res) => {
  recommendList.value = res
})
</script>

<style lang="scss" scoped>
.list-slider {
  width: 90%;
  margin: 30px auto 0 auto;

  &-content {
    margin-left: -5px;

    .list-slider-item {
      position: relative;
      display: inline-block;
      margin: 0 5px;
      overflow-y: hidden;
      white-space: normal;
      text-align: left;

      .img-container {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        background-color: #d1d1d1;

        img {
          width: 100px;
          height: 100px;
          border-radius: 5px;
        }
      }

      .name {
        margin-top: 5px;
        max-width: 100px;
        font-size: 13px;
        line-height: 22px;
        color: black;
        height: 44px;
        overflow: hidden;
      }
    }
  }
}
</style>
