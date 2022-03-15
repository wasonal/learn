function spiralOrder(matrix: number[][]): number[] {
    let left = 0, right = matrix[0].length - 1;
    let top = 0, bottom = matrix.length - 1;
    const ans: number[] = [];
    while (left <= right && top <= bottom) {
        debugger
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        for (let i = top + 1; i < bottom; i++) {
            ans.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right; i > left; i--) {
                ans.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--) {
                ans.push(matrix[i][left]);
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return ans;
};

console.log(spiralOrder([[3], [2]]));