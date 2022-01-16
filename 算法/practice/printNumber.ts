function printNumbers(n: number) {
    const nums = [0,1,2,3,4,5,6,7,8,9];
    let str = new Array(n).fill(0);

    const res: number[] = [];
    let endSliceIndex = -1;
    const dfs = (index: number) => {
        if (index === n) {
            res.push(+str.slice(endSliceIndex).join(''));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            str[index] = nums[i];
            dfs(index + 1);
            if (str.slice(n + endSliceIndex).every((s) => s === 9)) {
                endSliceIndex--;
            }
        }
    }

    dfs(0);
    res.shift();
    return res;
};
console.log(printNumbers(3));