import GameObject from '../GameObject.js'
import Position from '../Position.js'

export default class LogicObject {
  position: Position
  width: number
  height: number
  gravityEffected: number
  gravityFrames: number = 0
  colliding: boolean
  update () {}
  move (deltaPosition: Position) {}

  constructor (gameObject: GameObject) {
    this.position = gameObject.position
    this.width = gameObject.width
    this.height = gameObject.height
    this.gravityEffected = gameObject.gravityEffected
    this.colliding = gameObject.colliding
    this.update = gameObject.update
    this.move = gameObject.move
  }
}
