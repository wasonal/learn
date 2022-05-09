function throttle(fn, delay) {
    const self = this;
    let timer = null;
    let last = null;

    return function(...args) {
        const now = Date.now()
        if (last && last + delay >= now) {
            last = now;
            timer = setTimeout(function () {
                fn.apply(self, args);
                timer = null;
            }, delay);
        } else {
            last = now;
            fn.apply(self, args);
        }
    }
}