function longestPalindrome(s) {
    const len = s.length
    let oddResult = s[0]
    let evenResult = ''
    let temp
    for (let i = 0; i < len; i++) {
        let p1 = i - 1, p = i, p2 = i + 1
        while (s[p1] && s[p1] === s[p2]) {
            p1 -= 1
            p2 += 1
        }
        temp = s.substring(p1 + 1, p2)
        if (temp.length > oddResult.length) {
            oddResult = temp
        }
        p1 = i - 1, p = i, p2 = i + 1
        while (s[p] && s[p] === s[p2]) {
            p -= 1
            p2 += 1
        }
        temp = s.substring(p + 1, p2)
        if (temp.length > evenResult.length) {
            evenResult = temp
        }
    }
    return oddResult.length > evenResult.length ? oddResult : evenResult
}

console.log(longestPalindrome('bb'))