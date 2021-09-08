const { timeit } = require('./utils');

function letterCombinations(digits) {
    const digitMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    const letterArrs = digits.split('').map(digit => digitMap[digit])
    let index = 1, result = letterArrs[0] || []
    while (index < letterArrs.length) {
        let tempResult = []
        for (const letter1 of result) {
            for (const letter2 of letterArrs[index]) {
                tempResult.push(letter1 + letter2)
            }
        }
        ++index
        result = tempResult
    }
    return result
}



console.log(timeit(letterCombinations)('2345'))