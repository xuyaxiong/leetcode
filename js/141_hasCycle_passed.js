const { buildLinkedListFromArray } = require('./ListNode')
// 141. 环形链表

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    let p = head
    while (p) {
        if (!p.hasSeen) {
            p.hasSeen = true
            p = p.next
        } else return true
    }
    return false
}
const arr = buildLinkedListFromArray([3, 2, 0, -4])
arr.next.next.next.next = arr.next

console.log(hasCycle(arr))