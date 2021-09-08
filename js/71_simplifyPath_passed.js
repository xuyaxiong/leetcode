// 71. 简化路径

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    const stack = []
    const parts = path.split(/\/+/).filter(item => item !== '')
    let temp
    for (let i = 0; i < parts.length; ++i) {
        temp = parts[i]
        if (temp === '.') {
        } else if (temp === '..') {
            stack.pop()
        } else {
            stack.push(temp)
        }
    }
    return '/' + stack.join('/')
}

console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/home/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('a/./b/../../c/'))
console.log(simplifyPath('/a/../../b/../c//.//'))