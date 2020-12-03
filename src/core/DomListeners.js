import {debounce, method} from '@core/utils';
import {API} from '@core/API';

export class DomListeners extends API {
    constructor($el, options) {
        super($el)
        this.listeners = options.listeners
        this.$el = $el
        this.prepare()
    }

    prepare() {
        this['onInput'] = debounce(this['onInput'], 400)
    }

    init() {
        this.listeners.map(listener => {
            const action = method(listener)
            this.$el.on(listener, this[action].bind(this, ...arguments))
        })
    }
}
