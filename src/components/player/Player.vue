<template>
  <div class="player">
    <transition name="fade">
      <div class="normal-player" v-if="fullScreen">
        <div class="background">
          <img class="background-img" :src="`${currentSong.imgUrl}?param=300y300`" />
        </div>
        <div class="player-content">
          <div class="mdui-toolbar">
            <a href="javascript:;" class="mdui-btn mdui-btn-icon" @click="handlerHiddenPlayer">
              <i class="mdui-icon material-icons iconfont icon-bottom"></i>
            </a>
            <div class="mdui-toolbar-spacer">
              <div class="music-info">
                <p class="music-name">
                  {{ currentSong.name }}
                </p>
                <p class="music-author">{{ ellipsisArtists(currentSong.artists) }}</p>
              </div>
            </div>
            <a href="javascript:;" class="mdui-btn mdui-btn-icon">
              <i class="mdui-icon material-icons iconfont icon-share"></i>
            </a>
          </div>
          <Middle></Middle>
          <div class="player-bottom">
            <div class="player-bottom-icons-top">
              <i class="iconfont" :class="favoriteIcon" @click="toggleFavorite"></i>
              <i class="iconfont icon-download" @click="download"></i>
              <i class="iconfont icon-sing"></i>
              <router-link :to="`/comment/${currentSong.id}`">
                <i class="iconfont icon-xiaoxi"></i>
              </router-link>
              <i class="iconfont icon-Moreoptionshorizon"></i>
            </div>
            <div class="mode-tips" :style="modeTipsStyle">{{ modeTipsText }}</div>
            <progress-bar
              @onProgressStart="onProgressStart"
              @onProgressMove="onProgressMove"
              @onProgressEnd="onProgressEnd"
              @onTeleportBar="onTeleportBar"
            ></progress-bar>
            <div class="player-bottom-icons-bottom">
              <i class="iconfont" :class="playMode" @click="toggleMode"></i>
              <i class="iconfont icon-24gl-previous" @click="prev"></i>
              <i class="iconfont play-icon" :class="playIcon" @click="togglePlay"></i>
              <i class="iconfont icon-24gl-next" @click="next"></i>
              <i class="iconfont icon-bofangliebiao"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <audio ref="audioRef" @canplay="canplay" @error="error" @timeupdate="dispatchCurrentTime"></audio>
  </div>
</template>

<script lang="ts" setup>
import { ellipsisArtists } from '@/assets/ts/utils'
import usePlay from '@/components/player/use-play'
import ProgressBar from './progress-bar.vue'
import useFavorite from '@/components/player/use-favorite'
import { usePlayerProgress } from '@/components/player/use-player-progress'
import useRenderPlayer from '@/components/player/use-renderPlayer'
import Middle from './Middle.vue'
import useMode from '@/components/player/use-mode'
import useIconClick from '@/components/player/use-icon-click'
import { useMediaControls } from '@vueuse/core'

const { fullScreen, handlerHiddenPlayer, currentSong } = useRenderPlayer()
const {
  audioRef,
  error,
  playIcon,
  canplay,
  next,
  prev,
  togglePlay,
  pause,
  play,
  dispatchCurrentTime,
  setCurrentTime,
} = usePlay()
const { onProgressStart, onProgressMove, onProgressEnd, onTeleportBar } = usePlayerProgress(setCurrentTime)

const { toggleFavorite, favoriteIcon } = useFavorite()
const { download } = useIconClick(audioRef)
const { playMode, modeTipsText, toggleMode, modeTipsStyle } = useMode()
</script>
<style lang="scss" scoped>
.player {
  .normal-player {
    @include absolute-full();
    z-index: 999;
    overflow: hidden;
    .background {
      &-img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 1;
      }
      &:after {
        content: '';
        @include absolute-full();
        backdrop-filter: blur(30px);
        background: $player-overlay-linear-color;
        z-index: 2;
      }
    }
    .player-content {
      @include absolute-full();
      z-index: 2;
      .mdui-toolbar {
        color: #ffffff;
        line-height: 24px;
        .mdui-toolbar-spacer {
          text-align: center;
          .music-info {
            text-align: center;
            .music-name {
              display: flex;
              flex-direction: column;
              font-size: 18px;
            }
            .music-author {
              font-size: 14px;
              color: $player-music-author-color;
              @include no-warp();
            }
          }
        }
      }
    }
    .player-bottom {
      position: absolute;
      bottom: 0;
      .mode-tips {
        position: absolute;
        width: 80px;
        height: 20px;
        padding: 10px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.95);
        left: 50%;
        margin-left: -50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -20px;
        transition: all 0.2s;
        opacity: 0;
      }
      &-icons-top {
        width: 100vw;
        display: flex;
        margin: 30px 0;
        i,
        a {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-size: 20px;
        }
      }
      &-icons-bottom {
        width: 100vw;
        display: flex;
        margin: 30px 0;
        i {
          flex: 1;
          font-size: 24px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .play-icon {
          font-size: 46px;
        }
      }
    }
  }
}
</style>
