// 150. 逆波兰表达式求值

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = []
    let second, first
    for (let i = 0; i < tokens.length; ++i) {
        switch (tokens[i]) {
            case '+':
                second = stack.pop()
                first = stack.pop()
                stack.push(first + second)
                break
            case '-':
                second = stack.pop()
                first = stack.pop()
                stack.push(first - second)
                break
            case '*':
                second = stack.pop()
                first = stack.pop()
                stack.push(first * second)
                break
            case '/':
                second = stack.pop()
                first = stack.pop()
                let result = first / second
                if (result >= 0)
                    stack.push(Math.floor(result))
                else stack.push(Math.ceil(result))
                break
            default:
                stack.push(parseInt(tokens[i]))
                break
        }
    }
    return stack.pop()
}

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["2", "1", "+", "3", "*"]))
