/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): number[] {
    let zeroIndex = -1;
    let noneZeroIndex = -1;
    let i = 0;
    while (zeroIndex === -1 || noneZeroIndex === -1) {
        if (nums[i] === 0 && zeroIndex === -1) { zeroIndex = i; }
        else if (nums[i] !== 0 && noneZeroIndex === -1) { noneZeroIndex = i; }
        i++;
    }

    debugger;
    while (noneZeroIndex < nums.length) {
        if (nums[noneZeroIndex] !== 0 && nums[zeroIndex] === 0) {
            nums[zeroIndex] = nums[noneZeroIndex];
            nums[noneZeroIndex] = 0;
        }

        if (nums[noneZeroIndex] === 0) { noneZeroIndex++; }
        if (nums[zeroIndex] !== 0) { zeroIndex++; }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));