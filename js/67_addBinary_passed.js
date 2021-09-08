// 67. 二进制求和

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let long, short
    if (a.length > b.length) {
        long = a
        short = b
    } else {
        long = b
        short = a
    }
    const lLen = long.length, sLen = short.length
    let index = 0, temp = 0, carry = false, res = ''
    while (sLen - 1 - index >= 0) {
        temp = (long[lLen - 1 - index] * 1 + short[sLen - 1 - index] * 1)
        if (carry) {
            temp += 1
            carry = false
        }
        if (temp >= 2) {
            temp = temp % 2
            carry = true
        }
        res = temp + '' + res
        ++index
    }
    if (lLen - 1 - index >= 0) {
        while (lLen - 1 - index >= 0) {
            temp = long[lLen - 1 - index] * 1
            if (carry) {
                temp += 1
                carry = false
            }
            if (temp >= 2) {
                temp = temp % 2
                carry = true
            }
            res = temp + '' + res
            ++index
        }
        if (carry) {
            res = 1 + '' + res
            carry = false
        }
    } else {
        if (carry) {
            res = 1 + '' + res
            carry = false
        }
    }
    return res
}

console.log(addBinary('1010', '1011'))
console.log(addBinary('11', '1'))
console.log(addBinary('1010101', '10101'))