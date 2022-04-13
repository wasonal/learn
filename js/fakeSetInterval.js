function fakeSetInterval(fn, wait) {
    const self = this;
    let timer = null;
    function interval() {
        timer = setTimeout(function() {
            fn.call(self)
            interval();
        }, wait);
    }

    interval();

    return {
        cancel: function() {
            clearTimeout(timer);
        }
    };
}