const { equal } = require("assert")

// 65. 有效数字

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
    class Status {
        constructor(status, name) {
            this.status = status
            this.name = name
        }
    }

    class InitStatus extends Status { // 初始状态
        constructor() {
            super(-1, '初始状态')
        }

        digest(ch) {
            switch (ch) {
                case '+':
                case '-':
                    return new SignStatus()
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new IntStatus()
                case '.':
                    return new BeforeNullDotStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class SignStatus extends Status { // 符号状态
        constructor() {
            super(-2, '符号状态')
        }

        digest(ch) {
            switch (ch) {
                case '.':
                    return new BeforeNullDotStatus()
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new IntStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class BeforeNullDotStatus extends Status { // 小数点状态, 小数点前面没有数
        constructor() {
            super(-3, '小数点状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new DecStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class DotStatus extends Status { // 小数点状态, 小数点前面有数
        constructor() {
            super(-4, '小数点状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new DecStatus()
                case 'e':
                case 'E':
                    return new EStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class EStatus extends Status { // E状态
        constructor() {
            super(-5, 'E状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new SciStatus()
                case '+':
                case '-':
                    return new SciSignStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class SciSignStatus extends Status { // 科学计数法符号状态
        constructor() {
            super(-6, '科学计数法符号状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new SciStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class IntStatus extends Status { // 整数状态
        constructor() {
            super(1, '整数状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new IntStatus()
                case 'e':
                case 'E':
                    return new EStatus()
                case '.':
                    return new DecStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    // class BeforeNullDecStatus extends Status {  // 小数状态, 小数点前面没有数
    //     constructor() {
    //         super(2, '小数状态')
    //     }

    //     digest(ch) {
    //         switch (ch) {
    //             case '0':
    //             case '1':
    //             case '2':
    //             case '3':
    //             case '4':
    //             case '5':
    //             case '6':
    //             case '7':
    //             case '8':
    //             case '9':
    //                 return new DecStatus()
    //             case 'e':
    //             case 'E':
    //                 return new EStatus()
    //             default:
    //                 throw new Error('解析错误')
    //         }
    //     }
    // }

    class DecStatus extends Status {  // 小数状态, 小数点前面有数
        constructor() {
            super(2, '小数状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new DecStatus()
                case 'e':
                case 'E':
                    return new EStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }

    class SciStatus extends Status { // 科学计数法状态
        constructor() {
            super(3, '科学计数法状态')
        }

        digest(ch) {
            switch (ch) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    return new SciStatus()
                default:
                    throw new Error('解析错误')
            }
        }
    }


    let currStatus = new InitStatus()
    for (let i = 0; i < s.length; ++i) {
        let ch = s[i]
        try {
            currStatus = currStatus.digest(ch)
        } catch (error) {
            return false
        }
    }
    return currStatus.status > 0
}

const legal = ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
for (let num of legal) {
    equal(isNumber(num), true)
}

const illegal = ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53", ".e1"]
for (let num of illegal) {
    equal(isNumber(num), false)
}


