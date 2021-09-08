// 80. 删除有序数组中的重复项 II

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let pre = nums[0], curr, acc = 1
    for (let i = 1; i < nums.length;) {
        curr = nums[i]
        if (curr === pre) {
            if (acc <= 1) {
                pre = curr
                ++acc
                ++i
            } else {
                nums.splice(i, 1)
            }
        } else {
            pre = curr
            acc = 1
            ++i
        }
    }
    return nums.length
}

// const nums = [1, 1, 1, 2, 2, 3]
// console.log(removeDuplicates(nums), nums)

const nums = [0]
console.log(removeDuplicates(nums), nums)