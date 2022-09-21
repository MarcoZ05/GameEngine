import GameObject from "../GameObject.js";
import LogicObject from "./LogicObject.js";
import KeyListener from "../KeyListener.js";

export default class Logic {
  logicObjects: LogicObject[] = [];
  keyListeners: KeyListener[] = [];

  public pushObject(logicObject: LogicObject) {
    this.logicObjects.push(logicObject);
  }

  public pushKeyListener(keyListener: KeyListener) {
    this.keyListeners.push(keyListener);
    if (keyListener.hardEvent) {
      document.addEventListener("keydown", (e) => {
        if (keyListener.keyMap.includes(e.key)) {
          keyListener.event();
        }
      });
    } else {
      document.addEventListener("keydown", (e) => {
        if (keyListener.keyMap.includes(e.key)) {
          keyListener.isPressed = true;
        }
      });
      document.addEventListener("keyup", (e) => {
        if (keyListener.keyMap.includes(e.key)) {
          keyListener.isPressed = false;
        }
      });
    }
  }

  public update(otherGameObjects: GameObject[]) {
    this.keyListeners
      .filter((keyListener) => keyListener.isPressed)
      .forEach((keyListener) => keyListener.event());

    this.logicObjects.forEach((logicObject) => {
      logicObject.update(otherGameObjects);
    });
  }
}
