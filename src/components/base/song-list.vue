<template>
  <div class="song-list mdui-list">
    <div class="song-play mdui-list-item mdui-ripple">
      <div class="song-play-icon">
        <i class="iconfont icon-play"></i>
      </div>
      <div class="song-play-content" @click="selectPlay(0)">播放全部</div>
      <div class="song-play-collect mdui-color-red mdui-ripple">
        + 收藏 ({{ PlaylistDetail?.subscribedCount }})
      </div>
    </div>
    <div class="song mdui-list-item mdui-ripple" v-for="(song, index) in songs" :key="song">
      <span class="song-index">{{ index + 1 }}</span>
      <ul class="song-detail mdui-list" @click="selectPlay(index)">
        <li class="song-name">{{ song.name }}</li>
        <li class="song-artists">{{ ellipsisArtists(song.artists) }} - {{ song.album.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ellipsisArtists } from '@/assets/ts/utils'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { SelectPlayPayload } from '@/store/actions'

interface Props {
  songs: any[]
}
interface Emits {
  (e: 'selectPlay', payload: SelectPlayPayload): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const store = useStore()
const PlaylistDetail = computed(() => store.state.playlistDetail)

function selectPlay(index: number) {
  let payload: SelectPlayPayload = Object.create(null)
  payload.index = index
  payload.list = props.songs
  emits('selectPlay', payload)
}
</script>

<style lang="scss" scoped>
.mdui-list-item {
  padding: 0;
  z-index: 1;
}
.song-play {
  position: relative;
  display: flex;
  align-items: center;
  &-content {
    font-size: 18px;
    font-weight: 500;
  }
  &-collect {
    position: absolute;
    right: 5px;
    padding: 13px 15px;
    border-radius: 50px;
    font-size: 16px;
  }
  &-icon {
    min-width: 60px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 24px;
    }
  }
}
.song-list {
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  border-radius: 20px;

  .song {
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    &-index {
      min-width: 60px;
      min-height: 50px;
      text-align: center;
      line-height: 50px;
      color: $playlist-song-index-color;
    }
    &-detail {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      .song-name {
        font-size: 18px;
        font-weight: 400;
        width: 80vw;
        @include no-warp();
      }
      .song-artists {
        font-size: 14px;
        color: $playlist-song-index-color;
        width: 80vw;
        @include no-warp();
      }
    }
  }
}
</style>
