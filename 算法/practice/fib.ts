function fib(n: number, pre = 0, cur = 1): number {
    if (n === 0) {
        return pre;
    }
    return fib(n - 1, cur, pre + cur);
}

console.log(fib(5));