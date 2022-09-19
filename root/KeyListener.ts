export default class KeyListener {
  keyMap: string[] = []
  isPressed: boolean = false
  hardEvent: boolean = false
  event: () => void

  constructor (
    keyMap: string[],
    event: () => void,
    hardEvent: boolean = false
  ) {
    this.keyMap = keyMap
    this.event = event
    this.hardEvent = hardEvent
  }
}
