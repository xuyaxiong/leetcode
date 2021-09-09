const { equal } = require('assert')
// 28. 实现 strStr()

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    let i = 0, j = 0, flag = false, lastPos = 0
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            if (!flag) {
                flag = true
                lastPos = i + 1
            }
            ++i
            ++j
        } else {
            if (flag) {
                flag = false
                i = lastPos
                j = 0
            } else {
                ++i
                j = 0
            }
        }
    }
    return j === needle.length ? i - needle.length : -1
}

equal(strStr('hello', 'll'), 2)
equal(strStr('aaaaa', 'bba'), -1)
equal(strStr('', ''), 0)
console.log(strStr('aaaaa', 'bba'))