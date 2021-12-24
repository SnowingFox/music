<template>
  <div class="mdui-toolbar tab mdui-text-color-white">
    <a class="mdui-btn mdui-btn-icon" @click="goBack"
      ><i class="mdui-icon material-icons iconfont icon-i-back"></i
    ></a>
    <span class="mdui-typo-title">歌单</span>
    <div class="mdui-toolbar-spacer"></div>
    <a class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons iconfont icon-search"></i>
    </a>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
  router.back()
}
</script>
<style lang="scss" scoped>
.tab {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.song-play {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #ffffff;
  border-radius: 20px;
}
</style>
