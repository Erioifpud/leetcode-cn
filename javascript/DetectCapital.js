/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    word = word.split('')
    return word.every(v => v === v.toLowerCase()) ||
        word.every(v => v === v.toUpperCase()) ||
        (word.slice(1).every(v => v === v.toLowerCase()) && word[0] === word[0].toUpperCase())
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FlaG"))
console.log(detectCapitalUse("Leetcode"))