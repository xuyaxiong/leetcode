function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function buildLinkedList(len) {
    let head = new ListNode()
    let p = head
    for (let i = 0; i < len; ++i) {
        const tempNode = new ListNode(i)
        p.next = tempNode
        p = p.next
    }
    return head.next
}

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

function printLinkedList(head) {
    const result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }
    console.log(result.join(', '))
}

const head1 = buildLinkedListFromArray([-9, 3])
const head2 = buildLinkedListFromArray([5, 7])

var mergeTwoLists = function (l1, l2) {
    const head = new ListNode()
    let p = head
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    if (l1) {
        p.next = l1
    }
    if (l2) {
        p.next = l2
    }
    return head.next
}

const result = mergeTwoLists(head1, head2)
printLinkedList(result)