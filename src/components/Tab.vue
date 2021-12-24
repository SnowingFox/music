<template>
  <div class="mdui-toolbar">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"
      ><i class="mdui-icon material-icons" mdui-drawer="{target: '#left-drawer'}">menu</i></a
    >
    <div class="mdui-toolbar-spacer"></div>
    <div class="tab-title">
      <router-link to="/mine" class="tab-title-content tab-title-mine mdui-ripple mdui-img-circle"
        >我的</router-link
      >
      <router-link to="/recommend" class="tab-title-content tab-title-explore mdui-ripple mdui-img-circle"
        >发现</router-link
      >
      <router-link to="/homevillage" class="tab-title-content tab-title-village mdui-ripple mdui-img-circle"
        >云村</router-link
      >
      <router-link to="/homevideo" class="tab-title-content tab-title-video mdui-ripple mdui-img-circle"
        >视频</router-link
      >
    </div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
  </div>
  <left-drawer></left-drawer>
</template>

<script setup lang="ts">
import LeftDrawer from './left-drawer.vue'
</script>

<style lang="scss" scoped>
.mdui-toolbar {
  position: relative;
  z-index: 999;
  background-color: white;
  .tab-title {
    width: 100%;
    display: flex;
    justify-content: center;
    &-content {
      flex: 1;
      color: $tab-title-color;
      text-align: center;
      font-size: 16px;
      transition: all 0.2s;
    }
    & .router-link-active {
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
