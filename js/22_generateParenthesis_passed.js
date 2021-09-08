const { timeit } = require('./utils')

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    return allCase(2 * n).filter(item => isValid(item))
}

var generateParenthesisV2 = function (n) {
    return allCaseV2(2 * n).filter(item => item.left === item.right).filter(item => isValid(item.val)).map(item => item.val)

}

function isValid(str) {
    const stack = []
    let top
    for (let char of str) {
        if (char === '(') {
            stack.push(char)
        } else {
            top = stack.pop()
            if (top !== '(') {
                return false
            }
        }
    }
    return stack.length === 0
}

function allCase(n) {
    if (n === 1) return ['(', ')']
    const temp = allCase(n - 1)
    const result = []
    for (let item of temp) {
        result.push(item + ')')
        result.push(item + '(')
    }
    return result
}

function allCaseV2(n) {
    if (n === 1) return [{ val: '(', left: 1, right: 0 }, { val: ')', left: 0, right: 1 }]
    const temp = allCaseV2(n - 1)
    const result = []
    for (let item of temp) {
        result.push({ val: item.val + '(', left: item.left + 1, right: item.right })
        result.push({ val: item.val + ')', left: item.left, right: item.right + 1 })
    }
    return result
}

const result = timeit(generateParenthesis)(8)
const result2 = timeit(generateParenthesisV2)(8)

console.log(result.length)
console.log(result2.length)

// const test = timeit(allCaseV2)(2)
// console.log(test)