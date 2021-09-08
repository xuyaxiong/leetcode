const fs = require('fs')

function format(s, len) {
    s += ''
    let pad = ''
    let padLen = len - s.length
    while (padLen-- > 0) {
        pad += ' '
    }
    return pad + s
}

function statistics(rowLimit = 10) {
    console.log('通过/未通过分布图')
    let passedCount = 0
    const files = fs.readdirSync('.')
    const result = {}
    let parts
    let maxNum = 0
    for (let file of files) {
        parts = file.split('.')[0].split('_')
        let num = parts[0], pass = parts[2]
        if (!isNaN(num)) {
            num = parseInt(num, 10)
            if (num > maxNum) maxNum = num
            result[num] = pass === 'passed'
        }
    }
    const padLen = (maxNum + '').length
    const colOrder = Array(rowLimit + 1).fill(0).map((_, i) => i === 0 ? format('', padLen) : format(i, padLen)).join('\t')
    console.log(colOrder)
    let count = 0, line = [], rowNum = 0
    line.push(format(rowNum, padLen))
    for (let i = 1; i <= maxNum; ++i) {
        ++count
        if (result[i] === true) {
            line.push(format('\u2714', padLen))
            ++passedCount
        } else {
            line.push(format('\u2718', padLen))
        }
        if (count === rowLimit) {
            console.log(line.join('\t'))
            line = []
            ++rowNum
            line.push(format(rowNum, padLen))
            count = 0
        }
    }
    if (line.length > 0) {
        console.log(line.join('\t'))
    }
    console.log('passed num:', passedCount)
    console.log('failed num:', maxNum - passedCount)
}

statistics()