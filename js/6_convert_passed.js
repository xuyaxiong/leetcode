function convert(s, numRows) {
    if (numRows === 1) return s
    const BOTTOM = 1, TOP_RIGHT = 2
    function toBottom(position) {
        return [position[0], position[1] + 1]
    }

    function toTopRight(position) {
        return [position[0] + 1, position[1] - 1]
    }
    const positions = {}
    for (let i = 0; i < numRows; i++) {
        positions[i] = []
    }
    let currentPos = [0, 0]
    positions[0].push({ x: 0, y: 0, value: s[0] })
    let currentDirection = BOTTOM
    for (let i = 1; i < s.length; i++) {
        if (currentDirection === BOTTOM) {
            if (currentPos[1] < numRows - 1) {
                currentPos = toBottom(currentPos)
            } else {
                currentDirection = TOP_RIGHT
                currentPos = toTopRight(currentPos)
            }
        } else {
            if (currentPos[1] > 0) {
                currentPos = toTopRight(currentPos)
            } else {
                currentDirection = BOTTOM
                currentPos = toBottom(currentPos)
            }
        }
        positions[currentPos[1]].push({ x: currentPos[0], y: currentPos[1], value: s[i] })
    }
    let str = ''
    for (let prop in positions) {
        let temp = positions[prop].map(item => item.value).join('')
        str += temp
    }
    return str
}

console.log(convert('helloworld', 2))