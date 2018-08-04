/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString()
    let result
    if (x.includes('-')) {
        result =  parseInt(`-${x.slice(1).split('').reverse().join('')}`)
    } else {
        result =  parseInt(`${x.split('').reverse().join('')}`)
    }
    return (result <= 2147483647 && result >= -2147483648) ? result : 0
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));