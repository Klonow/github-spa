export class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    insert(where, html) {
        return this.$el.insertAdjacentHTML(where, html)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    html(html) {
        if (typeof html !== 'undefined') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    remove(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        this.$el.removeChild(node)
        return this
    }

    val(value) {
        const valueAttr = this.$el.value

        if (value !== undefined) {
            this.$el.value = value
        }

        if (valueAttr) {
            return valueAttr
        }

        return this
    }


    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    attr(attribute, value) {
        if (value) {
            return this.$el.setAttribute(attribute, value)

        }

        return this.$el.getAttribute(attribute)
    }
}

$.create = (tagName, className) => {
    const $target = document.createElement(tagName)

    if (className) {
        $target.className = className
    }

    return $($target)
}

export function $(selector) {
    return new Dom(selector)
}
