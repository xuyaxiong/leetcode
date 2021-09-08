// 56. 合并区间

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    function mergeHelper(i1, i2) {
        return [i1[0], i1[1] > i2[1] ? i1[1] : i2[1]]
    }
    intervals.sort((i1, i2) => i1[0] - i2[0])
    const result = []
    let pre = intervals[0], curr
    for (let i = 1; i < intervals.length; ++i) {
        curr = intervals[i]
        if (curr[0] <= pre[1]) {
            pre = mergeHelper(pre, curr)
        } else {
            result.push(pre)
            pre = curr
        }
    }
    result.push(pre)
    return result
}

console.log(merge([[1, 3], [8, 10], [2, 6], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 2]]))