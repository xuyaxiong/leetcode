// 145. 二叉树的后序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
    const result = []
    function travel(root) {
        const left = root.left, right = root.right
        if (left) travel(left)
        if (right) travel(right)
        result.push(root.val)
    }
    if (root) travel(root)
    return result
}