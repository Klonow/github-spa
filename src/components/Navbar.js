import {DomListeners} from '@core/DomListeners';

export class Navbar extends DomListeners {
    static className = 'navbar'

    constructor($el, options = {}) {
        super($el, {
            listeners: []
        })
    }

    toHTML() {
        return `
            <nav>
                <li class="navbar-brand">Search Github</li>
            </nav>
        `
    }

    init() {
        super.init()
    }
}
