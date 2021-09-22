// 77. 组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const stack = []
    const arr = []
    const result = []
    let i = 0
    while (stack.length >= 0) {
        i = arr[arr.length - 1] || 0
        while (arr.length < k && i < n) {
            arr.push(i + 1)
            for (let j = i + 1; j < n; ++j) stack.push({ val: j + 1, level: arr.length })
            ++i
        }
        if (arr.length === k) result.push([...arr])
        if (stack.length > 0) {
            let { val, level } = stack.pop()
            while (arr.length >= level) arr.pop()
            arr.push(val)
        } else break
    }
    return result
}

// console.log(combine(5, 3))
// console.log(combine(4, 2))
console.log(combine(5, 1))
console.log(combine(5, 2))
console.log(combine(5, 3))
console.log(combine(5, 4))
console.log(combine(5, 5))
// console.log(combine(1, 1))

