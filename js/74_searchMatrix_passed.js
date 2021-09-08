// 74. 搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    function binSearch(arr, low, high, target) {
        if (low > high) return { res: false, pos: low - 1 }
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) return { res: true, pos: mid }
        else if (arr[mid] > target) return binSearch(arr, low, mid - 1, target)
        else return binSearch(arr, mid + 1, high, target)
    }
    const col0 = []
    const M = matrix.length, N = matrix[0].length
    for (let i = 0; i < M; ++i) {
        col0.push(matrix[i][0])
    }
    const { res: resCol, pos } = binSearch(col0, 0, col0.length - 1, target)
    if (resCol) {
        return true
    } else if (pos < 0) {
        return false
    } else {
        const { res: resRow } = binSearch(matrix[pos], 0, matrix[pos].length - 1, target)
        return resRow
    }
}

// const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
// const M = matrix.length, N = matrix[0].length
// for (let i = 0; i < M; ++i) {
//     for (let j = 0; j < N; ++j) {
//         console.log(searchMatrix(matrix, matrix[i][j]))
//     }
// }

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 0))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 61))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 1))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 10))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 23))
