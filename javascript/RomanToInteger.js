/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let sum = 0
    while (s.length) {
        let [a, b, ...left] = s
        if (a + b in dict) {
            sum += dict[a + b]
            s = left
        } else {
            sum += dict[a]
            left.unshift(b)
            s = left 
            if (!b) {
                return sum
            }
        }
    }
    return sum
};

var romanToInt = function(s) {
    let dict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let [i, sum] = [0, 0]
    for (let [k, v] of Object.entries(dict)) {
        while (s.slice(i, i + k.length) === k) {
            sum += v
            i += k.length
        }
    }
    return sum
}

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));