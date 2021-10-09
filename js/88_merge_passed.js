// 88. 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    function insert(nums, data, limit) {
        let i = 0
        while (i < nums.length) {
            if (data > nums[i]) {
                ++i
            } else {
                break
            }
        }
        if (i > limit) i = limit
        for (let j = nums.length - 1; j > i; --j) {
            nums[j] = nums[j - 1]
        }
        nums[i] = data
    }
    let limit = m
    for (let i = 0; i < n; ++i) {
        insert(nums1, nums2[i], limit)
        ++limit
    }
}

const nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3
merge(nums1, m, nums2, n)
console.log(nums1)