const { equal } = require("assert")

// 65. 有效数字

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {

    function isNum(ch) {
        const code = ch.charCodeAt()
        return code >= 48 && code <= 57
    }
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
            if (ch === '+' || ch === '-') {
                return new SignStatus()
            } else if (isNum(ch)) {
                return new IntStatus()
            } else if (ch === '.') {
                return new BeforeNullDotStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class SignStatus extends Status { // 符号状态
        constructor() {
            super(-2, '符号状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new IntStatus()
            } else if (ch === '.') {
                return new BeforeNullDotStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class BeforeNullDotStatus extends Status { // 小数点状态, 小数点前面没有数
        constructor() {
            super(-3, '小数点状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new DecStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class EStatus extends Status { // E状态
        constructor() {
            super(-5, 'E状态')
        }

        digest(ch) {
            if (ch === '+' || ch === '-') {
                return new SciSignStatus()
            } else if (isNum(ch)) {
                return new SciStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class SciSignStatus extends Status { // 科学计数法符号状态
        constructor() {
            super(-6, '科学计数法符号状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new SciStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class IntStatus extends Status { // 整数状态
        constructor() {
            super(1, '整数状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new IntStatus()
            } else if (ch === 'e' || ch === 'E') {
                return new EStatus()
            } else if (ch === '.') {
                return new DecStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }
    class DecStatus extends Status {  // 小数状态, 小数点前面有数
        constructor() {
            super(2, '小数状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new DecStatus()
            } else if (ch === 'e' || ch === 'E') {
                return new EStatus()
            } else {
                throw new Error('解析错误')
            }
        }
    }

    class SciStatus extends Status { // 科学计数法状态
        constructor() {
            super(3, '科学计数法状态')
        }

        digest(ch) {
            if (isNum(ch)) {
                return new SciStatus()
            } else {
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


