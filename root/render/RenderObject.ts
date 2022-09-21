import GameObject from '../GameObject.js'
import Position from '../Position.js'

export default class RenderObject {
  position: Position
  width: number
  height: number
  zIndex: number
  image: HTMLImageElement
  constructor (gameObject: GameObject) {
    this.position = gameObject.position
    this.width = gameObject.width
    this.height = gameObject.height
    this.image = gameObject.image
    this.zIndex = gameObject.zIndex
  }

  public update () {
    // TODO: Update the canvas
  }
}
