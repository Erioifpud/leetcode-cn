/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let [ma, mb] = [0, 0]
    for (let b of bills) {
        if (b === 5) {
            ma++
        } else if (b === 10) {
            if (!ma) {
                return false
            }
            mb++
            ma--
        } else {
            if (ma && mb) {
                mb--
                ma--
            } else if (ma > 2) {
                ma -= 3
            } else {
                return false
            }
        }
    }
    return true
};

console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange([5,5,10]))
console.log(lemonadeChange([10,10]))
console.log(lemonadeChange([5,5,10,10,20]))
console.log(lemonadeChange([5,5,5,20,5,5,5,20,5,5,5,10,5,20,10,20,10,20,5,5]))