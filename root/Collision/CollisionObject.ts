import GameObject from '../GameObject'
import LogicObject from '../logic/LogicObject'
import Position from '../Position'

export default class CollisionObject {
  position: Position
  width: number
  height: number
  colliding: boolean

  constructor (gameObject: LogicObject | GameObject) {
    this.position = gameObject.position
    this.width = gameObject.width
    this.height = gameObject.height
    this.colliding = gameObject.colliding
  }
}
