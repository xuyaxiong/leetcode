// 48. 旋转图像

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    const cache = {}
    let N = matrix.length
    function posMap(pos) {
        return [pos[1], -pos[0] + N - 1]
    }
    function formatKey(pos) {
        return pos[0] + ',' + pos[1]
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let newPos = posMap([i, j])
            cache[formatKey(newPos)] = matrix[newPos[0]][newPos[1]]
            if (cache[formatKey([i, j])] !== undefined) {
                matrix[newPos[0]][newPos[1]] = cache[formatKey([i, j])]
            } else {
                matrix[newPos[0]][newPos[1]] = matrix[i][j]
            }
        }
    }
}

function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const matrix = [
    [43, 39, 3, 33, 37, 20, 14],
    [9, 18, 9, -1, 40, 22, 38],
    [14, 42, 3, 23, 12, 14, 32],
    [18, 31, 45, 11, 8, -1, 31],
    [28, 44, 14, 23, 40, 24, 13],
    [29, 45, 33, 45, 20, 0, 45],
    [12, 23, 35, 32, 22, 39, 8]
]
rotate(matrix)
printMatrix(matrix)

