// 90. 子集 II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    const data = {}
    for (let i = 0; i < nums.length; ++i) {
        if (data[nums[i]] === undefined) data[nums[i]] = []
        data[nums[i]].push(nums[i])
    }

    function isDup(num) {
        return data[num].length > 1
    }

    function dupHelper(nums) {
        const res = []
        for (let i = 0; i < nums.length; ++i) {
            res.push(Array(i + 1).fill(nums[0]))
        }
        return res
    }

    const res = []
    for (let prop in data) {
        if (isDup(prop)) {
            res.push(dupHelper(data[prop]))
        } else {
            res.push([data[prop]])
        }
    }

    const result = res.reduce((prev, curr) => {
        let res = []
        for (let i = 0; i < prev.length; ++i) {
            res.push([...prev[i]])
        }
        for (let i = 0; i < curr.length; ++i) {
            res.push([...curr[i]])
        }
        for (let i = 0; i < prev.length; ++i) {
            for (let j = 0; j < curr.length; ++j) {
                let temp = []
                temp.push(...prev[i])
                temp.push(...curr[j])
                res.push(temp)
            }
        }
        return res
    })
    result.push([])
    return result
}

// console.log(subsetsWithDup([1, 2, 2])) // [[],[1],[1,2],[1,2,2],[2],[2,2]]
// console.log(subsetsWithDup([0])) // [],[0]]
// console.log(subsetsWithDup([1, 1, 2, 2])) // [[],[1],[1,1],[1,1,2],[1,1,2,2],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([1, 2, 3]))