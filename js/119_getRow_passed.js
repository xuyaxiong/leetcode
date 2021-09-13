// 119. 杨辉三角 II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    let preLine, currLine = []
    for (let i = 0; i < rowIndex + 1; ++i) {
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
        preLine = currLine
        currLine = []
    }
    return preLine
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(33))