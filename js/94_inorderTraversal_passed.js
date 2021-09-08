// 94. 二叉树的中序遍历
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    const result = []
    function travel(root) {
        const left = root.left, right = root.right
        if (left) {
            travel(left)
        }
        result.push(root.val)
        if (right) {
            travel(right)
        }
    }
    if (root) {
        travel(root)
    }
    return result
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
console.log(inorderTraversal(root))