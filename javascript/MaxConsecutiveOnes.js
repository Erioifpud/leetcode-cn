/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0
    let tmp = 0
    for (let v of nums) {
        if (v === 1) {
            tmp++
        } else {
            if (tmp > result) {
                result = tmp
            }
            tmp = 0
        }
    }
    if (tmp > result) {
        result = tmp
    }
    return result
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,1,1,1,1,1,1,1,0]))