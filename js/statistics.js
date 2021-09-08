const fs = require('fs')
const colors = require('colors')

// 将字符串填充到指定长度，不足补空格
function addPadding(s, len) {
    s += ''
    let pad = ''
    let padLen = len - s.length
    while (padLen-- > 0) {
        pad += ' '
    }
    return pad + s
}

// 打印行
function formatLine(line) {
    return line.join('')
}

function statistics() {
    const files = fs.readdirSync('.')
    const data = {}
    let parts
    let maxNum = 0
    let passed = 0
    for (let file of files) {
        parts = file.split('.')[0].split('_')
        let num = parts[0], pass = parts[2]
        if (num !== '' && !isNaN(num)) {
            num = parseInt(num, 10)
            if (num > maxNum) maxNum = num
            data[num] = pass === 'passed'
            if (pass === 'passed') {
                passed += 1
            }
        }
    }
    return {
        data,
        total: maxNum,
        passed,
        failed: maxNum - passed
    }
}

function printResult(data, total, passed, failed, rowLimit = 10, padLen = rowLimit.toString().length + 1) {
    function mapToColorStr(item, len) {
        if (item === true) {
            return addPadding('\u2714', len).green
        } else if (item === false) {
            return addPadding('\u2718', len).red
        } else return addPadding((item + ''), len).yellow
    }

    console.log('通过/未通过分布图')

    let colOrders = Array(rowLimit + 1).fill(0).map((_, i) => i === 0 ? addPadding('', padLen).yellow : addPadding(i + '', padLen).yellow)
    console.log(formatLine(colOrders)) // 打印列编号

    let count = 0, line = [], rowOrder = 0 /** 行号 **/, lineStr = ''
    line.push(rowOrder)
    for (let i = 1; i <= total; ++i) {
        ++count
        line.push(data[i] ? data[i] : false)
        if (count % rowLimit === 0) {
            let temp = line.map(item => mapToColorStr(item, padLen))
            lineStr = formatLine(temp)
            console.log(lineStr)

            line = []
            ++rowOrder
            line.push(rowOrder)
        }
    }
    if (line.length > 1) {
        console.log(formatLine(line.map(item => mapToColorStr(item, padLen)), padLen))
    }

    console.log(`总计:\t${total}`)
    console.log(`通过:\t${addPadding(passed, (total + '').length)}`.green)
    console.log(`未通过:\t${addPadding(failed, (total + '').length)}`.red)
}



const { data, total, passed, failed } = statistics()
printResult(data, total, passed, failed)