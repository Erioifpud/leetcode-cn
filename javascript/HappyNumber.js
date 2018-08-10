/**
 * @param {number} n
 * @return {boolean}
 */
var _ = require('underscore')
var isHappy = function(n) {
    let s = new Set()
    sum = 0
    while (!s.has(n)) {
        s.add(n)
        // n.toString().split('').forEach(a => sum += parseInt(a) ** 2)
        _.each(n.toString(), a => sum += parseInt(a) ** 2)
        n = sum
        sum = 0
    }
    return n === 1
};

console.log(isHappy(19))