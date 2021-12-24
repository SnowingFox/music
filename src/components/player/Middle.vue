<template>
  <div
    class="middle"
    @touchstart.prevent="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend.prevent="onTouchEnd"
  >
    <div class="cd" :style="cdStyle">
      <img class="cycle" :src="`${currentSong.imgUrl}?param=500y500`" ref="cdRef" />
    </div>
    <div class="lyric" :style="lyricStyle">
      <Scroll
        :options="scrollOptions"
        :optionStyle="scrollOptionsStyle"
        v-if="currentLyric"
        id="lyricScrollRef"
      >
        <ul class="lyric-txt">
          <li
            class="lyric-line"
            :class="{
              'lyric-active': currentLyric.curLine - 1 === index,
            }"
            v-for="(line, index) in currentLyric.lines"
            :key="line"
          >
            {{ line.txt }}
          </li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import useCd from '@/components/player/us-cd'
import useLyric from '@/components/player/use-lyric'
import Scroll from '@/components/base/scroll/Scroll.vue'
import { Options } from 'better-scroll'
import { DEFAULT_HEAD_HEIGHT } from '@/assets/ts/constant/common'
import { useMiddleInteractive } from '@/components/player/use-middle-interactive'

const store = useStore()

const currentSong = computed(() => store.getters.currentSong)
//hooks
const { cdRef } = useCd()
const { currentLyric, currentLineNum } = useLyric()
const { onTouchStart, onTouchMove, onTouchEnd, lyricStyle, cdStyle } = useMiddleInteractive()

const scrollOptions = reactive<Options>({
  scrollX: false,
  scrollY: true,
  probeType: 3,
})
const scrollOptionsStyle = computed(() => {
  const height = window.innerHeight - DEFAULT_HEAD_HEIGHT - window.innerHeight * 0.22 - 75

  return {
    height: `${height}px`,
  }
})
</script>

<style lang="scss" scoped>
.middle {
  position: absolute;
  left: 0;
  right: 0;
  top: 75px;
  bottom: 25%;
  overflow: hidden;
  .cd {
    position: relative;
    text-align: center;
    z-index: 0;
    top: 50px;
    transition: opacity 0.2s;
    img {
      height: 225px;
      width: 225px;
      border: 5px solid rgba(255, 255, 255, 0.1);
      animation: cd-rotate 30s infinite linear;
    }
    @keyframes cd-rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .lyric {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    transform: translateX(100%);
    display: flex;
    justify-content: center;
    ul {
      line-height: 40px;
      font-size: 16px;
      width: 90vw;
      li {
        color: $player-music-lyric-color;
      }
      .lyric-active {
        color: #ffffff;
      }
    }
  }
}
</style>
