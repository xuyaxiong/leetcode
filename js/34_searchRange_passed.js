// 34. 在排序数组中查找元素的第一个和最后一个位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    function binSearch(start, end, target) {
        if (start > end) return -1
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
    if (index === -1) return [-1, -1]
    let left = index, right = index
    while (nums[++right] === target);
    while (nums[--left] === target);
    return [left + 1, right - 1]
}



console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([7, 7, 8, 8], 7))
console.log(searchRange([7, 7, 8, 8, 9], 9))