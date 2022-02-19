function hammingDistance(x: number, y: number): number {
    let val = x ^ y;
    let result = 0;
    while (val > 0) {
        result++;
        val = val & (val - 1);
    }

    return result;
};

console.log(hammingDistance(1, 4));