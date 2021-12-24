import { State } from '@/store/state'

import { setFavorite } from '@/assets/ts/store'
import { PLAY_MODE } from '@/components/player/use-mode'

const mutations = {
  setPlaylistDetail(state: State, list: any): void {
    state.playlistDetail = list
  },
  setPlaying(state: State, playing: boolean): void {
    state.playing = playing
  },
  setPlaylist(state: State, playlist: any[]): void {
    state.playlist = playlist
  },
  setSequenceList(state: State, playlist: any[]): void {
    state.sequenceList = playlist
  },
  setPlayMode(state: State, mode: PLAY_MODE): void {
    state.playMode = mode
  },
  setFullScreen(state: State, screen: boolean): void {
    state.fullScreen = screen
  },
  setCurrentIndex(state: State, index: number): void {
    state.currentIndex = index
  },
  setCurrentTime(state: State, seconds: number): void {
    state.currentTime = seconds
  },
  setDuration(state: State, duration: number): void {
    state.duration = duration
  },
  setOnProgress(state: State, onProgress: boolean): void {
    state.onProgress = onProgress
  },
  setFavoriteList(state: State, favorite: any[]): void {
    state.favoriteList = favorite
    setFavorite(favorite)
  },
  addLyric(state: State, lyric: any): void {
    state.sequenceList[state.currentIndex].lyric = lyric
  },
}

export default mutations
