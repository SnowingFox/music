import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { isFavorite } from '@/assets/ts/store'

const enum FavoriteIcon {
  favorite = 'icon-love1 mdui-text-color-red',
  noFavorite = 'icon-Love',
}

export default function useFavorite(): any {
  const store = useStore()

  const favoriteList = computed<any[]>(() => store.state.favoriteList)
  const currentSong = computed(() => store.getters.currentSong)

  const favoriteIcon = computed<any>(() => {
    let result: string = FavoriteIcon.noFavorite
    if (isFavorite(currentSong.value, favoriteList.value)) {
      result = FavoriteIcon.favorite
    }

    return result
  })
  function toggleFavorite(): void {
    store.dispatch('addFavorite')
  }

  return {
    favoriteIcon,
    toggleFavorite,
  }
}
