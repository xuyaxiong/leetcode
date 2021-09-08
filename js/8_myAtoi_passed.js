function myAtoi(s) {
    let result = '', illegal = true, hasSign = false, sign = true
    for (let i = 0; i < s.length; i++) {
        if (!illegal) break
        if (s[i] === ' ') {
            if(result.length > 0 || hasSign) break
        } else if (s[i] >= '0' && s[i] <= '9') {
            result += s[i]
        } else if (s[i] === '-') {
            if (hasSign || result.length > 0) break
            hasSign = true
            sign = false
        } else if (s[i] === '+') {
            if (hasSign || result.length > 0) break
            hasSign = true
            sign = true
        } else {
            illegal = false
        }
    }
    if (result === '') return 0
    let data = 0
    const len = result.length
    for (let i = 0; i < len; ++i) {
        data += result[i] * Math.pow(10, len - 1 - i)
    }
    if (hasSign && !sign) {
        data = -data
    }
    if (data > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
    else if (data < (-1) * Math.pow(2, 31)) return Math.pow(2, 31) * (-1)
    else return data
}

console.log(myAtoi(' + 413'))