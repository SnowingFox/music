<template>
  <div class="loading">
    <div class="mdui-spinner mdui-spinner-colorful"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999999;
  .mdui-spinner {
    border-radius: 50%;
    border: 5px solid #ffffff;
  }
}
</style>
