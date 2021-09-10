const { timeit, randomInt } = require('./utils')
// 64. 最小路径和

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
    const M = grid.length, N = grid[0].length
    let currPos, count = grid[0][0], bottom = null, right = null, min
    const stack = [{ x: 0, y: 0, count }]
    let total = 0
    while (stack.length !== 0) {
        currPos = stack.pop()
        count = currPos.count
        while (currPos.x != M - 1 || currPos.y != N - 1) {
            const { x, y } = currPos
            if (x + 1 > M - 1) {
                bottom = null
            } else {
                bottom = grid[x + 1][y]
            }
            if (y + 1 > N - 1) {
                right = null
            } else {
                right = grid[x][y + 1]
            }
            if (bottom !== null && right !== null) {
                if (bottom < right) { // 向下走
                    stack.push({ x: x, y: y + 1, count: count + right })
                    count += bottom
                    currPos = { x: x + 1, y: y }
                } else { // 向右走
                    stack.push({ x: x + 1, y: y, count: count + bottom })
                    count += right
                    currPos = { x: x, y: y + 1 }
                }
            } else if (bottom === null) { // 向右走
                count += right
                currPos = { x: x, y: y + 1 }
            } else { // 向下走
                count += bottom
                currPos = { x: x + 1, y: y }
            }
        }
        ++total
        if (min == undefined) {
            min = count
        } else {
            if (count < min) {
                min = count
            }
        }
    }
    console.log('total =', total)
    return min
}

function formatMatrix(N) {
    let res = [], temp
    for (let i = 0; i < N; ++i) {
        temp = []
        for (let j = 0; j < N; ++j) {
            temp.push(randomInt(1, 100))
        }
        res.push(temp)
    }
    return res
}

function printBoard(board) {
    for (let row of board) {
        console.log(row.join('\t'))
    }
}

const input = formatMatrix(10)
printBoard(input)
console.log(timeit(minPathSum)(input))