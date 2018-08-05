/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = {}
    for (let v of nums) {
        if (!map[v]) {
            map[v] = 0
        }
        map[v]++
    }
    let keys = []
    for (let [k, v] of Object.entries(map)) {
        if (v > nums.length / 3) {
            keys.push(parseInt(k))
        }
    }
    return keys
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));