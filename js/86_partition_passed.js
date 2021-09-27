const { ListNode, buildLinkedListFromArray, printLinkedList } = require('./ListNode')
// 86. 分隔链表

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
    const smaller = new ListNode(-1), left = new ListNode(-1)
    let ps = smaller, tailSmaller = smaller, pl = left, p = head
    while (p) {
        if (p.val < x) {
            ps.next = p
            p = p.next
            ps = ps.next
            ps.next = null
            tailSmaller = ps
        } else {
            pl.next = p
            p = p.next
            pl = pl.next
            pl.next = null
        }
    }
    tailSmaller.next = left.next
    return smaller.next
}



// printLinkedList(partition(buildLinkedListFromArray([1, 4, 3, 2, 5, 2]), 4)) // [1,3,2,2,4,5]
// printLinkedList(partition(buildLinkedListFromArray([1, 4, 3, 2, 5, 2]), 5)) // [1,4,3,2,2,5]
// printLinkedList(partition(buildLinkedListFromArray([1, 4, 3, 2, 5, 2]), 3)) // [1,2,2,4,3,5]
// printLinkedList(partition(buildLinkedListFromArray([1, 4, 3, 2, 5, 2]), 2)) // [1,4,3,2,5,2]
// printLinkedList(partition(buildLinkedListFromArray([]), 0)) // []
// printLinkedList(partition(buildLinkedListFromArray([2, 1]), 2)) // [1,2]
printLinkedList(partition(buildLinkedListFromArray([1, 4, 3, 0, 5, 2]), 2)) // [1,0,4,3,5,2]