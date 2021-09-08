const { timeit } = require('./utils')
// 70. 爬楼梯

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    const cache = {
        1: 1,
        2: 2
    }
    function helper(n) {
        if (n == 1) return 1
        else if (n == 2) return 2
        else {
            let r1, r2, r
            if (cache[n - 1]) {
                r1 = cache[n - 1]
            } else {
                r1 = helper(n - 1)
            }
            if (cache[n - 2]) {
                r2 = cache[n - 2]
            } else {
                r2 = helper(n - 2)
            }
            r = r1 + r2
            if (!cache[n]) {
                cache[n] = r
            }
            return r
        }
    }
    return helper(n)
}

console.log(timeit(climbStairs)(50))