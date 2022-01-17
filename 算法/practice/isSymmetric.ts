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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) { return true; }
    const loop = (left: TreeNode | null, right: TreeNode | null): boolean => {
      if (!left && !right) { return true; }
      if (!left || !right) { return false; }
      return left.val === right.val && loop(left.left, right.right) && loop(left.right, right.left);
    };
    return loop(root.left, root.right);
};

const nodeArr = [1,2,2,3,4,4,3].map((i) => new TreeNode(i));

const root = nodeArr[0];
root.left = nodeArr[1];
root.right = nodeArr[2];

nodeArr[1].left = nodeArr[3];
nodeArr[1].right = nodeArr[4];

nodeArr[2].left = nodeArr[5];
nodeArr[2].right = nodeArr[6];
console.log(isSymmetric(root));