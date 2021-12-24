<template>
  <div class="comment" v-if="currentComment">
    <div class="header">
      <div class="mdui-toolbar">
        <a href="javascript:;" class="mdui-btn mdui-btn-icon" @click="back">
          <i class="mdui-icon material-icons iconfont icon-i-back"></i>
        </a>
        <span class="mdui-typo-title">评论({{ currentComment.total }})</span>
        <div class="mdui-toolbar-spacer"></div>
        <a href="javascript:;" class="mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons iconfont icon-share"></i>
        </a>
      </div>
      <div class="song-info">
        <div class="song-info-img">
          <img :src="`${currentCommentSong.imgUrl}?param=50y50`" />
        </div>
        <p class="song-info-name">
          {{ currentCommentSong.name }}
          <span class="song-info-ar"> - {{ ellipsisArtists(currentCommentSong.artists) }}</span>
        </p>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { getSongComment, getSongDetail } from '@/service/song'
import { onBeforeMount, ref } from 'vue'
import { createSong } from '@/assets/ts/song/packSong'
import { ellipsisArtists } from '@/assets/ts/utils'

const route = useRoute()
const router = useRouter()

const currentComment = ref<any>()
const currentCommentSong = ref<any>()
const currentPage = ref<number>(0)

onBeforeMount(async () => {
  const comment = await getComment()
  const song = await getSongDetail(route.params.id as string)
  currentComment.value = comment
  currentCommentSong.value = createSong((song as any).songs[0])
  currentComment.value = Array.prototype.concat(currentComment.value.hotComments, currentComment.value.comments)
  console.log(currentComment.value)
})

async function getComment(): Promise<any> {
  const result = await getSongComment(route.params.id as string, currentPage.value)
  return result
}

function back(): void {
  router.back()
}
</script>
<style lang="scss" scoped>
.comment {
  @include absolute-full();
  background-color: #ffffff;
  z-index: 9999;
  .header {
    .song-info {
      padding: 10px;
      display: flex;
      align-items: center;
      &-img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: black;
        padding: 7px;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }
      &-name {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 550;
        width: 80%;
        @include no-warp();
      }
      &-ar {
        font-size: 14px;
        color: $playlist-song-index-color;
      }
    }
  }
  .divider {
    height: 7px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
