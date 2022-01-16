function singleNumbers(nums: number[]): number[] {
    const temp = nums.reduce((res, n) => res ^ n, 0);
    let d = 1;
    while ((d & temp) === 0) {
        d <<= 1;
    }
    let a = 0, b = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if ((d & cur) === 0) {
            a ^= cur;
        } else {
            b ^= cur;
        }
    }

    return [a, b];
};

console.log(singleNumbers([1,2,10,4,1,4,3,3]));