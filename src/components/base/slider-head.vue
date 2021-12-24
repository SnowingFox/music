<template>
  <div class="list-slider-head">
    <h2>{{ options.leftName }}</h2>
    <div class="mdui-ripple btn">{{ options.rightName }}</div>
  </div>
</template>

<script lang="ts" setup>
export interface Options {
  leftName: string
  rightName: string
}

interface Props {
  options: Options
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.list-slider-head {
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px auto;
  h2 {
    position: relative;
  }

  .btn {
    position: absolute;
    right: 2.5%;
    width: 60px;
    height: 20px;
    padding: 5px 10px;
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    @include flexCenter();
    font-size: 12px;
  }
}
</style>
