// 40. 组合总和 II

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    function pick(target, start) {
        for (let i = start; i < candidates.length; ++i) {
            if (candidates[i] <= target) {
                return { val: candidates[i], pos: i }
            }
        }
        return { val: -1, pos: -1 }
    }
    candidates.sort((a, b) => a - b)
    const arr = []
    let start = 0
    const result = [], backStack = [{ start, target, last: -1 }]
    while (backStack.length > 0) {
        const { val, pos } = pick(target, start)
        if (pos !== -1) {
            start = pos + 1
            // 入栈处理
            let j = start, count = 0
            while (j < candidates.length) {
                if (candidates[j] !== val) {
                    backStack.push({ start: start + count, target, last: val })
                    break
                }
                ++count
                ++j
            }
            target -= val
            arr.push(val)
            if (target === 0) {
                result.push([...arr])
            }
        } else {
            let top = backStack.pop()
            // 出栈处理
            let last = top.last
            let arrTop = arr.pop()
            while (arrTop && arrTop !== last) {
                arrTop = arr.pop()
            }
            start = top.start
            target = top.target
        }
    }
    return result
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11))
console.log(combinationSum2([8, 7, 4, 3], 11))
console.log(combinationSum2([2, 6, 3, 5, 1, 7], 8))
