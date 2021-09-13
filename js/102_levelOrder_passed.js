const { buildBinTreeFromArray, levelorderTraversal } = require('./TreeNode')
// 102. 二叉树的层序遍历

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const result = []
    const queue = []
    let currLine = { level: null, val: [] }
    let first
    if (root !== null) {
        queue.push({ node: root, level: 0 })
    }
    while (queue.length !== 0) {
        first = queue.shift()
        if (currLine.level === null) {
            currLine.level = first.level
            currLine.val.push(first.node.val)
        } else if (first.level === currLine.level) {
            currLine.val.push(first.node.val)

        } else {
            result.push(currLine.val)
            currLine = { level: null, val: [] }
            currLine.level = first.level
            currLine.val.push(first.node.val)
        }
        if (first.node.left !== null)
            queue.push({ node: first.node.left, level: first.level + 1 })
        if (first.node.right !== null)
            queue.push({ node: first.node.right, level: first.level + 1 })
    }
    if (currLine.val.length > 0) {
        result.push(currLine.val)
    }
    return result
}

