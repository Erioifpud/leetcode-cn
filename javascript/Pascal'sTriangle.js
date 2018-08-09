/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        result[i] = Array(i + 1).fill(1)
        for (let j = 1; j < result[i].length - 1; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
        }
    }
    return result
};

console.log(generate(0))
console.log(generate(1))
console.log(generate(5))