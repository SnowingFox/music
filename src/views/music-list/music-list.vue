<template>
  <div class="music-list" v-loading="!loading" v-if="songs.length">
    <template v-if="songs.length">
      <list-tab></list-tab>
      <div class="header">
        <div class="background" :style="bgImageStyle"></div>
        <div class="background-blur"></div>
        <div class="header-content">
          <div class="header-content-left">
            <img class="playlist-avatar" :src="`${playlist.coverImgUrl}?param=500y500`" />
          </div>
          <div class="header-content-right">
            <div class="playlist-name">{{ playlist.name }}</div>
            <div class="playlist-creator">
              <img class="playlist-creator-avatar cycle" :src="`${creator.avatarUrl}?param=100y100`" />
              <div class="playlist-creator-name">
                {{ creator.nickname }} <i class="iconfont icon-right"></i>
              </div>
            </div>
            <div class="playlist-description" @click="showDesc = !showDesc">
              {{ ellipsis(playlist.description, 20) }}
              <i class="iconfont icon-right"></i>
            </div>
          </div>
        </div>
        <div class="header-bottom" ref="scrollRef">
          <div class="header-bottom-icon" v-for="item in resolvedIcons">
            <i class="iconfont" :class="item.code"></i>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <scroll :options="scrollOptions" v-if="songs.length" @scroll="onScroll">
        <song-list
          @selectPlay="selectPlay"
          @playAll="selectPlay"
          v-if="songs.length"
          :songs="songs"
          class="song-list-ref"
        ></song-list>
      </scroll>
    </template>
    <transition name="fade">
      <list-description v-if="showDesc" @descClose="showDesc = !showDesc"></list-description>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import SongList from '../../components/base/song-list.vue'
import ListDescription from '@/components/list-description.vue'
import useRouterHook from '@/views/music-list/use-router'
import ListTab from '@/components/list-tab.vue'
import { ellipsis } from '@/assets/ts/utils'
import useScroll from '@/views/music-list/use-scroll'
import { Options } from 'better-scroll'
import Scroll from '@/components/base/scroll/Scroll.vue'
import { SelectPlayPayload } from '@/store/actions'
import axios from 'axios'

axios.get('https://autumnfish.cn/playlist/track/all?id=6990881882&limit=10&offset=10').then((res) => {
  console.log(res)
})

const { songs, playlist, creator, resolvedIcons } = useRouterHook()
const { onScroll, bgImageStyle } = useScroll(playlist)
const scrollOptions = ref<Options>({
  scrollY: true,
  click: true,
  bounce: {
    top: false,
  },
  probeType: 3,
})
const loading = computed(() => {
  return playlist.value && songs.value.length
})

const store = useStore()

const showDesc = ref<Boolean>(false)

function selectPlay(payload: SelectPlayPayload): void {
  store.dispatch('selectPlay', payload)
}
</script>

<style lang="scss" scoped>
.scroll-content {
  height: auto;
}
.music-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 999;
  overflow: hidden;
  .tab {
    position: fixed;
    width: 100%;
  }
  .header {
    position: relative;
    height: 0;
    padding-bottom: 90%;
    .background {
      width: 100%;
      position: relative;
      background-size: cover;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(50px);
      }
    }
    &-content {
      position: absolute;
      top: 56px;
      left: 0;
      max-height: 120px;
      padding: 20px 2.5%;
      display: flex;
      &-left {
        .playlist-avatar {
          width: 150px;
          height: 150px;
          border-radius: 5px;
        }
      }
      &-right {
        .icon-right {
          font-size: 12px;
        }
        margin-left: 15px;
        .playlist-name {
          color: #ffffff;
          font-size: 18px;
          font-weight: bold;
          line-height: 28px;
        }
        .playlist-creator {
          display: flex;
          align-items: center;
          margin-top: 10px;
          &-name {
            color: $playlist-creator-name-color;
            margin-left: 5px;
            font-size: 16px;
          }
          &-avatar {
            width: 30px;
            height: 30px;
          }
        }
        .playlist-description {
          position: absolute;
          margin-top: 14px;
          color: $playlist-creator-description-color;
          font-size: 13px;
          line-height: 20px;
          display: flex;
          align-items: center;
          bottom: -10px;
        }
      }
    }
    &-bottom {
      position: absolute;
      display: flex;
      bottom: 5%;
      margin: 0 5%;
      width: 90%;
      color: $playlist-creator-name-color;
      &-icon {
        flex: 1;
        text-align: center;
        line-height: 24px;
        i {
          font-size: 24px;
          color: #ffffff;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
  .song-list {
    position: absolute;
    top: 340px;
  }
}
</style>
