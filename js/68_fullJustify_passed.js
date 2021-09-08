// 68. 文本左右对齐


/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
    function fillSpace(num) {
        let res = ''
        for (let i = 0; i < num; ++i) {
            res += ' '
        }
        return res
    }
    function formatLeft(line, maxWidth) {
        let res = line.join(' ')
        res += fillSpace(maxWidth - res.length)
        return res
    }
    function format(line, maxWidth) {
        if (line.length === 1) return line[0] + fillSpace(maxWidth - line[0].length)
        let wordTotalLen = 0
        for (let i = 0; i < line.length; ++i) {
            wordTotalLen += line[i].length
        }
        let diff = Math.floor((maxWidth - wordTotalLen) / (line.length - 1))
        let left = maxWidth - wordTotalLen - diff * (line.length - 1), res = ''
        for (let i = 0; i <= line.length - 1; ++i) {
            if (i < line.length - 1) {
                if (left > 0) {
                    res += (line[i] + fillSpace(diff + 1))
                    --left
                } else {
                    res += (line[i] + fillSpace(diff))
                }
            } else {
                res += line[i]
            }
        }
        return res
    }
    let currLine = [], currMaxWidth = maxWidth, currWordCount = 0, res = []
    for (let i = 0; i < words.length;) {
        if (words[i].length + currWordCount <= currMaxWidth) {
            currLine.push(words[i])
            ++currWordCount
            currMaxWidth -= words[i].length
            ++i
        } else {
            res.push(format(currLine, maxWidth))
            currLine = []
            currMaxWidth = maxWidth
            currWordCount = 0
        }
    }
    res.push(formatLeft(currLine, maxWidth))
    return res
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 17))
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16))
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
    "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20))
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 14))