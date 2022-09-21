import { HEIGHT, WIDTH } from '../constants.js'
import LogicObject from '../logic/LogicObject.js'
import Position from '../Position.js'
import CollisionObject from './CollisionObject.js'

export default function CollisionDetector (
  thisCollisionObject: CollisionObject,
  otherCollisionObjects: CollisionObject[],
  borders: boolean = true
) {
  if (borders) {
    otherCollisionObjects.push({
      position: new Position(0, 0),
      width: 0,
      height: HEIGHT,
      colliding: true
    })
    otherCollisionObjects.push({
      position: new Position(0, 0),
      width: WIDTH,
      height: 0,
      colliding: true
    })
    otherCollisionObjects.push({
      position: new Position(WIDTH, 0),
      width: 0,
      height: HEIGHT,
      colliding: true
    })
    otherCollisionObjects.push({
      position: new Position(0, HEIGHT),
      width: WIDTH,
      height: 0,
      colliding: true
    })
  }

  const topCollision = otherCollisionObjects.filter(
    otherObject =>
      thisCollisionObject.position.y + thisCollisionObject.height >=
        otherObject.position.y &&
      thisCollisionObject.position.y + thisCollisionObject.height <=
        otherObject.position.y + otherObject.height &&
      thisCollisionObject.position.x + thisCollisionObject.width >=
        otherObject.position.x &&
      thisCollisionObject.position.x <=
        otherObject.position.x + otherObject.width
  )

  const bottomCollision = otherCollisionObjects.filter(
    otherObject =>
      thisCollisionObject.position.y <=
        otherObject.position.y + otherObject.height &&
      thisCollisionObject.position.y >= otherObject.position.y &&
      thisCollisionObject.position.x + thisCollisionObject.width >=
        otherObject.position.x &&
      thisCollisionObject.position.x <=
        otherObject.position.x + otherObject.width
  )

  const leftCollision = otherCollisionObjects.filter(
    otherObject =>
      thisCollisionObject.position.x + thisCollisionObject.width >=
        otherObject.position.x &&
      thisCollisionObject.position.x + thisCollisionObject.width <=
        otherObject.position.x + otherObject.width &&
      thisCollisionObject.position.y + thisCollisionObject.height >=
        otherObject.position.y &&
      thisCollisionObject.position.y <=
        otherObject.position.y + otherObject.height
  )

  const rightCollision = otherCollisionObjects.filter(
    otherObject =>
      thisCollisionObject.position.x <=
        otherObject.position.x + otherObject.width &&
      thisCollisionObject.position.x >= otherObject.position.x &&
      thisCollisionObject.position.y + thisCollisionObject.height >=
        otherObject.position.y &&
      thisCollisionObject.position.y <=
        otherObject.position.y + otherObject.height
  )

  return {
    top: topCollision,
    bottom: bottomCollision,
    left: leftCollision,
    right: rightCollision
  }
}
