
class TreeNode {
    val = 0;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number = 0,left: TreeNode | null = null,right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};

const isBalanced = function(root: TreeNode) {
    let result = true;
    const getDepth =  (node: TreeNode | null, n: number): number => {
        if (node === null) { return n; }
        debugger;
        const leftDepth = getDepth(node.left, n + 1);
        const rightDepth = getDepth(node.right, n + 1);
        if (Math.abs(leftDepth - rightDepth) > 2) { result = false; }
        return Math.max(leftDepth, rightDepth);
    }

    getDepth(root, 0);
    return result;
};

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let result: TreeNode | null = null;
    const findNode = (node: TreeNode | null): TreeNode | null => {
        if(!node) { return null; }
        const l = findNode(node.left);
        const r = findNode(node.right);
        if ((l && r) || ((node.val === p.val || node.val === q.val) && (l || r))) {
            result = node;
        }
        return l || r || (node.val === p.val || node.val === q.val ? node : null );
    }

    findNode(root)
    return result;
};

// const nodeArr = [3,5,1,6,2,0,8,null,null,7,4].map((i) => i ? new TreeNode(i) : null);

// const root = nodeArr[0];
// root.left = nodeArr[1];
// root.right = nodeArr[2];

// nodeArr[1].left = nodeArr[3];
// nodeArr[1].right = nodeArr[4];

// nodeArr[2].left = nodeArr[5];
// nodeArr[2].right = nodeArr[6];

// nodeArr[4].left = nodeArr[9];
// nodeArr[4].right = nodeArr[10];

// console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(4)));

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const build = (inorderArr: number[]) => {
        if (inorderArr.length <= 1) { return inorderArr.length === 1 ? new TreeNode(inorderArr[0]) : null; }
        const p = preorder.shift();
        const midIndex = inorderArr.findIndex((i) => i === p);

        const left = inorderArr.slice(0, midIndex);
        const right = inorderArr.slice(midIndex + 1);
        
        const node = new TreeNode(p);

        node.left = build(left);
        node.right = build(right);

        return node;
    }

    return build(inorder);
};

console.log(JSON.stringify(buildTree([3,9,20,15,7], [9,3,15,20,7]), null, 2));