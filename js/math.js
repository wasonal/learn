/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-09-28 12:39:15
 */
var treeToDoublyList = function(root) {
    let head = null;
    let pre = null;

    const dfs = (node) => {
        if (!node) { return null; }
        const left = dfs(node.left);

        if (!pre) {
            head = node;
            pre = node;
        } else {
            node.left = pre;
            pre.right = cur;
        }

        pre = node;

        dfs(node.right);

        return node;
    }

    dfs(root);

    return head;
};