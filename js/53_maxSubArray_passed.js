// 53. 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let max = nums[0]
    for (let i = 0; i < nums.length; ++i) {
        let acc = nums[i]
        let currentMax = nums[i]
        for (let j = i + 1; j < nums.length; ++j) {
            acc += nums[j]
            if (acc > currentMax) currentMax = acc
        }
        if (currentMax > max) max = currentMax
    }
    return max
}

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums = [-2, -1]
const result = maxSubArray(nums)
console.log('result =', result)