<template>
  <keep-alive>
    <div class="newsongs-list">
      <slider-head class="head" :options="options"></slider-head>
      <slider v-if="songs?.length" :options="sliderOptions">
        <div class="song-list" v-for="item in songs" :key="item">
          <div class="song-list-flex">
            <div class="song" v-for="song in item" :key="song">
              <div class="song-img">
                <img :src="`${song.imgUrl}?param=100y100`" />
              </div>
              <div class="song-content">
                <div class="song-info">
                  <div class="song-name">
                    <h3>{{ `${song.name}&nbsp;&nbsp;` }}</h3>
                  </div>
                  <div class="song-artists">
                    {{ ellipsisArtists(song.album.artists) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slider>
    </div>
  </keep-alive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getNewSong } from '@/service/home'
import { createSong } from '@/assets/ts/song/packSong'
import { Options as BSOptions } from 'better-scroll'
import { ellipsisArtists } from '@/assets/ts/utils'
import SliderHead, { Options } from '@/components/base/slider-head.vue'
import Slider from '@/components/base/slider/Slider.vue'

const options = ref<Options>({
  leftName: '新歌推荐',
  rightName: '更多新歌',
})
const sliderOptions = ref<BSOptions>({
  slide: {
    loop: false,
    autoplay: false,
    interval: 0,
  },
  scrollX: true,
})
const songs = ref<any>(null)

getNewSong().then((res) => {
  songs.value = res
})
</script>

<style lang="scss" scoped>
.head {
  margin: 30px auto 20px auto;
}
.newsongs-list {
  width: 90%;
  margin: 20px auto 0 auto;
  .song-list {
    display: inline-block;
    overflow: hidden;
    width: 80%;
    .song-list-flex {
      display: flex;
      flex-direction: column;
    }

    .song {
      display: flex;
      margin-top: 10px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
      }
      &-content {
        margin-left: 20px;
        padding: 5px 0;
        display: flex;
        align-items: center;
      }
      &-info {
        .song-artists {
          color: $song-name-color;
          font-size: 13px;
          padding: 10px 0;
          @include no-warp();
          width: 95%;
        }
        .song-name {
          width: 60vw;
          h3 {
            @include no-warp();
            width: 100%;
          }
        }
      }
      &-flex {
        display: flex;
      }
    }
    > .song {
      margin-top: 0;
    }
  }
}
</style>
