export function method(listener) {
    return 'on' + listener.charAt(0).toUpperCase() + listener.substr(1)
}

export function debounce(func, delay) {
    let debounceTimer
    return function() {
        clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => func.apply(this, arguments), delay)
    }
}

export function storage(key, value) {
    if (value) {
        return localStorage.setItem(key, value)
    }
    return localStorage.getItem(key)
}


