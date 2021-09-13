// 118. 杨辉三角

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    const result = []
    let preLine, currLine = []
    for (let i = 0; i < numRows; ++i) {
        if (i === 0) {
            currLine.push(1)
        } else if (i === 1) {
            currLine.push(1, 1)
        } else {
            for (let j = 0; j < preLine.length - 1; ++j) {
                if (j === 0) {
                    currLine.push(1)
                }
                currLine.push(preLine[j] + preLine[j + 1])
                if (j === preLine.length - 2) {
                    currLine.push(1)
                }
            }
        }
        result.push(currLine)
        preLine = currLine
        currLine = []
    }
    return result
}

console.log(generate(5))