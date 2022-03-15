export class ListNode {
    val: number;
    next?: ListNode;
    constructor(val: number, node?: ListNode) {
        this.val = val;
        this.next = node;
    }
}

export const initListNode = (arr: number[]) => {
    const nodeArr = arr.map((v) => new ListNode(v));
    nodeArr.reduce((pre, cur) => {
        pre.next = cur;
        return cur;
    });
    return nodeArr[0];
};