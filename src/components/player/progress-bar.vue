<template>
  <div class="progress-container">
    <p class="time currentTime">
      {{ serializedTime.currentTime }}
    </p>
    <div class="progress" @click="teleportProgressBar">
      <div class="progress-bar"></div>
      <div class="progress-bar-left" :style="offsetStyle"></div>
      <div
        class="progress-bar-left-btn"
        :style="offsetBtnStyle"
        @touchstart.prevent="onTouchStart"
        @touchmove.prevent="onTouchMove"
        @touchend.prevent="onTouchEnd"
      ></div>
    </div>
    <p class="time duration">
      {{ serializedTime.duration }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import useProgress from '@/components/player/use-progress'

export interface Emits {
  (e: 'onProgressStart'): void
  (e: 'onProgressMove', offsetTime: number): void
  (e: 'onProgressEnd'): void
  (e: 'onTeleportBar', percent: number): void
}

const emits = defineEmits<Emits>()

const {
  rootRef,
  offsetStyle,
  offsetBtnStyle,
  serializedTime,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  teleportProgressBar,
} = useProgress(emits)
</script>

<style lang="scss" scoped>
.progress-container {
  display: flex;
  width: 100%;
  align-items: center;
  .time {
    font-size: 12px;
    transform: scale(0.85);
    color: $player-music-time-color;
  }
  .currentTime {
    position: absolute;
    left: 2.5%;
  }
  .duration {
    position: absolute;
    right: 2.5%;
  }
}
.progress {
  display: flex;
  width: 70%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  &-bar {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
  }
  &-bar-left-btn {
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.1s;
    &:hover {
      transform: scale(2);
      cursor: pointer;
    }
  }
  &-bar-left {
    background-color: white;
    position: absolute;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>
