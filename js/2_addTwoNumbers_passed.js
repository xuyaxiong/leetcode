function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let addOne = false
    let head = new ListNode()
    let p = head
    let temp
    while (l1 && l2) {
        temp = l1.val + l2.val
        if (addOne) {
            temp += 1
            addOne = false
        }
        if (temp >= 10) {
            temp -= 10
            addOne = true
        }
        p.next = new ListNode(temp)
        p = p.next
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        temp = l1.val
        if (addOne) {
            temp += 1
            addOne = false
        }
        if (temp >= 10) {
            temp -= 10
            addOne = true
        }
        p.next = new ListNode(temp)
        p = p.next
        l1 = l1.next
    }
    while (l2) {
        temp = l2.val
        if (addOne) {
            temp += 1
            addOne = false
        }
        if (temp >= 10) {
            temp -= 10
            addOne = true
        }
        p.next = new ListNode(temp)
        p = p.next
        l2 = l2.next
    }
    if (addOne) {
        p.next = new ListNode(1)
        p = p.next
    }
    return head.next
}