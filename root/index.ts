import Distributer from './Distributer.js'
import GameObject from './GameObject.js'
import Logic from './logic/Logic.js'
import Position from './Position.js'
import Render from './render/Render.js'
import KeyListener from './KeyListener.js'
import { FPS, TPS } from './constants.js'

const logic = new Logic()
const render = new Render()
const distributer = new Distributer(logic, render)

const player = new GameObject(
  new Position(0, 0),
  100,
  150,
  5,
  '../img/player.png',
  new Position(0, 0),
  false
)

logic.pushKeyListener(
  new KeyListener(['w', 'W'], () =>
    player.move({ x: 0, y: -10 }, distributer.logic.logicObjects)
  )
)
logic.pushKeyListener(
  new KeyListener(['a', 'A'], () =>
    player.move({ x: -10, y: 0 }, distributer.logic.logicObjects)
  )
)
logic.pushKeyListener(
  new KeyListener(['s', 'S'], () =>
    player.move({ x: 0, y: 10 }, distributer.logic.logicObjects)
  )
)
logic.pushKeyListener(
  new KeyListener(['d', 'D'], () =>
    player.move({ x: 10, y: 0 }, distributer.logic.logicObjects)
  )
)

distributer.pushObject(player)

// TODO: TPS and FPS including
const logicLoop = () => {
  logic.update()
  setTimeout(() => requestAnimationFrame(logicLoop), 1000 / TPS)
}

const renderLoop = () => {
  render.update()
  setTimeout(() => requestAnimationFrame(renderLoop), 1000 / FPS)
}

requestAnimationFrame(logicLoop)
requestAnimationFrame(renderLoop)
