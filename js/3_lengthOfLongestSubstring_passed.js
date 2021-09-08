function lengthOfLongestSubstring(s) {
    let hashmap = {}
    let history = 0
    let current = 0
    const queue = []
    for (let i = 0; i < s.length; i++) {
        if (hashmap[s[i]] === undefined) {
            hashmap[s[i]] = i
            current += 1
            queue.push(s[i])
        } else {
            const gap = i - hashmap[s[i]]
            while (queue.length > 0) {
                let temp = queue[0]
                delete hashmap[temp]
                queue.shift()
                if (temp === s[i]) {
                    break
                }
            }
            queue.push(s[i])
            hashmap[s[i]] = i
            history = Math.max(history, current)
            current = gap
        }
    }
    history = Math.max(history, current)
    return history
}

console.log(lengthOfLongestSubstring('dvdf'))