import { IAlbum, ISong } from '../interface'

class Song implements ISong {
  id: number
  name: string
  imgUrl: string
  artists: any[]
  album: IAlbum

  constructor(data: any) {
    this.album = createAlbum(data.al)
    this.id = data.id
    this.name = data.name
    this.artists = data.ar
    this.imgUrl = this.album.imgUrl
  }
}

class Album implements IAlbum {
  id: number
  name: string
  imgUrl: string

  constructor(data: IAlbum) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.picUrl
  }
}

export function createSong(data: ISong | any): Song {
  return new Song(data)
}

export function createAlbum(data: IAlbum): Album {
  return new Album(data)
}
