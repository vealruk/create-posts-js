import { Component } from "../core/component";

export class HeaderComponent extends Component {
  constructor(id, main) {
    super(id);

    this.main = main
  }

  init() {
    if (localStorage.visited) {
      this.hide()
    }
    const btn = this.$el.querySelector('.js-header-start')
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler() {
  localStorage.setItem('visited', JSON.stringify(true))
  this.hide()
  this.main.show()
}
