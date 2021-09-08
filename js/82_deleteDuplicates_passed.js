const { buildLinkedListFromArray, printLinkedList } = require('./ListNode')
// 82. 删除排序链表中的重复元素 II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    let p = head, ppre = null, pre = null, dup = false
    while (p) {
        if (pre && p.val === pre.val) {
            dup = true
            pre.next = p.next
        } else {
            if (dup) {
                if (!ppre) {
                    head = p
                } else {
                    ppre.next = pre.next
                }
                pre = p
                dup = false
            } else {
                ppre = pre
                pre = p
            }
        }
        p = p.next
    }
    if (dup) {
        if (!ppre) {
            head = p
        } else {
            ppre.next = pre.next
        }
    }
    return head
}

let head = buildLinkedListFromArray([1, 2, 3, 3, 4, 4, 5])
// head = buildLinkedListFromArray([1, 1, 1, 2, 3])
// head = buildLinkedListFromArray([1, 1])
head = deleteDuplicates(head)
printLinkedList(head)