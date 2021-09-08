function isPalindrome(x) {
    if (x < 0) { return false }
    else {
        let result = true
        const arr = []
        let len = 0
        let q = x, r
        while (q > 0) {
            r = q % 10
            q = Math.floor(q / 10)
            len += 1
            arr.push(r)
        }
        for (let i = 0; i < len / 2; i++) {
            if (arr[i] !== arr[len - 1 - i]) {
                result = false
                break
            }
        }
        return result
    }
}

console.log(isPalindrome(12121))