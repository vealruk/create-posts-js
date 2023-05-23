import { Component } from "../core/component";

export class MainComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    if (localStorage.visited) {
      this.show()
    }
  }
}