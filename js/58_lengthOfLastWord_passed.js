// 58. 最后一个单词的长度

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let last = 0
    let current = 0
    let ch
    for (let i = 0; i < s.length; ++i) {
        ch = s[i]
        if (ch !== ' ') {
            current += 1
        } else {
            if (current !== 0) {
                last = current
            }
            current = 0
        }
    }
    if (current > 0) {
        last = current
    }
    return last
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("Hello World   "))
console.log(lengthOfLastWord("luffy is still joyboy     "))
console.log(lengthOfLastWord(""))
console.log(lengthOfLastWord("     "))