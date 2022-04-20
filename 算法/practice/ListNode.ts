export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, node: ListNode | null) {
        this.val = val;
        this.next = node;
    }
}

export const initListNode = (arr: number[]) => {
    const nodeArr = arr.map((v) => new ListNode(v, null));
    nodeArr.reduce((pre, cur) => {
        pre.next = cur;
        return cur;
    });
    return nodeArr[0];
};