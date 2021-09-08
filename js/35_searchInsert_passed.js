// 35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    function binSearch(start, end, target) {
        if (start > end) {
            return start
        }
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            return binSearch(mid + 1, end, target)
        } else {
            return binSearch(start, mid - 1, target)
        }
    }
    const index = binSearch(0, nums.length - 1, target)
    return index
}

console.log(searchInsert([1, 3, 5, 6], 7))

