const { performance } = require('perf_hooks')

/**
 * 计算函数执行时间
 * @param {*} f
 * @returns 
 */
const timeit = (f) => (...args) => {
    const start = performance.now()
    const ret = f(...args)
    console.log(`function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`)
    return ret
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

module.exports = { timeit, randomInt }