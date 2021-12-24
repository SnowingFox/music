import { Ref } from 'vue'

export default function useDownload(audioRef: Ref<HTMLAudioElement>): any {
  function download(): void {
    const url: string = audioRef.value.src || '/'
    window.location.href = url
  }

  return {
    download,
  }
}
