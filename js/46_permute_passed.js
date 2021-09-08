// 46. 全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    if (nums.length === 1) return [[nums[0]]]
    let head = nums[0]
    nums.splice(0, 1)
    rest = [...nums]
    const result = []
    const temp = permute(rest)
    for (let item of temp) {
        let len = item.length
        for (let i = 0; i <= len; ++i) {
            let arr = [...item]
            arr.splice(i, 0, head)
            result.push(arr)
        }
    }
    return result
}

const res = permute([1, 2, 3, 4, 5])
console.log(res)