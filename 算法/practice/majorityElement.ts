function majorityElement(nums: number[]): number {
    // 摩尔投票法
    // nums的数组长度为length其原理是因为多数元素如果有n(n > len / 2)个，那么其他元素的总个数则为len - n(小于len / 2)
    // 那么多数元素的个数和其他元素的总个数差值为n - (len - n) = 2n - len
    // 结果一定是大于1的
    let chosen = nums[0];
    let vol = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === chosen) {
            vol++;
        } else {
            vol--;
        }

        if (vol === 0) {
            chosen = nums[i];
            vol = 1;
        }
    }

    return chosen;
};