const { buildLinkedListFromArray, printLinkedList } = require('./ListNode')

var swapPairs = function (head) {
    if (!head) return null
    let count = 0, cur = head, pre = null, nxt = cur.next
    while (cur && nxt) {
        ++count
        if (count === 1) {
            cur.next = nxt.next
            nxt.next = cur
            head = nxt; // 此处如不加分号，下一句交换变量将不起作用
            [cur, nxt] = [nxt, cur]
        } else if (count % 2 === 1) {
            pre.next = nxt
            cur.next = nxt.next
            nxt.next = cur;
            [cur, nxt] = [nxt, cur]
        }
        pre = cur
        cur = nxt
        nxt = nxt.next
    }
    return head
}

let head = buildLinkedListFromArray([])
head = swapPairs(head)
printLinkedList(head)
