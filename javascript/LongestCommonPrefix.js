/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return ''
    }
    let same = strs[0]
    for (let str of strs) {
        let i = 0
        for (; i < same.length; i++) {
            if (same[i] !== str.charAt(i)) {
                break
            }
        }
        same = same.slice(0, i)
    }
    return same
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
