import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAllTrack } from '@/service/song'
import { createSong } from '@/assets/ts/song/packSong'
import { getPlaylist } from '@/service/song'
import { MusicListHeaderIcons, MUSIC_LIST_HEADER_ICONS } from '@/assets/ts/constant/music'
import { useStore } from 'vuex'

export default function useRouterHook(): any {
  const store = useStore()
  const Icons = ref<MusicListHeaderIcons[]>(MUSIC_LIST_HEADER_ICONS)
  const resolvedIcons = ref<MusicListHeaderIcons[]>(Icons.value)
  const songs = ref<any[]>([])
  const playlist = computed(() => store.state.playlistDetail)
  const creator = ref<Object>(Object.create(null))
  const route = useRoute()
  const router = useRouter()

  parseRoute()

  function parseRoute(): void {
    const id = route.params?.id
    if (typeof id === 'undefined') {
      routeWithoutId()
      return
    }

    routeWithId(id as string)
  }

  function routeWithoutId(): void {
    return router.back()
  }
  function routeWithId(id: string): void {
    getAllTrack(id).then((res) => {
      if (Array.isArray(res)) {
        res.forEach((song) => {
          songs.value.push(createSong(song))
        })
      }
    })
    getPlaylist(id).then((res) => {
      store.dispatch('setPlaylistDetail', res)
      creator.value = playlist.value.creator
      const playlistVal = playlist.value
      resolvedIcons.value = resolvedIcons.value.map((icon, index) => {
        if (index === 0) {
          icon.content = playlistVal.commentCount
        }
        if (index === 1) {
          icon.content = playlistVal.shareCount
        }
        return icon
      })
    })
  }

  return {
    songs,
    playlist,
    creator,
    resolvedIcons,
  }
}
