// 125. 验证回文串

/**
 * @param {string} s
 * @return {boolean}
 */

// a - z 97 - 122
// A - Z 65 - 90
// 0 - 9 48 - 57

const isPalindrome = function (s) {
    function isChar(ch) {
        const code = ch.charCodeAt()
        return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
    }
    function isNum(num) {
        const code = num.charCodeAt()
        return code >= 48 && code <= 57
    }
    function isCharOrNum(c) {
        return isChar(c) || isNum(c)
    }
    function isSame(ch1, ch2) {
        if (isChar(ch1) && isChar(ch2)) {
            return ch1 === ch2 || Math.abs(ch1.charCodeAt() - ch2.charCodeAt()) === 32
        } else if (isNum(ch1) && isNum(ch2)) {
            return ch1 === ch2
        } else return false
    }
    let i = 0, j = s.length - 1, first, last
    while (i < j) {
        first = s[i]
        last = s[j]
        if (isCharOrNum(first) && isCharOrNum(last)) {
            if (!isSame(first, last)) {
                return false
            } else {
                ++i
                --j
            }
        } else if (isCharOrNum(first) && !isCharOrNum(last)) {
            --j
        } else if (!isCharOrNum(first) && isCharOrNum(last)) {
            ++i
        } else {
            ++i
            --j
        }
    }
    return true
}



console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('0P'))