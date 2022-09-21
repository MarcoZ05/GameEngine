import GameObject from '../GameObject.js'
import Position from '../Position.js'

export default class LogicObject {
  position: Position
  width: number
  height: number
  gravityEffected: Position
  gravityFrames: number = 0
  colliding: boolean
  update (otherGameObjects: GameObject[] | LogicObject[]) {}
  move (
    deltaPosition: Position,
    otherGameObjects: GameObject[] | LogicObject[]
  ) {}

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
