// 144. 二叉树的前序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    const result = []
    function travel(root) {
        result.push(root.val)
        const left = root.left, right = root.right
        if (left) travel(left)
        if (right) travel(right)
    }
    if (root) travel(root)
    return result
}