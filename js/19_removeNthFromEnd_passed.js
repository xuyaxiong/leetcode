const { randomInt, timeit } = require('./utils')
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p = head
    let len = 0
    while (p) {
        ++len
        p = p.next
    }
    p = head
    if (len - n === 0) {
        head = head.next
        return head
    }
    let index = 0, pre = null
    while (index < len - n) {
        pre = p
        p = p.next
        ++index
    }
    pre.next = p.next
    return head
}

var removeNthFromEndV2 = function (head, n) {
    const nodeList = []
    let p = head
    while (p) {
        nodeList.push(p)
        p = p.next
    }
    const len = nodeList.length
    if (nodeList.length === n) {
        head = head.next
    } else {
        nodeList[len - n - 1].next = nodeList[len - n].next
    }
    return head
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

function printLinkedList(head) {
    const result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }
    console.log(result.join(', '))
}

const head = buildLinkedList(30)

console.log('before:')
printLinkedList(head)

const result = timeit(removeNthFromEndV2)(head, 30)

console.log('after:')
printLinkedList(result)
