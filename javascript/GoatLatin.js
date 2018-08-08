/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let s = ''
    S.split(' ').forEach((v, k) => {
        let [a, ...left] = v
        let tmp = a.toLowerCase()
        if (tmp === 'a' || tmp === 'e' || tmp === 'i' || tmp === 'o' || tmp === 'u') {
            left.unshift(a)
        } else {
            left.push(a)
        }
        left.push('ma')
        left.push(new Array(k + 2).join('a'))
        s += left.join('') + ' '
    })
    return s.trim()
};

console.log(toGoatLatin("I speak Goat Latin"))
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))