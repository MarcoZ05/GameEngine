import GameObject from "./GameObject.js";
import Logic from "./logic/Logic.js";
import LogicObject from "./logic/LogicObject.js";
import Render from "./render/Render.js";
import RenderObject from "./render/RenderObject.js";

export default class Distributer {
  logic: Logic;
  render: Render;
  gameObjects: GameObject[] = [];

  constructor(logic: Logic, render: Render) {
    this.logic = logic;
    this.render = render;
  }

  public pushObject(gameObject: GameObject) {
    this.logic.pushObject(new LogicObject(gameObject));
    this.render.pushObject(new RenderObject(gameObject));
    this.gameObjects.push(gameObject);
  }
}
