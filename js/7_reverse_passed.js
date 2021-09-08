function reverse(x) {
    if (x === 0) return 0
    let sign = x >= 0 ? true : false
    x = Math.abs(x)
    const stack = []
    let q = x, r
    while (q > 0) {
        r = q % 10
        q = Math.floor(q / 10)
        stack.push(r)
    }
    let result = '', temp, flag = false
    while (stack.length > 0) {
        temp = stack.shift()
        if (temp !== 0) {
            flag = true
        }
        if (flag) {
            result += temp
        }
    }
    result = parseInt(result)
    if (!sign) { result = (-1) * result }
    if (result > Math.pow(2, 31) - 1 || result < (-1) * Math.pow(2, 31)) return 0
    return result
}

console.log(reverse(Math.pow(2, 32)))