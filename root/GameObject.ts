import CollisionDetector from './Collision/CollisionDetector.js'
import LogicObject from './logic/LogicObject.js'
import Position from './Position.js'

let ID = 0

export default class GameObject {
  position: Position
  width: number
  height: number
  zIndex: number
  image: HTMLImageElement
  gravityEffected: Position
  gravityFrames: number = 0
  colliding: boolean
  id: number = ID++
  constructor (
    position: Position,
    width: number,
    height: number,
    zIndex: number,
    imageSrc: string,
    gravityEffected: Position,
    colliding: boolean
  ) {
    this.position = position
    this.width = width
    this.height = height
    this.zIndex = zIndex
    this.image = new Image()
    this.image.src = imageSrc
    this.gravityEffected = gravityEffected
    this.colliding = colliding
  }

  public move (
    deltaPosition: Position,
    otherGameObjects: GameObject[] | LogicObject[]
  ) {
    let boxColliders = CollisionDetector(this, otherGameObjects)

    for (
      let i = 0;
      i !== deltaPosition.x && deltaPosition.x > 0
        ? boxColliders.right.length === 0
        : boxColliders.left.length === 0;
      i += deltaPosition.x > 0 ? 1 : -1
    ) {
      this.position.x += deltaPosition.x > 0 ? 1 : -1
    }
  }

  public update (otherGameObjects: GameObject[] | LogicObject[]) {
    let boxColliders = CollisionDetector(this, otherGameObjects)

    if (boxColliders.bottom.length === 0) {
      this.gravityFrames++

      if (this.gravityEffected.y !== 0)
        this.move(
          new Position(0, this.gravityEffected.y * this.gravityFrames * 0.1),
          []
        )

      if (this.gravityEffected.x !== 0)
        this.move(
          new Position(this.gravityEffected.x * this.gravityFrames * 0.1, 0),
          []
        )
    } else {
      this.gravityFrames = 0
    }
  }
}
