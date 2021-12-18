var minNumber = function(nums) {
    nums.sort((pre, cur) => `${pre}${cur}` - `${cur}${pre}`);
    return nums.join('');
};

console.log(minNumber([3,30,34,5,9]));