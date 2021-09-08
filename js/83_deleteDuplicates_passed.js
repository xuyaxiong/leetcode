const { buildLinkedListFromArray, printLinkedList } = require('./ListNode')

// 83. 删除排序链表中的重复元素

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    let pre = null, p = head
    while (p) {
        if (pre && pre.val === p.val) {
            pre.next = p.next
        } else {
            pre = p
        }
        p = p.next
    }
    return head
}

let head = buildLinkedListFromArray([1, 1, 2])
head = buildLinkedListFromArray([1, 1, 2, 3, 3])
head = buildLinkedListFromArray([1, 1, 2, 3, 3])
head = deleteDuplicates(head)
printLinkedList(head)