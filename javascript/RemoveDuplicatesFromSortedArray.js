/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length
    }
    let step = 0
    for (let i = 1; i < nums.length; i++) {
        let a = nums[i]
        let b = nums[i - 1]
        if (a === b) {
            nums[i - 1] = undefined
            step++
        }
    }
    nums.sort((a, b) => a - b)
    return nums.length - step
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([-3,-1,0,0,0,3,3]));

// 这里不能用splice，splice在遍历过程中会改变原有数组的长度和顺序。
