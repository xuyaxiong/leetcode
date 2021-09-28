// 73. 矩阵置零

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    const rowIndices = new Set(), colIndices = new Set()
    const M = matrix.length, N = matrix[0].length
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            if (matrix[i][j] === 0) {
                rowIndices.add(i)
                colIndices.add(j)
            }
        }
    }
    for (let row of rowIndices) {
        for (let j = 0; j < N; ++j) {
            matrix[row][j] = 0
        }
    }
    for (let col of colIndices) {
        for (let i = 0; i < M; ++i) {
            matrix[i][col] = 0
        }
    }
}

function printBoard(board) {
    for (let row of board) {
        console.log(row.join(' '))
    }
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
setZeroes(matrix)
printBoard(matrix)