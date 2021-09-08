const { randomInt } = require('./utils')
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const left = '([{'
    const right = ')]}'
    const stack = []
    let top
    let result = true
    for (let str of s) {
        if (left.indexOf(str) >= 0) {
            stack.push(str)
        } else {
            top = stack.pop()
            if (left.indexOf(top) !== right.indexOf(str)) {
                result = false
                break
            }
        }
    }
    if (stack.length !== 0) result = false
    return result
}

function randomStr(len) {
    const str = '()[]{}'
    let result = ''
    for (let i = 0; i < len; i++) {
        result += str[randomInt(0, str.length)]
    }
    return result
}

console.log(isValid('()('))