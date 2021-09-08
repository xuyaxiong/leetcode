const { randomInt } = require('./utils')
// 32. 最长有效括号

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    let counter = []
    const stack = []
    let curr
    let max = 0, top
    for (let i = 0; i < s.length; i++) {
        curr = s[i]
        if (curr === '(') {
            stack.push({ left: i })
        } else {
            top = stack.pop()
            if (top) {
                counter.push(top)
            } else {
                let count = counter.length * 2
                if (count > max) max = count
                counter = []
            }
        }
    }
    while (counter.length > 0) {
        let tempLen = 0
        let stackTop = stack.pop()
        if (stackTop) {
            while (counter.length > 0) {
                let counterTop = counter.pop()
                if (counterTop.left > stackTop.left) {
                    tempLen += 2
                } else {
                    counter.push(counterTop)
                    break
                }
            }
        } else {
            while (counter.length > 0) {
                counter.pop()
                tempLen += 2
            }
        }
        if (tempLen > max) max = tempLen
        tempLen = 0
    }
    return max
}

// console.log(longestValidParentheses("()(()"))

function randomStr(len) {
    let result = ''
    const strs = '()'
    for (let i = 0; i < len; i++) {
        result += strs[randomInt(0, 2)]
    }
    return result
}

let str = randomStr(100)
console.log(`"${str}"`)
console.log(longestValidParentheses(str))