function debounce(fn: Function, wait: number) {
    let timer = null;
    return function() {
        const self = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(self, arguments);
        }, wait);
    }
}