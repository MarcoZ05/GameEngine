import { CANVAS, HEIGHT, WIDTH } from '../constants.js'
import RenderObject from './RenderObject.js'

export default class Render {
  renderObjects: RenderObject[] = []
  canvas: HTMLCanvasElement = CANVAS
  context: CanvasRenderingContext2D = CANVAS.getContext(
    '2d'
  ) as CanvasRenderingContext2D

  constructor () {
    this.canvas.width = WIDTH
    this.canvas.height = HEIGHT
    this.context.imageSmoothingEnabled = false
  }

  public pushObject (renderObject: RenderObject) {
    this.renderObjects.push(renderObject)
  }

  public update () {
    this.context.clearRect(0, 0, WIDTH, HEIGHT)

    this.renderObjects.forEach(renderObject => {
      this.context.drawImage(
        renderObject.image,
        renderObject.position.x,
        renderObject.position.y,
        renderObject.width,
        renderObject.height
      )
    })
  }
}
