// 75. 颜色分类

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] > nums[j]) {
            swap(i, j)
            if (nums[j] === 2) --j
            if (nums[i] === 0) ++i
        } else if (nums[i] < nums[j]) {
            if (nums[i] === 0) ++i
            if (nums[j] === 2) --j
        } else {
            if (nums[i] === 2) {
                swap(i, j - 1)
                j -= 2
            } else if (nums[i] === 0) {
                swap(i + 1, j)
                i += 2
            } else if (nums[i] === 1) {
                let flag = false
                for (let k = i + 1; k < j; ++k) {
                    if (nums[k] !== 1) {
                        flag = true
                        swap(i, k)
                        break
                    }
                }
                if (!flag) break
            }
        }
    }
}



// const nums = [2, 0, 2, 1, 1, 0]
const nums = [1, 0, 2, 1, 0, 1]
// const nums = [2, 0, 1]
// const nums = [0]
sortColors(nums)
console.log(nums)