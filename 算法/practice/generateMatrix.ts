function generateMatrix(n: number): number[][] {
    let i = 1;
    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    const ans: number[][] = new Array<number[]>(n).fill([]).map(() => new Array<number>(n));

    while (i <= n * n) {
        let row = top, col = left;
        for (; col <= right; col++, i++) {
            ans[row][col] = i;
        }
        for (col = right, row = top + 1; row <= bottom; row++, i++) {
            ans[row][col] = i;
        }
        for (row = bottom, col = right - 1; col >= left; col--, i++) {
            ans[row][col] = i;
        }
        for (row = bottom - 1, col = left; row > top; row--, i++) {
            ans[row][col] = i;
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }

    return ans;
};

console.log(generateMatrix(3));