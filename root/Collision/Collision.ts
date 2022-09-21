import LogicObject from '../logic/LogicObject'

export default interface Collision {
  top: LogicObject[]
  bottom: LogicObject[]
  left: LogicObject[]
  right: LogicObject[]
}
