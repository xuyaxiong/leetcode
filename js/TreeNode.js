function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function buildBinTreeFromArray(arr) {
    let res = []
    const test = []
    test.push(arr[0])
    let i = 0
    while (i < arr.length) {
        let curr = test.shift()
        res.push(curr)
        if (curr) {
            test.push(arr[++i])
            test.push(arr[++i])
        } else {
            test.push(null)
            test.push(null)
        }
    }
    res.push(...test)
    console.log(res)
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

buildBinTreeFromArray([1, 2, null, 3, null, 4, null])