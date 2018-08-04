/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let len = x.length
    let mid = Math.floor(len / 2)
    for (let i = 0; i < mid; i++) {
        if (x[i] !== x[len - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

