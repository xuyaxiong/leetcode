const { buildLinkedListFromArray, printLinkedList } = require('./ListNode')
// 61. 旋转链表

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    let len = 0, p = head, tail, pre
    while (p) {
        len += 1
        if (!p.next) {
            tail = p
        }
        p = p.next
    }
    if (len === 0) return null
    k = k % len
    if (k === 0) return head
    let count = 0
    p = head
    while (count < len - k) {
        pre = p
        p = p.next
        ++count
    }
    tail.next = head
    head = p
    pre.next = null
    return head
}

// printLinkedList(rotateRight(buildLinkedListFromArray([1, 2, 3, 4, 5]), 2))
// printLinkedList(rotateRight(buildLinkedListFromArray([0, 1, 2]), 4))
printLinkedList(rotateRight(buildLinkedListFromArray([]), 2))