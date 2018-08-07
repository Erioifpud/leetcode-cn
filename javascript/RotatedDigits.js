/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let isValid = (n) => {
        n = n.toString()
        let flag = false
        for (let i = 0; i < n.length; i++) {
            if (n[i] === '2' || n[i] === '9' || n[i] === '5' || n[i] === '6') {
                flag = true
            } else if (n[i] === '3' || n[i] === '4' || n[i] === '7') {
                return false
            }
        }
        return flag
    }
    let count = 0
    for (let i = 1; i <= N; i++) {
        if (isValid(i)) {
            count++
        }
    }
    return count
};

console.log(rotatedDigits(2))