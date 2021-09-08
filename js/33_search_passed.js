// 33. 搜索旋转排序数组

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
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
    const len = nums.length
    let pre = null, curr = nums[0]
    let index = 0
    for (let i = 1; i < nums.length; ++i) {
        pre = curr
        curr = nums[i]
        if (curr < pre) {
            index = i - 1
            break
        } else {
            ++index
        }
    }
    if (target >= nums[0] && target <= nums[index]) {
        return binSearch(0, index, target)
    } else if (target >= nums[index + 1] && target <= nums[len - 1]) {
        return binSearch(index + 1, len - 1, target)
    } else return -1
}

console.log(search([1], 1))
console.log(search([1, 3], 1))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 0))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 1))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 2))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 3))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 4))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 5))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 6))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 7))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 8))
console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 9))