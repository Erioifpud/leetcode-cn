/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (RegExp(`^${needle}`).test(haystack.slice(i))) {
            return i
        }
    }
    return -1
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('aaaaa', ''));
console.log(strStr('', ''));
console.log(strStr('mississippi', 'issi'));
