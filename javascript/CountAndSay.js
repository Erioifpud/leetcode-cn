/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n <= 0) {
    return ''
  }
  let tmp = '1'
  for (let _ = 1; _ < n; _++) {
    let cur = ''
    for (let i = 0; i < tmp.length; i++) {
      let count = 1
      while (i + 1 < tmp.length && tmp[i] === tmp[i + 1]) {
        i++
        count++
      }
      cur += count + tmp[i]
    }
    tmp = cur
  }
  return tmp
};

console.log(countAndSay(1))
console.log(countAndSay(4))