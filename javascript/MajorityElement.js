/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for (let v of nums) {
        if (!map[v]) {
            map[v] = 0
        }
        map[v]++
    }
    let key = ''
    for (let [k, v] of Object.entries(map)) {
        if (v > nums.length / 2) {
            key = parseInt(k)
            break
        }
    }
    return key
};

var majorityElement = function(nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
