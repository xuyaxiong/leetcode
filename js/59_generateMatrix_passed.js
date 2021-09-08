// 59. 螺旋矩阵 II

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
    let total = n * n
    let direction = 0 // [0, 1, 2, 3] ['右', '下', '左', '上']
    function left(pos) {
        return { x: pos.x, y: pos.y - 1 }
    }
    function right(pos) {
        return { x: pos.x, y: pos.y + 1 }
    }
    function top(pos) {
        return { x: pos.x - 1, y: pos.y }
    }
    function bottom(pos) {
        return { x: pos.x + 1, y: pos.y }

    }
    function next(pos) {
        if (direction === 0) {
            if (pos.y < n - 1) {
                return right(pos)
            } else {
                direction = 1
                return bottom(pos)
            }
        } else if (direction === 1) {
            if (pos.x < n - 1) {
                return bottom(pos)
            } else {
                direction = 2
                return left(pos)
            }
        } else if (direction === 2) {
            if (pos.y > 0) {
                return left(pos)
            } else {
                direction = 3
                return top(pos)
            }
        } else if (direction === 3) {
            if (pos.x > 0) {
                return top(pos)
            } else {
                direction = 0
                return right(pos)
            }
        }
    }

    const arr = []
    for (let i = 0; i < total; ++i) {
        arr.push(i + 1)
    }
    const result = [], hasSeen = []
    for (let i = 0; i < n; ++i) {
        result.push(Array(n).fill(0))
        hasSeen.push(Array(n).fill(false))
    }
    let currPos = { x: 0, y: 0 }, count = 0
    let nxtPos
    while (count < total) {
        result[currPos.x][currPos.y] = arr[count]
        hasSeen[currPos.x][currPos.y] = true
        nxtPos = next(currPos)
        if (nxtPos.x > n - 1 || nxtPos.x < 0 || nxtPos.y > n - 1 || nxtPos.y < 0)
            break
        if (hasSeen[nxtPos.x][nxtPos.y]) {
            direction = (direction + 1) % 4
            currPos = next(currPos)
        } else {
            currPos = nxtPos
        }
        count++
    }
    return result
}

function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join('\t'))
    }
    console.log('\n')
}

printMatrix(generateMatrix(1))
// printMatrix(generateMatrix(2))
// printMatrix(generateMatrix(3))
// printMatrix(generateMatrix(4))
printMatrix(generateMatrix(10))