import storage from 'good-storage'

const FAVORITE_KEY: string = '__MUSIC__FAVORITE__'

export function load(): any[] {
  return storage.get(FAVORITE_KEY, [])
}

export function setFavorite(list: any[]): void {
  storage.set(FAVORITE_KEY, list)
}

export function isFavorite(targetSong: any, reactList?: any[]): boolean {
  let flag: boolean = false
  const list: any[] = reactList || load()
  list.forEach((song) => {
    if (song.id === targetSong.id) {
      flag = true
    }
  })

  return flag
}
