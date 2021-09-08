// 66. 加一

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    const len = digits.length
    let carry = true
    for (let i = len - 1; i >= 0; --i) {
        if (carry) {
            digits[i] = digits[i] + 1
            if (digits[i] >= 10) {
                carry = true
                digits[i] = digits[i] % 10
            } else {
                carry = false
            }
        } else {
            break
        }
    }
    if (carry) digits.unshift(1)
    return digits
}

console.log(plusOne([0]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9, 9, 9]))
console.log(plusOne([1, 9, 9]))
console.log(plusOne([9]))