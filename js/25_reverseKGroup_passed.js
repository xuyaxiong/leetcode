const { buildLinkedListFromArray, printLinkedList, ListNode } = require('./ListNode')

const reverseKGroup = function (head, k) {
    function reverse(head, tail) {
        const newHead = new ListNode()
        let nxt, newTail, isTail = true
        while (head && head !== tail) {
            if (isTail) {
                newTail = head
                isTail = false
            }
            nxt = head.next
            let temp = newHead.next
            newHead.next = head
            head.next = temp
            head = nxt
        }
        return [newHead.next, newTail]
    }
    let count = 0, preCurrHead = null, p = head, currHead = head, currTail = null
    while (p) {
        ++count
        p = p.next
        if (count === k) {
            currTail = p
            const [tempHead, tempTail] = reverse(currHead, currTail)
            if (!preCurrHead) {
                head = tempHead
                tempTail.next = currTail
            } else {
                preCurrHead.next = tempHead
                tempTail.next = currTail
            }
            preCurrHead = tempTail
            currHead = currTail
            currtail = null
            count = 0
        }
    }
    return head
}

printLinkedList(reverseKGroup(buildLinkedListFromArray([1, 2]), 2))