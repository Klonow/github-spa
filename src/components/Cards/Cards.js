import {DomListeners} from '@core/DomListeners';
import {$} from '@core/dom'

export class Cards extends DomListeners {
    static className = 'row'

    constructor($el, options = {}) {
        super($el, {
            listeners: ['click']
        })
    }

    toHTML() {
        return ''
    }

    init() {
        super.init()
    }

    onClick(event, attribute = event.target.dataset) {
        if ($(event.target).attr('data-click') === 'link') {
            $('.input-change').val('')
        }

        if (attribute.btn) {
            const nextPage = +attribute.page + 1
            this.getUsers(nextPage)
        }
    }
}
