function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function buildBinTreeFromArray(arr) {
    if (!arr || arr.length === 0) return null
    const nodeList = []
    for (let i = 0; i < arr.length; ++i) {
        let tempNode = new TreeNode(arr[i])
        nodeList.push(tempNode)
        if (i !== 0) {
            if (i % 2 === 0) {
                nodeList[(i / 2) - 1].right = tempNode
            } else {
                nodeList[Math.floor(i / 2)].left = tempNode
            }
        }
    }
    return nodeList[0]
}

// 先序遍历
function preorderTraversal(root, callback) {
    function travel(root) {
        if (callback) callback(root)
        const left = root.left, right = root.right
        if (left) travel(left)
        if (right) travel(right)
    }
    if (root) travel(root)
}

// 中序遍历
function inorderTraversal(root, callback) {
    function travel(root) {
        const left = root.left, right = root.right
        if (left) travel(left)
        if (callback) callback(root)
        if (right) travel(right)
    }
    if (root) travel(root)
}

// 后序遍历
function postorderTraversal(root, callback) {
    function travel(root) {
        const left = root.left, right = root.right
        if (left) travel(left)
        if (right) travel(right)
        if (callback) callback(root)
    }
    if (root) travel(root)
}

// 层序遍历
function levelorderTraversal(root, callback) {
    const queue = []
    if (root) queue.push(root)
    let temp
    while (queue.length !== 0) {
        temp = queue.shift()
        callback(temp)
        if (temp.left) queue.push(temp.left)
        if (temp.right) queue.push(temp.right)
    }
}

module.exports = {
    TreeNode,
    buildBinTreeFromArray,
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelorderTraversal
}