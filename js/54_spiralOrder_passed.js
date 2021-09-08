// 54. 螺旋矩阵

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    let direction = 0 // [0, 1, 2, 3] ['右', '下', '左', '上']
    const M = matrix.length
    const N = matrix[0].length
    const hasSeen = []
    for (let i = 0; i < M; ++i) {
        hasSeen.push(Array(N).fill(false))
    }
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
            return right(pos)
        } else if (direction === 1) {
            return bottom(pos)
        } else if (direction === 2) {
            return left(pos)
        } else return top(pos)
    }
    let curr = { x: 0, y: 0 }, nxt = next(curr)
    const result = []
    while (true) {
        hasSeen[curr.x][curr.y] = true
        result.push(matrix[curr.x][curr.y])
        if (direction === 0) {
            if (curr.y < N - 1 && !hasSeen[nxt.x][nxt.y]) {
                curr = right(curr)
            } else {
                direction = 1
                curr = bottom(curr)
            }
        } else if (direction === 1) {
            if (curr.x < M - 1 && !hasSeen[nxt.x][nxt.y]) {
                curr = bottom(curr)
            } else {
                direction = 2
                curr = left(curr)
            }
        } else if (direction === 2) {
            if (curr.y > 0 && !hasSeen[nxt.x][nxt.y]) {
                curr = left(curr)
            } else {
                direction = 3
                curr = top(curr)
            }
        } else if (direction === 3) {
            if (curr.x > 0 && !hasSeen[nxt.x][nxt.y]) {
                curr = top(curr)
            } else {
                direction = 0
                curr = right(curr)
            }
        }
        nxt = next(curr)
        if (curr.x < 0 || curr.x >= M || curr.y < 0 || curr.y >= N) break
        if (hasSeen[curr.x][curr.y]) break
    }
    return result
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix = [[1, 2, 3]]
// const matrix = [[1], [2], [3]]
// const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
const result = spiralOrder(matrix)
console.log('result =', result)