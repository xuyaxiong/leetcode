// 27. 移除元素
const removeElement = function (nums, val) {
    let curr
    for (let i = 0; i < nums.length;) {
        curr = nums[i]
        if (curr === val) {
            nums.splice(i, 1)
        } else {
            ++i
        }
    }
    console.log('nums =', nums)
    return nums.length
}

console.log(removeElement([1, 1, 2, 2, 3, 3], 1))