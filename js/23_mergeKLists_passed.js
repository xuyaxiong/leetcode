const { randomInt } = require('./utils')
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

function buildFromArrays(lists) {
    const res = []
    for (let list of lists) {
        res.push(buildLinkedListFromArray(list))
    }
    return res
}

function buildLinkedList(len, min = -10000, max = 10000) {
    let head = new ListNode()
    let p = head
    for (let i = 0; i < len; ++i) {
        const tempNode = new ListNode(randomInt(min, max))
        p.next = tempNode
        p = p.next
    }
    return head.next
}

function buildLists(len) {
    const result = []
    for (let i = 0; i < len; ++i) {
        result.push(buildLinkedList(5))
    }
    return result
}

function printLinkedList(head) {
    const result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }
    console.log(result.join(', '))
}

// const head1 = buildLinkedListFromArray([1, 4, 7, 10])
// const head2 = buildLinkedListFromArray([2, 5, 8, 11])
// const head3 = buildLinkedListFromArray([3, 6, 9, 12])
// const lists = [head1, head2, head3]

const mergeTwoLists = function (l1, l2) {
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

var mergeKLists = function (lists) {
    if (lists.length === 0) return null
    let res = lists[0]
    for (let i = 1; i < lists.length; ++i) {
        res = mergeTwoLists(res, lists[i])
    }
    return res
}

let lists = buildFromArrays([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
lists = buildFromArrays([])
console.log('lists =', lists)
const result = mergeKLists(lists)
printLinkedList(result)