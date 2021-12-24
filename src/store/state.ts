import { load } from '@/assets/ts/store'
import { PLAY_MODE } from '@/components/player/use-mode'

export interface State {
  playlistDetail: any
  fullScreen: boolean
  playlist: any[]
  playing: boolean
  currentIndex: number
  currentTime: number
  duration: number
  favoriteList: any[]
  playMode: PLAY_MODE
  sequenceList: any[]
  onProgress: boolean
}

const state: State = {
  playlistDetail: {},
  playing: false,
  playlist: [],
  favoriteList: load(),
  currentIndex: 0,
  currentTime: 0,
  duration: 0,
  fullScreen: false,
  playMode: PLAY_MODE.sequence,
  sequenceList: [],
  onProgress: false,
}

export default state
