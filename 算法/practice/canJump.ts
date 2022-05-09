function canJump(nums: number[]): boolean {
    let i = 0;
    debugger;
    for (i = 0; i < nums.length; i++) {
        let max = 0, maxIndex = i;
        if (i + nums[i] + 1 >= nums.length) {
            return true;
        }
        for (let j = 1; j <= nums[i]; j++) {
            const cur = nums[i + j] + j;
            if (max < cur) {
                max = cur;
                maxIndex = i + j;
            }
        }
        if (maxIndex === i) {
            break;
        }
        i = maxIndex - 1;
    }

    return false;
};

console.log(canJump([1,2,3]));