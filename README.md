# 网易云音乐WebApp

## 2022/3/16 🎉

### 打算用Vuetify重写一遍，这几个月的学习提升了我的编程能力，再反观原项目的架构有点惨不忍睹

## 2022/3/19
### 重构在[dev](https://github.com/SnowingFox/music/tree/dev)分支

### 以下为原文

## 🎁 已迁移至Vite

## 🌎 在线项目
- ✨ [**在线预览**](https://music-sepia.vercel.app/)

## 🎅项目描述
- 🤖 使用`TypeScript` `Vue3` `NeteaseCloudMusicApi`
- 🎄 主要实现了网易云的基本功能，播放最难啃的一部分搞定了，省下的慢慢写
- 🔥 写了一个歌词解析器，一开始准备用`ustbhuangyi`的`lyric-parser`插件
但发现他的插件用在网易云的歌词上会有问题，
我就按照基本他的基本思想复现了一个 `lyric-resolver`
- ✨ [**查看插件源码**](https://www.github.com/snowingfox/lyricparser)
- 🎁 `NeteaseCloudMusicApi`没有获取歌单所有歌曲的接口，我就提了一个PR把它实现了
- [Codesandbox](https://codesandbox.io/s/blissful-spence-bdnbsj)

### 🎁❤🎄 如果觉得还不错，点个star收藏一下吧
