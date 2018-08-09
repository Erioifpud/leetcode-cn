/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = []
    for (let i = 0; i < rowIndex + 1; i++) {
        row.unshift(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] += row[j + 1]
        }
    }
    return row
};

console.log(getRow(3))
/*
n轮会把数组的长度扩展为n，后3位为上一轮的计算结果，根据上一轮结果中间的数（除去开头）进行相邻相加，也就是模拟帕斯卡三角的操作，每一轮要修改n-2个数字。
*/

/*
(1) 1
(2) 1 1
(3) 1 1 1
(3) 1 2 1
(4) 1 1 2 1
(4) 1 3 2 1
(4) 1 3 3 1
(5) 1 1 3 3 1
(5) 1 4 3 3 1
(5) 1 4 6 3 1
(5) 1 4 6 4 1
*/