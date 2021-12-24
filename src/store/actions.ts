import { ActionContext } from 'vuex'
import { State } from '@/store/state'
import * as _ from 'lodash'
import { shuffle } from 'lodash'
import { PLAY_MODE } from '@/components/player/use-mode'

export interface SelectPlayPayload {
  list: any[]
  index: number
}

export function setPlaylistDetail(ctx: ActionContext<State, State>, list: any): void {
  const { commit } = ctx
  commit('setPlaylistDetail', list)
}

export function selectPlay(ctx: ActionContext<State, State>, payload: SelectPlayPayload): void {
  const { commit, state } = ctx
  const { list, index } = payload
  let playlist: any[] = list
  let playIndex: number = index
  if (state.playMode === PLAY_MODE.random) {
    playlist.forEach((song, forIndex) => {
      if (list[index].id === state.playlist[forIndex].id) {
        playIndex = forIndex
      }
    })
    playlist = state.playlist
  }
  commit('setPlaying', true)
  commit('setPlaylist', playlist)
  commit('setCurrentIndex', playIndex)
  commit('setFullScreen', true)
  commit('setPlayMode', state.playMode)
  commit('setSequenceList', list)
  commit('setCurrentTime', 0)
}

export function resetTime(ctx: ActionContext<State, State>, payload: SelectPlayPayload): void {
  const { commit } = ctx

  commit('setDuration', 0)
}

export function addFavorite(ctx: ActionContext<State, State>): void {
  const { commit, state, getters } = ctx
  const currentSong: any = getters.currentSong

  let favoriteList: any[] = _.cloneDeep(state.favoriteList)
  let targetIndex: number = -1

  favoriteList.forEach((song, index) => {
    if (song.id === currentSong.id) {
      targetIndex = index
    }
  })

  if (targetIndex > -1) {
    remove()
  } else {
    add()
  }

  commit('setFavoriteList', favoriteList)

  function add(): void {
    favoriteList.push(currentSong)
  }
  function remove(): void {
    favoriteList = favoriteList.filter((song, index) => index !== targetIndex)
  }
}

export function togglePlayMode(ctx: ActionContext<State, State>): void {
  const { commit, state, getters } = ctx
  let playMode = state.playMode
  if (playMode === PLAY_MODE.sequence) {
    playMode = PLAY_MODE.random
    let sufList: any[] = shuffle(state.sequenceList)
    let sufIndex: number
    sufList.forEach((song, index) => {
      if (song.id === getters.currentSong.id) {
        sufIndex = index
      }
    })
    commit('setPlaylist', sufList)
    commit('setCurrentIndex', sufIndex!)
  } else if (playMode === PLAY_MODE.random) {
    playMode = PLAY_MODE.loop
  } else {
    state.sequenceList.forEach((song, index) => {
      if (song.id === getters.currentSong.id) {
        commit('setPlaylist', state.sequenceList)
        commit('setCurrentIndex', index)
      }
    })
    playMode = PLAY_MODE.sequence
  }

  commit('setPlayMode', playMode)
}
