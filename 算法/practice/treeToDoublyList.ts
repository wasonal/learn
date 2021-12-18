class TreeNode {
    val = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    pre: TreeNode | null = null;
    constructor(val: number = 0,left: TreeNode | null = null,right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};

function treeToDoublyList(root: TreeNode) {
    const head = new TreeNode();
    let pre: null | TreeNode = null;
    const preVisit = (node: TreeNode) => {
        if (!node) { return; }
        preVisit(node.left);
        if (!pre) { pre = head; }
        node.left = pre;
        pre.right = node;
        pre = node;
        preVisit(node.right);
    };

    preVisit(root);

    return head;
}