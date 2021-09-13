// 111. 二叉树的最小深度

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
    if (root === null) return 0
    else if (root.left === null) return minDepth(root.right) + 1
    else if (root.right === null) return minDepth(root.left) + 1
    else return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
}