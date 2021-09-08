// 62. 不同路径

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    function factorial(m, n) {
        let res = 1, count = 0
        while (count++ < n) {
            res *= m--
        }
        return res
    }
    return factorial(m + n - 2, m - 1) / factorial(m - 1, m - 1)
}



console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))
console.log(uniquePaths(3, 3))
