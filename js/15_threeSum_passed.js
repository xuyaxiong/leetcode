const { timeit } = require('./utils');

// TODO 执行时间过长
function threeSum(nums) {
    let pos = {}
    let neg = {}
    let zeros = []
    for (let num of nums) {
        if (num === 0) zeros.push(num)
        else if (num > 0) {
            if (!pos[num]) { pos[num] = [] }
            if (pos[num].length < 2)
                pos[num].push(num)
        }
        else {
            if (!neg[num]) { neg[num] = [] }
            if (neg[num].length < 2)
                neg[num].push(num)
        }
    }
    const posArr = []
    const negArr = []
    for (let prop in pos) {
        posArr.push(...pos[prop])
    }
    for (let prop in neg) {
        negArr.push(...neg[prop])
    }
    const result = []
    const res = new Set()
    for (let i = 0; i < posArr.length; i++) {
        for (let j = i + 1; j < posArr.length; j++) {
            let temp = (posArr[i] + posArr[j]) * (-1)
            if (neg[temp] !== undefined) {
                res.add([posArr[i], posArr[j], temp].join(','))
            }
        }
    }
    for (let i = 0; i < negArr.length; i++) {
        for (let j = i + 1; j < negArr.length; j++) {
            let temp = (negArr[i] + negArr[j]) * (-1)
            if (pos[temp] !== undefined) {
                res.add([negArr[i], negArr[j], temp].join(','))

            }
        }
    }
    if (zeros.length > 0) {
        if (zeros.length >= 3) {
            res.add([0, 0, 0].join(','))
        }
        for (let prop in pos) {
            let temp = -1 * prop
            if (neg[temp] !== undefined) {
                res.add([temp, 0, 1 * prop].join(','))
            }
        }
    }
    for (const item of res) {
        result.push(item.split(',').map(value => 1 * value))
    }
    return result
}

function randomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}
const params = []
for (let i = 0; i < 3000; ++i) {
    params.push(randomInt(Math.pow(10, 5) * (-1), Math.pow(10, 5)))
}
console.log(timeit(threeSum)(params))