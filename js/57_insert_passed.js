// 57. 插入区间

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
    function mergeHelper(i1, i2) {
        return [i1[0], i1[1] > i2[1] ? i1[1] : i2[1]]
    }
    let insPos = -1, temp
    let result = []
    for (let i = 0; i < intervals.length; ++i) {
        temp = intervals[i]
        if (temp[0] >= newInterval[0]) {
            insPos = i
            break
        } else {
            result.push(temp)
        }
    }
    let tempInterval = newInterval
    let currInterval = result.pop()
    if (currInterval) {
        if (currInterval[1] >= tempInterval[0]) {
            tempInterval = mergeHelper(currInterval, tempInterval)
        } else {
            result.push(currInterval)
        }
    }
    if (insPos !== -1) {
        for (let j = insPos; j < intervals.length; ++j) {
            currInterval = intervals[j]
            if (tempInterval[1] >= currInterval[0]) {
                tempInterval = mergeHelper(tempInterval, currInterval)
            } else {
                result.push(tempInterval)
                tempInterval = currInterval
            }
        }
    }
    result.push(tempInterval)
    return result
}

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([], [5, 7]))
console.log(insert([[1, 5]], [2, 7]))
console.log(insert([[1, 5]], [6, 8]))