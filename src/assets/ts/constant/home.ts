export interface Icons {
  name: string
  code: string
}

export const HOME_SLIDER_ICONS: Icons[] = [
  {
    name: '每日推荐',
    code: 'icon-' + getCalendarCode(new Date().getDate() - 1),
  },
  {
    name: '歌单',
    code: 'icon-musiclist',
  },
  {
    name: '排行榜',
    code: 'icon-paihangbang',
  },
  {
    name: '直播',
    code: 'icon-zhibo',
  },
  {
    name: '数字专辑',
    code: 'icon-zhuanji',
  },
  {
    name: '音乐电台',
    code: 'icon-diantai',
  },
  {
    name: '游戏专区',
    code: 'icon-game',
  },
]

function getCalendarCode(item: number): string {
  const code = []
  const baseStr = 'rl'
  for (let i = 0; i < 31; i++) {
    let name = baseStr + i
    code.push(name)
  }
  return code[item]
}
