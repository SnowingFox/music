import { State } from '@/store/state'

export const currentSong = (state: State) => {
  return state.playlist[state.currentIndex] || []
}
