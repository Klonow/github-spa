import {$} from './dom'

export class App {
  constructor(selector, options = {}) {
    this.components = options.components
  }

  render() {
    this.components = this.components.map(Component => {
      const $target = $.create('div', Component.className)
      $('#app').append($target)

      const component = new Component($target)
      $target.html(component.toHTML())
      return component
    })

    this.components.map(Component => Component.init())
  }
}
