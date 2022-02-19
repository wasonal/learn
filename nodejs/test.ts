function twoSum(nums: number[], target: number): number[] {
    /** 哈希法 */
    const hashmap = nums.reduce((m, n, i) => {
        m[n] = m[n] ? (m[n].push(i), m[n]) : [i];
        return m;
    }, {} as Record<string, number[]>);

    console.log(hashmap);
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const k = target - n;
        if (hashmap[k]) {
            return [i].concat(n === k ? hashmap[k][1] : hashmap[k][0]);
        }
    }
    return [];
};

console.log(twoSum([3,2,4], 6));