function longestCommonPrefix(strs) {
    function isSame(strs, i) {
        let ch = strs[0][i]
        if (ch === '' || ch === undefined) return false
        let flag = true
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== ch) {
                flag = false
                break
            }
        }
        return flag
    }
    let prefix = ''
    let i = 0
    while (isSame(strs, i)) {
        prefix += strs[0][i++]
    }
    return prefix
}

// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["a"]))
