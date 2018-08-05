/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
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
    let result = ''
    while (num) {
        for (let [k, v] of Object.entries(dict)) {
            if (num >= v) {
                result += k
                num -= v
                break
            }
        }
    }
    return result
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(20));

/*
还可以设置一个ptr，初始为0，匹配成功后设为当前dict的index，下次遍历dict从ptr开始。
*/