const combinationSum = function (candidates, target) {
    function helper(candidates, target) {
        if (target === 0) return [[]]
        else if (target < 0) return
        const zips = candidates.map(c => { return { target: target - c, candidate: c } })
        const result = zips.map(z => {
            let childRes
            childRes = helper(candidates, z.target)
            let res
            if (childRes) {
                res = childRes.map(r => {
                    r.push(z.candidate)
                    return r
                })
            }
            return res
        }).reduce((acc, curr) => {
            if (curr)
                acc.push(...curr)
            return acc
        }, [])
        return result
    }
    function removeDuplication(arr) {
        return [... new Set(arr.map(item => item.sort().join(',')))].map(item => item.split(','))
    }
    return removeDuplication(helper(candidates, target))
}

console.log(combinationSum([2, 3, 6, 7], 7))