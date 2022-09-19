import Position from './Position.js'

let ID = 0

export default class GameObject {
  position: Position
  width: number
  height: number
  zIndex: number
  image: HTMLImageElement
  gravityEffected: number
  gravityFrames: number = 0
  colliding: boolean
  id: number = ID++
  constructor (
    position: Position,
    width: number,
    height: number,
    zIndex: number,
    imageSrc: string,
    gravityEffected: number,
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

  public move (deltaPosition: Position) {
    this.position.x += deltaPosition.x
    this.position.y += deltaPosition.y
  }

  public update () {
    if (this.gravityEffected !== 0 /* && boxcolider.bottom */) {
      this.gravityFrames++
      this.move({
        x: 0,
        y: Math.round(this.gravityEffected * this.gravityFrames)
      })
    } else {
      this.gravityFrames = 0
    }
  }
}
