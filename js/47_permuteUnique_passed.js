// 47. 全排列 II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    function helper(nums) {
        if (nums.length === 1) return [nums[0] + ""]
        let head = nums[0]
        const result = new Set()
        nums.splice(0, 1)
        rest = [...nums]

        const temp = helper(rest)
        for (let item of temp) {
            item = item.split(',')
            let len = item.length
            for (let i = 0; i <= len; ++i) {
                let arr = [...item]
                arr.splice(i, 0, head)
                result.add(arr.join(','))
            }
        }
        return result
    }
    return [...helper(nums)].map(item => item.split(',').map(s => s * (1)))
}

console.log(permuteUnique([1, 2, 3, 3]))
console.log(permuteUnique([1, 2, 3, 3]))
console.log(permuteUnique([1, 2, 3]))