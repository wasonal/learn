/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-08-24 20:19:03
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

 function pathSum(root: TreeNode | null, target: number): number[][] {
    const result: number[][] = [];
    
    const dfs = (node: TreeNode | null, target: number, path: number[]) => {
        if (!node) { return; }
        const t = target - node.val;
        path.push(node.val);
        if (t === 0) {
            result.push([...path]);
        } else {
            dfs(node.left, target - node.val, path);
            dfs(node.right, target - node.val, path);
        }

        path.pop();
    };

    dfs(root, target, []);

    return result;
};

const arr = [5,4,8,11,null,13,4,7,2,null,null,5,1];

const nodeArr = arr.map((val) => new TreeNode(val || undefined));

nodeArr[0].left = nodeArr[1];
nodeArr[0].right = nodeArr[2];

nodeArr[1].left = nodeArr[3];
nodeArr[1].right = nodeArr[4];

nodeArr[2].left = nodeArr[5];
nodeArr[2].right = nodeArr[6];

nodeArr[3].left = nodeArr[7];
nodeArr[3].right = nodeArr[8];

nodeArr[4].left = nodeArr[9];
nodeArr[4].right = nodeArr[10];

nodeArr[5].left = nodeArr[11];
nodeArr[5].right = nodeArr[12];

// pathSum(nodeArr[0], 22);

var treeToDoublyList = function(root: TreeNode) {
    let head = new TreeNode;
    let pre = new TreeNode;
    let cur = new TreeNode;

    const dfs = (node: TreeNode | null) => {
        if (!node) { return null; }
        const left = dfs(node.left);

        cur = node;

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

// const nodeArr1 = [4, 2, 5, 1, 3, null, null].map((val) => new TreeNode(val || undefined));

// nodeArr1[0].left = nodeArr1[1];
// nodeArr1[0].right = nodeArr1[2];

// nodeArr1[1].left = nodeArr1[3];
// nodeArr1[1].right = nodeArr1[4];

// console.log(treeToDoublyList(nodeArr1[0]));

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!p || !q) { return null; }
    const resultNodes: Array<TreeNode | null> = [];

	const findNode = (node: TreeNode | null): TreeNode | null => {
        if (!node) { return null; }
        if (node.val === p.val) {
            resultNodes[0] = node;
        }
        if (node.val === q.val) {
            resultNodes[1] = node;
        }
        const l = findNode(node.left);
        const r = findNode(node.right);
        return l === r ? l : node;
    }

    return findNode(root);
};

const nodeArr1 = [6,2,8,0,4,7,9,null,null,3,5].map((val) => new TreeNode(val || undefined));

const root = nodeArr1[0];
root.left = nodeArr1[1];
root.right = nodeArr1[2];

nodeArr1[1].left = nodeArr1[3]
nodeArr1[1].right = nodeArr1[4]

nodeArr1[2].left = nodeArr1[5]
nodeArr1[2].right = nodeArr1[6]

nodeArr1[3].left = null
nodeArr1[3].right = null

nodeArr1[4].left = nodeArr1[9]
nodeArr1[4].right = nodeArr1[10]

// console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)));

function myPow(x: number, n: number): number {
    if (n === 0) { return 1; }
    else if (n === 1) { return n > 0 ? x : 1 / x; }
    const isOdd = n % 2 === 0;
    const p = myPow(x, Math.floor(n / 2));
    return isOdd ? p * p : p * p * x;
};

var myPow = function(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return x;
    }
    if (n === -1) return 1 / x;
    // 用右移代替除以2
    let result = myPow(x, n >> 1);
    result *= result;
    // 用位与运算代替求余运算符来判断一个数是不是奇数还是偶数
    if ((n & 1) == 1) {
      result *= x;
    }
    return result;
  };

  const curry = (fn: Function, length: number) => {
    length = length || fn.length;
    return function(...args: any[]) {
        if(length < args.length) {
            
        }
    }
  }
  