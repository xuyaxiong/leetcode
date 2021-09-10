// 43. 字符串相乘

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    function sum(a, b) {
        let i = a.length - 1, j = b.length - 1, temp, carry = 0, res = ''
        while (j >= 0) {
            if (i < 0) {
                temp = carry + b[j] * 1
            } else {
                temp = carry + a[i] * 1 + b[j] * 1
            }
            carry = Math.floor(temp / 10)
            temp = temp % 10
            res = temp + res
            --i
            --j
        }
        if (carry !== 0)
            res = carry + res
        return res
    }
    function addZero(str, count) {
        while (count-- > 0) {
            str += '0'
        }
        return str
    }
    const rows = []
    let pos = 0, carry, tempRes
    for (let j = num2.length - 1; j >= 0; --j) {
        carry = 0, tempRes = ''
        for (let i = num1.length - 1; i >= 0; --i) {
            let temp = num1[i] * num2[j] + carry
            carry = Math.floor(temp / 10)
            temp = temp % 10
            tempRes = temp + tempRes
        }
        if (carry > 0) tempRes = carry + tempRes
        rows.push(addZero(tempRes, pos++))
    }
    const res = rows.reduce((a, b) => sum(a, b))
    return res
}

console.log(multiply('123', '456'))
console.log(multiply('2', '3'))
console.log(multiply('9', '99'))
console.log(multiply('9', '9'))