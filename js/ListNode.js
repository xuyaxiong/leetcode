/**
 * 链表节点
 * @param {*} val 
 * @param {*} next 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 从数组构建链表
function buildLinkedListFromArray(arr) {
    let head = new ListNode()
    let p = head
    for (let i = 0; i < arr.length; ++i) {
        const tempNode = new ListNode(arr[i])
        p.next = tempNode
        p = p.next
    }
    return head.next
}

// 顺序打印链表
function printLinkedList(head) {
    const result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }
    console.log(result.join(', '))
}

module.exports = {
    ListNode,
    buildLinkedListFromArray,
    printLinkedList
}
