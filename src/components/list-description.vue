<template>
  <div class="list-description">
    <div class="background">
      <img :src="`${playlist.coverImgUrl}?param=300y300`" />
    </div>
    <div class="content">
      <div class="close mdui-img-circle mdui-ripple" @click="close">
        <i class="mdui-icon material-icons iconfont icon-close"></i>
      </div>
      <scroll :options="options">
        <div class="scroll-content">
          <div class="content-header">
            <img :src="`${playlist.coverImgUrl}?param=500y500`" />
            <p class="title">{{ playlist.name }}</p>
          </div>
          <div class="divider"></div>
          <div class="content-info">
            <div class="tags-container">
              <p>标签：</p>
              <ul class="tags">
                <li class="tag" v-for="tag in playlist.tags">
                  {{ tag }}
                </li>
              </ul>
            </div>

            <div class="content-desc">
              <p class="desc" v-html="transformContent(playlist.description)"></p>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
import Scroll from '@/components/base/scroll/Scroll.vue'
import { Options } from 'better-scroll'

interface Emits {
  (e: 'descClose'): void
}

const options = reactive<Options>({
  scrollX: false,
  scrollY: true,
  bounce: {
    top: false,
  },
})

const playlist = computed(() => store.state.playlistDetail)
const store = useStore()

const emits = defineEmits<Emits>()
function close(): void {
  emits('descClose')
}

function transformContent(ctx: string): string {
  let result: string = ctx.replaceAll('\n', '<br />')

  return result
}
</script>

<style lang="scss" scoped>
.scroll-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.list-description {
  @include absolute-full();
  z-index: 99999;
  .background {
    img {
      position: absolute;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 1;
    }
    &:after {
      @include absolute-full();
      content: '';
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(1000px);
      z-index: 2;
    }
  }
  .content {
    @include absolute-full();
    z-index: 9;
    .divider {
      height: 1px;
      width: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      );
    }
    .close {
      float: right;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      i {
        color: white;
      }
      z-index: 999;
    }
    &-header {
      position: relative;
      margin-top: 75px;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
      }
      .title {
        position: relative;
        margin: 30px 0;
        color: #ffffff;
        font-size: 20px;
        font-weight: 550;
      }
    }
    .divider {
      height: 1px;
      width: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      );
    }
    &-info {
      width: 85%;
      margin: 20px auto 0 auto;
      color: white;
      font-size: 16px;
      .tags-container {
        display: flex;
        align-items: center;
        ul {
          display: flex;
          li {
            padding: 10px 15px;
            margin: 0 10px;
            background-color: $playlist-description-tags-backgroundColor;
            border-radius: 20px;
            font-size: 14px;
          }
        }
      }
      .content-desc {
        margin-top: 20px;
        p {
          line-height: 30px;
          color: $playlist-description-color;
        }
      }
    }
  }
}
</style>
