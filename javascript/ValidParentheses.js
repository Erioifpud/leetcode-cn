/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (let v of s) {
        if (v === '{' || v === '(' || v === '[') {
            stack.push(v)
        } else {
            if (!stack.length) {
                return false
            }
            if (v === '}' && stack[stack.length - 1] !== '{') {
                return false
            }
            if (v === ']' && stack[stack.length - 1] !== '[') {
                return false
            }
            if (v === ')' && stack[stack.length - 1] !== '(') {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
