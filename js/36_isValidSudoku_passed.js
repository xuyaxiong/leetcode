// 36. 有效的数独

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    function isOk(arr) {
        let set = new Set()
        let left = arr.filter(item => item !== '.')
        for (item of left) {
            if (set.has(item)) {
                return false
            } else {
                set.add(item)
            }
        }
        return true
    }
    for (let row of board) {
        if (!isOk(row)) return false
    }
    for (let j = 0; j < 9; ++j) {
        if (!isOk([board[0][j], board[1][j], board[2][j], board[3][j], board[4][j], board[5][j], board[6][j], board[7][j], board[8][j]])) return false
    }
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (!isOk([
                board[0 + 3 * i][0 + 3 * j], board[0 + 3 * i][1 + 3 * j], board[0 + 3 * i][2 + 3 * j],
                board[1 + 3 * i][0 + 3 * j], board[1 + 3 * i][1 + 3 * j], board[1 + 3 * i][2 + 3 * j],
                board[2 + 3 * i][0 + 3 * j], board[2 + 3 * i][1 + 3 * j], board[2 + 3 * i][2 + 3 * j]
            ])) return false
        }
    }
    return true
}

const board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

function printBoard(board) {
    for (let row of board) {
        console.log(row.join(' '))
    }
}

console.log(isValidSudoku(board))
