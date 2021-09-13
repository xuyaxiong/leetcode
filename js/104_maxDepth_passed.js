// 104. 二叉树的最大深度

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (root === null) return 0
    else if (root.left === null) return maxDepth(root.right) + 1
    else if (root.right === null) return maxDepth(root.left) + 1
    else return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
}