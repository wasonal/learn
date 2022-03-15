function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    let cur = nums[0];
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (cur === nums[i]) { continue; }
        cur = nums[i];

        let curResult: number[] = [];

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] + cur < 0) {
                left++;
            } else if (nums[left] + nums[right] + cur > 0) {
                right--;
            } else {
                if (curResult[0] === nums[left] || curResult[1] === nums[right]) {
                    left++;
                    continue;
                }

                curResult = [nums[left], nums[right]];
                result.push([cur, nums[left], nums[right]]);
            }
        }
    }

    return result;
};

console.log(threeSum([0, 0, 0]));