export function addClass(el: HTMLElement, clsName: string): void {
  if (!el.classList.contains(clsName)) {
    el.classList.add(clsName)
  }
}

export function removeClass(el: HTMLElement, clsName: string): void {
  el.classList.remove(clsName)
}
