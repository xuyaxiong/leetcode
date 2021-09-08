// 38. 外观数列

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    if (n === 1) return '1'
    let temp = countAndSay(n - 1), curr = null, nxt, count = 0, res = ''
    for (let i = 0; i < temp.length; ++i) {
        curr = temp[i]
        nxt = temp[i + 1]
        ++count
        if (nxt && curr !== nxt) {
            res += `${count}${curr}`
            count = 0
        }
    }
    if (count > 0) {
        res += `${count}${curr}`
    }
    return res
}

console.log(countAndSay(1))