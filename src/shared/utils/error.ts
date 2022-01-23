class MusicError extends Error {
  constructor(error: string) {
    super(error)
  }
  print(hooksName: string) {
    console.error(`[${hooksName}] ${this.message}`)
  }
}

export default function throwError(msg: string, hooksName?: string): void {
  const instance = new MusicError(msg)
  instance.print(hooksName || 'Music')
}
