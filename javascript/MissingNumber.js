/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let map = []
    nums.forEach(v => map[v] = v)
    for (let [k, v] of map.entries()) {
        if (v === undefined) {
            return k
        }
    }
    return nums.length
};

console.log(missingNumber([0]))
console.log(missingNumber([0,1,2,3,4]))
console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))