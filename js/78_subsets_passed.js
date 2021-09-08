// 78. 子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
    if (nums.length === 0) {
        return [[]]
    }
    let num = nums.pop()
    let left = nums
    let tempRes = subsets(left)
    let result = []
    let temp
    for (let item of tempRes) {
        temp = [...item]
        result.push(temp)
        temp = [...item]
        temp.push(num)
        result.push(temp)
    }
    return result
}

console.log(subsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))