function constructArr(a: number[]): number[] {
    const res: number[] = [];
    res[0] = 1;
    for (let i = 1; i < a.length; i++) {
        res[i] = res[i - 1] * a[i - 1];
    }
    let temp = 1;
    for (let i = a.length - 2; i >= 0; i--) {
        debugger;
        temp = a[i] * temp;
        res[i] = res[i] * temp;
    }
    return res;
};

console.log(constructArr([1, 2, 3, 4, 5]));