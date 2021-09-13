const { buildLinkedListFromArray } = require('./ListNode')
// 142. 环形链表 II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
    let p = head
    while (p) {
        if (!p.hasSeen) {
            p.hasSeen = true
            p = p.next
        } else return p
    }
    return null
}


const arr = buildLinkedListFromArray([3, 2, 0, -4])
arr.next.next.next.next = arr.next
const result = detectCycle(arr)
console.log(result)
