<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import { computed, reactive } from 'vue'
import { getBanner } from '@/service/api/recommend'
import './style.css'

const { state: banners, isLoading } = useAsyncState(getBanner, { banners: [] })

const modules = reactive([Autoplay, Pagination])
const pagination = computed(() => ({
  renderBullet(index: number, className: string) {
    return `<span class="${className}"></span>`
  },
}))
</script>

<template>
  <template v-if="!isLoading">
    <div>
      <swiper
        class="w-full rounded-lg"
        style="overflow: visible"
        :direction="'horizontal'"
        :modules="modules"
        :space-between="50"
        :clickable="true"
        :loop="true"
        :autoplay="{
          delay: 3000
        }"
        :pagination="pagination"
      >
        <swiper-slide
          v-for="item in banners.banners"
          :key="item.pic"
          class="width-screen flex justify-center"
        >
          <img class="rounded-lg w-full object-cover" :src="item.pic" style="height: 150px">
        </swiper-slide>
      </swiper>
    </div>
  </template>
  <template v-else>
    <div class="q-pa-md w-full p-0">
      <q-card flat>
        <q-skeleton height="150px" class="w-full bg-gray-200 rounded-3xl" square />
      </q-card>
    </div>
  </template>
</template>
