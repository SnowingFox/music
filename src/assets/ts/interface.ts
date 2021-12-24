export interface ISong {
  id: number
  name: string
  imgUrl: string
  artists: any[]
  album: IAlbum

  [propName: string]: any
}

export interface IAlbum {
  id: number
  name: string
  imgUrl: string

  [propName: string]: any
}

export interface IPlaylist {
  id: number
  name: string
  commentCount: number
  playCount: number
  creator: ICreator
  tags: string[]
  imgUrl: string
}

export interface ICreator {
  id: number
  name: string
  avatarUrl: string
  backgroundUrl: string
}
