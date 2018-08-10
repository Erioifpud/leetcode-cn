/**
 * @param {number} num
 * @return {number}
 */
var _ = require('underscore')
var addDigits = function(num) {
    while (!/^\d$/.test(num)) {
        num = _.reduce(num.toString(), (a, b) => parseInt(a) + parseInt(b))
    }
    return num
};

var addDigits = function(num) {
    return num % 9
}

console.log(addDigits(38))