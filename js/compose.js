function compose(...fns) {
    return (...args) => fns.reduceRight((val, fn) => fn.apply(null, val), args);
}