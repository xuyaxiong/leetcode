// 49. 字母异位词分组

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const resultObj = {}
    let temp
    for (let str of strs) {
        temp = str.split('')
        temp.sort()
        temp = temp.join('')
        if (!resultObj[temp]) {
            resultObj[temp] = []
        }
        resultObj[temp].push(str)
    }
    const result = []
    for (let prop in resultObj) {
        result.push(resultObj[prop])
    }
    return result
}

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// const strs = [""]
const strs = ["a"]
const result = groupAnagrams(strs)
console.log(result)