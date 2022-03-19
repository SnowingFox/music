<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { reactive } from 'vue'
import { Autoplay } from 'swiper'
import { getRecommendSearchWords } from '@/service/api/global'

const { state } = useAsyncState(getRecommendSearchWords, {
  result: { hots: [] },
})

const modules = reactive([Autoplay])
</script>

<template>
  <q-toolbar class="text-black p-3 m-0 w-full">
    <q-btn flat round dense icon="menu" class="q-mr-sm" />
    <q-separator dark vertical inset />
    <div class="w-9/12 bg-white rounded-full p-2 pl-5 flex justify-start hover:cursor-pointer items-center text-slate-400">
      <i class="iconfont icon-search text-lg" />
      <div class="w-2/4 text-ellipsis overflow-hidden whitespace-nowrap ml-1 max-h-5 overflow-hidden">
        <Swiper
          :direction="'vertical'"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 3000
          }"
          :loop="true"
          :modules="modules"
          class="max-h-5"
        >
          <SwiperSlide v-for="item in state.result.hots" :key="item.first">
            {{ item.first }}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <q-space />
    <q-btn flat round dense icon="mic" class="q-mr-sm" />
  </q-toolbar>
</template>
