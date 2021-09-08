const { equal } = require("assert")

// 13. 罗马数字转整数

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let val = 0, curr, nxt
    for (let i = 0; i < s.length;) {
        curr = s[i]
        nxt = s[i + 1]
        if (curr === 'M') {
            val += 1000
        } else if (curr === 'D') {
            val += 500
        } else if (curr === 'C') {
            if (nxt === 'M') {
                val += 900
                ++i
            } else if (nxt === 'D') {
                val += 400
                ++i
            } else {
                val += 100
            }
        } else if (curr === 'L') {
            val += 50
        } else if (curr === 'X') {
            if (nxt === 'C') {
                val += 90
                ++i
            } else if (nxt === 'L') {
                val += 40
                ++i
            } else {
                val += 10
            }
        } else if (curr === 'V') {
            val += 5
        } else if (curr === 'I') {
            if (nxt === 'X') {
                val += 9
                ++i
            } else if (nxt === 'V') {
                val += 4
                ++i
            } else {
                val += 1
            }
        }
        ++i
    }
    return val
}

equal(romanToInt('III'), 3)
equal(romanToInt('IV'), 4)
equal(romanToInt('IX'), 9)
equal(romanToInt('LVIII'), 58)
equal(romanToInt('MCMXCIV'), 1994)
equal(romanToInt('CMXCIX'), 999)