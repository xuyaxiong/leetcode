// 26. 删除有序数组中的重复项
var removeDuplicates = function (nums) {
    let pre = null, curr
    for (let i = 0; i < nums.length;) {
        curr = nums[i]
        if (curr === pre) {
            nums.splice(i, 1)
        } else {
            ++i
            pre = curr
        }
    }
    return nums
}

console.log(removeDuplicates([1, 1, 2]))