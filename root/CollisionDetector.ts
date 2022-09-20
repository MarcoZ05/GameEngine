import LogicObject from './logic/LogicObject'
import Position from './Position'

export default function CollisionDetector (
  thisObject: LogicObject,
  otherObjects: LogicObject[]
) {
  const topCollision = otherObjects.filter(
    otherObject =>
      thisObject.position.y + thisObject.height >= otherObject.position.y &&
      thisObject.position.y + thisObject.height <=
        otherObject.position.y + otherObject.height &&
      thisObject.position.x + thisObject.width >= otherObject.position.x &&
      thisObject.position.x <= otherObject.position.x + otherObject.width
  )

  const bottomCollision = otherObjects.filter(
    otherObject =>
      thisObject.position.y <= otherObject.position.y + otherObject.height &&
      thisObject.position.y >= otherObject.position.y &&
      thisObject.position.x + thisObject.width >= otherObject.position.x &&
      thisObject.position.x <= otherObject.position.x + otherObject.width
  )

  const leftCollision = otherObjects.filter(
    otherObject =>
      thisObject.position.x + thisObject.width >= otherObject.position.x &&
      thisObject.position.x + thisObject.width <=
        otherObject.position.x + otherObject.width &&
      thisObject.position.y + thisObject.height >= otherObject.position.y &&
      thisObject.position.y <= otherObject.position.y + otherObject.height
  )

  const rightCollision = otherObjects.filter(
    otherObject =>
      thisObject.position.x <= otherObject.position.x + otherObject.width &&
      thisObject.position.x >= otherObject.position.x &&
      thisObject.position.y + thisObject.height >= otherObject.position.y &&
      thisObject.position.y <= otherObject.position.y + otherObject.height
  )

  return {
    top: topCollision,
    bottom: bottomCollision,
    left: leftCollision,
    right: rightCollision
  }
}

