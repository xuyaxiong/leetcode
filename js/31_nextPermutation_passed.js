// 31. 下一个排列

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    function asc(pos) {
        for (let i = pos; i < nums.length; ++i) {
            for (let j = i + 1; j < nums.length; ++j) {
                if (nums[i] > nums[j])
                    swap(i, j)
            }
        }
    }
    function find(pos, target) {
        let temp = nums[pos], resPos = pos
        for (let i = pos; i < nums.length; ++i) {
            if (nums[i] > target) {
                if (nums[i] < temp) {
                    temp = nums[i]
                    resPos = i
                }
            }
        }
        return resPos
    }
    const len = nums.length
    let curr, pre, i, flag = false
    for (i = len - 1; i >= 0; --i) {
        curr = nums[i]
        pre = nums[i - 1]
        if (pre < curr) {
            if (!flag) flag = true
            let pos = find(i, pre)
            swap(i - 1, pos)
            console.log(nums)
            asc(i)
            break
        }
    }
    if (!flag) {
        asc(0)
    }
}

// const nums = [2, 4, 3, 2, 1]
const nums = [2, 3, 1, 3, 3]
// const nums = [1, 2, 3]
nextPermutation(nums)
console.log(nums)
